import {
  StyleSheet,
  Text,
  View,
  StatusBar,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages/Home';
import CalendarPage from './src/pages/Calendar';

const Stack = createNativeStackNavigator()
export default function App()  {
  
  
  
    return (
     <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Calendar" component={CalendarPage}/>
        </Stack.Navigator>
     </NavigationContainer>
    );
  }

const styles = StyleSheet.create({
    safeAreaViewContainer: {
      flex: 1,
      backgroundColor: '#EDEDEB',
    },
    container: {
      flex: 1,
      backgroundColor: '#EDEDEB',
      alignItems: 'center',
    }
  });
  