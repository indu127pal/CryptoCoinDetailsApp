import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
    return (
        <View style={headerContainer}>
            <Text style={header}>
                Crypto Currency App
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    headerContainer: {
        display: "flex",
        marginTop: 30,
        alignItems: "center",
        marginBottom: 8,
        zIndex: 2,
        backgroundColor: 'transparent',
    },
    header: {
        fontWeight: "bold",        
        fontSize: 25,
        color: "black"
    }
})

const { headerContainer, header } = styles;


export default Header;