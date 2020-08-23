
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView,Image } from 'react-native';
import axios from 'axios'
import Header from '../components/header';

export default function HomeComponent({navigation}){
    const [allproducts, setallProducts] = useState([])

    useEffect(()=>{
      axios.get('http://localhost:3000/allProducts')
            .then(res =>{
              console.log(res.data)
              setallProducts(res.data)
            }).catch(err => {
              
              console.log(err);
          })
    },[])                                      
  
  
    
  
    return (
      <View style={mystyles.maincontainer}>
        <button onClick={()=>{navigation.navigate('AddProduct', {item: allproducts})}} style={{backgroundColor:"red",padding:"30px"}}>Add product</button>
          <Header></Header>
          
         
          <ScrollView>
          {
            allproducts.map(product =>{
              console.log(product.image)
              return (
                <View key={product.id}>
                  <TouchableOpacity onPress={()=>{navigation.navigate('Detail', {item: product})}}>
                    <Text style={mystyles.listitem}>{product.name}</Text>
                    <Image
                          style={mystyles.stretch}
                          source={{
                            uri:product.image
                          }}
                    />
                  </TouchableOpacity>
                </View>
              )
            })
          }
        </ScrollView>
   
          
      </View>
  
      
    )
  }
  
  const mystyles = StyleSheet.create({
    maincontainer:{
      backgroundColor:'lightgreen',
      flex:1,
      //alignItems:'center',
      //justifyContent:'center'
    },
    listitem:{
      // marginTop:20,
      fontSize:30,
      backgroundColor:'goldenrod',
      padding:20,
      color:'purple'
    },
    stretch: {
      width: '50%',
      justifyContent:"center",
      marginLeft:350,
      height: 300,
      resizeMode: 'stretch',
    
    }
  })
//     const details= {
//         name:'OBB',
//         location:'Chennai',
//         id:'1'
//     }

//     return(
//         <View style={globalstyles.containerStyle}>
//             <Text style={globalstyles.textStyle}>I am at home!</Text>
//             <TouchableOpacity style={globalstyles.touchButtonContainer}
                            //   onPress={()=>{navigation.navigate('About', {item: details})}}      >
//                 <Text>Go To About Screen</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={globalstyles.touchButtonContainer}
//                               onPress={()=>{navigation.navigate('Contact')}}      >
//                 <Text>Go To Contact Screen</Text>
//             </TouchableOpacity>
//         </View>
//     )
// }