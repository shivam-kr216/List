import React, { useState } from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native';

export default function TextScreen() {
    const [password, setPassword] = useState("");
    return (
        <View>
            <Text>Enter Password: </Text>

            <TextInput style={ styles.input } onChangeText={ (newValue) => { setName(newValue) }}
                autoCapitalize = "none"
                autoCorrect = { false }    //By default its true
                placeholder= "Enter name"
                value={password}
            />

            { password.length > 4 ? <Text>My name is { password } </Text>  : null }
        </View>
    )
}

const styles = StyleSheet.create(
    {
        input: {
            margin: 15,
            borderColor: black,
            borderWidth: 1,
            padding: 8
        }
    }
);
