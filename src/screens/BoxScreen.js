import React from 'react'
import { Text, View, StyleSheet} from 'react-native';

export default function TextScreen() {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>Child #1</Text>
            <Text style={styles.textStyle}>Child #2</Text>
            <Text style={styles.textStyle}>Child #3</Text>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        viewStyle: {
            borderColor: black,
            borderWidth: 1,
            alignItems: 'center',
            flexDirection: 'row'
        },
        textStyle: {
            borderWidth: 1,
            borderColor: red,
            margin: 20
        }
    }
);
