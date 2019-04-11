import  React, {Component, Fragment as F} from 'react';
import {View, Text, Image, Button} from 'react-native';

class PickLocation extends Component{

    render(){
        return(
            <F>
                <View style= {this.props.style.placeholder} >
                    <Text>
                        Map
                    </Text>    
                </View>
                <View style={this.props.style.button}>
                    <Button title="Localize-me" onPress={()=>alert('Pegar Localização!')}/>
                </View>
            </F>    
        )
    }
}

export default PickLocation;