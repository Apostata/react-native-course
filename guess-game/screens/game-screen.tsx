import { useEffect, useMemo, useState } from "react"
import { View, StyleSheet, Alert, FlatList, useWindowDimensions, Text } from "react-native"
import { NumberContainer } from "../components/game/numberContainer"
import Card from "../components/ui/Card"
import InstructionText from "../components/ui/InstructionText"
import PrimaryButton from "../components/ui/primary-button"
import Title from "../components/ui/Title"
import { Ionicons} from '@expo/vector-icons'
import { Colors } from "../theme/colors"
import GuessLogItem from "../components/game/guess-log-item"

let minBoundry = 1;
let maxBoundry = 100;

const generateRandomNumber = (min:number, max:number, exclude:number) :number=>{
	const randomNumber = Math.floor(Math.random() *(max - min) +min)
	if(randomNumber === exclude) return generateRandomNumber(min, max, exclude)
	return randomNumber
}

const GameScreen = ({pickedNumber, setGameOver}:{pickedNumber:number, setGameOver:(rounds:number)=>void})=>{
	const initialGuees = useMemo(()=>generateRandomNumber(minBoundry, maxBoundry, pickedNumber),[])
	const [currentGuess, setCurrentGuess] = useState<number>(initialGuees)
	const [gessedNumbers, setGuessedNumbers] = useState<number[]>([])
	
	const {width} = useWindowDimensions()

	const nextGuessHandler = (direction:'lower' | 'greater')=>{
		if((direction === 'lower' && currentGuess < pickedNumber) || (direction === 'greater' && currentGuess > pickedNumber)) {
			Alert.alert(`Don't lie! `, `You know that this is wrong...`,[{text:'Sorry!', style:'cancel'}])
			return
		}
		direction === 'lower'? maxBoundry = currentGuess: minBoundry = currentGuess+1
		const newNumber = generateRandomNumber(minBoundry, maxBoundry, currentGuess)
		setGuessedNumbers((guessedList)=>[newNumber, ...guessedList])
		setCurrentGuess(newNumber)
	}

	useEffect(()=>{
		minBoundry = 1,
		maxBoundry = 100
	},[])

	
	useEffect(()=>{
		if(pickedNumber === currentGuess){ 
			setGameOver(gessedNumbers?.length||0)
		}
	},[currentGuess,pickedNumber, setGameOver])

	let content = <>
		<NumberContainer>{currentGuess.toString()}</NumberContainer>
		<Card>
			<>
				<InstructionText style={{marginBottom:12}}>Higher or lower?</InstructionText>
				<View style={styles.buttonsContainer}>
					<View style={styles.buttonContainer}>
						<PrimaryButton onPress={()=>nextGuessHandler('lower')}>
							<Ionicons name="md-remove" size={24} color={Colors.white}/>
						</PrimaryButton>
					</View>
					<View style={styles.buttonContainer}>
						<PrimaryButton onPress={()=>nextGuessHandler('greater')}>
							<Ionicons name="md-add" size={24} color={Colors.white}/>
						</PrimaryButton>
					</View>
				</View>
			</>
		</Card>
		<View style={styles.listContainer}>
			<FlatList 
			data={gessedNumbers} 
			keyExtractor={(item)=>`${gessedNumbers.length - item}-${item}`}
			renderItem={(itemData)=><GuessLogItem round={gessedNumbers.length - itemData.index} guess={itemData.item}/>}
			/>
		</View>
	</>

	if(width> 500){
		content = <View style={{flexDirection:'row', alignItems:'stretch', flex:1}}>
		<View style={[styles.buttonsContainerWide,{flex: 1, alignItems:'center'}]}>	
			<View style={styles.buttonContainer}>
				<PrimaryButton onPress={()=>nextGuessHandler('lower')} style={{alignSelf:'flex-end', maxWidth: 100,}}>
					<Ionicons name="md-remove" size={24} color={Colors.white}/>
				</PrimaryButton>
			</View>
			<NumberContainer>{currentGuess.toString()}</NumberContainer>
			<View style={styles.buttonContainer}>
				<PrimaryButton onPress={()=>nextGuessHandler('greater')} style={{alignSelf:'flex-start', maxWidth: 100,}}>
					<Ionicons name="md-add" size={24} color={Colors.white}/>
				</PrimaryButton>
			</View>
		</View>
		<View style={[styles.listContainer, {flex: 1}]}>
			{gessedNumbers?.length>0 &&<FlatList 
				data={gessedNumbers} 
				keyExtractor={(item)=>`${gessedNumbers.length - item}-${item}`}
				renderItem={(itemData)=><GuessLogItem round={gessedNumbers.length - itemData.index} guess={itemData.item}/>}
			/>}
			{gessedNumbers?.length<1 && <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
				<Text style={{color:Colors.white, fontSize:16, fontFamily:'open-sans-bold'}}>No guesses made yet</Text>
			</View>}
		</View>
	</View>
	}

	return (
	<View style={styles.screen}>
		<Title>Opponet's guess</Title>
		{content}
	</View>
	)
}

export default GameScreen


const styles = StyleSheet.create({
	screen:{
		flex:1,
		padding:24
	},
	buttonsContainer:{
		flexDirection: "row",
	},
	
	buttonsContainerWide:{
		flexDirection: 'row',
		alignItems:'center',
		justifyContent:'center'
	},

	buttonContainer:{
		flex:1
	},
	listContainer:{
		flex:1,
		padding:16,
	}
})