import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Card(props:any) {
    console.log(props);
    
  return (
    <View>
        <Text>Orden: {props.data.id}</Text>
        <Text>${props.data.monto}</Text>
        <Text>{props.data.comentario}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    
})