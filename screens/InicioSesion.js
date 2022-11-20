import React from "react";
import {
  Dimensions,
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function InicioSesion() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/loginImage.png")}
        style={styles.imageLogin}
      />
      <Text style={styles.title}>Iniciar Sesión</Text>
      <View>
        <Text style={styles.labelInput}>Correo electronico</Text>
        <TextInput style={styles.input} placeholder={"micorreo@gmail.com"} />
      </View>
      <View style={styles.containerPass}>
        <Text style={styles.labelInput}>Contraseña</Text>
        <TextInput style={styles.input} placeholder={"************"} />
        <Text style={styles.forgetPassword}>Olvidaste la contraseña</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Mapa")}
      >
        <Text style={styles.txtButton}>Iniciar Sesión</Text>
      </TouchableOpacity>
      <Text style={styles.paragraph}>o inicie sesión con...</Text>
      <View style={styles.containerSocialMedia}>
        <View style={styles.containerSocial}>
          <Image source={require("../assets/google-logo.png")} />
        </View>
        <View style={styles.containerSocial}>
          <Image source={require("../assets/facebook.png")} />
        </View>
        <View style={styles.containerSocial}>
          <Image source={require("../assets/twitter.png")} />
        </View>
      </View>
      <Text style={styles.txtRegister} onPress={() => {navigation.navigate("Registrarse")}}>¿Eres nuevo? Registrate</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: "#fff",
  },
  imageLogin: {
    width: Dimensions.get("window").width * 0.75,
    marginBottom: 10,
  },
  title: {
    color: "#123753",
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "left",
    marginBottom: 18,
  },
  containerPass: {
    marginTop: 10,
  },
  labelInput: {
    position: "absolute",
    fontSize: 12,
    marginLeft: 26,
    backgroundColor: "#ffffff",
    color: "#123753",
    top: 3,
    zIndex: 1,
  },
  input: {
    position: "relative",
    height: 48,
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    color: "#123753",
    backgroundColor: "#ffffff",
    width: Dimensions.get("window").width * 0.88,
  },
  forgetPassword: {
    fontSize: 12,
    color: "#123753",
    textAlign: "right",
    marginRight: Dimensions.get("window").width * 0.04,
    textDecorationLine: "underline",
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("window").width * 0.88,
    height: 48,
    marginTop: 24,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#123753",
  },
  txtButton: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 16,
  },
  paragraph: {
    color: "#123753",
    fontSize: 16,
    marginTop: 25,
  },
  containerSocialMedia: {
    width: Dimensions.get("window").width * 0.88,
    height: 48,
    marginTop: 25,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerSocial: {
    width: 106,
    height: 52,
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  txtRegister: {
    marginTop: 25,
    fontSize: 16,
    color: "#123753",
    textDecorationLine: "underline",
  },
});
