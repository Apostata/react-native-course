import { useNavigation, useRoute } from "@react-navigation/native"
import {  useLayoutEffect } from "react"
import { View, StyleSheet, FlatList } from "react-native"
import MealItem from "../components/meal-item"
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
		<View style={Styles.container}>
			<FlatList data={displayMeal} keyExtractor={(item)=>item.id} renderItem={(itemData)=>{
		const {id, title, imageUrl, duration, complexity, affordability} = itemData.item
		return <MealItem id={id} title={title} imageUrl={imageUrl} duration={duration} complexity={complexity} affordability={affordability}  />
	}} />
			
		</View>
	)
}

export default MealsOverViewScreen

const Styles = StyleSheet.create({
	container:{
		flex:1,
		padding:16
	}
})