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
    fontSize: 20,
    textAlign: 'center',
  },
  footer: {
    margin: 10,
  },
});

export { styles };
