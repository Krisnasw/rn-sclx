import { useEffect } from 'react';
import { NativeBaseProvider } from 'native-base';
import Route from './src/utils/routes'
import Toast from 'react-native-toast-message'

const App = () => {

  useEffect(() => {
    return () => {
      console.log('[App] unRegister')
    }
  }, [])

  return (
    <NativeBaseProvider>
      <Route />
      <Toast />
    </NativeBaseProvider>
  );
}

export default App
