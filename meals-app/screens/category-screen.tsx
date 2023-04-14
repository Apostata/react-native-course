import { FlatList } from "react-native"
import CategoryItem from "../components/category-item"
import { CATEGORIES } from "../data/dummy-data"

const CategoryScreen = ()=>{
	return (<FlatList style={{paddingTop:8}} numColumns={2} data={CATEGORIES} keyExtractor={(item)=>item.id} renderItem={(itemData)=>{
		const {title, color} = itemData.item
		return <CategoryItem title={title} color={color}/>
	}} />)
}

export default CategoryScreen
