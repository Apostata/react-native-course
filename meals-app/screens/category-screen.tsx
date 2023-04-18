import { FlatList } from "react-native"
import CategoryItem from "../components/category-item"
import { CATEGORIES } from "../data/dummy-data"
import {  navigationRootStack} from '../types/navigation'
import {useNavigation} from '@react-navigation/native'

const CategoryScreen = (
	
	)=>{
		const navigation:navigationRootStack<'mealsOverview'> = useNavigation()
	const onPressHandler = (id:string)=>{
		navigation.navigate('mealsOverview',{
			categoryId:id,
		})
	}

	return (
	<FlatList style={{paddingTop:8}} numColumns={2} data={CATEGORIES} keyExtractor={(item)=>item.id} renderItem={(itemData)=>{
		const {title, color, id} = itemData.item
		return <CategoryItem title={title} color={color} onPress={()=>onPressHandler(id)}/>
	}} />
	)
}

export default CategoryScreen
