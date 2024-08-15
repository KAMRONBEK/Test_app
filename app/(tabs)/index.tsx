import useRandomColorGenerate from '@/hooks/useRandomColorGerenerate';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
    const { color, generateColor } = useRandomColorGenerate();

    return (
        <View style={[styles.container, { backgroundColor: color }]}>
            <Text style={styles.text}>Hello</Text>
            <TouchableOpacity onPress={generateColor}>
                <Text>Change bg-color</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        marginBottom: 20,
    },
});
