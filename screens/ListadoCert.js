import React from 'react';
import { StyleSheet,View,Text,StatusBar,ScrollView } from 'react-native';
import { Ionicons, AntDesign } from 'react-native-vector-icons';
import CertificadoCard from '../components/CertificadoCard';
import { CERTIFICADOS } from '../dummy-data/data';
import { useNavigation } from '@react-navigation/native';

const ListadoCert = (props) =>{
    const navigation = useNavigation();
    return (
        <View>
            <StatusBar 
					backgroundColor={"#123753"}
					barStyle={"light-content"}
					hidden={false}
			/>
            <View style={styles.top}>
                <View style={styles.primer}>
                    <AntDesign name={'arrowleft'} onPress={() => {navigation.navigate("Mapa")}} color={'white'} size={40}/>
                    <Ionicons name={'person-circle-outline'} color={'white'} size={90}/>
                    <AntDesign name={'arrowleft'} color={'#123753'} size={40}/>
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.title}>Jorge Alejandro Bernal Colín</Text>
                    <Text style={styles.mail}>jorgealejandrobernal@gmail.com</Text>
                </View>
            </View>
            <View style={styles.body}>
                <Text style={styles.listado}>Listado de certificados</Text>
                <View style={styles.listContainer}>
                    <ScrollView style={styles.scrollStyle}>
                        <CertificadoCard props={CERTIFICADOS.a}/>
                        <CertificadoCard props={CERTIFICADOS.b}/>
                        <CertificadoCard props={CERTIFICADOS.c}/>
                    </ScrollView>
                </View>
            </View>
        </View>
    );
}

export default ListadoCert
  
const styles = StyleSheet.create({
    top:{
        backgroundColor:'#123753',
        height:230,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20
    },
    title:{
        color:'white',
        fontWeight:'bold',
        textAlign: 'center',
        fontSize:20
    },
    mail:{
        color:'white',
        fontSize:20,
        fontWeight: '100',
    },
    primer:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:10,
        marginTop:10
    },
    bottom:{
        alignItems:'center',
        marginTop:10
    },
    listado:{
        marginVertical:20,
        fontSize:20,
        fontWeight:'bold',
    },
    body:{
        alignItems:'center',
        height:'auto'
    },
    listContainer:{
        height: 500,
        // backgroundColor: 'pink',
        width: '90%',
        // borderRadius: 18,
        // overflow: 'hidden',
        // borderWidth: 5,
        // borderColor: "#000",
    },
    scrollStyle: {
        // backgroundColor: 'red',
    }
})

  