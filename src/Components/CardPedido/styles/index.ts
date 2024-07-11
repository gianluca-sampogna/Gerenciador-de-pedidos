import { StyleSheet } from 'react-native';

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
});

export { styles };
