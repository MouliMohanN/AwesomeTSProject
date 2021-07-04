import React from 'react';
import {Button} from 'react-native';
import {View, Text} from 'react-native';
import RNRestart from 'react-native-restart';

interface State {
  error: any;
  errorInfo: any;
}

export class ErrorBoundry extends React.Component<any, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: {message: string}) {
    return {
      error: error.message,
    };
  }

  componentDidCatch(_error: any, _errorInfo: any) {
    console.error(_error, _errorInfo);
    this.setState({error: _error, errorInfo: _errorInfo});
  }

  render() {
    if (this.state.error) {
      return (
        <View>
          <Text>{'Title: ' + this.state.error}</Text>
          <Text>{'Body: ' + JSON.stringify(this.state.errorInfo)}</Text>
          <Button
            title="Restart App"
            onPress={() => {
              RNRestart.Restart();
            }}
          />
        </View>
      );
    }
    return this.props.children;
  }
}
