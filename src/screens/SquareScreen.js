import React, { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const ColorScreen = () => {
    return (
        <View>
            <ColorCounter />
            <ColorCounter />
            <ColorCounter />
        </View>
    )
}

const styles = StyleSheet.create(
    {
       
    }
);

export default ColorScreen;