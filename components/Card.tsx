import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Card(props:any) {
    console.log(props);
    
  return (
    <View style={{marginTop:20}}>
        <Text>Orden: {props.data.id}</Text>
        <Text style={{fontWeight:'bold'}}>$ {props.data.monto}</Text>
        <Text>{props.data.comentario}</Text>
        <View
         style={{
            borderBottomColor: 'black',
            borderBottomWidth: StyleSheet.hairlineWidth,
            marginTop: 10,
            marginRight:250
         }}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        marginTop:30
    }
})