import { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './styles';
import { TextInput, Tooltip } from 'react-native-paper';
import { Avatar, Button, Card } from 'react-native-paper';
import { CORES } from '@src/Enum/CORES';
import { IAddPedido } from '@src/context/database/types';

interface IEtapaProcesso {
  defineValor: (novoValor: any) => void;
  avancaPagina: () => void;
  voltaPagina: () => void;
  pedido: IAddPedido;
}

const EtapaProcesso: React.FC<IEtapaProcesso> = ({
  defineValor,
  avancaPagina,
  voltaPagina,
  pedido,
}) => {
  const imagSolicitacao = require('../../../../assets/imagem-celular.jpg');
  const imagCorte = require('../../../../assets/tesoura-cortando.png');
  const imgDistribuicao = require('../../../../assets/distribuicao.jpg');
  const imgCostura = require('../../../../assets/costura.jpg');
  return (
    <ScrollView style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <Text
          style={[styles.textoPrincipal, { fontFamily: 'Poppins_300Light' }]}
        >
          Em que etapa do processo está?
        </Text>

        <View style={styles.sectionsCards}>
          <TouchableOpacity
            style={styles.card}
            onPress={() => defineValor({ etapa: 'solicitacao' })}
          >
            <Card
              style={[
                pedido.etapa == 'solicitacao' && {
                  borderWidth: 3,
                  borderColor: CORES.azul,
                },
              ]}
            >
              <Card.Title title="Solicitação" />
              <Card.Cover
                source={imagSolicitacao} // Utilize a variável diretamente como source
              />
            </Card>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.card}
            onPress={() => defineValor({ etapa: 'corte' })}
          >
            <Card
              style={[
                pedido.etapa == 'corte' && {
                  borderWidth: 3,
                  borderColor: CORES.azul,
                },
              ]}
            >
              <Card.Title title="Corte" />
              <Card.Cover source={imagCorte} />
            </Card>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.card}
            onPress={() => defineValor({ etapa: 'distribuicao' })}
          >
            <Card
              style={[
                pedido.etapa == 'distribuicao' && {
                  borderWidth: 3,
                  borderColor: CORES.azul,
                },
              ]}
            >
              <Card.Title title="Distribuição" />
              <Card.Cover source={imgDistribuicao} />
            </Card>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.card}
            onPress={() => defineValor({ etapa: 'costura' })}
          >
            <Card
              style={[
                pedido.etapa == 'costura' && {
                  borderWidth: 3,
                  borderColor: CORES.azul,
                },
              ]}
            >
              <Card.Title title="Costura" />
              <Card.Cover source={imgCostura} />
            </Card>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.buttonVoltar} onPress={voltaPagina}>
          <Text style={{ color: 'black', fontFamily: 'Merriweather_700Bold' }}>
            VOLTAR
          </Text>
        </TouchableOpacity>
        {!!pedido.etapa ? (
          <TouchableOpacity style={styles.buttonAvancar} onPress={avancaPagina}>
            <Text
              style={{ color: 'white', fontFamily: 'Merriweather_700Bold' }}
            >
              AVANÇAR
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={[styles.buttonAvancar, { backgroundColor: '#c6c6c6' }]}
          >
            <Text
              style={{ color: 'white', fontFamily: 'Merriweather_700Bold' }}
            >
              AVANÇAR
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
};

export default EtapaProcesso;
