import { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { IAddPedido } from '@src/context/database/types';
import { SegmentedButtons, ThemeBase } from 'react-native-paper';

interface IAtribuicoes {
  defineValor: (novoValor: any) => void;
  avancaPagina: () => void;
  voltaPagina: () => void;
  pedido: IAddPedido;
}

const Atribuicoes: React.FC<IAtribuicoes> = ({
  defineValor,
  avancaPagina,
  voltaPagina,
  pedido,
}) => {
  const [value, setValue] = useState('');
  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <Text
          style={[styles.textoPrincipal, { fontFamily: 'Poppins_300Light' }]}
        >
          Diga agora onde está cada parte
        </Text>
        <View style={{ width: '100%' }}>
          <SegmentedButtons
            theme={{ colors: { primary: 'green' } }}
            // style={{ borderColor: 'red' }}
            value={pedido.etapa ? pedido.etapa : value}
            onValueChange={setValue}
            buttons={[
              {
                value: 'solicitacao',
                label: 'Solicitação',
                onPress: () => {}, // Função vazia para não fazer nada ao pressionar
                disabled: pedido.etapa !== 'solicitacao',
              },
              {
                value: 'corte',
                label: 'Corte',
                onPress: () => {}, // Função vazia para não fazer nada ao pressionar
                disabled: pedido.etapa !== 'corte',
              },
              {
                value: 'distribuicao',
                label: 'Distribuição',
                onPress: () => {}, // Função vazia para não fazer nada ao pressionar
                disabled: pedido.etapa !== 'distribuicao',
              },
              {
                value: 'costura',
                label: 'Costura',
                onPress: () => {}, // Função vazia para não fazer nada ao pressionar
                disabled: pedido.etapa !== 'costura',
              },
            ]}
          />
        </View>
      </View>

      {!!pedido.name && (
        <View style={styles.footer}>
          <TouchableOpacity style={styles.buttonVoltar} onPress={voltaPagina}>
            <Text
              style={{ color: 'black', fontFamily: 'Merriweather_700Bold' }}
            >
              VOLTAR
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonAvancar} onPress={avancaPagina}>
            <Text
              style={{ color: 'white', fontFamily: 'Merriweather_700Bold' }}
            >
              AVANÇAR
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Atribuicoes;
