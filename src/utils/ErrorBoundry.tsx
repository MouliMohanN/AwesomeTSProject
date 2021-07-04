import React from 'react';
import {View, Text} from 'react-native';
import {translate} from './translate';

interface State {
  error: any;
}

export class ErrorBoundry extends React.Component<any, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      error: null,
    };
  }

  static getDerivedStateFromError(error: {message: string}) {
    return {
      error: error.message,
    };
  }

  componentDidCatch(_error: any, _errorInfo: any) {
    console.error(_error, _errorInfo);
    // this.setState({error: _error});
  }

  getErrorMessage = (key: string) => {
    if (key === 'title') {
      return translate('errorBoundaryTitle');
    }
    return translate('errorBoundaryBody');
  };

  render() {
    if (this.state.error) {
      return (
        <View>
          <Text>{'Title: ' + this.getErrorMessage('title')}</Text>
          <Text>{'Body: ' + this.getErrorMessage('body')}</Text>
        </View>
      );
    }
    return this.props.children;
  }
}
