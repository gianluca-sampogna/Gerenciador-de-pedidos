import { useEffect, useState, useContext } from 'react';
import {
  Text,
  View,
  Image,
  Touchable,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { styles } from './styles';
import { IAddPedido } from '@src/context/database/types';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '@src/routes/types';
import { AntDesign } from '@expo/vector-icons';
import { CORES } from '@src/Enum/CORES';
import { DatabaseContext } from '@database/index';

interface ICardPedido {
  pedido: IAddPedido;
}
const CardPedido: React.FC<ICardPedido> = ({ pedido }) => {
  const { deletePedido } = useContext(DatabaseContext);
  const navigate = useNavigation<NavigationProp<RootStackParamList>>();

  const [isConfirmVisible, setIsConfirmVisible] = useState(false);

  const imagCorte = require('../../assets/tesoura-cortando.png');
  const imgDistribuicao = require('../../assets/distribuicao.jpg');
  const imgCostura = require('../../assets/costura.jpg');

  const escolheImagem = () => {
    if (pedido.etapa == 'corte') return imagCorte;
    if (pedido.etapa == 'distribuicao') return imgDistribuicao;
    if (pedido.etapa == 'costura') return imgCostura;
  };

  const openConfirmModal = () => {
    setIsConfirmVisible(true);
  };

  const closeConfirmModal = () => {
    setIsConfirmVisible(false);
  };

  return (
    <>
      <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={() => navigate.navigate('DetalhaPedido', { pedido })}
        onLongPress={openConfirmModal}
      >
        <View style={styles.container}>
          <View style={styles.foto}>
            {pedido.etapa == 'finalizado' ? (
              <View style={styles.image}>
                <AntDesign name="checkcircleo" size={50} color={'#42f554'} />
              </View>
            ) : (
              <Image
                source={escolheImagem()}
                style={styles.image}
                resizeMode="contain"
              />
            )}
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

      <Modal
        animationType="fade"
        transparent={true}
        visible={isConfirmVisible}
        onRequestClose={closeConfirmModal}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Deletar item</Text>
            <Text>Uma vez deletado não pode ser mais recuperado.</Text>
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
                  deletePedido(pedido);
                  setIsConfirmVisible(false);
                  // handleEditPedido(objEscrito);
                }}
              >
                <Text style={styles.buttonText}>Confirmar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export { CardPedido };
