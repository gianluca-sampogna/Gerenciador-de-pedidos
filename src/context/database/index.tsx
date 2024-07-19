import React, { createContext, ReactNode } from 'react';
import { IAddPedido } from './types';

import {
  doc,
  setDoc,
  collection,
  getDocs,
  updateDoc,
  deleteDoc, // Importe a função deleteDoc
  DocumentData,
} from 'firebase/firestore';
import db from '../../firebaseConnection';

type DatabaseContextType = {
  addPedido: (pedido: IAddPedido) => Promise<void>;
  editPedido: (pedido: IAddPedido) => Promise<void>;
  deletePedido: (pedido: IAddPedido) => Promise<void>; // Função para deletar um pedido
  listaPedidos: () => Promise<DocumentData[]>;
  getUpdatedPedidos: () => Promise<void>;
};

export const DatabaseContext = createContext<DatabaseContextType>(
  {} as DatabaseContextType,
);

export const DatabaseProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const getBrazilianDate = () => {
    // Função para obter a data atual no formato brasileiro
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const addPedido = async (pedido: IAddPedido): Promise<void> => {
    // Função para adicionar um pedido
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
      name,
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

  const editPedido = async (pedido: IAddPedido): Promise<void> => {
    // Função para editar um pedido
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
      dt_finalizado,
    } = pedido;

    const pedidoRef = doc(db, 'Pedidos', name);
    const dataToUpdate: { [key: string]: string } = {
      name,
      dt_registro: dt_registro || getBrazilianDate(),
    };

    const optionalFields = {
      corte,
      silk,
      bordado,
      sublimacao,
      costura,
      faccao,
      etapa,
      dt_finalizado,
    };

    for (const [key, value] of Object.entries(optionalFields)) {
      if (value) {
        dataToUpdate[key] = value;
      }
    }

    await updateDoc(pedidoRef, dataToUpdate);
  };

  const deletePedido = async (pedido: IAddPedido): Promise<void> => {
    // Função para deletar um pedido
    const { name } = pedido;
    const pedidoRef = doc(db, 'Pedidos', name);
    await deleteDoc(pedidoRef);
  };

  const listaPedidos = async (): Promise<DocumentData[]> => {
    // Função para listar todos os pedidos
    const pedidosRef = collection(db, 'Pedidos');
    const querySnapshot = await getDocs(pedidosRef);
    const pedidos: DocumentData[] = [];
    querySnapshot.forEach((doc) => {
      pedidos.push(doc.data());
    });
    return pedidos;
  };

  const getUpdatedPedidos = async (): Promise<void> => {
    // Função para obter pedidos atualizados
    const updatedPedidos = await listaPedidos();
  };

  return (
    <DatabaseContext.Provider
      value={{
        addPedido,
        editPedido,
        deletePedido,
        listaPedidos,
        getUpdatedPedidos,
      }}
    >
      {children}
    </DatabaseContext.Provider>
  );
};

export default DatabaseContext;
