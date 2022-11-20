import { useNavigation } from "@react-navigation/native"
import { Dimensions, StyleSheet, Text, View, Modal, ActivityIndicator, Image, TouchableWithoutFeedback, ScrollView, Button } from 'react-native';
import { useState, useEffect } from "react";
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import { MaterialCommunityIcons } from 'react-native-vector-icons'

export default function ScreenMapa() {
    const { toggleDrawer } = useNavigation();
    const [estancia, setEstancia ] = useState(false);
    const [listo, setListo ] = useState(false);
    const [listo2, setListo2 ] = useState(false);
    const [position, setPosition] = useState({
        latitude: null,
        longitude: null,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
    });
    const [modalVisible, setModalVisible] = useState(false);
    const [modalInfo, setModalInfo] = useState({
      titulo: "",
      descripcion: "",
      horario: "",
      direccion: "",
      contacto: "",
      uri: "./assets/icon.png",
      user1: "",
      user1Res: "",
      user2: "",
      user2Res: "",
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
          // console.log(location);
          setPosition({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
        });
        setListo(true);
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
    case "1-4":
      var tempItem = (<Image style={styles.imagenModal} source={require("./../assets/conin.jpg")}/>)
      output[0] = (tempItem);
      break;
  }
  return(<View>{output}</View>)
}

return (
    <View style={styles.container}>
      <View style={styles.hamburguerContainer}>
        <MaterialCommunityIcons onPress={toggleDrawer} name={"microsoft-xbox-controller-menu"} size={50} style={{backgroundColor: '#555', borderRadius: 50,}} color={'#FFF'}/>
      </View>
        {!listo? null : <MapView
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
                user1: "Luis",
                user1Res: "Muy bonito!",
                user2: "Mónica",
                user2Res: "Impresionante!",
                }
            )
            setModalVisible(true);
            setEstancia(false);
            setListo2(false);

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
                user1: "Alfredo",
                user1Res: "Que bonito parque!",
                user2: "Ignacio",
                user2Res: "El lago es hermoso!",
            })
            setModalVisible(true);
            setEstancia(false);
            setListo2(false);
            }}
            pinColor={'#508c7c'}
        >
        </Marker>
        <Marker
            coordinate={{latitude: 20.587901, longitude: -100.387894}}
            onPress={() => {
            setModalInfo({
                titulo: "Alameda de Querétaro",
                descripcion: "La Alameda Hidalgo, es un parque ornamental que se encuentra en el centro de la ciudad. Es el lugar ideal para dar un paseo bajo la sombra de los árboles más frondosos y admirar el monumento a Miguel Hidalgo que da nombre a este lugar, también suele haber exhibiciones de pintura o fotografía en las rejas del exterior. Si buscas un lugar para realizar ejercicio mientras estas en Querétaro, la Alameda Hidalgo es la mejor opción, puedes caminar o correr, cuenta con una pista para patinetas y bancas a lo largo del parque para descansar o sentarse a platicar.",
                horario: "6:00am a 7:00pm",
                direccion: "Av. Constituyentes s/n, Centro Histórico, 76000 Santiago de Querétaro, Qro.",
                contacto: "8007151742",
                uri: "1-3",
                costo: "Gratuito",
                user1: "Adrian",
                user1Res: "Que parque tan frondoso!",
                user2: "René",
                user2Res: "WoooW",
                }
            )
            setModalVisible(true);
            setEstancia(false);
            setListo2(false);
            }}
            pinColor={'#508c7c'}
        >
        </Marker>
        <Marker
            coordinate={{latitude: 20.572863, longitude:  -100.322822}}
            onPress={() => {
            setModalInfo({
                titulo: "Conin",
                descripcion: "Don Fernando de Tapia Conin fue un poderoso cacique de origen otomí que ayudó a los españoles en la lucha contra las tribus insumisas del centro de Nueva España. También fue el fundador del pueblo de indios que después se convertiría en la ciudad de Querétaro.",
                horario: "Siempre abierto",
                direccion: "México 45D, 76246 Santiago de Querétaro, Qro.",
                contacto: "Sin contacto",
                uri: "1-4",
                costo: "Gratuito",
                user1: "Bruno",
                user1Res: "La estatua de Conin es muy grande",
                user2: "Adrian",
                user2Res: "Siempre que veo el Conin, sé que ya llegué a querétaro",
                }
            )
            setModalVisible(true);
            setEstancia(false);
            setListo2(false);
            }}
            pinColor={'#508c7c'}
        >
        </Marker>
        {/* CORREGIDORA */}
        <Marker
            coordinate={{latitude: 20.572863, longitude:  -100.322822}}
            onPress={() => {
            setModalInfo({
                titulo: "Pirámide del Pueblito",
                descripcion: "Está constituida por un Basamento Piramidal, por la Plaza de las Esculturas, la Plaza de la Danza, el Altar de las Obsidianas y el Altar de los Cráneos, Palacio de los Cuatro Altares. El Cerrito funcionó como una “Tollán”, Centro ceremonial y político, en ella se han encontrado vestigios Toltecas, Chichimecas, Purépechas y Otomíes. La cima de la Pirámide fue modificada al realizar una construcción con arquitectura de tipo ecléctico, una casa conocida como el Fortín que data del año 1887.",
                horario: "Jueves a domingo de 9:00 a 14:00",
                direccion: "Hidalgo s/n, Col. El Pueblito, C.P. 76159, Corregidora, Qro.",
                contacto: "(442) 209 60 00, ext. 2017",
                uri: "1-4",
                costo: "$65",
                user1: "Bruno",
                user1Res: "PIRAMIDE1",
                user2: "Adrian",
                user2Res: "PIRAMIDE2",
                }
                // 
                // a.	Costos – $
                // b.	Dirección – Hidalgo s/n, Col. El Pueblito, C.P. 76159, Corregidora, Qro.
                // c.	Horario – 
                // d.	Descripción General - 
                // e.	Contacto - 

            )
            setModalVisible(true);
            setEstancia(false);
            setListo2(false);
            }}
            pinColor={'#508c7c'}
        >
        </Marker>
        </MapView>}
        <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
        setModalVisible(!modalVisible);
        }}>
        {selectImage(modalInfo.uri)}
        <ScrollView style={styles.modalStyle}>
          <View style={styles.modalStyle2}>
            <View style={styles.modalStyle3}>
              <View style={{flexDirection: 'row', height: 100}}>
                <View style={{width: '50%'}}>
                  <Text style={styles.modalText1}>{modalInfo.titulo}</Text>
                  <View style={styles.modalText2View}>
                    <Text style={styles.modalText2a}>Costo: </Text>
                    <Text style={styles.modalText2b}>{modalInfo.costo}</Text>
                  </View>
                </View>
                <View style={{width: "50%", alignItems: 'center', justifyContent: 'center'}}>
                  <Button
                  
                    title={!listo2?"Verificar Estancia":"Estancia Verificada"}
                    color={!listo2? "#123753" : "#ff9900"}
                    onPress={() => {setEstancia(true); setTimeout(() => {

                      setListo2(true);
                    }, 2500);}}
                  />
                  {!estancia ? null : <ActivityIndicator animating={!listo2?true:false} size="small" color="#123753" hidesWhenStopped={true}/>}
                  {!listo2? null: <Image style={{width: 18, height: 18}}source={require("./../assets/tick.png")}/>}
                </View>
              </View>
              <Text style={styles.modalText3}>{modalInfo.descripcion}</Text>
              <View style={styles.dataRow}>
                <Image style={styles.modalImage1} source={require("./../assets/reloj.png")}/>
                <Text style={styles.modalText4}>{modalInfo.horario}</Text>
              </View>
              <View style={styles.dataRow}>
                <Image style={styles.modalImage1} source={require("./../assets/mapa.png")}/>
                <Text style={styles.modalText4}>{modalInfo.direccion}</Text>
              </View>
              <View style={styles.dataRow}>
                <Image style={styles.modalImage1} source={require("./../assets/telefono.png")}/>
                <Text style={styles.modalText4}>{modalInfo.contacto}</Text>
              </View>
              <View style={styles.dataRow}>
                <Image  style={styles.modalImage1} source={require("./../assets/chat.png")}/>
                <Text style={styles.modalText4}>Opiniones</Text>
              </View>
                <View style={styles.dataRow2}>
                  <Image style={styles.modalImage2} source={require("./../assets/user.png")}/>
                  <Text style={styles.modalText5}>@{modalInfo.user1}</Text>
                </View>
                <View style={styles.dataRow2}>
                  <Text style={styles.modalText4}>-{modalInfo.user1Res}</Text>
                </View>
                <View style={styles.dataRow2}>
                  <Image style={styles.modalImage2} source={require("./../assets/user.png")}/>
                  <Text style={styles.modalText5}>@{modalInfo.user2}</Text>
                </View>
                <View style={styles.dataRow2}>
                  <Text style={styles.modalText4}>-{modalInfo.user2Res}</Text>
                </View>
                <View style={styles.dataRow3}>
                  <Text style={styles.modalText6}>Más Opiniones (22)</Text>
                </View>
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
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  hamburguerContainer:{
    position: 'absolute',
    width: 50,
    height: 50,
    marginTop: 25,
    marginLeft: 15,
    // backgroundColor: '#F00',
    zIndex: 1,
  },
  hamburguerContainer2:{
    width: 50,
    height: 50,
  },
  map: {
    width: Dimensions.get("window").width,
    // height: Dimensions.get("window").height*0.93,
    position: 'absolute',
    zIndex: -1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  noModal:{
    height: "20%",
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  modalStyle:{
    width: "100%",
    height: "80%",
    backgroundColor: 'rgba(0,0,0,0.5)',
    // justifyContent: 'center',
  },
  imagenModal: {
    width: "100%",
    height: 250,
    resizeMode: 'stretch',
    backgroundColor: 'white',
  },
  modalStyle2: {
    width: "100%",
    backgroundColor: 'white',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  modalStyle3:{
    // backgroundColor: 'red',
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
    marginVertical: 15,
  },
  dataRow:{
    flexDirection: 'row',
    // backgroundColor: 'red',
    marginVertical: 5, 
    alignItems: 'center',
  },
  dataRow2:{
    flexDirection: 'row',
    // backgroundColor: 'red',
    // marginVertical: 5, 
    alignItems: 'center',
  },
  dataRow3:{
    flexDirection: 'row',
    // backgroundColor: 'red',
    // marginVertical: 5, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalImage1: {
    width: 50,
    height: 50,
    marginRight: 5,
  },
  modalImage2: {
    width: 25,
    height: 25,
    marginRight: 5,
  },
  modalText4:{
    width: "85%",
  },
  modalText5: {
    fontWeight: '500',
    marginLeft: -8
  },
  modalText6: {
    textAlign: 'center',
    fontWeight: '500',
    color: "#4285F4",
  }
});
