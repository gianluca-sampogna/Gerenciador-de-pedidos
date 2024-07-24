import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/routes';
import { DatabaseProvider } from '@database/index';
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from 'react-native-paper';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { CORES } from '@src/Enum/CORES';

import {
  Poppins_100Thin,
  Poppins_300Light,
} from '@expo-google-fonts/poppins';

import {
  Merriweather_300Light,
  Merriweather_700Bold,
  Merriweather_900Black,
} from '@expo-google-fonts/merriweather';

// Mantenha a tela de splash visível enquanto carregamos recursos
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Carregar fontes, fazer chamadas de API necessárias
        await Font.loadAsync({
          Poppins_100Thin,
          Poppins_300Light,
          Merriweather_300Light,
          Merriweather_700Bold,
          Merriweather_900Black,
        });
        // Atraso artificial de dois segundos para simular uma experiência de carregamento lento
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Informar que o aplicativo está pronto para renderizar
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // Esconder a tela de splash imediatamente após o layout root
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: CORES.azul,
      backgroundColor: CORES.azul,
      secondary: 'yellow',
      primaryContainer: 'red',
    },
  };

  return (
    <PaperProvider theme={theme}>
      <DatabaseProvider>
        <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
          <Routes />
        </View>
      </DatabaseProvider>
    </PaperProvider>
  );
}
