import { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import NomeCliente from './pages/NomeCliente';
import EtapaProcesso from './pages/EtapaProcesso';
import Atribuicoes from './pages/Atribuicoes';

import { IAddPedido } from '@src/context/database/types';

import { DatabaseContext } from '@database/index';

export default function CriaPedido() {
  const { addPedido } = useContext(DatabaseContext);
  const [numPage, setNumPage] = useState(1);
  const [pedido, setPedido] = useState({} as IAddPedido); //Fazer essa página conforme esse Desining https://dribbble.com/shots/24309196-Onboarding-screens-Mobile-UI

  const avancaPagina = () => {
    setNumPage((previsPage) => previsPage + 1);
  };

  const voltaPagina = () => {
    setNumPage((previsPage) => previsPage - 1);
  };

  const defineValor = (novoValor: any) => {
    setPedido((form) => ({ ...form, ...novoValor }));
  };

  const handleSubmit = () => {
    addPedido(pedido);
  };

  console.log('pedido', pedido);

  return (
    <>
      {numPage == 1 && (
        <NomeCliente
          defineValor={defineValor}
          avancaPagina={avancaPagina}
          pedido={pedido}
        />
      )}
      {numPage == 2 && (
        <EtapaProcesso
          defineValor={defineValor}
          avancaPagina={avancaPagina}
          voltaPagina={voltaPagina}
          pedido={pedido}
        />
      )}
      {numPage == 3 && (
        <Atribuicoes
          defineValor={defineValor}
          avancaPagina={avancaPagina}
          voltaPagina={voltaPagina}
          pedido={pedido}
        />
      )}
    </>
  );
}
