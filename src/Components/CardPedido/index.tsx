import { useEffect, useState } from 'react';
import { Text, View, Image, Touchable, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { IAddPedido } from '@src/context/database/types';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '@src/routes/types';

interface ICardPedido {
  pedido: IAddPedido;
}
const CardPedido: React.FC<ICardPedido> = ({ pedido }) => {
  const navigate = useNavigation<NavigationProp<RootStackParamList>>();

  const imagCorte = require('../../assets/tesoura-cortando.png');
  const imgDistribuicao = require('../../assets/distribuicao.jpg');
  const imgCostura = require('../../assets/costura.jpg');

  const escolheImagem = () => {
    if (pedido.etapa == 'corte') return imagCorte;
    if (pedido.etapa == 'distribuicao') return imgDistribuicao;
    if (pedido.etapa == 'costura') return imgCostura;
  };

  return (
    <>
      <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={() => navigate.navigate('DetalhaPedido', { pedido })}
      >
        <View style={styles.container}>
          <View style={styles.foto}>
            <Image
              source={escolheImagem()}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
          <View>
            <View style={styles.textsNameEtapa}>
              <Text style={styles.textoName}> {pedido.name} </Text>
              <Text> {pedido.etapa} </Text>
            </View>
          </View>
          <View style={styles.data}>
            <Text style={styles.textoName}> {pedido.dt_registro} </Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

export { CardPedido };
