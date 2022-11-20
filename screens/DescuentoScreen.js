import React from 'react';
import { Dimensions, StyleSheet,View,Image,Text, ScrollView } from 'react-native';

export default function DescuentoScreen(props) {
return(
    <View style={styles.container}>
        <View style={styles.imageView}>
            <Image style={styles.image} source={{uri: props.route.params.imagen}}/>
        </View>
        <View style={styles.tituloView}>
            <Text style={styles.tituloText}>{props.route.params.nombre}</Text>
        </View>
        <ScrollView style={styles.infoView}>
            <Text style={styles.descText}>{props.route.params.descripcion}</Text>
            <View style={styles.dataRow}>
                <Image style={styles.modalImage1} source={require("./../assets/reloj.png")}/>
                <Text style={styles.modalText3}>Horario</Text>
                <Text style={styles.modalText4}>{props.route.params.horario}</Text>
              </View>
              <View style={styles.dataRow}>
                <Image style={styles.modalImage1} source={require("./../assets/mapa.png")}/>
                <Text style={styles.modalText3}>Ubicacion</Text>
                <Text style={styles.modalText4}>{props.route.params.ubicacion}</Text>
              </View>
              <View style={styles.dataRow}>
                <Image style={styles.modalImage1} source={require("./../assets/telefono.png")}/>
                <Text style={styles.modalText3}>Telefono</Text>
                <Text style={styles.modalText4}>{props.route.params.telefono}</Text>
              </View>
        </ScrollView>
        <View style={styles.bottomView}>
            <Text>Muestre el siguiente cupón</Text>
            <View style={styles.cupon}>
                <Text style={styles.cuponText}>QROTOUR-CUPON</Text>
            </View>
        </View>
    </View>
);
}

const styles = StyleSheet.create({

    container: {
        width: "100%",
        height: "100%",
        backgroundColor: '#FFF',
        alignItems: 'center',
    },
    imageView: {
        width: "100%",
        height: 230,
        backgroundColor:'white',
    },
    image: {
        width: "100%",
        height: "100%"
    },
    tituloView: {
        width: '100%',
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tituloText:{
        fontSize: 20,
        fontWeight: '700',
        color: '#123753',
    },
    infoView:{
        width: "90%",
        marginBottom:  80,

    },
    descText:{
        fontSize: 15,
        color: '#123753',
    },
    dataRow: {
        flexDirection :'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalImage1: {
        width: 50,
        height: 50,
        marginRight: 5,
    },
    modalText3:{
        width: "25%",
    },
    modalText4:{
        width: "60%",
    },
    cupon:{
        justifyContent: 'center',
        paddingHorizontal: 10,
        height: 50,
        borderWidth: 1,        
    },
    cuponText:{
        fontSize: 20,
    },
    bottomView: {
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
    }
});