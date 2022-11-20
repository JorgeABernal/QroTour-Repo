import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ScreenMapa from './screens/ScreenMapa';
import ListadoDesc from './screens/ListadoDesc';
import InicioSesion from './screens/InicioSesion';
import Registrarse from './screens/Registrarse';
import DescuentoScreen from './screens/DescuentoScreen';
import ListadoCert from './screens/ListadoCert';

export default function App() {
  const Drawer = createDrawerNavigator();
  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator screenOptions={{headerShown: false}}>
          <Drawer.Screen name="Mapa" component={ScreenMapa} />
          <Drawer.Screen name="Descuentos" component={ListadoDesc} />
          <Drawer.Screen name="Inicio de sesion" component={InicioSesion} />
          <Drawer.Screen name="Registrarse" component={Registrarse} />
          <Drawer.Screen name="Descuento" component={DescuentoScreen} />
          <Drawer.Screen name="Listado Certificados" component={ListadoCert} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}