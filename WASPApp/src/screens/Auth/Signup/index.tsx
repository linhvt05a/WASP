//import liraries
import React, { FC } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {ScreenWH} from '../../../constants'
import {Logo, Slogan} from '../../../components'
import * as Animatable from 'react-native-animatable';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
// create a component
const Signup:FC = (props) => {
    return (
      <View style={styles.container}>
           <View style={styles.header}>
                <Logo />
                <Slogan title="GO LANKA" color="white" fontSize = {16} top={20}/>
           </View>

           <Animatable.View style={styles.bottom} duration={5000} animation='fadeInUpBig'>
               <Text>Email</Text>
                <View>
                <FontAwesomeIcon icon = "user-tie" color="#ffd" size={20}/>
                </View>
           </Animatable.View>
      </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#32a88d',
    },
    header:{
        flex: 2,
        justifyContent:'center',
        alignItems:'center'
    },
    bottom : {
        flex: 2,
        backgroundColor:'#ffff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    }
});

//make this component available to the app
export default Signup;
