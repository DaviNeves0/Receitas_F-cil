import {NativeBaseProvider, Box} from 'native-base'
import theme from './src/utils/theme';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';




export default function App() {
 
  useFonts({
    'Inter-Thin': require('./assets/fonts/Inter-Thin.ttf'),
    'Inter-ExtraLight': require('./assets/fonts/Inter-ExtraLight.ttf'),
    'Inter-Light': require('./assets/fonts/Inter-Light.ttf'),
    'Inter-Regular':  require('./assets/fonts/Inter-Regular.ttf'),
    'Inter-Medium': require('./assets/fonts/Inter-Medium.ttf'),
    'Inter-semibold': require('./assets/fonts/Inter-SemiBold.ttf'),
    'Inter-bold': require('./assets/fonts/Inter-Bold.ttf')
  })

  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
          <Routes/>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
 