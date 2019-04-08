import React, {Component, Fragment as F} from 'react';
import {View, Image, Button, StyleSheet} from 'react-native';
import ImagePlaceholder from '../../assets/images/beautiful-place.jpg';
let stylesButtom;

class PickImage extends Component{
   
    render(){
        return (
            <F>
                <View style= {this.props.style.placeholder}>
                    <Image source={ImagePlaceholder} style={styles.previewImage}/>
                </View>
                <View style={this.props.style.button}>
                    <Button title="Selecioe uma imagem" onPress={()=>alert('Pegar imagem!')}/>
                </View>
            </F>
        )
    }
}

const styles = StyleSheet.create({
    
    previewImage:{
        width: "100%",
        height: "100%"
    },
});

export default PickImage;
