import { Button, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function WelcomeScreen({navigation}:any) {

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Welcome</Text>
      <Image
      style={{width:300, height:300}}
      source={{uri: "https://static.vecteezy.com/system/resources/previews/007/909/126/non_2x/bank-concept-idea-of-finance-money-investment-building-with-column-woman-carrying-currency-bank-financing-money-exchange-saving-or-accumulating-money-vector.jpg"}}/>
      <TouchableOpacity
      style={styles.btn}
      onPress={()=>navigation.navigate('Login')}
      >
        <Text style={styles.txt_btn}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
      style={styles.btn}
      onPress={()=>navigation.navigate('Register')}
      >
        <Text style={styles.txt_btn}>Registro</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#8C92E6',
    },

    titulo:{
        fontSize:30,
        color: 'white',
        fontWeight:'bold'
    },

    btn:{
        height:40,
        width:100,
        backgroundColor:'whitesmoke',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
        marginTop:20
    },

    txt_btn:{
        fontSize:15,
        color:'#473194',
        fontWeight:'bold'
    }


})