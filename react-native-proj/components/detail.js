import React from "react";
import { globalstyles } from "../globalstyles/globalstyles";
import { View, Text,StyleSheet,Image  } from "react-native";

export default function DetailComponent(props){

    console.log(props);
    const detail = props.route.params.item
console.log(detail.image)
    return(
        <View style={globalstyles.containerStyle}>
             <Image
                          style={mystyles.stretch}
                          source={{
                            uri:detail.image
                          }}
            />
            <Text style={globalstyles.textStyle}>Details of {detail.name}</Text>
            <Text style={mystyles.textStyle}>Price : Rs {detail.price} </Text>
            <Text style={mystyles.textStyle}>Rating : {detail.rating} </Text>
            <Text style={mystyles.textStyle}>Stock Available : {detail.stock} </Text>
            <Text style={mystyles.textStyle}>Category : {detail.category} </Text>
            <Text style={mystyles.textStyle}>Deescription : {detail.description} </Text>
            
        </View>
    )
}

const mystyles = StyleSheet.create({
  
    stretch: {
      width: '50%',
      justifyContent:"center",
      marginLeft:350,
      height: 300,
      resizeMode: 'stretch',
    
    },
    textStyle:{
        fontSize:20,
        fontWeight:'bold',
        color:'black',
        justifyContent:"center",
        textAlign:'center',
        padding:10
    }
  })