import { StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native'
import React from 'react'

import { Icon } from '@rneui/base'
import tailwind from 'twrnc'

const data = [
    {
        id: "123",
        icon: "home",
        location: "Home",
        destination: "Thika, Kenya"
    },
    {
        id: "456",
        icon: "briefcase",
        location: "Work",
        destination: "Nairobi, Kenya"
    }
]

const Favourites = () => {
  return (
    <FlatList
        data={data}
        keyExtractor = {(item) => item.id}
        renderItem={({item: {location, icon, destination}}) =>(
            <TouchableOpacity style={tailwind`flex-row item-center p-5`}>
                <Icon
                    style={tailwind`mr-4 rounded-full bg-gray-300 p-3`}
                    name={icon}
                    type='ionicon'
                    color='white'
                    size={18}

                />

                <View>
                    <Text style={tailwind`font-semibold text-lg`}>
                        {location}
                    </Text>

                    <Text style={tailwind`text-gray-500`}>
                        {destination}
                    </Text>
                </View>

            </TouchableOpacity>
        )}
        itemSeparatorComponent={() => (
            <View style={[tailwind`bg-gray-200`, {height: 0.5}]} />
        )}
    />
  )
}

export default Favourites

const styles = StyleSheet.create({})