import { StyleSheet } from 'react-native';
import { CORES } from '@src/Enum/CORES';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 20, // Espaço opcional para dar um espaço extra na parte inferior
  },
  textoPrincipal: {
    fontSize: 40,
    textAlign: 'center',
  },
  textoSecundario: {
    fontSize: 20,
    textAlign: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 5,
  },
  button: {
    fontSize: 16,
    color: 'blue',
  },
  buttonAvancar: {
    backgroundColor: CORES.azul,
    height: 60,
    width: '45%',
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
    marginLeft: 10,
    justifyContent: 'space-evenly',
  },
});

export { styles };
