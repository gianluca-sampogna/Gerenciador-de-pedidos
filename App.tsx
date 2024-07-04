import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/routes'
import { DatabaseProvider } from '@database/index'

export default function App() {
  return (
    <DatabaseProvider>
      <Routes/>
    </DatabaseProvider>
  );
}
