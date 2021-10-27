import React, {useReducer} from "react";
import {View, Text, StyleSheet} from 'react-native';
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;
const reducer = (state, action) => {
    // state === {red: number, green:number, blue: number}
    //action === {colorTochange: 'red' || 'green' || 'blue', amount: 15 || -15}
    switch(action.colorToChange){
        case 'red':
            //never going to do: state.red
            return {...state, red:state.red + action.amount};
        case 'green':
            return {...state, green:state.green + action.amount};
        case 'blue':
            return {...state, blue:state.blue + action.amount};
        default:
            return state;
    }
};

const SquareScreen = () => {
    /*const [red,setRed] = useState(0);
    const [green,setGreen] = useState(0);
    const [blue,setBlue] = useState(0); 


    const setColor = (color, change) => {
        // color === 'red', 'green', 'blue'
        // change === +15, -15
        switch (color){
            case 'red':
                red + change > 255 || red + change < 0 ? null : setRed(red + change);
                return;
            case 'green':
                green + change > 255 || green + change < 0 ? null : setGreen(green + change);
                return;
            case 'blue':
                blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
                return;
        }
    }; -----using Hooks*/

    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});
    const {red, green, blue} = state;

    return (
    <View>
        <ColorCounter 
            onIncrease={() => /*setColor('red', COLOR_INCREMENT)*/dispatch({colorToChange: 'red', amount:COLOR_INCREMENT})}
            onDecrease={() => /*setColor('red', -1 * COLOR_INCREMENT)*/dispatch({colorToChange: 'red', amount:-1 * COLOR_INCREMENT})}
            color="Red" 
        />
        <ColorCounter 
            onIncrease={() => /*setColor('green',  COLOR_INCREMENT)*/dispatch({colorToChange: 'green', amount:COLOR_INCREMENT})}
            onDecrease={() => /*setColor('green', -1 * COLOR_INCREMENT)*/dispatch({colorToChange: 'green', amount:-1 *COLOR_INCREMENT})}
            color="Green" 
        />
        <ColorCounter 
            onIncrease={() => /*setColor('blue', COLOR_INCREMENT)*/dispatch({colorToChange: 'blue', amount:COLOR_INCREMENT})}
            onDecrease={() => /*setColor('blue', -1 * COLOR_INCREMENT)*/dispatch({colorToChange: 'blue', amount:-1 * COLOR_INCREMENT})}
            color="Blue"
        />
        <View style={{
            height: 150, 
            width: 150, 
            backgroundColor:`rgb(${red},${green},${blue})`
        }} />
    </View>
    );
};

const styles =  StyleSheet.create({});

export default SquareScreen;