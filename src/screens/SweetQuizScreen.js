import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function SweetQuizScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                QUIZ: “What Kind of Sweet Treat Are You?”
            </Text>

            <Image
                source={require('../assets/img/4c302bcf3fabc91d8db32a7340474e1d546aad90.png')} // Замените на путь к вашему изображению
                style={styles.image}
                resizeMode="contain"
            />

            <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('QuizScreen')}}>
                <Text style={styles.buttonText}>let’s go!</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffaee4', // розовый фон
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 40,
    },
    title: {
        fontSize: 24,
        color: '#000',
        textAlign: 'center',
        fontWeight: 'bold',
        paddingHorizontal: 20,
    },
    image: {
        width: 250,
        height: 250,
    },
    button: {
        backgroundColor: '#b285ff',
        paddingVertical: 15,
        paddingHorizontal: 60,
        borderRadius: 30,
    },
    buttonText: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
