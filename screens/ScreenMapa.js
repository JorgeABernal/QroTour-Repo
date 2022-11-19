import { useNavigation } from "@react-navigation/native"
import { Dimensions, StyleSheet, Text, View, Modal, Alert, Image, TouchableWithoutFeedback, ScrollView} from 'react-native';
import { useState, useEffect } from "react";
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';

export default function ScreenMapa() {
    let colorPin = `green`;
    const [position, setPosition] = useState({
        latitude: 20.618873249033932,
        longitude: -100.39745475151095,
        latitudeDelta: 0,
        longitudeDelta: 0,
    });
    const [modalVisible, setModalVisible] = useState(false);
    const [modalInfo, setModalInfo] = useState({
      titulo: "",
      descripcion: "",
      horario: "",
      direccion: "",
      contacto: "",
      uri: "./assets/icon.png",
    });
    const [errorMsg, setErrorMsg] = useState(null);
    useEffect(() => {
        (async () => {
          
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
    
          let location = await Location.getCurrentPositionAsync({});
          console.log(location);
          setPosition({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0,
            longitudeDelta: 0,
        });
        })();
      }, []);

const selectImage = (props) => {
  var output = [];  
  switch (props) {
    case "1-1":
      var tempItem = (<Image style={styles.imagenModal} source={require("./../assets/queretaro2000.png")}/>)
      output[0] = (tempItem);
      break;
    case "1-2":
      var tempItem = (<Image style={styles.imagenModal} source={require("./../assets/Arcos.jpg")}/>)
      output[0] = (tempItem);
      break;
    case "1-3":
      var tempItem = (<Image style={styles.imagenModal} source={require("./../assets/alameda.jpg")}/>)
      output[0] = (tempItem);
      break;
  }
  return(<View>{output}</View>)
}

return (
    <View style={styles.container}>

        <MapView
        style={styles.map}
        initialRegion={position}
        showsUserLocation={true}
        >
        <Marker
            coordinate={{latitude: 20.595638, longitude: -100.373727}}
            onPress={() => {
            setModalInfo({
                titulo: "Los Arcos de Querétaro",
                descripcion: "El acueducto de Querétaro, es una monumental edificación actualmente de 74 arcos, que alcanzan una altura promedio de 28.5 m y una longitud de mil 298 metros. El origen de la construcción de los Arcos se remonta al siglo XVII, cuando la ciudad carecía de un eficaz y saludable servicio de agua potable, pues los viejos canales y cañerías que surtían a la ciudad conducían aguas sucias y malsanas, contaminadas por los obrajes, relata el cronista Andrés Garrido del Toral.",
                horario: "Siempre abierto",
                direccion: "Ejército Republicano 47, La Santa Cruz, La Pastora, 76025 Santiago de Querétaro, Qro.",
                contacto: "Sin contacto",
                uri: "1-2",
                costo: "Gratuito",
                }
            )
            setModalVisible(true);
            }}
            pinColor={'#508c7c'}
        >
        </Marker>
        <Marker
            coordinate={{latitude: 20.617493, longitude: -100.393913}}
            onPress={() => {
            setModalInfo({
                titulo: "Parque Querétaro 2000",
                descripcion: "El Querétaro 2000, es un parque ubicado dentro de la ciudad, amplio en dimensiones, abierto para todo público. Con grandes áreas verdes fomenta el desarrollo y práctica del deporte y la recreación. El parque cuenta con instalaciones de amplias dimensiones, campos de fútbol, de fútbol americano, baloncesto y voleibol, así como una alberca techada, pistas, áreas de juegos infantiles y zonas de acampar. Cuenta también con una zona especial de juegos infantiles para niños discapacitados. Su concha acústica es sitio de diferentes eventos culturales y artísticos.",
                horario: "7:00 am a 7:00 pm",
                direccion: "Arrioja s/n Blvd. Bernardo Quintana S/N Col. Villas del parque, CP. 76140, Querétaro, Querétaro",
                contacto: "Pedro Hernández Solorio, (442) 220 6813",
                uri: "1-1",
                costo: "2 Pesos",
            })
            setModalVisible(true);
            }}
            pinColor={'#508c7c'}
        >
        </Marker>
        <Marker
            coordinate={{latitude: 20.587901, longitude: -100.387894}}
            onPress={() => {
            setModalInfo({
                titulo: "Alameda de Querétaro",
                descripcion: "La Alameda Hidalgo, es un parque ornamental que se encuentra en el centro de la ciudad. Es el lugar ideal para dar un paseo bajo la sombra de los árboles más frondosos y admirar el monumento a Miguel Hidalgo que da nombre a este lugar, también suele haber exhibiciones de pintura o fotografía en las rejas del exterior. Si buscas un lugar para realizar ejercicio mientras estas en Querétaro, la Alameda Hidalgo es la mejor opción, puedes caminar o correr, cuenta con una pista para patinetas y bancas a lo largo del parque para descansar o sentarse a platicar. AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                horario: "6:00am a 7:00pm",
                direccion: "Av. Constituyentes s/n, Centro Histórico, 76000 Santiago de Querétaro, Qro.",
                contacto: "8007151742",
                uri: "1-3",
                costo: "Gratuito",
                }
            )
            setModalVisible(true);
            }}
            pinColor={'#508c7c'}
        >
        </Marker>
        </MapView>
        <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        
        onRequestClose={() => {
        setModalVisible(!modalVisible);
        }}>
            {selectImage(modalInfo.uri)}
        <ScrollView style={styles.modalStyle}
        // contentContainerStyle={{justifyContent: 'center',}}
        >
            <View style={styles.modalStyle2}>
                <View style={styles.modalStyle3}>
                    <View style={{flexDirection: 'row',}}>
                    <View style={{width: '50%', backgroundColor: 'pink',}}>
                        <Text style={styles.modalText1}>{modalInfo.titulo}</Text>
                            <View style={styles.modalText2View}>
                            <Text style={styles.modalText2a}>Costo: </Text>
                            <Text style={styles.modalText2b}>{modalInfo.costo}</Text>
                        </View>
                    </View>
                    </View>
                    <Text style={styles.modalText3}>{modalInfo.descripcion}</Text>
                    <Text style={styles.modalText4}>{modalInfo.horario}</Text>
                    <Text style={styles.modalText5}>{modalInfo.direccion}</Text>
                    <Text style={styles.modalText6}>{modalInfo.contacto}</Text>
                </View>
            </View>
        </ScrollView>
        <TouchableWithoutFeedback onPress={() => {setModalVisible(false)}}>
            <View style={styles.noModal}></View>
        </TouchableWithoutFeedback>
        </Modal>
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
    height: Dimensions.get("window").height,
  },
  noModal:{
    height: "20%"
  },
  modalStyle:{
    width: "100%",
    height: "80%",
    // backgroundColor: 'red',
    // justifyContent: 'center',
  },
  imagenModal: {
    width: "100%",
    height: 250,
    resizeMode: 'stretch',
    backgroundColor: 'blue',
  },
  modalStyle2: {
    width: "100%",
    // marginHorizontal: "5%",
    backgroundColor: 'white',
    borderRadius: 18,
    overflow: 'hidden',
    // justifyContent: 'center',
  },
  modalStyle3:{
    backgroundColor: 'white',
    padding: 18,
  },
  modalText1:{
    color: '#123753',
    fontWeight: '500',
    fontSize: 18,
    // width: '50%',
  },
  modalText2View: {
    flexDirection: 'row',
    marginTop: 5,
  },
  modalText2a: {
    fontWeight: '300',
  },
  modalText2b: {
    color: '#123753',
    fontWeight: '500',
    // fontSize: 1,
  },
  modalText3:{
    marginTop: 15,
  }
});
