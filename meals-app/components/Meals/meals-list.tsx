import { FlatList, View, StyleSheet } from "react-native"
import Meal from "../../models/meal"
import MealItem from "../meal-item"

const MealsList = ({meals}:{meals:Meal[]})=>{

	return (
		<View style={Styles.container}>
			<FlatList data={meals} keyExtractor={(item)=>item.id} renderItem={(itemData)=>{
				const {id, title, imageUrl, duration, complexity, affordability} = itemData.item
				return <MealItem id={id} title={title} imageUrl={imageUrl} duration={duration} complexity={complexity} affordability={affordability}  />
			}} />
		</View>
	)
}

export default MealsList 
const Styles = StyleSheet.create({
	container:{
		flex:1,
		padding:16
	}
})