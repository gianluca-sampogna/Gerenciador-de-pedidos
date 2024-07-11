import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { TextInput, Switch, SegmentedButtons } from 'react-native-paper';
import { styles } from './styles';
import { IAddPedido } from '@src/context/database/types';

interface IAtribuicoes {
  defineValor: (novoValor: any) => void;
  avancaPagina: () => void;
  voltaPagina: () => void;
  pedido: IAddPedido;
  handleSubmit: () => void;
}

const Atribuicoes: React.FC<IAtribuicoes> = ({
  defineValor,
  avancaPagina,
  voltaPagina,
  pedido,
  handleSubmit,
}) => {
  const [value, setValue] = useState('');
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [isSwitchOn1, setIsSwitchOn1] = useState(false);
  const [isSwitchOn2, setIsSwitchOn2] = useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const onToggleSwitch1 = () => setIsSwitchOn1(!isSwitchOn1);
  const onToggleSwitch2 = () => setIsSwitchOn2(!isSwitchOn2);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={100}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <View style={{ alignItems: 'center' }}>
            <Text
              style={[
                styles.textoPrincipal,
                { fontFamily: 'Poppins_300Light' },
              ]}
            >
              Diga agora onde está cada parte
            </Text>
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
                    disabled={!isSwitchOn}
                    placeholder="Digite o nome do cortador"
                    value={pedido.corte ? pedido.corte : ''}
                    style={{ width: '80%' }}
                  />
                  <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
                </View>
              </View>
            )}

            {pedido.etapa === 'distribuicao' && (
              <View style={styles.corpo}>
                <Text
                  style={[
                    styles.textoSecundario,
                    { fontFamily: 'Poppins_300Light' },
                  ]}
                >
                  A costura está em algum desses lugares?
                </Text>
                <View style={styles.input}>
                  <TextInput
                    onChangeText={(text) => defineValor({ silk: text })}
                    mode="outlined"
                    label="Silk"
                    disabled={!isSwitchOn}
                    placeholder="Digite o nome do silkador"
                    value={pedido.silk ? pedido.silk : ''}
                    style={{ width: '80%' }}
                  />
                  <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
                </View>
                <View style={styles.input}>
                  <TextInput
                    onChangeText={(text) => defineValor({ bordado: text })}
                    mode="outlined"
                    label="Bordado"
                    disabled={!isSwitchOn1}
                    placeholder="Digite o nome do bordador"
                    value={pedido.bordado ? pedido.bordado : ''}
                    style={{ width: '80%' }}
                  />
                  <Switch value={isSwitchOn1} onValueChange={onToggleSwitch1} />
                </View>
                <View style={styles.input}>
                  <TextInput
                    onChangeText={(text) => defineValor({ sublimacao: text })}
                    mode="outlined"
                    label="Sublimação"
                    disabled={!isSwitchOn2}
                    placeholder="Digite o nome do sublimador"
                    value={pedido.sublimacao ? pedido.sublimacao : ''}
                    style={{ width: '80%' }}
                  />
                  <Switch value={isSwitchOn2} onValueChange={onToggleSwitch2} />
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
                    disabled={!isSwitchOn}
                    placeholder="Digite o nome da costureira"
                    value={pedido.costura ? pedido.costura : ''}
                    style={{ width: '80%' }}
                  />
                  <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
                </View>
              </View>
            )}
          </View>

          <View style={styles.footer}>
            <TouchableOpacity style={styles.buttonVoltar} onPress={voltaPagina}>
              <Text
                style={{ color: 'black', fontFamily: 'Merriweather_700Bold' }}
              >
                VOLTAR
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonAvancar}
              onPress={handleSubmit}
            >
              <Text
                style={{ color: 'white', fontFamily: 'Merriweather_700Bold' }}
              >
                FINALIZAR
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Atribuicoes;
