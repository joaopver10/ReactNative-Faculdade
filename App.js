import React from 'react'
import {View, Text} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator()

function TelaInicial(){
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Seja Bem vindo ao meu app</Text>
    </View>
  )
}
function TelaSobre() {
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>MeuApp Versão 1.0</Text>
      <Text>Última atualização 18/11/2020</Text>
    </View>
  );
}

export default function MeuApp() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Sobre'>

      <Stack.Screen name='Inicio' component={TelaInicial} />
      <Stack.Screen name='Sobre' component={TelaSobre} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}