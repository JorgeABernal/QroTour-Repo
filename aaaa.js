import React, {useState, useEffect } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';


export default function App() {
  return (
    <View style={styles.container}>
        <MapView
    ref='map'
    initialRegion={{
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
    }}
    showsUserLocation={true}
    onUserLocationChange={(e)=>console.log(e.nativeEvent.coordinate)}
></MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height*0.5,
  }
});
