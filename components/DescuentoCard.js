import React from 'react';
import {StyleSheet,View,Image,Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DescuentoCard = (props) =>{
    console.log(props);
    var navigation = useNavigation();
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
                        <Text style={styles.visitadoText} numberOfLines={2}>Ubiacion: {propsInput.ubicacion}</Text>
                    </View>
                    <View style={styles.iconosRow}>
                        <Text onPress={() => {navigation.navigate("Descuento", propsInput)}} style={styles.textContain}>Ver Cupón</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default DescuentoCard;

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
        width: "60%",
        marginHorizontal: "20%",
        height: 40,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems: 'center',
        backgroundColor:'#FFF',
        borderRadius: 10,
        overflow: 'hidden',
    },
    textContain:{
        width: "100%",
        textAlign: 'center',
        textAlignVertical: 'center',
        // backgroundColor: 'red',
        height: '100%',
    }
})