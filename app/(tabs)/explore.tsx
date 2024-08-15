import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function TabTwoScreen() {
    return (
        <View style={[styles.container]}>
            <Text style={styles.text}>Hello </Text>
            <TouchableOpacity>
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
