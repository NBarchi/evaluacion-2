import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../config/Config'
import { ref, set } from 'firebase/database'

export default function RegisterScreen({navigation}:any) {

  const [correo, setcorreo] = useState('')
  const [contrasenia, setcontrasenia] = useState('')
  const [usuario, setusuario] = useState('')
  const [celular, setcelular] = useState('')

  const registro = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, correo, contrasenia);
      const user = userCredential.user;

      // Guardar información Firebase
      set(ref(db, 'usuarios/' + usuario), {
        email: correo,
        phone: celular,
        password: contrasenia,
      });

      navigation.navigate("Login");

    } catch (error) {
      Alert.alert('Error', 'No se pudo registrar el usuario');
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Registro</Text>
      <Image 
      style={{height:100, width:100, margin:30}}
      source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThaXzrIpV0I0xTTYwPvjLPjhCzRCC-x_nTVoUiXGaLhqqzSIeFr9KHTVXQF4gdpcfkF_w&usqp=CAU"}}/>
      <TextInput
      style={styles.input}
      placeholder='Ingrese correo'
      onChangeText={(texto) => setcorreo(texto)}
      keyboardType='email-address'
      />
      <TextInput
      style={styles.input}
      onChangeText={(texto) => setcontrasenia(texto)}
      placeholder='Ingrese contraseña'
      />
      <TextInput
      style={styles.input}
      onChangeText={(texto) => setusuario(texto)}
      placeholder='Ingrese usuario'
      />
      <TextInput
      style={styles.input}
      onChangeText={(texto) => setcelular(texto)}
      placeholder='Número de celular'
      />
      <TouchableOpacity
      style={styles.btn}
      onPress={()=>registro()}
      >
        <Text style={styles.txt_btn}>Registro</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor: 'white',
        paddingTop:20
    },

    titulo:{
        fontSize:30,
        color:'#473194',
        fontWeight:'bold',
        
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