import { View, Text, Pressable, Image, StyleSheet, Platform } from "react-native"

const MealItem = ({title, imageUrl, duration, complexity, affordability}:{title:string, imageUrl:string, duration:number, complexity:string, affordability:string})=>{
	return (
		<View style={Styles.container}>
			<Pressable style={({pressed})=>pressed?[Styles.button, Styles.buttonPressed]:Styles.button} android_ripple={{color: '#ccc'}} >
				<View style={Styles.innerContainer}>
					<View>
						<Image style={Styles.image} source={{uri:imageUrl}}/>
						<Text style={Styles.title}>{title}</Text>
					</View>
					<View style={Styles.details}>
						<Text style={Styles.text}>{duration} min</Text>
						<Text style={Styles.text}>{complexity.toUpperCase()}</Text>
						<Text style={Styles.text}>{affordability.toUpperCase()}</Text>
					</View>
				</View>
			</Pressable>
			
		</View>
	)
}

export default MealItem

const Styles =  StyleSheet.create({
	container:{
		flex: 1,
		margin:16,
		borderRadius:8,
		backgroundColor: 'white',
		...Platform.select({
			ios:{
				shadowColor: 'black', //ios only
				shadowOffset: { width: 0, height:2,}, //ios only
				shadowRadius: 6, //ios only
				shadowOpacity: 1, ///ios only
				overflow:'visible',
			},
			android:{
				elevation: 6, //android only
				overflow:'hidden',
				
			}
		}),
	},
	innerContainer:{
		...Platform.select({
			ios:{
			borderRadius:8,
			overflow:'hidden'
			},
			
		}),
	},
	image:{
		width:'100%',
		height:200
	},
	title:{
		margin:8,
		fontWeight:'bold',
		textAlign:'center',
		fontSize:18
	},
	details:{
		flexDirection:'row',
		alignItems:'center',
		justifyContent: 'center',
		padding:8
	},
	text:{
		marginHorizontal:4,
		fontSize:12
	},
	button:{
		flex:1
	},
	buttonPressed:{
		...Platform.select({
			ios:{
				opacity:0.5
			},
			
		})
	}
})