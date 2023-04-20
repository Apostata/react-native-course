import { View, Text, StyleSheet } from "react-native"
import { useSelector } from "react-redux"
import MealsList from "../components/Meals/meals-list"
import { MEALS } from "../data/dummy-data"
// import { useContextFavorite } from "../store/context/favorites-context"

const FavoritesScreen = ()=>{
	// const {ids} = useContextFavorite()
	const {ids} = useSelector((state:{favoriteMeals:{ids:string[]}})=>state.favoriteMeals)
	const favorites = MEALS.filter((meal)=>ids.includes(meal.id))


	return(
		<>
		{
			favorites.length >0? 
			<MealsList meals={favorites}/>
			: 
			<View style={Styles.root}>
				<Text style={Styles.text}>You don't have any favorite meals yet!</Text>
			</View>
		}
		</>
	)
}

export default FavoritesScreen

const Styles = StyleSheet.create({
	root:{
		flex:1,
		justifyContent:'center',
		alignItems:'center',
	},
	text:{
		fontSize:18,
		fontWeight:'bold',
		color: '#e2b497'
	}
})