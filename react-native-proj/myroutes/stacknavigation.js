import React from 'react';


import { createStackNavigator } from "@react-navigation/stack";
import HomeComponent from "../components/home";
import { NavigationContainer } from "@react-navigation/native";
import DetailComponent from '../components/detail';
import AddProductComponent from '../components/addproduct';

const Stack = createStackNavigator()


function MyStackNavigator(){
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home' 
                            screenOptions={{
                                gestureEnabled:true,
                                headerStyle:{
                                    backgroundColor:'wheat',
                                    height:100
                                }
                                }} 
                                headerMode='float'>
                <Stack.Screen name="Detail" component={DetailComponent}></Stack.Screen>
                <Stack.Screen name="Home" component={HomeComponent}></Stack.Screen>
                <Stack.Screen name="AddProduct" component={AddProductComponent}></Stack.Screen>
            
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MyStackNavigator