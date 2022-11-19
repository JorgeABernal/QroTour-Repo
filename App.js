import 'react-native-gesture-handler';
import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import ScreenMapa from './screens/ScreenMapa';
// import iconMapa from './assets/mapa.png'



export default function App() {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator>
      <Drawer.Screen name="Mapa" component={ScreenMapa} />
      {/* <Drawer.Screen name="Article" component={Article} /> */}
    </Drawer.Navigator>
    </NavigationContainer>
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
    height: Dimensions.get("window").height,
  },
  noModal:{
    height: "20%"
  },
  modalStyle:{
    width: "100%",
    height: "80%",
    backgroundColor: 'red',
  },
  imagenModal: {
    width: "100%",
    height: 250,
    resizeMode: 'stretch',
    backgroundColor: 'blue',
  }
});
