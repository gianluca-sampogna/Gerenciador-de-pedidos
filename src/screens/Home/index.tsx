import { StatusBar } from 'expo-status-bar';
import { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { doc, setDoc, collection } from "firebase/firestore"; 
import { getFirestore } from "firebase/firestore";
import { styles } from './style/styles'
import { CORES } from '@enum/CORES'

import { DatabaseContext } from '@database/index'


export default function Home() {
  const { addPedido, listaPedidos } = useContext(DatabaseContext)
  const [ pedidos, setPedidos] = useState<any>(null)

  useEffect(() =>{
    recuperaPedidos()
  }, [])

  const handleButton = () => {
    addPedido('Cleiton rasta', 'faccao dos ratos')
  }

  const recuperaPedidos = async() =>{
    const ped = await listaPedidos()
    setPedidos(ped)
  }

  console.log('pedidos', JSON.stringify(pedidos))

  return (
    <View style={styles.container}>
      <Text>App inicial</Text>
      <Button onPress={handleButton} title="ADICIONAR" />
      <StatusBar style="auto" />
    </View>
  );
}


