# React native

## Environment Setup
Official doc at: [React Native Setup](https://reactnative.dev/docs/environment-setup)
### Expo CLI (recomended)
Third-party service free
Managed app development
Vey convenient, less friction (provide some packages and tools to help)
You can leave Expo ecosystem any time ('eject') to React native CLI

`yarn create expo-app <nome_do_projeto>`
ou 
`npx create-expo-app --template`

with typescript
`npx create-expo-app -t expo-template-blank-typescript`

updating expo cli:
`expo-cli upgrade`

cleaning expo cache
`expo -c`

### React Native CLI
By the react native team e community
Bare-bone development (you need to set up way more)
Less convenient features
Easier integration with native source code


### Add typescript to an exist project
`touch tsconfig.json`
change files `.js` to `.tsx`
example:
`mv App.js App.tsx`

run `npx expo start` this will install all dependencies you need to work with typescript

### Create a new project with typescript
`npx create-expo-app -t expo-template-blank-typescript`

## Running app
### on Real Device
install `expo` in your device from the play store ou apple store
run `yarn start` or `npm start`
scan qrcode

### in a Emulator
Install android studio (linux and windows) or Xcode (MacOS)
Create an Emulator
run `yarn start` or `npm start`

## Core components
`App.tsx` or `App.js` é o componente principal do app

<Text>only text</Text>
<View>another components</View>
<Button title="text" />

## Scrolling components

### ScrollView
To make an area scrollable you need to add a container an then inside it you wrap your list with a <ScrollView> component.
for a long list it is best to use <FlatList>

### FlatList
The FlatList is a better option for a list with a large amount of data, FlatList render itens on demand, diferent than ScrollView. Nonetheless, it comes with a little ore configuration:
```tsx
<FlatList 
  data={courseGoals} 
  keyExtractor={(item, index)=>item.id}
  renderItem={itemData=>{
    return (
        <View style={styles.goalItem}>
            <Text style={styles.goalItemText}>{itemData.item.text}</Text>
        </View>
      )
    }}
/>

```
1. data is the dataSource of your list
2. renderItem is a function that renders a component for each item in tbe data
3. keyExtractor, is a function that defines a key for each item in the list. For default if every item in data has a key parameter, you don't need to use this function however, if you use a direfent parameter as a key then you will need this function to map it. 
4. Optionaly, you can do a grid layot, passing the `numColumns` attribute with the number o columns you want

## Pressing and Touch events

## Pressable
In newer versions of react native simple wrap the components you want with a <Pressable onPress={onpressHandlerFunction}>

The <Button> component can't use a custom style, in that case we would need to create a custom Button component with te Pressable component if you need much diferent styles,
if you need only to set width or position, just wrap then in a <View>, and then style that view


## Modals
A pre-build component to use modals, the <Modal> component.
important attributes of modal:
1. visible: bolean= if modal isVisible or not 
2. animationType : "fase"|"none"| "slide"= the modal anitation

## Images
A pre-build component to use images, thi <Image> component.
important attributes of image:
1. source: the image source 
2. style: some custom style
```tsx
<Image style={styles.image} source={require('../assets/images/goal.png')}/>
```

## Debugging
With `CTRL+M` on android or `CTRL+D` on IOs (on the emulator), you can see the menu, than um can debug your app in a browser tab form example, when you click on `debug remote js`. With this tool you can inspect a Network tabs and others things, including using react-devtools

### Using React-devtools
installing :`npm i -g react-devtools` 
Running: `react-devtools` on terminal
in the emulator, open the menu an click on `degub remote js`


## Use an assets image
To render an asset image must import the image using `require` and then point the relative path to the image, Example:

```tsx
<ImageBackground 
  source={require('./assets/background.png')} 
  resizeMode="cover" style={Styles.rootScreen} 
  imageStyle={Styles.imageBackgroundStyle}
>
  <SafeAreaView style={Styles.rootScreen}>
    {screen}
  </SafeAreaView>
</ImageBackground>

```
## Expo app
### Using Icons
You can use Icons in react expo app simple by importing 
```tsx
import { Ionicons} from '@expo/vector-icons

... 

<Ionicons name="md-add" size={24} color={Colors.white}/>

```
in this can we opted to use `Ionicons` but you can use anyone you want, see the docs: [Expo Icons documentation](https://docs.expo.dev/guides/icons/)

### adding custom fonts
`npx expo install expo-font`
in App.tsx file, use `useFonts` hook and import your fonts from `assets/fonts` folder

```tsx
import {useFonts} from 'expo-font'
...
 
export default function App() {
...
 useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
  ...
}

```

#### Await fonts to be loaded and then show screen
`npx expo install expo-splash-screen`
```tsx
export default function App() {

...
  SplashScreen.preventAutoHideAsync()
  .then((result:any) =>
    console.log(`SplashScreen.preventAutoHideAsync() succeeded: ${result}`),
  )
  .catch(console.warn)

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })

...

  // Watch for fonts to be loaded, then hide the splash screen
  useEffect(() => {
    async function hideSplashScreen() {
      await SplashScreen.hideAsync()
    }
    if (fontsLoaded) {
      hideSplashScreen()
    }
  }, [fontsLoaded])

  // Initally return null 
  if (!fontsLoaded) {
    return null
  }

  ...
  return (
    <LinearGradient colors={[Colors.primary800, Colors.accent500]} style={Styles.rootScreen}>
      <ImageBackground 
        source={require('./assets/background.png')} 
        resizeMode="cover" style={Styles.rootScreen} 
        imageStyle={Styles.imageBackgroundStyle}
      >
        <SafeAreaView style={Styles.rootScreen}>
        {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
    
  );
}
```