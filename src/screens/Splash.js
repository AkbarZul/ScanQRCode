import React, {useEffect} from 'react'
import { View, StyleSheet, Text } from 'react-native';

const Splash =  ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Main')
        }, 3000)
    }, [navigation])
    return (
        <View style={styles.background}>
            <Text>
                Cobain Splash & Navigation
            </Text>
        </View>
    )
}

export default Splash;


const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green',
    }
})
