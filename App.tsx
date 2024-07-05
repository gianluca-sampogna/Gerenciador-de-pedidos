import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/routes';
import { DatabaseProvider } from '@database/index';
import {
  useFonts,
  Poppins_100Thin,
  Poppins_300Light,
} from '@expo-google-fonts/poppins';

export default function App() {
  const [fontLoaded] = useFonts({ Poppins_100Thin, Poppins_300Light });

  if (!fontLoaded) {
    return null;
  }

  return (
    <DatabaseProvider>
      <Routes />
    </DatabaseProvider>
  );
}
