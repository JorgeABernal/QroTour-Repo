import { View, StyleSheet, Text, ScrollView} from "react-native";
import DescuentoCard from '../components/DescuentoCard';
import { DATADESCUENTOS } from '../dummy-data/dataDescuentos';

export default function ListadoDesc() {
    var props={
        "idLugarTuristico":"Los Arcos de Querétaro",
        "Establecimientos":{
            "1": "Tacos",
            "2": "Tortas",
        }
    }
    return(
        <View style={styles.container}>
            <View style={styles.viewUp}>
                <Text style={styles.text1}>Descuentos de:</Text>
                <Text style={styles.text2}>{props.idLugarTuristico}</Text>
            </View>
            <ScrollView style={styles.listContainer}>
                <DescuentoCard props={DATADESCUENTOS.a}/>
                <DescuentoCard props={DATADESCUENTOS.b}/>
                <DescuentoCard props={DATADESCUENTOS.c}/>
                <DescuentoCard props={DATADESCUENTOS.d}/>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    viewUp: {
      alignItems: 'center',
      justifyContent: 'center',
      width: "100%",
      height: 180,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      backgroundColor: "#123753",
    },
    text1: {
        color: 'white',
        fontSize: 20,
    },
    text2: {
        color: 'white',
        fontSize: 20,
        fontWeight: '500',
    },
    listContainer:{
        height: 500,
        width: '90%',
    },
});