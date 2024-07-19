import { StatusBar } from 'expo-status-bar';
import { useContext, useEffect, useState, useCallback } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
} from 'react-native';
import { doc, setDoc, collection } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import { styles } from './style/styles';
import { CORES } from '@enum/CORES';
import { useNavigation } from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import { CardPedido } from '../../Components/CardPedido';

import { DatabaseContext } from '@database/index';
import { IAddPedido } from '@src/context/database/types';
import { Ionicons } from '@expo/vector-icons';

export default function Home() {
  const navigate = useNavigation<NativeStackNavigationProp<any>>();
  const { addPedido, listaPedidos } = useContext(DatabaseContext);
  const [pedidos, setPedidos] = useState<any>(null);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    recuperaPedidos();
  }, []);

  const recuperaPedidos = async () => {
    const ped = await listaPedidos();
    setPedidos(ped);
  };

  const renderizaPedidos = () => {
    return pedidos?.map((pedido: IAddPedido, index: number) => (
      <CardPedido key={index} pedido={pedido} />
    ));
  };

  const onRefresh = useCallback(() => {
    recuperaPedidos();
    setRefreshing(true);
    // Simula uma chamada de rede, você deve substituir por suas ações de atualização
    setTimeout(() => {
      setRefreshing(false);
      renderizaPedidos();
    }, 2000);
  }, []);

  return (
    <>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ flexGrow: 1 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {!pedidos ? (
          <View>
            <Text>Carregando</Text>
          </View>
        ) : (
          <View style={{ height: '100%', alignItems: 'center' }}>
            {renderizaPedidos()}
          </View>
        )}
      </ScrollView>
      <TouchableOpacity
        style={styles.touchebleBtnAdd}
        onPressIn={() => navigate.navigate('CriaPedido')}
      >
        <View style={styles.btnAdd}>
          <Text>
            <Ionicons name="add" size={24} color="black" />
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
}
