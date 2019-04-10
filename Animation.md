# Animando
````
import {Animated, View, Text, StyleSheet} from 'react-native';

class Exemplo extends Component{
     state = {
        ...
        removeAnim : new Animated.Value(1)
    };


     placesSearch = () =>{
        Animated.timing(this.state.removeAnim, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true
        }).start()
    }


    render(){
        let {removeAnim} = this.state

        return(
            <Animated.View style={{
                opacity: removeAnim,
                transform:[
                    {scale: removeAnim.interpolate({
                        inputRange:[0, 1], //os valores reais utilizados
                        outputRange:[12, 1] //valores transformados
                    })}
                ]
            }}>
                <TouchableOpacity onPress={this.placesSearch}>
                    <View style={styles.searchButton}>
                        <Text style={styles.searchButtonText}>Buscar lugares</Text>
                    </View>
                </TouchableOpacity>
            </Animated.View>
        )
    }
}
````

## links uteis:
1. Dimensions in React Native Apps (official docs): https://facebook.github.io/react-native/docs/height-and-width.html

2. Animations in React Native Apps (official docs): https://facebook.github.io/react-native/docs/animations.html