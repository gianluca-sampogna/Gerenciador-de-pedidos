import { useEffect, useState } from 'react';
import { Text, View, Image } from 'react-native';
import { styles } from './styles';
import { IAddPedido } from '@src/context/database/types';

interface ICardPedido {
  pedido: IAddPedido;
}
const CardPedido: React.FC<ICardPedido> = ({ pedido }) => {
  console.log('pedido', pedido);
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
      <View style={styles.container}>
        <View style={styles.foto}>
          <Image
            source={escolheImagem()}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <View>
          <View>
            <Text> {pedido.name} </Text>
            <Text> {pedido.etapa} </Text>
          </View>
        </View>
        <View>
          <Text> {pedido.dt_registro} </Text>
        </View>
      </View>
    </>
  );
};

export { CardPedido };
