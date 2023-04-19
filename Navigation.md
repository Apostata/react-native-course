# Navigation
## Expo
`yarn add @react-navigation/native`
extra dependencies `npx expo install react-native-screens react-native-safe-area-context`

## Navigation types
### stack 
`yarn add @react-navigation/native-stack` 

```tsx
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
...
import CategoryScreen from './screens/category-screen';
import { rootStackParamsList } from './types/navigation'

const Stack = createNativeStackNavigator<rootStackParamsList>()

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
  ...
});

```
types used:
```ts
import { NavigationProp } from "@react-navigation/native";

export type rootStackParamsList = {
	mealsCategories: undefined;
	mealsOverview: undefined;
  }
  
export type CategoriesScreenNavigationProp = NavigationProp<rootStackParamsList, 'mealsCategories'>;

```

navigating:

```tsx
...
import {CategoriesScreenNavigationProp} from '../types/navigation'


const CategoryScreen = ({navigation}: {navigation:CategoriesScreenNavigationProp})=>{
	const onPressHandler = ()=>{
		navigation.navigate('mealsOverview',{
			categoryId:
		})
	}

	return (<FlatList style={{paddingTop:8}} numColumns={2} data={CATEGORIES} keyExtractor={(item)=>item.id} renderItem={(itemData)=>{
		const {title, color, id} = itemData.item
		return <CategoryItem title={title} color={color} onPress={()=>onPressHandler(id)}/>
	}} />)
}

export default CategoryScreen

```
receiving data in the route:

```tsx
...
import { RootStack } from "../types/navigation"
const MealsOverViewScreen = ({route}:RootStack<'mealsOverview'>)=>{
	const {categoryId} = route.params
	return (
		<View style={Styles.container}>
			<Text>Meals Overview screen {categoryId}</Text>
		</View>
	)
}

export default MealsOverViewScreen

const Styles = StyleSheet.create({
...
})

```

you could use the hook `useNavigation` from `@react-navigation/native` when in not a screen direct child of the router or to replace the navigation prop.
the same for `useRoute` to get data from the page tha you came from.

### Drawer
same as stack to work but generates a sideDrawer

 `yarn add @react-navigation/drawer`
 `yarn add react-native-gesture-handler react-native-reanimated`

#### bug with react-reanimated v2
add `react-native-reanimated/plugin` to the `babel.config.js`
stop expo-server
and then run `expo r -c` to clear the cache
start the project again
```js
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins:['react-native-reanimated/plugin']
  };
};

```

#### Config Drawer navigator
You can change styles and even the component rendered in the Drawer
```tsx
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
...

const Drawer = createDrawerNavigator<rootDrawerList>()

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='User' screenOptions={{
         headerStyle:{ backgroundColor:'#3c0a6b'},
         headerTintColor:'white',
        drawerActiveBackgroundColor:'#f0e1ff',
        drawerActiveTintColor: '#3c0a6b',
        drawerStyle: {backgroundColor:'#ccc'}
      }}>
        <Drawer.Screen  name='Welcome' component={WelcomeScreen} options={{
          drawerLabel:'Welcome Screen',
          drawerIcon: ({color, size})=><Ionicons name='home' color={color} size={size}/>
        }}/>
        <Drawer.Screen  name='User' component={UserScreen} options={{
          drawerLabel:'Welcome Screen',
          drawerIcon: ({color, size})=><Ionicons name='person' color={color} size={size}/>
        }}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


```
#### Programatic Navigation with Drawer
```tsx
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { View, Text, Button, StyleSheet } from 'react-native';
import { navigationRootDrawer } from '../types/navigation';

function UserScreen() {
  const navigation :navigationRootDrawer<'User'>= useNavigation()
  
  const openDrawerProgramatically = ()=>{
	// navigation.openDrawer() //in js
    navigation.dispatch(DrawerActions.openDrawer()) // in ts
  }

  return (
    <View style={styles.rootContainer}>
     ...
      <Button onPress={openDrawerProgramatically} title={'open drawer'} />
    </View>
  );
}

export default UserScreen;

const styles = StyleSheet.create({
  ...
});


```


### Bottom tabs
`yarn add @react-navigation/bottom-tabs`
## Styling Navigation header
You can determine some aditional styles or change na name in the navigation header in each page:

```tsx
...
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
		<Stack.Screen name='mealDetails' component={MealDetailsScreen} />
	</Stack.Navigator>
</NavigationContainer>
...
```
When you put styles in the `Navigator` component, in this case `Stack.Navigator`, this style will apply to all screens headers and background

When you put in a single Screen only this screen will change


### Dynamically change navigation header
Lets supose you want to show the title of and meal in the navigation header according to the current meal.

```tsx
...

const MealDetailsScreen = ()=>{
	const navigation:  navigationRootStack<'mealDetails'>= useNavigation()
	const route : routeRootStack<'mealDetails'> = useRoute()
	const {id} = route.params
	const meal = MEALS.find((theMeal)=>theMeal.id === id)

	useLayoutEffect(()=>{
		navigation.setOptions({
			title: meal?.title
		})
	},[navigation])

	return (
		<ScrollView style={{marginBottom:32}}>
			...
		</ScrollView>
	)
}

export default MealDetailsScreen

const Styles = StyleSheet.create({
	...
})
```
So here we used `navigation.setOptions()` function with `useLayoutEffect` (to update the content as soon its changes concurrently) to set the navigation header title to the current meal title

### Adding actions to navigation header
You can add buttons to the navigation header, in the same way as adding a Dynamic title
there are `headerRight` and I sopose `headerLetf` too that renders a component in the Header

```tsx
...

const MealDetailsScreen = ()=>{
	const navigation:  navigationRootStack<'mealDetails'>= useNavigation()
	const route : routeRootStack<'mealDetails'> = useRoute()
	const {id} = route.params
	const meal = MEALS.find((theMeal)=>theMeal.id === id)
	...
	useLayoutEffect(()=>{
		navigation.setOptions({
			title: meal?.title,
			headerRight:()=><IconButton iconName="star" size={20} onPress={headerButtonPressHandler} />
		})
	},[navigation])

	return (
		<ScrollView style={{marginBottom:32}}>
			...
		</ScrollView>
	)
}

export default MealDetailsScreen

const Styles = StyleSheet.create({
	...
})
```

