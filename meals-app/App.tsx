import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import CategoryScreen from './screens/category-screen';
import MealsOverViewScreen from './screens/meals-overview-screen';
import {rootStackList} from './types/navigation'

const Stack = createNativeStackNavigator<rootStackList>()

export default function App() {
  return (
   
    <SafeAreaView style={{flex:1}}>
      <StatusBar style='dark' />
      <NavigationContainer>
        <Stack.Navigator initialRouteName='mealsCategories'>
          <Stack.Screen name='mealsCategories' component={CategoryScreen}/>
          <Stack.Screen name='mealsOverview' component={MealsOverViewScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
