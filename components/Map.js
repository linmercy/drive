import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import MapView, { Marker } from 'react-native-maps'
import tailwind from 'twrnc'
import { useSelector } from 'react-redux'
import { selecDestination, selectOrigin } from '../slices/navSlice'
import MapViewDirections from 'react-native-maps-directions'
import {PLACES_API_KEY} from '@env'
const Map = () => {
    const origin = useSelector(selectOrigin)
    const destination = useSelector(selecDestination)
    const mapRef = useRef(null)
    
    useEffect(() => {
        if (!origin || !destination) 
        return

        // zooming the map out to fit to the markers
        mapRef.current.fitToSuppliedMarkers(
            ['origin', 'destination'],
            {edgePadding: {
                top: 50,
                right: 50,
                bottom: 50,
                left: 50
            }},
        )
    }, [origin, destination])

  return (
    <View>
        <MapView
            style={tailwind`flex-1`}
            initialRegion={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
            }}
            mapType='mutedStandard'
        >
            {origin && destination &&(
                <MapViewDirections 
                    origin={origin.description}
                    destination={destination.description}
                    apikey={PLACES_API_KEY}
                    strokeColor="black"
                    strokeWidth={3}
                />
            )}
            {origin?.location && (
                <Marker 
                    coordinate={{
                        latitude: origin.location.lat,
                        longitude: origin.location.lng,
                    }}
                    title='Origin'
                    description={origin.description}
                    identifier='origin'
                />
            )}

            {destination?.location && (
                <Marker 
                    coordinate={{
                        latitude: destination.location.lat,
                        longitude: destination.location.lng,
                    }}
                    title='Destination'
                    description={destination.description}
                    identifier='destination'
                />
            )}
        </MapView>
    </View>
  )
}

export default Map

const styles = StyleSheet.create({})