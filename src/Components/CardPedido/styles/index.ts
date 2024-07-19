import { StyleSheet } from 'react-native';
import { CORES } from '@src/Enum/CORES';
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f1ed',
    height: 60,
    width: '90%',
    marginVertical: 5,
    borderRadius: 60,
    elevation: 50,
    // borderWidth: 1,
    flexDirection: 'row',
  },
  foto: {
    alignSelf: 'center',
    height: '85%',
    width: '15%',
    borderRadius: 60,
    marginLeft: 5,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 60,
  },
  textoName: {
    fontWeight: '600',
    fontFamily: 'Merriweather_900Black',
  },
  textsNameEtapa: {
    height: '100%',
    justifyContent: 'space-evenly',
  },
  data: {
    flex: 1,
    alignItems: 'flex-end',
    alignContent: 'flex-end',
    alignSelf: 'flex-end',
    marginRight: 20,
    // backgroundColor: 'red',
    // width: '10%',
  },
  touchableOpacity: {
    width: '100%',
    height: 60,
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Cor de fundo semi-transparente
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    minWidth: 300,
    maxWidth: 350,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: CORES.azul, // Cor do título
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  confirmButton: {
    backgroundColor: CORES.azul,
    padding: 10,
    borderRadius: 5,
  },
  cancelButton: {
    backgroundColor: CORES.verde,
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export { styles };
