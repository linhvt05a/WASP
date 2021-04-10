//import liraries
import React, { FC } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import { ScreenWH } from '../../constants'

// create a component

interface LogoStyle{
    top: number
    left: number
    right:number
    bottom:number
}

const Logo: FC<LogoStyle> = (props) => {
    const styleLess = {
        top:props.top,
        left:props.left,
        right: props.right,
        bottom: props.bottom
    }
    return (
        <View style={[styles.rubic,styleLess]}>
            <Image
                source={require('../../assets/images/icons8-airplane-mode-on-64.png')}
                style={[styles.logo]}
            />
      </View>
    );
};
export default Logo;
// define your styles
const styles = StyleSheet.create({
    rubic: {
        width: ScreenWH.width / 3,
        height: ScreenWH.width / 3,
        backgroundColor: 'white',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
      },
      logo: {
        width: ScreenWH.width / 4,
        height: ScreenWH.width / 4,
      },
});

//make this component available to the app

