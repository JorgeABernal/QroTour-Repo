import React from 'react';
import { Dimensions, StyleSheet,View,Image,Text,StatusBar } from 'react-native';
import {Ionicons,AntDesign, MaterialCommunityIcons, MaterialIcons} from 'react-native-vector-icons';


const CertificadoCard = (props) =>{
    var propsInput = props.props;
    return(
        <View style={styles.container}>
            <View style={styles.titleText}>
                <Text style={styles.titleTextStyle}>{propsInput.nombre}</Text>
            </View>
            <View style={styles.directionRow}>
                <View style={styles.imageView}>
                    <Image style={styles.imagen} source={{uri: propsInput.imagen}}/>
                </View>
                <View style={styles.infoView}>
                    <View style={styles.visitadoView}>
                        <Text style={styles.visitadoText} numberOfLines={2}>Visitado el: {propsInput.visitado}</Text>
                    </View>
                    <View style={styles.iconosRow}>
                        <AntDesign name={'sharealt'} color={'#123753'} size={30}/>
                        <MaterialCommunityIcons name={'brightness-percent'} color={'#123753'} size={30}/>
                        <MaterialIcons name={'save-alt'} color={'#123753'} size={30}/>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default CertificadoCard;

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#B1CDD1',
        width:'auto',
        height: 'auto',
        marginVertical:7.5,
        borderRadius:15
    },
    titleText:{
        width: "100%",
        height: 40,
        alignItems:'center',
        justifyContent: 'center',
    },
    titleTextStyle:{
        color:'#123753',
        fontSize:16,
        fontWeight:'bold',
    },
    directionRow:{
        flexDirection: 'row',
    },
    imageView:{
        height: 140,
        width: "35%",
        justifyContent:'center',
        alignItems:'center'
    },
    infoView:{
        height: 140,
        width: "65%",
        flexDirection: 'column',
        justifyContent:'space-evenly',
    },
    imagen:{
        width: 100,
        height: 100,
        borderRadius:15,
        overflow:'hidden',
    },
    visitadoView:{
        height: "auto",
        width: "100%",
    },
    visitadoText: {
        fontSize: 12,
    },
    iconosRow:{
        width: "100%",
        flexDirection:'row',
        justifyContent:'space-around',
    }
})