import React, { Dispatch, SetStateAction } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import LabelInput from '@src/Components/LabelInput';
import { TextInput, Tooltip } from 'react-native-paper';
import { IAddPedido } from '@src/context/database/types';

interface NomeClienteProps {
  defineValor: (novoValor: any) => void;
  avancaPagina: () => void;
  pedido: IAddPedido;
  // valor: string;
}

const NomeCliente: React.FC<NomeClienteProps> = ({
  defineValor,
  avancaPagina,
  pedido,
}) => {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <Text
          style={[styles.textoPrincipal, { fontFamily: 'Poppins_300Light' }]}
        >
          Qual o nome do cliente que deseja cadastrar?
        </Text>
        <View style={{ width: '90%' }}>
          <TextInput
            onChangeText={(text) => defineValor({ name: text })}
            mode="outlined"
            label="Nome"
            placeholder="Digite o nome do cliente"
            value={pedido.name ? pedido.name : ''}
          />
        </View>
      </View>

      <View style={styles.footer}>
        <View style={{ width: '40%' }}></View>
        <TouchableOpacity
          style={[
            styles.buttonAvancar,
            !pedido.name && { backgroundColor: '#c6c6c6' },
          ]}
          onPress={() => {
            if (pedido.name) avancaPagina();
          }}
        >
          <Text style={{ color: 'white', fontFamily: 'Merriweather_700Bold' }}>
            AVANÇAR
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NomeCliente;
