import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { db } from '../config/Config';
import { onValue, ref, getDatabase } from 'firebase/database';
import Card from '../components/Card';

export default function HistorialScreen() {

  const [lista, setlista] = useState('')  

  function leerOperacion (){
    const starCountRef = ref(db, 'operacion/');
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            console.log(data)

            //Transformar
            const listaTemporal : any = Object.keys(data).map((id)=>( {id, ...data[id] } ) )
            //console.log(listaTemporal);
            
            setlista(listaTemporal)
        });
  }

  useEffect(() => {
    leerOperacion()
  }, [])
  
  return (
    <View>
      <Text>Historial</Text>
      <View>
        <Text>Mi Historial</Text>
      </View>
      <FlatList
        data={lista}
        renderItem={({item})=>
            <Card data={item}/>
        }
      />

      
    </View>
  )
}

const styles = StyleSheet.create({})