import { StatusBar } from 'expo-status-bar';
import { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { doc, setDoc, collection } from "firebase/firestore"; 
import { getFirestore } from "firebase/firestore";
import { styles } from './style/styles'

import { DatabaseContext } from '@database/index'

import db from '../../firebaseConnection';

export default function Home() {
  const { addPedido, listaPedidos } = useContext(DatabaseContext)

  const [ pedidos, setPedidos] = useState<any>(null)

  const handleButton = () => {
    addPedido('Cleiton rasta', 'faccao dos ratos')
  }

  const handleSegundoBotao = async() =>{
    const ped = await listaPedidos()
    setPedidos(ped)
  }

  console.log('pedidos', JSON.stringify(pedidos))

  return (
    <View style={styles.container}>
      <Text>App inicial</Text>
      <Button onPress={handleButton} title="ADICIONAR" />
      <Button onPress={handleSegundoBotao} title="RECUPERAR" />
      <StatusBar style="auto" />
    </View>
  );
}


