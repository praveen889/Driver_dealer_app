import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Home';
import driver from './src/driver';
import dealer from './src/dealer';
import driverSignIn from './src/driverSignIn';
import driverLogin from './src/driverLogin';
import dealerLogin from './src/dealerLogin';
import dealerSignIn from './src/dealerSignIn';
import dealerHome from './src/dealerHome';
import DriverHome from './src/driverHome'


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="driver" component={driver} />
        <Stack.Screen name="dealer" component={dealer} />
        <Stack.Screen name="dealerSignIn" component={dealerSignIn} />
        <Stack.Screen name="dealerLogin" component={dealerLogin} />
        <Stack.Screen name="driverSignIn" component={driverSignIn} />
        <Stack.Screen name="driverLogin" component={driverLogin} />
        <Stack.Screen name="dealerHome" component={dealerHome} />
        <Stack.Screen name="DriverHome" component={DriverHome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
