import React, { FC } from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import {ScreenWH} from '../../../constants'
import {Logo, Slogan, Button} from '../../../components'
import { TouchableOpacity } from 'react-native-gesture-handler'
import * as Animatable from 'react-native-animatable';

interface Props {
    navigation: any
    gotosign?:void
  }

const Account: FC<Props> = (props) =>{
    return(
        <Animatable.View  style={styles.container} animation='bounceInUp' duration={2000}>
                <ImageBackground 
                    borderBottomLeftRadius={20} borderBottomRightRadius={20} 
                    source={require('../../../assets/images/Sahara.jpg')}  blurRadius={4} style={styles.imgBgr}>
                     <Logo top={90} />
                     <Slogan title="LANKA ứng dụng đặt vé máy bay tốt nhất hiện nay" top={100} color="white" fontFamily="Helvetica-Bold"/>
                     <Slogan title="Quý khách bay cùng LanKa sẽ nhận được hàng ngàn ưu đãi.Miễn thuế và phí cho 1000 hành khách đầu tiên .
                     Mọi chi tiết liên hệ tổng đài theo số điện thoại 1900 1009 để biết thêm chi tiết nhé !"  top={250} color="white" fontFamily="HelveticaNeue-Medium" fontSize={14}/>
                </ImageBackground>
               <View style={styles.button_view}>
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
                            onPress={()=> props.navigation.navigate('Login')}
                            idBtn ={1}
                        />
               </View>
               <Animatable.Text style={styles.txtAccount} duration={4000} animation='slideInLeft'>
                    Bạn chưa có account ?  
                    <TouchableOpacity onPress={()=> props.navigation.navigate('Signup')}>
                        <Text style={styles.textSignup}>
                                Sign Up
                        </Text>
                    </TouchableOpacity>
                </Animatable.Text>
        </Animatable.View>
    )
}

export default Account

const styles = StyleSheet.create({
    button_view:{
        marginTop: 60
    },
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