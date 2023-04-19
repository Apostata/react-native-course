import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet } from 'react-native';
import CategoryScreen from './screens/category-screen';
import MealDetailsScreen from './screens/meal-details-screen';
import MealsOverViewScreen from './screens/meals-overview-screen';
import {rootStackList} from './types/navigation'

const Stack = createNativeStackNavigator<rootStackList>()

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
          <Stack.Screen name='mealsCategories' component={CategoryScreen} options={{
            title: 'All Ctegories',
          }}/>
          <Stack.Screen name='mealsOverview' component={MealsOverViewScreen} 
          // options={({route, navigation})=>{
          //   const {categoryId} = route.params

          //   return {title:categoryId}
          // }}
          />
           <Stack.Screen name='mealDetails' component={MealDetailsScreen} 
          //  options={{
          //   headerRight: ()=>{
          //     return (<Button title='tap me!' onPress={()=>console.log('tapped')} />)
          //   }
          //  }}
           />
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
