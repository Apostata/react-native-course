# Styling components
**Styles in react native don't cascade, the child component will not inherit from parent**
View, Text, TextInput supports Styling
Button doesn't supports Styling

style = javascript Object
<View style={...someStyle}>some component</View>

**As Flutter, reactnative use Flexbox**
* FlexDirection: control the main axis (horixontaly if it is a row, or verticaly if it is a column)
* justifyContent: align elements in Main axis
* alignItems: align elements in Cross axis, default strectch(take the hole dimension of cross axis)
* flex: how much empty space the element will take (relative number) of the container element

## Inline Styling
example:
<Text style={{margin: 16, borderWidth:2, borderColor:'red', padding: 16}}>some text</Text>

## Stylesheet Object
example:
```tsx
export default function Component() {
  return (
    <View>
      <Text style={styles.dummyText}>Hello World!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  dummyText:{
	margin: 16, 
	borderWidth:2, 
	borderColor:'red', 
	padding: 16,
	}
});
```
## Platform style diferences
In `IOs` for sample, we can't use borderRadius in a <Text> component so in that cases wrap <Text> in a <View>
only In `Android` we can add ripple_effect to a <Pressable> element

```tsx
<View style={Styles.buttonOuterContainer}>
  <Pressable style={Styles.buttonInnerContainer} onPress={pressHandler} android_ripple={{color:'#640233'}}>
    <Text style={Styles.buttonText}>{children}</Text>
  </Pressable>
</View>
```

### StyleSheet diferences between Platforms
You can use the `Platform` API to select between Platforms, or create diferent components or files for each Platform, in this case all you nedd to do is put and `.{platformOS}.tsx`, Exemple, if you have a component named `Title`, create a file `Title.android.tsx` and `Title.ios.tsx`. The platfom sufix is not needed when importing:
```tsx
import Title from '../components/Title'
```

#### shadow
Pelo menos no android tem um bug estranho **QUANDO É O PRIMEIRO ELEMENTO DA TELA**, é necessário criar uma view com os estilos de sombra e uma view interna com margin aproximadamente 6 com o conteúdo de fato

```ts
const Styles = StyleSheet.create({
	inputContainer:{
		marginTop:100,
		marginHorizontal: 24,
		borderRadius: 10,
		overflow: 'scroll',
		zIndex:999,
		// width: Platform.OS === 'android'? 100 : 120
		...Platform.select({
			ios:{
				shadowColor: 'black', //ios only
				shadowOffset: { width: 0, height:2,}, //ios only
				shadowRadius: 6, //ios only
				shadowOpacity: 1, ///ios only
			},
			android:{
				elevation: 6, //android only
			}
		}),
	},
	inputContent:{
		margin:6,
		padding:16,
		backgroundColor:"#72063c",
		borderRadius: 10,
	}, 
  pressed:{
    opacity:0.75
  }
})
```

## Default app styles

### Expo app:
in `app.json` at the project root, you can set a default background color for your app:
```json
{
  "expo": {
    "name": "RNCourse",
    "slug": "RNCourse",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "backgroundColor":"#1e085a",
    ...
  }
}

```
#### StatusBar:
you can change the style of the statusBar in an expo app, in the root component(`App.tsx` or `App.js` ):
```tsx
<StatusBar style='light'/>
``` 
1. style: "auto" | "dark" | "inverted" | "light" = the theme of the status bar

#### Linear Gradient
`npx expo install expo-linear-gradient`

```tsx
import { LinearGradient } from 'expo-linear-gradient'
...
<LinearGradient colors={['#4e0329','#ddb52f']} style={Styles.rootScreen}>
```

### Global colors (theme)
Its a simple Object that you can import in any component file
```ts
export const Colors ={
	white: '#ffffff',
	black: '#000000',
	
	primary500:"#791647",
	primary600:'#640233',
	primary800:"#4e0329",
	
	accent500:'#ddb52f',
}

```

### Dynamic widths and Heights (Dimensions)
You can uses the device screen width to ajust your layout using `Dimensions`:
```tsx
import { View, StyleSheet, Platform, Dimensions } from "react-native"
import { View, Text, StyleSheet, Dimensions } from "react-native"
import { Colors } from "../../theme/colors"

export const NumberContainer = ({children}:{children:string})=>{
	return (
		<View style={styles.container}>
			<Text style={styles.number}>{children}</Text>
		</View>
	)
}

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
	container:{
		...
		padding: deviceWidth < 380? 12: 24,
		borderRadius: 8,
		margin:deviceWidth < 380? 12: 24,
		...
	},
	number:{
		...
		fontSize:deviceWidth < 380? 28: 36,
	}
})

```
### Ajust app for diferent orientations
You can use the hook `useWindowDimensions`, inside your component and then extends your style via props: 

```tsx
import React, { useState } from 'react'
import { TextInput, View, StyleSheet, Alert, Dimensions, useWindowDimensions } from 'react-native'
...

function StartGameScreen({pickANumber}:{pickANumber:(number:number)=>void}) {
	...
	const {height} = useWindowDimensions()

	...
	const marginTop = height < 380? 30: 100

  return (
	<View style={[Styles.root, {marginTop}]}>
		<Title>Guess my Number</Title>
		...
	</View>
  )
}

export default StartGameScreen

const Styles = StyleSheet.create({
	root:{
		flex: 1,
		justifyContent: 'center',
		alignItems:'center',
	},
	...
})

```

### Keyboard problems
Some devices may need ajustments to layout when keyboard is open when you have a input component, that is the function of the `KeyboardAvoidingView`. To more proper behavior, wrap your screen with `KeyboardAvoidingView` and wrap all with `ScrollView`:

```tsx

...
import { TextInput, View, StyleSheet, Alert, KeyboardAvoidingView, ScrollView, useWindowDimensions } from 'react-native'
...

function StartGameScreen({pickANumber}:{pickANumber:(number:number)=>void}) {
	...

  return (
	<ScrollView style={Styles.screen}>
		<KeyboardAvoidingView style={Styles.screen} behavior='position'>
			<View style={[Styles.root, {marginTop}]}>
				...
				<Card >
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
						...
					</>
				</Card>
			</View>
		</KeyboardAvoidingView>
	</ScrollView>
  )
}

export default StartGameScreen

const Styles = StyleSheet.create({
	screen:{
		flex: 1
	},
	...
})
```