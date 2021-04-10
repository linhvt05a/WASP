import React, { FC } from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import {ScreenWH} from '../../../constants'
import {Logo, Slogan, Button} from '../../../components'
import { TouchableOpacity } from 'react-native-gesture-handler'
import * as Animatable from 'react-native-animatable';

const Login: FC = (props) =>{

    return(
        <Animatable.View  style={styles.container} animation='bounceInUp' duration={2000}>
                <ImageBackground 
                    borderBottomLeftRadius={20} borderBottomRightRadius={20} 
                    source={require('../../../assets/images/Sahara.jpg')}  blurRadius={4} style={styles.imgBgr}>
                     <Logo top={90} />
                     <Slogan title="GO LANKA" top={100} color="white" fontFamily="Helvetica-Bold"/>
                     <Slogan title="Airplane,supported by the dynamic reaction of the air against its wings." top={250} color="white" fontFamily="HelveticaNeue-Medium" fontSize={14}/>
                </ImageBackground>
               <Button 
                    color={['#346ac7','#055ef7']} 
                    btnTitle="Đăng nhập bằng Facebook" 
                    textColor="white" 
                    onPress={()=> console.log('hello facebook')}
                    idBtn = {0}
                    
                />
               <Button 
                    color={['#0f9179','#05ffd1']} 
                    btnTitle="Đăng nhập bằng Email hoặc SĐT" 
                    textColor="white" 
                    onPress={()=> console.log('helo phone')}
                    idBtn ={1}
                />
                <Animatable.Text style={styles.txtAccount} duration={4000} animation='slideInLeft'>
                    Bạn chưa có account ?  
                    <TouchableOpacity onPress={()=>props.navigation.navigate('Signup') }>
                        <Text style={styles.textSignup}>
                                Sign Up
                        </Text>
                    </TouchableOpacity>
                </Animatable.Text>
        </Animatable.View>
    )
}

export default Login

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        width: ScreenWH.width,
        height: ScreenWH.height/2,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
      
    },
    imgBgr:{
        width:ScreenWH.width, 
        height: ScreenWH.height,
        justifyContent:'center',
        alignItems:'center'
    },
    textSignup:{
        color:'#0f9179',
        fontSize: 14,
        fontWeight:'bold', 
        top:3, 
        textDecorationLine:'underline',
        left: 5
    },
    txtAccount:{
        top: 50,
        fontSize:14,
        color:'black',

    }
})