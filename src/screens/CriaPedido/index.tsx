import { StatusBar } from 'expo-status-bar';
import { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { doc, setDoc, collection } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import { styles } from './style/styles';
import { CORES } from '@enum/CORES';
import { IAddPedido } from '@src/context/database/types';

import { DatabaseContext } from '@database/index';

export default function CriaPedido() {
  const { addPedido } = useContext(DatabaseContext);
  const [pedido, setPedido] = useState({} as IAddPedido); //Fazer essa página conforme esse Desining https://dribbble.com/shots/24309196-Onboarding-screens-Mobile-UI

  const defineValor = (novoValor: any) => {
    setPedido((form) => ({ ...form, ...novoValor }));
  };

  const handleSubmit = () => {
    addPedido(pedido);
  };

  return (
    <View style={styles.container}>
      <Text>App inicial</Text>
      <Button onPress={handleSubmit} title="ADICIONAR" />
      <StatusBar style="auto" />
    </View>
  );
}
