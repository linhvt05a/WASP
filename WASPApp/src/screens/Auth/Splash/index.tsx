import React, { useState, useEffect, FC } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { ScreenWH } from '../../../constants'
import {Logo, Slogan} from '../../../components'

const Splash = ({navigation}) => {

  useEffect(()=>{
      setTimeout(()=>{
        navigation.navigate('Login')
      }, 3000)
  },[])
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#70b59e', '#1eeba7']}
        style={styles.linearGradient}
      >
      <Logo />
      <Slogan title="Cùng bay với Lanka nào !" color="white" fontSize={20} top={10} fontFamily="Helvetica-BoldOblique"/>
      </LinearGradient>
    </View>

  )
}

export default Splash

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: ScreenWH.height,
    width: ScreenWH.width,
  },
  
  
})