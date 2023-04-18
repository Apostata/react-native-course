# Navigation
## Expo
`yarn add @react-navigation/native`
extra dependencies `npx expo install react-native-screens react-native-safe-area-context`

## Navigation types
1. stack: `yarn add @react-navigation/native-stack` 

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

