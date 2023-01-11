/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React, {useRef} from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Button} from 'react-native';
import {ErrorBoundry} from './utils/ErrorBoundry';
import {RootStack} from './utils/navigation/navigator';
import Accordion from './animations/accordian';
import NumberRollerTextView from './utils/nativeModules';
import {useEffect} from 'react';

const Screen1 = ({navigation, route}) => (
  <View style={styles.screen}>
    <Text style={styles.title}>Screen 1</Text>
    <NumberRollerTextView
      style={{width: `100%`, height: 100}}
      prefix={'Hello world'}
      //postfix={'World'}
      initialValue={0}
      finalValue={20000}
    />
    <Button
      title="Go to Screen 2"
      onPress={() => {
        navigation.push('Accordion');
      }}
    />
  </View>
);

const Screen2 = ({navigation, route}) => (
  <View style={styles.screen}>
    <Text style={styles.title}>Screen 2</Text>
    <Button
      title="Go back"
      onPress={() => {
        navigation.pop();
      }}
    />
  </View>
);

const App = () => {
 /*  const counter = useRef(0);
  const makJsThreadBusy = () => {
    setTimeout(() => {
      counter.current += 1;
      console.log('makJsThreadBusy', counter.current);
      makJsThreadBusy();
    }, 0.1);
  };

  useEffect(() => {
    makJsThreadBusy();
  }, []); */

  return (
    <ErrorBoundry>
      <NavigationContainer>
        <RootStack.Navigator
          initialRouteName="Screen1"
          screenOptions={{
            headerShown: false,
            animationEnabled: true,
          }}>
          <RootStack.Screen name="Screen1" component={Screen1} />
          <RootStack.Screen name="Screen2" component={Screen2} />
          <RootStack.Screen
            name="Accordion"
            component={Accordion}
            options={{
              title: 'Accordion',
            }}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </ErrorBoundry>
  );
};

const styles = StyleSheet.create({
  screen: {
    marginTop: 40,
    alignItems: 'center',
  },
  title: {
    padding: 20,
    fontSize: 42,
  },
});

export default App;
