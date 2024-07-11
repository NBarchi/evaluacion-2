import { Alert, Image, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { ref, set } from 'firebase/database'
import { db } from '../config/Config'

export default function OperacionesScreen() {

  const [id, setid] = useState('')  
  const [monto, setmonto] = useState('') 
  const [tipo, settipo] = useState('') 
  const [comentario, setcomentario] = useState('') 

  function guardar(){
    set(ref(db, 'operacion/' + id), {
        monto: monto,
        tipo: tipo,
        comentario: comentario
      });
    
    Alert.alert('Mensaje', 'Operacion Exitosa')  
    setid('')
    setmonto('')
    settipo('')
    setcomentario('')
    Keyboard.dismiss();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Operaciones</Text>
      <Image 
      style={{height:100, width:100}}
      source={{uri: "https://static.vecteezy.com/system/resources/previews/013/661/251/non_2x/insert-deposit-financial-transaction-line-icon-withdraw-money-service-in-automated-machine-teller-pictogram-withdraw-cash-in-bank-atm-outline-icon-editable-stroke-isolated-illustration-vector.jpg"}}/>
      <TextInput
      style={styles.input}
      onChangeText={(texto)=>setid(texto)}
      placeholder='id operación'
      />  
      <TextInput
      style={styles.input}
      onChangeText={(texto)=>setmonto(texto)}
      placeholder='Monto'
      />  
      <TextInput
      style={styles.input}
      onChangeText={(texto)=>settipo(texto)}
      placeholder='Tipo operación'
      />  
      <TextInput
      style={styles.input}
      onChangeText={(texto)=>setcomentario(texto)}
      placeholder='Comentario'
      />
      <TouchableOpacity
      style={styles.btn}
      onPress={()=>guardar()}
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
        paddingTop:100
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