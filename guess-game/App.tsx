// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import StartGameScreen from './screens/start-game-screen';
import { useEffect, useState } from 'react';
import GameScreen from './screens/game-screen';
import { Colors } from './theme/colors';
import GameOverScreen from './screens/game-over-screen';
import {useFonts} from 'expo-font'
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';

export default function App() {

  const [userNumber, setUserNumber] = useState<number | undefined>()
  const [rounds, setRounds] = useState<number | undefined>()
  const [gameOver, setGameOver] = useState<boolean>(true)

  SplashScreen.preventAutoHideAsync()
  .then((result:any) =>
    console.log(`SplashScreen.preventAutoHideAsync() succeeded: ${result}`),
  )
  .catch(console.warn)

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })

  const pickAnumber = (number:number)=>{
    setUserNumber(number)
    setGameOver(false)
  }

  const gameOverHandler =(rounds:number)=>{
    setGameOver(true)
    setRounds(rounds)
  }

  const restartGameHandler = ()=>{
    setUserNumber(undefined);
    setRounds(undefined);
  }

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

  let screen = <StartGameScreen pickANumber={pickAnumber}/>
  if(userNumber) screen = <GameScreen pickedNumber={userNumber} setGameOver={gameOverHandler} />
  if(gameOver && userNumber) screen = <GameOverScreen number={userNumber as number} rounds={rounds as number} restartGame={restartGameHandler}/>

  return (
    <>
    <StatusBar style='light'/>
    <LinearGradient colors={[Colors.primary800, Colors.accent500]} style={Styles.rootScreen}>
      <ImageBackground 
        source={require('./assets/images/background.png')} 
        resizeMode="cover" style={Styles.rootScreen} 
        imageStyle={Styles.imageBackgroundStyle}
      >
        <SafeAreaView style={Styles.rootScreen}>
        {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
    </>
  );
}

const Styles = StyleSheet.create({
  rootScreen:{
    flex:1
  },
  imageBackgroundStyle:{
    opacity: 0.15
  }
});
