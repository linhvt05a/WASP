//import liraries
import React, { Component, FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface SloganStyle{
    title: string
    top: number
    fontSize: number
    color: string
    fontWeight: string
    fontFamily:string
}
// create a component
const Slogan: FC<SloganStyle> = (props) => {

    const SloganStyle = {
        top: props.top,
        fontSize: props.fontSize,
        color: props.color,
        fontFamily:props.fontFamily
    }

    return (
        <Text style={[SloganStyle]}>{props.title}</Text>
    );
};

// define your styles

//make this component available to the app
export default Slogan;
