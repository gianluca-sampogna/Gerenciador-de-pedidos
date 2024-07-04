import React, { createContext, useState, ReactNode, useEffect } from "react";
import axios from "axios";
import { doc, setDoc, collection, getDoc, DocumentData, DocumentSnapshot, getDocs, QuerySnapshot } from "firebase/firestore"; 

import db from '../../firebaseConnection';

type AuthContextType = {
  auth: boolean;
  setAuth: React.Dispatch<React.SetStateAction<boolean>>;
  addPedido: (name: string, faccao: string) => Promise<void>;
  listaPedidos: () => Promise<DocumentData[]>;
};

interface IAddPedido{
  name: string,
  faccao: string | null,
}

export const DatabaseContext = createContext<AuthContextType>({} as AuthContextType);

export const DatabaseProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [auth, setAuth] = useState<boolean>(false);

  // useEffect(() => {
  //   console.log(db ? 'Banco de dados funcionando' : 'Banco de dados não funcionando');
  // }, []); // Adicionando um array de dependências vazio para que useEffect seja chamado apenas uma vez

  const addPedido = async ({name, faccao}: IAddPedido): Promise<void> => {
    const citiesRef = collection(db, "Pedidos");
    await setDoc(doc(citiesRef, name), {
      Nome: name, 
      faccao: faccao
    });
  }

  const listaPedidos = async (): Promise<DocumentData[]> => {
    const pedidosRef = collection(db, "Pedidos");
    const querySnapshot = await getDocs(pedidosRef);
  
    const pedidos: DocumentData[] = [];
    querySnapshot.forEach((doc) => {
      pedidos.push(doc.data());
    });
    
    return pedidos;
  };

  return (
    <DatabaseContext.Provider value={{ auth, setAuth, addPedido, listaPedidos }}>
      {children}
    </DatabaseContext.Provider>
  );
};

export default DatabaseContext;