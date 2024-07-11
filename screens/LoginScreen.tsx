import { Alert, Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/Config';

export default function LoginScreen({navigation}:any) {

  const [correo, setcorreo] = useState('')
  const [contrasenia, setcontrasenia] = useState('')

  function login(){
    signInWithEmailAndPassword(auth, correo, contrasenia)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        navigation.navigate("BottomTabs")
        

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        let titulo="";
        let mensaje="";

        switch(errorCode){
          case 'auth/invalid-email':
            titulo='Correo Invalido'
            mensaje = "Email Incorrecto"
            break
          case 'auth/user-not-found':
            titulo = "Error de usuario"
            mensaje = "El usuario no se encuentra registrado"
            break
          case 'auth/wrong-password':
            titulo = "Error de contraseña"
            mensaje = "La contraseña es incorrecta"
            break
          case 'auth/invalid-credential':
            titulo = "Error de credenciales"
            mensaje = "Revisar credenciales"
            break
        }

        console.log(errorCode);
        console.log(errorMessage);
        Alert.alert(titulo, mensaje)
      
      });
  }


  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Login</Text>
      <Image 
      style={{height:200, width:200}}
      source={{uri: "https://static.vecteezy.com/system/resources/previews/021/919/677/non_2x/login-icon-in-trendy-flat-style-isolated-on-white-background-approach-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-flat-style-for-graphic-design-vector.jpg"}}/>
      <TextInput
      style={styles.input}
      onChangeText={(texto)=>(setcorreo(texto))}
      placeholder='Ingrese correo'
      keyboardType='email-address'
      />
      <TextInput
      style={styles.input}
      onChangeText={(texto)=>(setcontrasenia(texto))}
      placeholder='Ingrese contrasenia'
      secureTextEntry={true}
      />
      <TouchableOpacity
      style={styles.btn}
      onPress={()=>login()}
      >
        <Text style={styles.txt_btn}>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor: 'white',
        paddingTop:50,
    },

    titulo:{
        fontSize:30,
        color:'#473194',
        fontWeight:'bold'
    },

    input:{
        height:50,
        width:'80%',
        paddingLeft:20,
        marginTop:10,
        borderWidth:2,
        borderColor:'#473194',
        borderRadius:5,
        fontSize:15
    },

    btn:{
        height:40,
        width:100,
        backgroundColor:'#473194',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
        marginTop:50
    },

    txt_btn:{
        fontSize:15,
        color:'white',
        fontWeight:'bold'
    }


})
