import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import WebViewScreen from './src/screens/WebViewSreen';
import Routes from './src/utility/Routes';
import SplashScreen from './src/screens/SplashScreen';
import ProductViewScreen from './src/screens/ProductView';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={Routes.SPLASH}
      >
        <Stack.Screen name={Routes.SPLASH} component={SplashScreen} />
        <Stack.Screen name={Routes.HOME} component={HomeScreen} />
        <Stack.Screen name={Routes.PRODUCTVIEW} component={ProductViewScreen} />
        <Stack.Screen name={Routes.WEBVIEW} component={WebViewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;