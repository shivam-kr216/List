import React, { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const ColorScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const setColor = (color, change) => {
        switch (color) {
            case 'red':
               red + COLOR_INCREMENT > 255 || red + COLOR_INCREMENT < 0 ? null : setRed(red + change);
                return;

            case 'blue':
                blue + COLOR_INCREMENT > 255 || blue + COLOR_INCREMENT < 0 ? null : setBlue(blue + change);
                return;

            case 'green':
                green + COLOR_INCREMENT > 255 || green + COLOR_INCREMENT < 0 ? null : setGreen(green + change);
                return;
            default:
                return;
        }
    }

    return (
        <View>

            <ColorCounter
                onIncrease={() => {
                    setColor("red", COLOR_INCREMENT);
                }}
                onDecrease={() => {
                    setColor("red", -1 * COLOR_INCREMENT);
                }}
                color="Red"
            />

            <ColorCounter
                onIncrease={() => {
                    setColor("blue", COLOR_INCREMENT);
                }}
                onDecrease={() => {
                    setColor("blue", -1 * COLOR_INCREMENT);
                }}
                color="Blue"
            />

            <ColorCounter
                onIncrease={() => {
                    setColor("green", COLOR_INCREMENT);
                }}
                onDecrease={() => {
                    setColor("green", -1 * COLOR_INCREMENT);
                }}
                color="Green"
            />

            <View style={{ height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})` }} />

        </View>
    )
}

const styles = StyleSheet.create(
    {

    }
);

export default ColorScreen;