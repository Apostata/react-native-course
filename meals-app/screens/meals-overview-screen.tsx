import { useRoute } from "@react-navigation/native"
import { View, StyleSheet, FlatList } from "react-native"
import MealItem from "../components/meal-item"
import { MEALS } from "../data/dummy-data"
import { routeRootStack } from "../types/navigation"

const MealsOverViewScreen = ()=>{
	const route:routeRootStack<'mealsOverview'>  = useRoute()
	const {categoryId} = route.params
	
	const displayMeal = MEALS.filter((meal)=>meal.categoryIds.includes(categoryId))
	
	return (
		<View style={Styles.container}>
			<FlatList data={displayMeal} keyExtractor={(item)=>item.id} renderItem={(itemData)=>{
		const {title, imageUrl, duration, complexity, affordability} = itemData.item
		return <MealItem title={title} imageUrl={imageUrl} duration={duration} complexity={complexity} affordability={affordability} />
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