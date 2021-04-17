//import liraries
import React, { FC } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {ScreenWH} from '../../constants'
import * as Animatable from 'react-native-animatable';

interface ButtonStyle {
    idBtn: number
    color: any
    btnTitle: string
    onPress? : ()=>void
    textColor: string
}
// create a component
const ButtonCustom: FC<ButtonStyle> = (props) => {
 const textStyle = {
     color: props.textColor
 }
    return (
            <LinearGradient  colors={props.color} style={styles.linearGradient}>
                <TouchableOpacity  onPress={props.onPress} style={styles.touch} >
                    {
                    props.idBtn == 0 
                    ?
                        <Image source={require('../../assets/images/icons8-facebook-f-30.png')} style={styles.iconBtn}/>
                        :
                        <Image source={require('../../assets/images/icons8-phone-24.png')} style={styles.iconBtn}/>
                        
                    }
                    <Text style={[textStyle, styles.textStyle]}>{props.btnTitle}</Text>
                </TouchableOpacity>  
            </LinearGradient>
        
    );
};

// define your styles
const styles = StyleSheet.create({
    linearGradient: {
        borderRadius: 20,
        height: 46,
        width: ScreenWH.width - 60,
        marginTop: 20
      },
      iconBtn:{
        width: 20, 
        height: 20,
        top: 13, 
        left: 20
      },
      textStyle:{
        left: 60,
        top: 15,
        position:'absolute',
        fontWeight:'bold'
      },
      touch:{
        width: ScreenWH.width - 60,
        height: 46
      }
});

//make this component available to the app
export default ButtonCustom;
