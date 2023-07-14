import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tailwind from 'twrnc';
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';


const data = [
    {
        id: "123",
        title: "Get a ride",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen"
    },
    {
        id: "456",
        title: "Order food",
        image: "https://links.papareact.com/28w",
        screen: "EatsScreen" 
    }
];

const NavOptions = () => {
    const navigation=useNavigation();
    const origin= useSelector(selectOrigin);


  return (
   <FlatList 
        data={data}
        keyExtractor={(item) => item.id} //whenever you have a list you have to have a key
        horizontal
        renderItem={({item}) => (
            <TouchableOpacity
                // disabled={!origin}
                onPress={() => navigation.navigate(item.screen)}
                style={tailwind`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
            >
                <View  
                    // style={tailwind`${!origin && 'opacity-20'}`} 
                >
                    <Image 
                    source={{
                        uri: item.image
                    }}
                    style={{
                        width: 120,
                        height: 120,
                        resizeMode: "contain"
                    }} />

                    <Text style={tailwind`mt-2 font-semibold text-lg`}>
                        {item.title}
                    </Text>

                    <Icon  style={tailwind`p-2 bg-black rounded-full w-10 mt-4`} name='arrowright' color="white" type='antdesign'  />

                </View>
            </TouchableOpacity>
        )} 
   />
  )
}

export default NavOptions

const styles = StyleSheet.create({})