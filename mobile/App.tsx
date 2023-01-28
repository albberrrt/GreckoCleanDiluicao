import { NativeBaseProvider, Image, HStack } from 'native-base';

import { Calculator } from './src/screens/Calculator';

import Loading from './src/components/Loading';

import {
  useFonts,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold
} from "@expo-google-fonts/inter";
import { THEME } from "./src/styles/theme";


export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  });

  return (
    <NativeBaseProvider theme={THEME}>
      <HStack justifyContent="center" shadow={5} bg="white" w="full" safeArea>
        <Image source={require('./src/assets/icon.png')} alt="Grecko Clean" width={82} height={82}/>
      </HStack>
        {fontsLoaded ? <Calculator/> : <Loading/>}
    </NativeBaseProvider>
  );
}
