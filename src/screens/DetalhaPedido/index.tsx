import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { SegmentedButtons, TextInput } from 'react-native-paper';
import { useRoute, RouteProp } from '@react-navigation/native';
import { IAddPedido } from '@src/context/database/types';
import { CORES } from '@src/Enum/CORES';

// Tipos para os parâmetros das rotas
type RouteParams = {
  pedido: IAddPedido;
};

const DetalhaPedido: React.FC = () => {
  const route = useRoute<RouteProp<{ params: RouteParams }, 'params'>>();
  const pedido = route.params?.pedido;
  const [value, setValue] = useState('');
  const [objInicial, setObjInicial] = useState<IAddPedido>(pedido);
  const [objEscrito, setObjEscrito] = useState<IAddPedido>(pedido);

  const defineValor = (novoValor: any) => {
    setObjEscrito((form) => ({ ...form, ...novoValor }));
  };

  const salvaObjPedido = async () => {
    console.log('objEscrito', objEscrito);
    console.log('objInicial', objInicial);
  };

  console.log(pedido);

  return (
    <>
      <View style={{ justifyContent: 'space-between', height: '100%' }}>
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
              <View style={styles.input}>
                <TextInput
                  onChangeText={(text) => defineValor({ corte: text })}
                  mode="outlined"
                  label="Nome do cortador"
                  placeholder="Digite o nome do cortador"
                  value={objEscrito.corte ? objEscrito.corte : ''}
                  style={{ width: '90%' }}
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
                  placeholder="Digite o nome do silkador"
                  value={objEscrito.silk ? objEscrito.silk : ''}
                  style={{ width: '90%' }}
                />
              </View>
              <View style={styles.input}>
                <TextInput
                  onChangeText={(text) => defineValor({ bordado: text })}
                  mode="outlined"
                  label="Bordado"
                  placeholder="Digite o nome do bordador"
                  value={objEscrito.bordado ? objEscrito.bordado : ''}
                  style={{ width: '90%' }}
                />
              </View>
              <View style={styles.input}>
                <TextInput
                  onChangeText={(text) => defineValor({ sublimacao: text })}
                  mode="outlined"
                  label="Sublimação"
                  placeholder="Digite o nome do sublimador"
                  value={objEscrito.sublimacao ? objEscrito.sublimacao : ''}
                  style={{ width: '90%' }}
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
                  placeholder="Digite o nome da costureira"
                  value={objEscrito.costura ? objEscrito.costura : ''}
                  style={{ width: '90%' }}
                />
              </View>
            </View>
          )}
        </View>
        <View style={styles.footer}>
          {objEscrito == objInicial ? (
            <TouchableOpacity
              onPress={salvaObjPedido}
              style={[styles.buttonAvancar, { backgroundColor: CORES.azul }]}
            >
              <Text
                style={{ color: 'white', fontFamily: 'Merriweather_700Bold' }}
              >
                AVANÇAR ETAPA
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={[styles.buttonAvancar, { backgroundColor: CORES.azul }]}
              onPress={salvaObjPedido}
            >
              <Text
                style={{ color: 'white', fontFamily: 'Merriweather_700Bold' }}
              >
                SALVAR
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </>
  );
};

export default DetalhaPedido;
