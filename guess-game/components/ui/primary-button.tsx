import React from 'react'
import { View, Text, Pressable, StyleSheet, Platform, ButtonProps, StyleProp, ViewStyle } from 'react-native'
import { Colors } from '../../theme/colors'

function PrimaryButton({children, style, onPress}:Omit<ButtonProps, 'title'> & {children:JSX.Element | string, style?:StyleProp<ViewStyle>}) {

	return (
		<View style={[Styles.buttonOuterContainer, style]}>
			<Pressable 
				style={({pressed})=>pressed?[Styles.buttonInnerContainer, Styles.pressed]:Styles.buttonInnerContainer} 
				onPress={onPress} 
				android_ripple={{color: Colors.primary600}}
			>
				{typeof children === 'string'? 	
					<Text style={Styles.buttonText}>{children}</Text>:
					<View style={{flexDirection:'row', justifyContent:'center'}}>{children}</View>
				}
			</Pressable>
		</View>
	)
}

export default PrimaryButton

const Styles = StyleSheet.create({
	buttonOuterContainer:{
		borderRadius: 28,
		margin:4,
		overflow:'hidden',
	
		...Platform.select({
			ios:{
				shadowColor: 'black', //ios only
				shadowOffset: { width: 0, height:2,}, //ios only
				shadowRadius: 4, //ios only
				shadowOpacity: 1, ///ios only
			},
			android:{
				elevation: 4, //android only
				
			}
		}),
	},
	buttonInnerContainer:{
		paddingVertical:8,
		paddingHorizontal:16,
		backgroundColor:Colors.primary500,

		
	},
	buttonText:{
		color:'white',
		textAlign: 'center'
	},
	pressed:{
		...Platform.select({
			ios:{
				opacity:0.75
			}
		
	  })
	}
})