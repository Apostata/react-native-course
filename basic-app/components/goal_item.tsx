import React from 'react'
import { StyleSheet, View ,Text, Pressable} from 'react-native'

const GoalItem = ({item, removeGoal=null}) => {
	// function removeGoalHandler(){
	// 	removeGoal(item.id)
	// }

	return (
		
	<View style={styles.goalItem}>
		<Pressable 
			android_ripple={{color:'#210644'}} 
			onPress={removeGoal?.bind(this, item.id)}
			style={({pressed})=>pressed && styles.pressedItem}
		>
			<Text style={styles.goalItemText}>{item.text}</Text>
		</Pressable>
	</View>
	)
}

export default GoalItem

const styles = StyleSheet.create({
	goalItem:{
		margin: 8,
		borderRadius: 6,
		backgroundColor:'#530acc',
	  },
	  goalItemText:{
		padding:8,
		color: 'white'
	  },
	  pressedItem:{
		opacity:0.5
	  }
})