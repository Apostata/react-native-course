import React, { useState } from 'react'
import { Button, TextInput, View, StyleSheet, Modal, Image } from 'react-native'

const GoalInput = ({addGoal, showModal, hideModal}) => {

	const [enteredText, setEnteredText] = useState<string>('')
  
	function goalInputHandler(enteredText: string){
		setEnteredText(enteredText)
	}

	function addGoalHandler(){
		addGoal(enteredText)
		setEnteredText('')
	}

  return (
	<Modal visible={showModal} animationType="slide">
		<View style={styles.inputContainer}>
			<Image 
			style={styles.image} 
			source={require('../assets/images/goal.png')}
			/>
			<TextInput value={enteredText} style={styles.textInput} placeholder='Your course goal!' onChangeText={goalInputHandler}/>
			<View style={styles.buttonContainer}>
				<View style={styles.button}><Button title="add goal" color={"#b180f0"}  onPress={addGoalHandler}/></View>
				<View style={styles.button}><Button title='Cancel'  color={"#f31282"} onPress={hideModal}/></View>
			</View>
		</View>
		
	</Modal>
  )
}

export default GoalInput

const styles = StyleSheet.create({
	inputContainer:{
		flex:1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		borderBottomWidth:1,
		padding: 16,
		backgroundColor:'#311b6b'
	},
	textInput:{
		borderWidth: 1,
		borderColor: '#e4d0ff',
		backgroundColor:'#e4d0ff',
		color: '#120438',
		borderRadius:6,
		width: '100%',
		padding: 16,
	},
	buttonContainer:{
		marginTop:16,
		flexDirection: 'row'
	},
	button:{
		width: 100,
		marginHorizontal: 8
	},
	image:{
		width: 100,
		height: 100,
		margin: 20
	}
})