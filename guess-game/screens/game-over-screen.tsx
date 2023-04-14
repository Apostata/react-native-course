import { Text, View, Image, StyleSheet, useWindowDimensions, ScrollView } from "react-native"
import PrimaryButton from "../components/ui/primary-button"
import Title from "../components/ui/Title"
import { Colors } from "../theme/colors"

const GameOverScreen = ({number, rounds,  restartGame}:{number:number,rounds:number, restartGame:()=>void})=>{
	const {width, height} = useWindowDimensions()
	let imageSize = 300

	if(width < 380){
		imageSize = 150
	}

	if(height < 400){
		imageSize = 150
	}
	const imageStyle = {
		width: imageSize,
		height: imageSize,
		borderRadius: imageSize / 2
	}

	let content = <>
		<View style={[Styles.imageContainer, imageStyle]}>
			<Image style={Styles.image} source={require('../assets/images/success.png')}/>
		</View>
		<View>
			<Text style={Styles.sumaryText}>You nedded <Text style={Styles.highlight}>{rounds}</Text> rounds to guess the number <Text style={Styles.highlight}>{number}</Text>.</Text>
			<PrimaryButton style={{alignSelf: 'center',}}onPress={restartGame}>Start a new game</PrimaryButton>
		</View>
	</>

	if(width> 500){
		content=<View style={{flex:1, flexDirection:'row', alignItems:'center'}} >
			<View style={[Styles.imageContainer, imageStyle]}>
				<Image style={[Styles.image, imageStyle]} source={require('../assets/images/success.png')}/>
			</View>
			<View>
				<Text style={Styles.sumaryText}>You nedded <Text style={Styles.highlight}>{rounds}</Text> rounds to guess the number <Text style={Styles.highlight}>{number}</Text>.</Text>
				<PrimaryButton style={{alignSelf: 'center',}}onPress={restartGame}>Start a new game</PrimaryButton>
			</View>
		</View>
	}
	
	return (
		<ScrollView style={{flex:1}}>
			<View style={Styles.root}>
				<Title>Game Over!</Title>
				{content}
			</View>
		</ScrollView>
	)
}

export default GameOverScreen

// const devicesWidth =  Dimensions.get('window').width

const Styles = StyleSheet.create({
	root:{
		flex:1,
		padding:24,
		justifyContent: 'center',
		alignItems:"center"
	},
	imageContainer:{
		// width: devicesWidth < 380? 150 : 300,
		// height: devicesWidth < 380? 150 : 300,
		borderWidth: 3,
		borderColor: Colors.primary800,
		overflow:"hidden",
		margin: 36
	},
	image:{
		width:'100%',
		height:'100%'
	},
	sumaryText:{
		fontFamily:'open-sans',
		fontSize:24,
		color: Colors.white,
		textAlign: 'center',
		marginVertical: 24
	},
	highlight:{
		fontFamily:'open-sans-bold',
		color:Colors.primary500
	}
})