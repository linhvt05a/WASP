import React, { FC } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import {ScreenWH} from '../../constants'

const Home:FC  = () => {
    return (
       <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollView}>
            <View style={styles.container}>
                <Text>fsfsdfdsfsdfsd</Text>
            </View>
       </ScrollView>
    )
}


const styles = StyleSheet.create({
    container : {
       width: ScreenWH.width,
       height: ScreenWH.height,
       backgroundColor:'#32a88d'
    },
    scrollView: {
        justifyContent:'center',
        alignItems:'center',
    }
})

export default Home
