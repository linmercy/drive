import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import NavOptions from '../components/NavOptions'
import {PLACES_API_KEY} from "@env"
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { useDispatch } from 'react-redux'
import { setDestination, setOrigin } from '../slices/navSlice'
import Favourites from '../components/Favourites'

const HomeScreen = () => {
    const dispatch = useDispatch();
  return (
    <SafeAreaView style={tw`bg-yellow-200 h-full`}>
        <View style={tw`p-5`}>
            <Image 
                style={{
                    width: 100,
                    height:100,
                    resizeMode: "contain",
                }}
                source={{
                    uri: "https://links.papareact.com/gzs",
                }}
            />

            <GooglePlacesAutocomplete 
                nearbyPlacesAPI='GooglePlacesSearch'
                debounce={400}
                placeholder='Where From?'
                styles={{
                    container: {
                        flex: 0,
                    }
                }}
                fetchDetails={true}
                onPress={(data, details = null) => {
                    dispatch(setOrigin({
                        location: details.geometry.location,
                        description: data.description
                    }))

                    dispatch(setDestination(null))
                }}
                returnKeyType={"search"}
                enablePoweredByContainer={false}
                minLength={2}

                query={{
                    key: PLACES_API_KEY,
                    language: "en"
                }}
             
            />

            <NavOptions />

            <Favourites />
        </View>
    </SafeAreaView>
  )
}

export default HomeScreen
