import React, { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const ConterScreen = () => {
    const [counter, setCounter] = useState(0);
    return (
        <View>
            <Button title="Increase" onPress = { () => {
                setCounter(counter + 1)
            } } />
            <Button title="Decrease" onPress = { () => {
                setCounter(counter - 1)
            } } />
            <Text>Current Count: {counter}</Text>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        textStyle: {
            marginVertical: 50
        }
    }
);

export default ConterScreen;