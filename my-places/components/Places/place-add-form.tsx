import { useState } from "react"
import { ScrollView, Text, TextInput, StyleSheet } from "react-native"
import Input from "../UI/input"

const PlaceAddForm = ()=>{
	const [name, setName] = useState('')

	const onChangeNameHandler= (value:string) =>{
		setName(value)
	}

	return (
		<ScrollView style={Styles.root}>
			<Input 
				label='Title' 
				onChangeText={onChangeNameHandler} 
				value={name}
			/>
		</ScrollView>
	)
}

export default PlaceAddForm

const Styles = StyleSheet.create({
	root:{
		flex:1,
		padding:24
	}
})