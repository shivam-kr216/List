import React, { useReducer } from 'react';
import { View, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {

    switch (action.colorToChange) {

        case 'red':
            return state.red + action.amount > 255 || state.red + action.amount < 0 
                ? state
                : { ...state, red: state.red + action.amount };

        case 'green':
            return state.green + action.amount > 255 || state.green + action.amount < 0
                ? state
                : { ...state, green: state.green + action.amount };

        case 'blue':
            return (state.blue + action.amount > 255 || state.blue + action.amount < 0)
                ? state
                : { ...state, blue: state.blue + action.amount };

        default:
            return state;

    }
}

const SquareScreen = () => {
    /*    const [red, setRed] = useState(0);
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
        }*/

    //Initially state =  { red: 0, green: 0, blue: 0 }
    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
    const { red, green, blue } = state;
    //console.log(state)
    return (
        <View>

            <ColorCounter
                onIncrease={() => {
                    dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT })
                }}
                onDecrease={() => {
                    dispatch({ colorToChange: 'red', amount: -1 * COLOR_INCREMENT })
                }}
                color="Red"
            />

            <ColorCounter
                onIncrease={() => {
                    dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT })
                }}
                onDecrease={() => {
                    dispatch({ colorToChange: 'blue', amount: -1 * COLOR_INCREMENT })
                }}
                color="Blue"
            />

            <ColorCounter
                onIncrease={() => {
                    dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT })
                }}
                onDecrease={() => {
                    dispatch({ colorToChange: 'green', amount: -1 * COLOR_INCREMENT })
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

export default SquareScreen;