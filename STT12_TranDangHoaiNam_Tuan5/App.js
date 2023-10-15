import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,TouchableOpacity,TextInput, Pressable, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import DetailHome from './index/DetaiScree';
import Home from './index/Home'
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// màn hình số 2 là 
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='DetaiScree' component={DetailHome} />
      </Stack.Navigator>
    </NavigationContainer>
    

  );
}


