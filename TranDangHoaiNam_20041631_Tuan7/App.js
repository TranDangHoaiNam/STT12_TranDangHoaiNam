import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Master from "./view/master";
import Detail from './view/Detail';
import Test from './view/test';

const stack = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='Master' screenOptions={{headerShown:false}}>
        <stack.Screen name='Master' component={Master}/>
        <stack.Screen name='Detail' component={Detail}/>
        <stack.Screen name='Test' component={Test}/>
      </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:360,
    height:640,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
