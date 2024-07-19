import { CORES } from '@src/Enum/CORES';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  headerEtapas: {
    height: 125,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  button: {
    fontSize: 16,
    color: 'blue',
  },
  buttonAvancar: {
    backgroundColor: CORES.azul,
    height: 60,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 6,
    borderWidth: 0.6,
    // margin: 20,
  },
  buttonVoltar: {
    backgroundColor: '#c6c6c6',
    height: 60,
    width: '45%',
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 6,
    borderWidth: 0.6,
    // margin: 20,
  },
  corpo: {
    width: '100%',
  },
  input: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 20,
    // marginLeft: 10,
    justifyContent: 'center',
  },
  textoSecundario: {
    fontSize: 18,
    textAlign: 'center',
  },
  footer: {
    margin: 10,
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
  textoPrincipal: {
    fontSize: 40,
    textAlign: 'center',
  },
  bolinha: {
    height: 15,
    width: 15,
    backgroundColor: CORES.azul,
    borderRadius: 40,
    // borderWidth: 1,
  },
  historico: {
    flex: 1,
    width: '100%',
    height: '100%',
    // marginLeft: 10,
  },
  container: {
    // flex: 1,
  },
  history: {
    flexDirection: 'row',
    width: '100%',
    height: 60,
    alignItems: 'center',
    marginLeft: 15,
    marginTop: -5,
    gap: 5,
    // position: 'absolute'
  },
  linhaVertical: {
    backgroundColor: CORES.azul,
    height: 50,
    width: 6,
    position: 'absolute',
    top: 30,
    left: 4,
  },
});

export { styles };
