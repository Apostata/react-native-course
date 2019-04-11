import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Header = props =>(
    <Text 
        {...props}
        style={[Styles.header, props.style]}
    >{props.children}</Text>
);

export default Header;
const Styles = StyleSheet.create({
    header:{
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        color: "black"
    },
});