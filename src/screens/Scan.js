import React, {useEffect} from 'react'
import { View, Image, StyleSheet, Text } from 'react-native';
import Logo from "../assets/codemi.png";

const Scan =  ({navigation}) => {
    return (
        <View style={styles.background}>
            {/* <Image source={Logo} /> */}
            <Text style={styles.text}>
                Welcome user
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
    }, 
    text: {
        color: '#000000',
        fontSize: 20,
        fontWeight: 'bold'
    }
})

export default Scan;
