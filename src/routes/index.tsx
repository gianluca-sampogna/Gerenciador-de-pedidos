import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CriaPedido from '@screens/CriaPedido';
import HomeScreen from '@screens/Home';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Pedidos"
          component={HomeScreen}
          options={{ title: 'Pedidos' }}
        />
        <Stack.Screen
          name="CriaPedido"
          component={CriaPedido}
          options={{ title: 'Adicionar Pedido' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
