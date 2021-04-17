//import liraries
import React, { FC } from 'react';
import { View, Text, StyleSheet, Image,TextInput,TouchableOpacity } from 'react-native';
import {ScreenWH} from '../../../constants'
import {Logo, Slogan} from '../../../components'
import * as Animatable from 'react-native-animatable';

interface Props {
    navigation: any
}
// create a component
const Login: FC<Props> = (props) => {
    return (
        <View style={styles.container}>
           <View style={styles.header}>
                <Logo />
                <Slogan title="Đăng nhập để nhận ưu đãi từ LanKa bạn nhé!" top={20} color="#ffff" fontSize={16} fontWeight="bold"/>
           </View>
           <Animatable.View style={styles.bottom} duration={3000} animation='fadeInUpBig'>
               <View style={styles.form}>
                    <Text style={styles.txtAccount}>Tài Khoản</Text>
                    <View style={styles.box}>
                        <Image source={require('../../../assets/images/baseline_person_black_20pt_3x.png')} style={styles.imgAcc}/>
                        <TextInput placeholder="Nhập email hoặc số điện thoại đã đăng ký" style={styles.txtInput}/>
                        <Image source={require('../../../assets/images/icons8-checked-50.png')} style={styles.checkBox}/>
                    </View>

                    <Text style={styles.txtPass}>Mật Khẩu </Text>
                    <View style={styles.phone_box}>
                        <Image source={require('../../../assets/images/baseline_lock_black_18pt_3x.png')} style={styles.imgAcc}/>
                        <TextInput secureTextEntry={true} autoCapitalize='none' placeholder="Nhập mật khẩu" style={styles.txtInput}/>
                        <Image source={require('../../../assets/images/outline_visibility_off_black_20pt_3x.png')} style={styles.checkBox}/>
                    </View>
                    <TouchableOpacity style={styles.btnSignup} onPress={()=> props.navigation.navigate('Home')}>
                        <Text style={styles.btnTxt}>Sign In</Text>
                    </TouchableOpacity>
               </View>
               <View style={styles.view_text_signup}>
                <Animatable.Text style={styles.txtAccount} duration={4000} animation='slideInLeft'>
                        Bạn chưa có account ?  
                        <TouchableOpacity onPress={()=> props.navigation.navigate('Signup')}>
                            <Text style={styles.textSignup}>
                                    Sign Up
                            </Text>
                        </TouchableOpacity>
                    </Animatable.Text>
               </View>
           </Animatable.View>

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#32a88d',
    },
    textSignup:{
        color:'#0f9179',
        fontSize: 14,
        fontWeight:'bold', 
        top:3, 
        textDecorationLine:'underline',
        left: 5
    },
    view_text_signup:{
        justifyContent:'center',
        alignItems:'center',
        bottom: 15
    },
    header:{
        flex: 2,
        justifyContent:'center',
        alignItems:'center'
    },
    bottom:{
        backgroundColor:'#ffff',
        width: ScreenWH.width,
        height: ScreenWH.height/3,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
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
        fontSize:16,
        fontWeight:'bold'
    },
    form:{
        paddingHorizontal: 10,
        paddingVertical: 30
     },
     box:{
        flexDirection:'row',
        borderBottomWidth: 1,
        borderBottomColor:'#cccccc',
        paddingVertical: 5
    },
    imgAcc:{
        width: 20, 
        height: 20
    },
    checkBox:{
        width: 20,
        height: 20,
        position:'absolute',
        right: 0
    },
    phone_box:{
        flexDirection:'row',
        borderBottomWidth: 1,
        borderBottomColor:'#cccccc',
        paddingVertical: 5,
        top: 10
    },
    txtAccount:{
        fontSize: 16
    },
    txtPass:{
        fontSize: 16,
        marginTop: 20
    },
    txtInput:{
        marginLeft: 5
    }
});

//make this component available to the app
export default Login;
