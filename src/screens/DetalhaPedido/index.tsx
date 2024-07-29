import React, { useEffect, useState, useContext } from 'react';
import { Text, View, TouchableOpacity, Modal } from 'react-native';
import { styles } from './styles';
import { SegmentedButtons, TextInput } from 'react-native-paper';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import { IAddPedido } from '@src/context/database/types';
import { CORES } from '@src/Enum/CORES';
import { DatabaseContext } from '@database/index';

// Tipos para os parâmetros das rotas
type RouteParams = {
  pedido: IAddPedido;
};

const DetalhaPedido: React.FC = () => {
  const route = useRoute<RouteProp<{ params: RouteParams }, 'params'>>();
  const navigation = useNavigation();
  const { editPedido, getUpdatedPedidos } = useContext(DatabaseContext);

  const pedido = route.params?.pedido;
  const [value, setValue] = useState('');
  const [objEscrito, setObjEscrito] = useState<IAddPedido>({ ...pedido });
  const [pedidoRef, setObjRef] = useState<IAddPedido>({ ...pedido });
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);

  const defineValor = (novoValor: any) => {
    setObjEscrito((form) => ({ ...form, ...novoValor }));
  };

  const handleEditPedido = async (pedido: IAddPedido) => {
    try {
      await editPedido(pedido);
      await getUpdatedPedidos(); // Obtém a lista de pedidos atualizada
    } catch (error) {
      console.error('Erro ao editar pedido:', error);
    }
  };

  const openConfirmModal = () => {
    setIsConfirmVisible(true);
  };

  const closeConfirmModal = () => {
    setIsConfirmVisible(false);
  };

  const getBrazilianDate = () => {
    // Função para obter a data atual no formato brasileiro
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <>
      {pedido.etapa == 'finalizado' ? (
        <View style={styles.container}>
          <Text
            style={[styles.textoPrincipal, { fontFamily: 'Poppins_300Light' }]}
          >
            Histórico
          </Text>
          <View style={styles.historico}>
            <View style={styles.history}>
              <View style={styles.bolinha} />
              <View style={styles.linhaVertical} />
              <Text style={styles.textoSecundario}> {pedido.dt_registro} </Text>
            </View>
            {!!pedido.corte && (
              <View style={styles.history}>
                <View style={styles.bolinha} />
                <View style={styles.linhaVertical} />
                <Text>
                  Corte:{' '}
                  <Text style={{ fontWeight: 'bold' }}> {pedido.corte}</Text>{' '}
                </Text>
              </View>
            )}

            {!!pedido.silk && (
              <View style={styles.history}>
                <View style={styles.bolinha} />
                <View style={styles.linhaVertical} />
                <Text>
                  Silkador:
                  <Text style={{ fontWeight: 'bold' }}> {pedido.silk}</Text>
                </Text>
              </View>
            )}
            {!!pedido.bordado && (
              <View style={styles.history}>
                <View style={styles.bolinha} />
                <View style={styles.linhaVertical} />
                <Text>
                  Bordado:
                  <Text style={{ fontWeight: 'bold' }}> {pedido.bordado}</Text>
                </Text>
              </View>
            )}
            {!!pedido.sublimacao && (
              <View style={styles.history}>
                <View style={styles.bolinha} />
                <View style={styles.linhaVertical} />
                <Text>
                  Sublimador:
                  <Text style={{ fontWeight: 'bold' }}>
                    {pedido.sublimacao}
                  </Text>
                </Text>
              </View>
            )}

            {!!pedido.costura && (
              <View style={styles.history}>
                <View style={styles.bolinha} />
                <View style={styles.linhaVertical} />
                <Text>
                  Costura:
                  <Text style={{ fontWeight: 'bold' }}> {pedido.costura}</Text>
                </Text>
              </View>
            )}
            <View style={styles.history}>
              <View style={styles.bolinha} />
              {/* <View style={styles.linhaVertical} /> */}
              <Text style={styles.textoSecundario}>
                {pedido.dt_finalizado}
              </Text>{' '}
              (verdade )
            </View>
          </View>
        </View>
      ) : (
        <View style={{ justifyContent: 'space-between', height: '100%' }}>
          <View style={{ alignItems: 'center' }}>
            <View style={{ width: '100%', marginBottom: 20 }}>
              <SegmentedButtons
                theme={{
                  colors: {
                    secondaryContainer: CORES.azul,
                    primary: CORES.branco,
                    onSecondary: '#fff',
                  },
                }}
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
                ></Text>
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
            {JSON.stringify(objEscrito) === JSON.stringify(pedidoRef) ? (
              <TouchableOpacity
                onPress={() => {
                  pedido.etapa == 'costura' &&
                    defineValor({ dt_finalizado: getBrazilianDate() });
                  defineValor({
                    etapa:
                      pedido.etapa == 'corte'
                        ? 'distribuicao'
                        : pedido.etapa == 'distribuicao'
                        ? 'costura'
                        : 'finalizado',
                  });

                  openConfirmModal();
                }}
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
                onPress={() => {
                  handleEditPedido(objEscrito);
                  setObjRef({ ...objEscrito });
                }}
              >
                <Text
                  style={{ color: 'white', fontFamily: 'Merriweather_700Bold' }}
                >
                  SALVAR
                </Text>
              </TouchableOpacity>
            )}
          </View>
          <Modal
            animationType="fade"
            transparent={true}
            visible={isConfirmVisible}
            onRequestClose={closeConfirmModal}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalTitle}>Confirmar Avanço</Text>
                <Text>Uma vez avançada a etapa não poderá voltar.</Text>
                <View style={styles.modalButtonContainer}>
                  <TouchableOpacity
                    onPress={closeConfirmModal}
                    style={styles.cancelButton}
                  >
                    <Text style={styles.buttonText}>Cancelar</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.confirmButton}
                    onPress={() => {
                      console.log('payload', objEscrito);
                      handleEditPedido(objEscrito);
                      navigation.goBack();
                    }}
                  >
                    <Text style={styles.buttonText}>Confirmar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      )}
    </>
  );
};

export default DetalhaPedido;
