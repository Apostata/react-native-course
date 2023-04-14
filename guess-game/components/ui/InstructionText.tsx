import {Text, StyleSheet, StyleProp, TextStyle} from 'react-native'
import { Colors } from '../../theme/colors'
const InstructionText = ({children, style}:{children:string, style?:StyleProp<TextStyle>})=>{
	return <Text style={[Styles.instructionText, style]}>{children}</Text>
}

export default InstructionText;

const Styles = StyleSheet.create({
	instructionText:{
		fontFamily: 'open-sans',
		color:Colors.accent500,
		fontSize:24,
	},
})
