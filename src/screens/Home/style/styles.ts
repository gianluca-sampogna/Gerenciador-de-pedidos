import { CORES } from '@src/Enum/CORES';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  touchebleBtnAdd: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  btnAdd: {
    height: 60,
    width: 60,
    backgroundColor: CORES.verde,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 200,
  },
});

export { styles };
