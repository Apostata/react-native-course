import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import IconButton from './components/UI/icon-button';
import AddPlaceScreen from './screens/add-place-screen';
import AllPlacesScreen from './screens/all-places-screen';
import PlaceDetailsScreen from './screens/place-details-screen';
import { Colors } from './theme/colors';
import { NavigationStack, RootStack, RootStackList } from './types/navigation';

const Stack = createNativeStackNavigator<RootStackList>()

export default function App() {
  return (
    <>
      <StatusBar style='auto'/>
     <NavigationContainer>
        <Stack.Navigator 
          screenOptions={{
            headerStyle:{ backgroundColor:Colors.primary500,},
            headerTintColor:Colors.gray700,
            contentStyle:{ backgroundColor:Colors.gray700}
          }}
        >
          <Stack.Screen 
            name='AllPlaces'
            component={AllPlacesScreen}
            options={
              ({navigation}:RootStack<'AllPlaces'>)=>({
               title:'Your Favorite Places',
               headerRight:({tintColor})=>(
                <IconButton 
                  icon='add' 
                  color={tintColor} 
                  size={24} 
                  onPress={()=>{navigation.navigate('AddPlace')}}
                />)
            })}
          />
          <Stack.Screen 
            name='AddPlace' 
            component={AddPlaceScreen} 
            options={{
              title: 'Add a new Place'
            }}
          />
          <Stack.Screen name='PlaceDetails' component={PlaceDetailsScreen} />
        </Stack.Navigator>
     </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
