import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tailwind from 'twrnc'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import {PLACES_API_KEY} from '@env'
import { useDispatch } from 'react-redux'
import { setDestination } from '../slices/navSlice'
import { useNavigation } from '@react-navigation/native'
import Favourites from './Favourites'
import { Icon } from '@rneui/themed'
import RideOptionsCard from './RideOptionsCard'


const NavigateCard = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()

  return (
    <SafeAreaView style={tailwind`bg-white flex-1`}>
      <Text style={tailwind`text-center py-5 text-xl`}>
        Good Morning, Mercylin
      </Text>

      <View style={tailwind`border-t border-gray-200 flex-shrink`}>
        <View>
          <GooglePlacesAutocomplete
            placeholder='Where to?'
            nearbyPlacesAPI='GooglePlacesSearch'
            debounce={400}
            styles={styles}
            fetchDetails={true}
            enablePoweredByContainer={false}

            query={{
              key: PLACES_API_KEY,
              language: "en"
            }}
            returnKeyType={"search"}
            minLength={2}
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  location: details.geometry.location,
                  description: data.description
                })
              )

              navigation.navigate("RideOptionsCard")
            }}
          />
        </View>
        <Favourites />
      </View>

      <View style={tailwind`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}>
        <TouchableOpacity 
        style={tailwind`flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full`}
        onPress={() => navigation.navigate("RideOptionsCard")}
        >
          <Icon name='car' type='font-awesome' color='white' size={18} />
          <Text style={tailwind`text-white text-center`}>Rides</Text>
        </TouchableOpacity>

        <TouchableOpacity style={tailwind`flex flex-row justify-between w-24 px-4 py-3 rounded-full`}>
          <Icon name='fast-food-outline' type='ionicon' color='black' size={18} />
          <Text style={tailwind`text-white text-center`}>Eats</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView >
  )
}

export default NavigateCard

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: "#DDDDDF",
    borderRadius: 0,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
})