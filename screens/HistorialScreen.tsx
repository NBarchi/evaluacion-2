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
    <View style={styles.container}>
      <Text style={{fontSize:20, marginLeft:30, color:'#473194' }}>Historial</Text>
      <View
         style={{
            borderBottomColor: 'black',
            borderBottomWidth: StyleSheet.hairlineWidth,
            margin:20
         }}
        />

      <View>
        <Text style={{fontSize:30, marginLeft:30, color:'#473194'}}>Mi Historial</Text>
      </View>
      <View style={styles.container_Card}>
      <FlatList
        data={lista}
        renderItem={({item})=>
            <Card data={item}/>
        }
      />
      </View>  
      
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:100
    },

    container_Card:{
        flex:1,
        marginTop:20,
        marginLeft:70
        
    }
})