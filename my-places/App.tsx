import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import IconButton from './components/UI/icon-button';
import { init } from './db';
import AddPlaceScreen from './screens/add-place-screen';
import AllPlacesScreen from './screens/all-places-screen';
import MapScreen from './screens/map-screen';
import PlaceDetailsScreen from './screens/place-details-screen';
import { Colors } from './theme/colors';
import { RootStack, RootStackList } from './types/navigation';
import * as SplashScreen from 'expo-splash-screen';

const Stack = createNativeStackNavigator<RootStackList>()

export default function App() {
  const [dbInitialized, setDbInitialized] = useState(false)

  SplashScreen.preventAutoHideAsync()
  .then((result:any) =>
    // console.log(`SplashScreen.preventAutoHideAsync() succeeded: ${result}`),
    {}
  )
  .catch(console.warn)

  useEffect(() => {
    async function hideSplashScreen() {
      await SplashScreen.hideAsync()
    }
    if (dbInitialized) {
      hideSplashScreen()
    }
  }, [dbInitialized])

  useEffect(()=>{
    init()
    .then(()=>{
      setDbInitialized(true)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])

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
          <Stack.Screen name='PlaceDetails' component={PlaceDetailsScreen} options={{
            title:'Loading Place...'
          }}/>
          <Stack.Screen name='Map' component={MapScreen} />
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
