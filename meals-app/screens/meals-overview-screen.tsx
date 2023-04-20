import { useNavigation, useRoute } from "@react-navigation/native"
import {  useLayoutEffect } from "react"
import { StyleSheet } from "react-native"
import MealsList from "../components/Meals/meals-list"
import { CATEGORIES, MEALS } from "../data/dummy-data"
import { navigationRootStack, routeRootStack } from "../types/navigation"

const MealsOverViewScreen = ()=>{
	const route:routeRootStack<'mealsOverview'>  = useRoute()
	const navigation:navigationRootStack<'mealsOverview'>  = useNavigation()
	
	const {categoryId} = route.params
	const displayMeal = MEALS.filter((meal)=>meal.categoryIds.includes(categoryId))
	const categoryName = CATEGORIES.find((category)=>category.id === categoryId)?.title || null

	useLayoutEffect(()=>{
		navigation.setOptions({title: categoryName || ''})
	},[navigation, categoryId])
	
	
	return (
		<MealsList meals={displayMeal}/>
	)
}

export default MealsOverViewScreen

const Styles = StyleSheet.create({
	container:{
		flex:1,
		padding:16
	}
})