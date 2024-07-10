import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/routes';
import { DatabaseProvider } from '@database/index';
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from 'react-native-paper';
import {
  useFonts,
  Poppins_100Thin,
  Poppins_300Light,
} from '@expo-google-fonts/poppins';

import {
  Merriweather_300Light,
  Merriweather_700Bold,
} from '@expo-google-fonts/merriweather';
import { CORES } from '@src/Enum/CORES';

export default function App() {
  const [fontLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_300Light,
    Merriweather_300Light,
    Merriweather_700Bold,
  });

  if (!fontLoaded) {
    return null;
  }

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: CORES.azul,
      backgroundColor: CORES.azul,
      // secondary: 'yellow',
    },
  };

  return (
    <PaperProvider theme={theme}>
      <DatabaseProvider>
        <Routes />
      </DatabaseProvider>
    </PaperProvider>
  );
}
