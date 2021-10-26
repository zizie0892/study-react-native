import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import ColorCounter from "../components/ColorCounter";

const SquareScreen = () => {
    return (
    <View>
        <ColorCounter />
        <ColorCounter />
        <ColorCounter />
    </View>
    );
};

const styles =  StyleSheet.create({});

export default SquareScreen;