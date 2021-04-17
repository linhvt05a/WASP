import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer, NavigationProp, useNavigation } from '@react-navigation/native';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import {Splash, Account, Signup, Login, Home} from './src/screens'
import { Image, Platform, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-animatable';
import {ScreenWH} from './src/constants'
import { TouchableOpacity } from 'react-native-gesture-handler';

 const Stack = createStackNavigator();
  
 const App = () => {
   
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}}/>
            <Stack.Screen name="Account" component={Account} options={{headerShown: false}}/>
            <Stack.Screen name="Signup" component={Signup} options={{headerShown: false}}/>
            <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
            <Stack.Screen name="Home" component={Home} options={({ navigation, route }) => ({headerLeft:props =>
               <HeaderLeft {...props} navigation={navigation}/>,
               headerStyle:{
                backgroundColor:'#32a88d',
              }
               })}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
}

interface HeaderProps {
  navigation?: any,
  route?:any
}

const HeaderLeft:React.FC<HeaderProps> = (props) => {

  return(
    <View style={styles.header_left_bg}>
        <TouchableOpacity onPress={()=> props.navigation.navigate('Login')}>
            <Image style={styles.header_left_icon} source={require('./src/assets/images/icons8-left-arrow-30.png')}/>
        </TouchableOpacity>
    </View>
  )
}

const HeaderRight = () => {
  return(
    <></>
  )
}

const HeaderTitle = () => {
  return(
    <View>
        <Text>LanKa</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  header_left_bg:{
  },
  header_left_icon:{
    margin: 20
  }
})
  