import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import {ScreenWH} from '../../../constants'
import {Logo, Slogan, Button} from '../../../components'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Login = () =>{

    return(
        <View style={styles.container}>
                <ImageBackground 
                    borderBottomLeftRadius={20} borderBottomRightRadius={20} 
                    source={require('../../../assets/images/Sahara.jpg')}  blurRadius={1} style={styles.imgBgr}>
                     <Logo top={90} />
                     <Slogan title="GO LANKA" top={100} color="white" fontFamily="Helvetica-Bold"/>
                     <Slogan title="Airplane, also called aeroplane or plane, any of a class of fixed-wing aircraft that is heavier than air, propelled by a screw propeller or a high-velocity jet, and supported by the dynamic reaction of the air against its wings." top={250} color="white" fontFamily="HelveticaNeue-Medium" fontSize={14}/>
                </ImageBackground>
               <Button 
                    color={['#346ac7','#055ef7']} 
                    btnTitle="Connect with facebook" 
                    textColor="white" 
                    onPress={()=> console.log('hello facebook')}
                    idBtn = {0}
                />
               <Button 
                    color={['#0f9179','#05ffd1']} 
                    btnTitle="Connect with phone number" 
                    textColor="white" 
                    onPress={()=> console.log('helo phone')}
                    idBtn ={1}
                />
                <Text style={{top: 50,fontStyle:'italic', fontWeight:'bold', color:'#c9c7c7'}}>
                    Ban chua co account ? 
                    <TouchableOpacity>
                           <Text style={{color:'#0f9179',fontSize: 14,fontWeight:'bold', top:3, textDecorationLine:'underline'}}> Sign Up</Text>
                    </TouchableOpacity>
                </Text>
        </View>
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
    }
})