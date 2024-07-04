import React, { createContext, useState, ReactNode } from "react";
import { doc, setDoc, collection, getDocs, DocumentData } from "firebase/firestore"; 
import db from '../../firebaseConnection';

type AuthContextType = {
  auth: boolean;
  setAuth: React.Dispatch<React.SetStateAction<boolean>>;
  addPedido: (name: string, faccao: string | null) => Promise<void>;
  listaPedidos: () => Promise<DocumentData[]>;
};

export const DatabaseContext = createContext<AuthContextType>({} as AuthContextType);

export const DatabaseProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [auth, setAuth] = useState<boolean>(false);

  const addPedido = async (name: string, faccao: string | null): Promise<void> => {
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
