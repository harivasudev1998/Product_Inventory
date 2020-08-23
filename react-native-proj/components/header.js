import React from 'react';

import { StyleSheet, Text, View } from "react-native";

export default function Header(){
    return (
        <View style={mystyles.header}>
            <Text style={mystyles.heading}>Products</Text>
        </View>
    )
}

const mystyles = StyleSheet.create({
    header:{
        height:80,
        backgroundColor:'cyan',
        // paddingBottom:5,
    },
    heading:{
        fontWeight:'bold',
        textAlign:'center',
        paddingTop:35,
        fontSize:30,
    
    }
})