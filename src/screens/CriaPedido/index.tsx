import { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import NomeCliente from './pages/NomeCliente';

import { IAddPedido } from '@src/context/database/types';

import { DatabaseContext } from '@database/index';

export default function CriaPedido() {
  const { addPedido } = useContext(DatabaseContext);
  const [numPage, setNumPage] = useState(1);
  const [pedido, setPedido] = useState({} as IAddPedido); //Fazer essa página conforme esse Desining https://dribbble.com/shots/24309196-Onboarding-screens-Mobile-UI

  const defineValor = (novoValor: any) => {
    setPedido((form) => ({ ...form, ...novoValor }));
  };

  const handleSubmit = () => {
    addPedido(pedido);
  };

  return <>{numPage == 1 && <NomeCliente />}</>;
}
