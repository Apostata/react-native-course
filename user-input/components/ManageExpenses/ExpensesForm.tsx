import { useState } from "react"
import { View, StyleSheet, Text, Alert } from "react-native"
import Input from "./input"
import Button from '../UI/Button'

const ExpenseForm = ({
	cancel, 
	isEditing, 
	onSubmit,
	expense,
}:{
	cancel:()=>void, 
	isEditing:boolean, 
	onSubmit:(data: {
    	amount: number;
    	date: Date;
    	description: string;
	})=>void,
	expense?: {
    	amount: number;
    	date: Date;
    	description: string;
	}
}) =>{
	const [inputValues, setInputValues] = useState({
		amount:expense?.amount?`${expense?.amount}` :'',
		date:(expense?.date.toLocaleDateString("pt-BR") as string) ||'',
		description:expense?.description ||''
	})
	const [inputsValidation, setInputsValidations] = useState({
		amount: true,
		date: true,
		description: true
	})

	const inputHandler = ( value:string, field:string,)=>{
		setInputValues((currInputValues)=>({...currInputValues, [field]:value}))
	}	

	const confirmHandler = ()=>{
		const formatDate = inputValues.date.split('/').reverse().join('-')
		const expenseData = {
			amount: +inputValues.amount,
			date: new Date(formatDate),
			description:  inputValues.description
		}

		const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0
		const dateIsValid = expenseData.date.toString() !== 'Invalid Date'
		const descriptionIsValid = expenseData.description.trim().length>0
		const isValid = amountIsValid && descriptionIsValid && dateIsValid
		isValid ? onSubmit(expenseData) : setInputsValidations({
			amount: amountIsValid,
			date: dateIsValid,
			description: descriptionIsValid
		})
	}	

	return (
		<View style={Styles.root}>
			<Text style={Styles.title}>Your Expenses</Text>
			<View style={Styles.row}>
				<View style={{flexDirection:'column', flex:1}}>
					<Input 
						label="Amount" 
						inputConfig={{
							keyboardType:'decimal-pad', 
							onChangeText:(value:string)=>inputHandler(value,'amount'), 
							value:inputValues.amount
						}} 
						
					/>
					{!inputsValidation.amount &&<Text style={{color:'red'}}>amount is invalid</Text>}
				</View>
				<View style={{flexDirection:'column', flex:1}}>
					<Input 
						label="Date" 
						inputConfig={{
							placeholder:'DD/MM/YYYY', 
							maxLength:10, 
							onChangeText:(value:string)=>inputHandler(value,'date'), 
							value:inputValues.date
						}} 
						
					/>
					{!inputsValidation.date &&<Text style={{color:'red'}}>date is invalid</Text>}
				</View>
			</View>
			<View style={{flexDirection:'column'}}>
				<Input 
					label="Description" 
					inputConfig={{
						multiline:true,
						onChangeText:(value:string)=>inputHandler(value,'description'), 
						value:inputValues.description
					// autoCapitalize: 'sentences'
					// autoCorrect: true
					}}
				/>
				{!inputsValidation.description &&<Text style={{color:'red'}}>description is invalid</Text>}
			</View>
			<View style={Styles.buttons}>
				<Button style={Styles.button} mode="flat" onPress={cancel}>
					Cancel
				</Button>
				<Button mode="flat" style={Styles.button} onPress={confirmHandler}>
					{isEditing ? 'Update' : 'Add'}
				</Button>
			</View>
			
		</View>
	)
}

export default ExpenseForm
const Styles = StyleSheet.create({
	root:{
		marginTop:80
	},
	title:{
		fontSize:24,
		fontWeight:'bold',
		color:'white',
		marginVertical:24,
		textAlign:'center'
	},
	row:{
		flexDirection:'row',
		justifyContent:'space-between',
	},
	buttons: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	  },
	  button: {
		minWidth: 120,
		marginHorizontal: 8,
	  },
	  
})