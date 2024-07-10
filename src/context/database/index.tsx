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
    await setDoc(doc(citiesRef, name), {
      Nome: name,
      dt_registro,
      corte,
      silk,
      bordado,
      sublimacao,
      costura,
      faccao,
      etapa,
    });
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
