import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Splash, Login} from './src/screens'

 const Stack = createStackNavigator();
 const App = () => {
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}}/>
            <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default App
  