import React, { useState } from 'react'
import { TextInput, View, StyleSheet, Alert, KeyboardAvoidingView, ScrollView, useWindowDimensions } from 'react-native'
import Card from '../components/ui/Card'
import PrimaryButton from '../components/ui/primary-button'
import Title from '../components/ui/Title'
import { Colors } from '../theme/colors'
import InstructionText from '../components/ui/InstructionText'

function StartGameScreen({pickANumber}:{pickANumber:(number:number)=>void}) {
	const [enteredNumber, setEnteredNumber] = useState<null| string>(null)

	const {width, height} = useWindowDimensions()

	function changeInputHandler(enteredText:string){
		setEnteredNumber(enteredText)
		
	}

	function resetInputHandler(){
		setEnteredNumber(null)
	}

	function confirmHandler(){
		const number = enteredNumber && parseInt(enteredNumber) || 0
		if (isNaN(number) || number <= 0 || number>99){
			Alert.alert(
				'Invalid Number', 
				'Number has to be between 1 and 99',
				[
					{text:'OK', style:'destructive', onPress:resetInputHandler}
				]
			)
			return
		}
		pickANumber(number)
	}

	const marginTop = height < 380? 30: 100

  return (
	<ScrollView style={Styles.screen}>
		<KeyboardAvoidingView style={Styles.screen} behavior='position'>
			<View style={[Styles.root, {marginTop}]}>
				<Title>Guess my Number</Title>
				<Card  style={{maxWidth:300}}>
					<>
						<InstructionText>Enter a Number</InstructionText>
						<TextInput 
							style={Styles.input} 
							maxLength={2} 
							keyboardType='number-pad' 
							autoCapitalize='none' 
							autoCorrect={false}
							value={enteredNumber || ''}
							onChangeText={changeInputHandler}
						/>
						<View style={Styles.buttonsContainer}>
							<View style={Styles.buttonContainer}>
								<PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
							</View>
							<View style={Styles.buttonContainer}>
								<PrimaryButton onPress={confirmHandler}>Confirm</PrimaryButton>
							</View>				
						</View>
					</>
				</Card>
			</View>
		</KeyboardAvoidingView>
	</ScrollView>
  )
}

export default StartGameScreen

// const deviceHeigth = Dimensions.get('window').height

const Styles = StyleSheet.create({
	screen:{
		flex: 1
	},
	root:{
		flex: 1,
		// marginTop: deviceHeigth< 380? 30: 100,
		justifyContent: 'center',
		alignItems:'center',
	},

	input:{
		height: 50,
		fontSize: 32,
		borderWidth: 2,
		color: Colors.accent500,
		borderColor: 'transparent',
		borderBottomColor: Colors.accent500,
		marginVertical: 8,
		fontWeight: 'bold',
		width: 50,
		textAlign:'center'
	},
	buttonsContainer:{
		flexDirection:'row'
	},
	buttonContainer:{
		flex:1
	}
})