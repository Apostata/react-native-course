# Redux-toolkit

`yarn add @reduxjs/toolkit react-redux`

## Creating a store
in the `store` folder create a file named `store.ts` and a file for each reducer you want, in this case we will create a `favorite.ts`:
```ts
import { createSlice } from "@reduxjs/toolkit";

type FavoriteState ={
	ids:string[]
}

type Action ={type:string, payload:string}

type FavoriteActions={
	addFavorite:(state:FavoriteState, action:Action)=>void
}

const favoriteSlice = createSlice({
	name:'favorite',
	initialState: {
		ids:([] as string[])
	},
	reducers:{
		addFavorite:(state, action:{payload:string, type:string})=>{
			const {payload}= action
			state.ids.push(payload)
		},
		removeFavorite:(state, action)=>{
			const {payload} = action
			state.ids.splice(state.ids.indexOf(payload), 1)
		}
	}	
})

export const addFavorite = favoriteSlice.actions.addFavorite
export const removeFavorite = favoriteSlice.actions.removeFavorite
export default favoriteSlice.reducer

```
then configure the store in the `store.ts`:
```tsx
import { configureStore } from "@reduxjs/toolkit";
import FavoriteReducer from './favorite'

export const store = configureStore({
	reducer:{
		favoriteMeals: FavoriteReducer
	}
})

```
## using the actions and state
```tsx


...
import { useSelector, useDispatch } from "react-redux"
import { addFavorite, removeFavorite } from "../store/redux/favorite"

const MealDetailsScreen = ()=>{
	const navigation:  navigationRootStack<'mealDetails'>= useNavigation()
	const route : routeRootStack<'mealDetails'> = useRoute()
	const {id} = route.params
	const meal = MEALS.find((theMeal)=>theMeal.id === id)

	// const {ids, addFavorite, removeFavorite} = useContextFavorite()
	const {ids} = useSelector((state:{favoriteMeals:{ids:string[]}})=>state.favoriteMeals)
	const dispatch = useDispatch()
	const isMealFavorite = ids.includes(id)


	const toggleFavorite = ()=>{
		// isMealFavorite? removeFavorite(id): addFavorite(id)
		isMealFavorite? dispatch(removeFavorite(id)) : dispatch(addFavorite(id))
	}

	...

	},[navigation, meal, toggleFavorite])

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