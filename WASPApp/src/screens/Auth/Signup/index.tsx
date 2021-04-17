//import liraries
import React, { FC } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {ScreenWH} from '../../../constants'
import {Logo, Slogan} from '../../../components'
import * as Animatable from 'react-native-animatable';

interface Props {
    navigation: any
}
// create a component
const Signup:FC<Props> = (props) => {
    return (
      <View style={styles.container}>
           <View style={styles.header}>
                <Logo />
                <Slogan title="Hoàn tất đăng ký để nhận ưu đãi từ LanKa bạn nhé!" color="white" fontSize = {16} top={20}/>
           </View>

           <Animatable.View style={styles.bottom} duration={5000} animation='fadeInUpBig'>
               <View style={styles.form}>
                <Text>Email</Text>
                    <View style={styles.box}>
                        <Image source={require('../../../assets/images/baseline_mail_black_20pt_3x.png')} style={styles.img_email}/>
                        <TextInput placeholder="Nhập email..." style={styles.inputEmail}/>
                        <Image source={require('../../../assets/images/icons8-checked-50.png')} style={styles.checkbox}/>
                    </View>

                    <Text style={styles.txtPhone}>Số điện thoại</Text>
                    <View style={styles.phone_box}>
                        <Image source={require('../../../assets/images/baseline_phone_black_20pt_3x.png')} style={styles.img_email}/>
                        <TextInput placeholder="Nhập số điện thoại..." style={styles.inputEmail}/>
                        <Image source={require('../../../assets/images/icons8-checked-50.png')} style={styles.checkbox}/>
                    </View>

                    <Text style={styles.txtPhone}>Mật khẩu</Text>
                    <View style={styles.phone_box}>
                        <Image source={require('../../../assets/images/baseline_lock_black_18pt_3x.png')} style={styles.img_email}/>
                        <TextInput autoCapitalize='none' secureTextEntry={true} placeholder="Nhập mật khẩu..." style={styles.inputEmail}/>
                        <Image source={require('../../../assets/images/outline_visibility_off_black_20pt_3x.png')} style={styles.checkbox}/>
                    </View>

                    <Text style={styles.txtPhone}>Xác nhận mật khẩu</Text>
                    <View style={styles.phone_box}>
                        <Image source={require('../../../assets/images/outline_lock_clock_black_20pt_3x.png')} style={styles.img_email}/>
                        <TextInput secureTextEntry={true} placeholder="Nhập lại mật khẩu..." style={styles.inputEmail}/>
                        <Image source={require('../../../assets/images/outline_visibility_off_black_20pt_3x.png')} style={styles.checkbox}/>
                    </View>
                    <TouchableOpacity style={styles.btnSignup} onPress={()=> props.navigation.navigate('Login')}>
                            <Text style={styles.btnTxt}>Sign Up</Text>
                    </TouchableOpacity>
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
        justifyContent:'center',
        alignItems:'center'
    },
    header:{
        flex: 2,
        justifyContent:'center',
        alignItems:'center'
    },
    bottom : {
        backgroundColor:'#ffff',
        width: ScreenWH.width,
        height: ScreenWH.height/2,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    img_email:{
        width: 20, 
        height: 20,
    },
    box:{
        flexDirection:'row',
        top: 10,
        borderBottomWidth: 1,
        borderBottomColor:'#cccccc',
        paddingVertical: 5
    },
    txtPhone:{
       marginTop: 30
    },
    inputEmail:{
        marginHorizontal: 5
    },
    phone_box:{
        flexDirection:'row',
        borderBottomWidth: 1,
        borderBottomColor:'#cccccc',
        paddingVertical: 5,
        top: 10
    },
    checkbox:{
        width: 20, 
        height:20,
        position:'absolute',
        right: 0
    },
    btnSignup:{
        width:ScreenWH.width-20,
        height: 40,
        backgroundColor:'#58a197',
        justifyContent:'center',
        alignItems:'center',
        marginTop: 30,
        borderRadius: 8
    },
    btnTxt:{
        color:'#ffff',
        fontSize:14,
        fontWeight:'bold'
    },
    form:{
       paddingHorizontal: 10,
       paddingVertical: 20
    }
})
//make this component available to the app
export default Signup;
