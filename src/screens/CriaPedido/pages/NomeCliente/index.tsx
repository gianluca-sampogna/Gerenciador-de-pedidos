import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import LabelInput from '@src/Components/LabelInput';

interface NomeClienteProps {
  defineValor: (novoValor: any) => void;
  valor: string;
}

const NomeCliente: React.FC<NomeClienteProps> = ({ defineValor, valor }) => {
  return (
    <View>
      <View style={{ alignItems: 'center' }}>
        <Text
          style={[styles.textoPrincipal, { fontFamily: 'Poppins_300Light' }]}
        >
          Qual o nome do cliente que deseja cadastrar?
        </Text>
        <View style={{ width: '90%' }}>
          <LabelInput
            label="Nome"
            handleChangeText={defineValor}
            value={valor}
          />
        </View>
      </View>
    </View>
  );
};

export default NomeCliente;
