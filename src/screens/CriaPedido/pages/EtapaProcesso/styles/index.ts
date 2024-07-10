import { StyleSheet } from 'react-native';
import { CORES } from '@src/Enum/CORES';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'space-between',
    paddingBottom: 20, // Espaço opcional para dar um espaço extra na parte inferior
  },
  textoPrincipal: {
    fontSize: 40,
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
    backgroundColor: 'white',
    height: 60,
    width: '45%',
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 6,
    borderWidth: 0.6,
    // margin: 20,
  },
  sectionsCards: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',
    // marginBottom: 45,
  },
  card: {
    marginBottom: 20,
    width: '45%',
    // height: 250,
  },
});

export { styles };
