import React, { createContext, ReactNode } from 'react';
import { IAddPedido } from './types';

import {
  doc,
  setDoc,
  collection,
  getDocs,
  DocumentData,
} from 'firebase/firestore';
import db from '../../firebaseConnection';

type DatabaseContextType = {
  addPedido: (pedido: IAddPedido) => Promise<void>;
  listaPedidos: () => Promise<DocumentData[]>;
};

export const DatabaseContext = createContext<DatabaseContextType>(
  {} as DatabaseContextType,
);

export const DatabaseProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const getBrazilianDate = () => {
    // Cria um novo objeto Date para obter a data atual
    const today = new Date();

    // Obtém o dia, mês e ano da data atual
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Janeiro é 0!
    const year = today.getFullYear();

    // Formata a data no formato brasileiro (dd/mm/yyyy)
    const brazilianDate = `${day}/${month}/${year}`;

    // Retorna a data formatada
    return brazilianDate;
  };

  const addPedido = async (pedido: IAddPedido): Promise<void> => {
    const {
      name,
      dt_registro,
      corte,
      silk,
      bordado,
      sublimacao,
      costura,
      faccao,
      etapa,
    } = pedido;

    const citiesRef = collection(db, 'Pedidos');
    const dataAtual = getBrazilianDate();

    const dataToSend: { [key: string]: string } = {
      Nome: name,
      dt_registro: dt_registro || dataAtual,
    };

    const optionalFields = {
      corte,
      silk,
      bordado,
      sublimacao,
      costura,
      faccao,
      etapa,
    };

    for (const [key, value] of Object.entries(optionalFields)) {
      if (value) {
        dataToSend[key] = value;
      }
    }

    await setDoc(doc(citiesRef, name), dataToSend);
  };

  const listaPedidos = async (): Promise<DocumentData[]> => {
    const pedidosRef = collection(db, 'Pedidos');
    const querySnapshot = await getDocs(pedidosRef);

    const pedidos: DocumentData[] = [];
    querySnapshot.forEach((doc) => {
      pedidos.push(doc.data());
    });

    return pedidos;
  };

  return (
    <DatabaseContext.Provider value={{ addPedido, listaPedidos }}>
      {children}
    </DatabaseContext.Provider>
  );
};

export default DatabaseContext;
