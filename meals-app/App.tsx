import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet } from 'react-native';
import CategoryScreen from './screens/category-screen';
import MealDetailsScreen from './screens/meal-details-screen';
import MealsOverViewScreen from './screens/meals-overview-screen';
import {rootStackList} from './types/navigation'
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoritesScreen from './screens/favorires.screen';
import {Ionicons} from '@expo/vector-icons'

const Stack = createNativeStackNavigator<rootStackList>()
const Drawer = createDrawerNavigator<rootStackList>()

const DrawerNavigator = ()=>{
  return (
    <Drawer.Navigator screenOptions={{
      headerStyle:{ backgroundColor: "#351401"},
      headerTintColor:'#e2b497',
      sceneContainerStyle:{
        backgroundColor:'#3f2f25'
      },
      drawerContentStyle:{ backgroundColor:'#351401'},
      drawerInactiveTintColor: '#e2b497',
      drawerActiveTintColor:'#351401',
      drawerActiveBackgroundColor: '#e2b497'
    }}>
      <Drawer.Screen name={'Categories' as 'mealsCategories'} component={CategoryScreen} options={{
        title: 'All categories',
        drawerIcon: ({color, size})=><Ionicons name='list' color={color} size={size} />
      }}/>
      <Drawer.Screen name={'Favorites' as 'mealsCategories'} component={FavoritesScreen} options={{
        drawerIcon: ({color, size})=><Ionicons name='star' color={color} size={size} />
      }}/>
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
   
    <SafeAreaView style={{flex:1}}>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator initialRouteName='mealsCategories' screenOptions={{
          headerStyle:{ backgroundColor: "#351401"},
          headerTintColor:'white',
          contentStyle:{
            backgroundColor:'#3f2f25'
          }
        }}>
          <Stack.Screen name='mealsCategories' component={DrawerNavigator} options={{
            headerShown: false
          }}/>
          <Stack.Screen name='mealsOverview' component={MealsOverViewScreen} />
         
           <Stack.Screen name='mealDetails' component={MealDetailsScreen} />
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
