import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import tailwind from 'twrnc'
import { Icon } from '@rneui/base'
import { useNavigation } from '@react-navigation/native'


const data= [
  {
    id: "Uber-X-123",
    title: "UberX",
    multiplier: 1,
    image: "https://links.papareact.com/3pn"
  },
  {
    id: "Uber-XL-456",
    title: "UberXL",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8"
  },
  {
    id: "Uber-LUX-789",
    title: "UberLUX",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf"
  }
]
const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null)



  return (
    <SafeAreaView style={tailwind`bg-white flex-grow`}>
      <View>
        <TouchableOpacity 
        style={tailwind`absolute top-3 left-5 p-3 rounded-full`}
        onPress={() => navigation.navigate('NavigateCard')}
        >
          <Icon name='chevron-left' type='font-awesome' />
        </TouchableOpacity>
        <Text style={tailwind`text-center text-xl py-5`}>Select A Ride</Text>
      </View>

      <FlatList 
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({item: {image, id, multiplier, title}, item}) => (
        <TouchableOpacity 
        onPress={() => setSelected(item)}
        style={tailwind`flex-row item-center justify-between px-10 ${id === selected?.id && "bg-gray-200"}`}
        >
          <Image 
            style={{
              width: 100,
              height: 100,
              resizeMode: "contain"
            }}
            source={{
              uri: image
            }} 
          />
          <View style={tailwind`-ml-6`}>
            <Text style={tailwind`text-xl font-semibold`}>
              {title}
            </Text>
            <Text>
              Travel time...
            </Text>
            <Text style={tailwind`text-xl`}>
              $50
            </Text>
          </View>
          
        </TouchableOpacity>
      )}
      />

      <View>
        <TouchableOpacity>
          <Text>
            Choose {selected?.title }
          </Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  )
}

export default RideOptionsCard
