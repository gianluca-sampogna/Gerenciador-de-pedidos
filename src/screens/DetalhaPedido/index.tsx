import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { SegmentedButtons, TextInput, Checkbox } from 'react-native-paper';
import { useRoute, RouteProp } from '@react-navigation/native';
import { IAddPedido } from '@src/context/database/types';

// Tipos para os parâmetros das rotas
type RouteParams = {
  pedido: IAddPedido;
};

const DetalhaPedido: React.FC = () => {
  const route = useRoute<RouteProp<{ params: RouteParams }, 'params'>>();
  const pedido = route.params?.pedido;
  const [value, setValue] = useState('');
  const [checked, setChecked] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);

  console.log(pedido);

  return (
    <>
      <View style={{ alignItems: 'center' }}>
        <View style={{ width: '100%', marginBottom: 20 }}>
          <SegmentedButtons
            theme={{ colors: { primary: 'green' } }}
            value={pedido.etapa ? pedido.etapa : value}
            onValueChange={setValue}
            buttons={[
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

        {pedido.etapa === 'corte' && (
          <View style={styles.corpo}>
            <Text
              style={[
                styles.textoSecundario,
                { fontFamily: 'Poppins_300Light' },
              ]}
            >
              A costura está sendo cortado?
            </Text>
            <View style={styles.input}>
              <TextInput
                onChangeText={(text) => defineValor({ corte: text })}
                mode="outlined"
                label="Nome do cortador"
                disabled={!checked}
                placeholder="Digite o nome do cortador"
                value={pedido.corte ? pedido.corte : ''}
                style={{ width: '80%' }}
              />
              <Checkbox.Item
                label="Cortador"
                status={!checked ? 'checked' : 'unchecked'}
                onPress={() => setChecked(!checked)}
              />
            </View>
          </View>
        )}

        {pedido.etapa === 'distribuicao' && (
          <View style={styles.corpo}>
            <View style={styles.input}>
              <TextInput
                onChangeText={(text) => defineValor({ silk: text })}
                mode="outlined"
                label="Silk"
                disabled={!checked}
                placeholder="Digite o nome do silkador"
                value={pedido.silk ? pedido.silk : ''}
                style={{ width: '80%' }}
              />
              <Checkbox.Item
                label=""
                status={!checked ? 'checked' : 'unchecked'}
                onPress={() => setChecked(!checked)}
              />
            </View>
            <View style={styles.input}>
              <TextInput
                onChangeText={(text) => defineValor({ bordado: text })}
                mode="outlined"
                label="Bordado"
                disabled={!checked1}
                placeholder="Digite o nome do bordador"
                value={pedido.bordado ? pedido.bordado : ''}
                style={{ width: '80%' }}
              />
              <Checkbox.Item
                label=""
                status={!checked1 ? 'checked' : 'unchecked'}
                onPress={() => setChecked1(!checked1)}
              />
            </View>
            <View style={styles.input}>
              <TextInput
                onChangeText={(text) => defineValor({ sublimacao: text })}
                mode="outlined"
                label="Sublimação"
                disabled={!checked2}
                placeholder="Digite o nome do sublimador"
                value={pedido.sublimacao ? pedido.sublimacao : ''}
                style={{ width: '80%' }}
              />
              <Checkbox.Item
                label=""
                status={!checked2 ? 'checked' : 'unchecked'}
                onPress={() => setChecked2(!checked2)}
              />
            </View>
          </View>
        )}

        {pedido.etapa === 'costura' && (
          <View style={styles.corpo}>
            <Text
              style={[
                styles.textoSecundario,
                { fontFamily: 'Poppins_300Light' },
              ]}
            >
              A costura está com alguma costureira?
            </Text>
            <View style={styles.input}>
              <TextInput
                onChangeText={(text) => defineValor({ costura: text })}
                mode="outlined"
                label="Nome da costureira"
                disabled={!checked}
                placeholder="Digite o nome da costureira"
                value={pedido.costura ? pedido.costura : ''}
                style={{ width: '80%' }}
              />
              <Checkbox.Item
                label="Costureira"
                status={!checked ? 'checked' : 'unchecked'}
                onPress={() => setChecked(!checked)}
              />
            </View>
          </View>
        )}
      </View>
    </>
  );
};

export default DetalhaPedido;
