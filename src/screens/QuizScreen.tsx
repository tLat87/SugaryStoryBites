import React, { useState } from 'react';
import {SafeAreaView, View, Text, TouchableOpacity, ScrollView, StyleSheet, Image} from 'react-native';

const QUESTIONS = [
    {
        question: 'What drink do you usually order at a café?',
        answers: [
            { option: 'A', text: 'Matcha latte or a fancy frappe' },
            { option: 'B', text: 'Espresso or black tea' },
            { option: 'C', text: 'Hot cocoa with marshmallows' },
        ],
    },
    {
        question: 'How do you feel about sweets?',
        answers: [
            { option: 'A', text: 'I love unique desserts and always look for something new' },
            { option: 'B', text: 'I can live without them, but I crave them sometimes' },
            { option: 'C', text: 'Sweets are my comfort and joy!' },
        ],
    },
    {
        question: 'Your perfect evening looks like:',
        answers: [
            { option: 'A', text: 'A spontaneous walk and grabbing ice cream' },
            { option: 'B', text: 'A good show and a bar of quality chocolate' },
            { option: 'C', text: 'Cozy vibes with a blanket, candles, and sweet tea' },
        ],
    },
    {
        question: 'You’re at a birthday party. Which cake do you go for?',
        answers: [
            { option: 'A', text: 'A vibrant cheesecake with a fun flavor' },
            { option: 'B', text: 'A rich, dark chocolate cake' },
            { option: 'C', text: 'A classic “Napoleon” or marshmallow dessert' },
        ],
    },
    {
        question: 'What do you order at a new coffee shop?',
        answers: [
            { option: 'A', text: 'Something trendy — surprise me!' },
            { option: 'B', text: 'A sugar-free coffee and a light treat' },
            { option: 'C', text: 'I’ll ask about the dessert of the day — I want something cozy' },
        ],
    },
    {
        question: 'How do you act at a party?',
        answers: [
            { option: 'A', text: 'Making new friends and trying everything' },
            { option: 'B', text: 'Observing and chatting with a few close people' },
            { option: 'C', text: 'Helping with snacks and creating a cozy vibe' },
        ],
    },
    {
        question: 'What describes you best?',
        answers: [
            { option: 'A', text: 'Adventurous, creative, spontaneous' },
            { option: 'B', text: 'Smart, stylish, independent' },
            { option: 'C', text: 'Warm, romantic, thoughtful' },
        ],
    },
    {
        question: 'How do you choose gifts?',
        answers: [
            { option: 'A', text: 'Unique and unexpected' },
            { option: 'B', text: 'Practical and elegant' },
            { option: 'C', text: 'Cute, meaningful, and full of heart' },
        ],
    },
    {
        question: 'How do you feel about routine?',
        answers: [
            { option: 'A', text: 'I get bored easily — I need change' },
            { option: 'B', text: 'I’m comfortable when I’m in control' },
            { option: 'C', text: 'I just want things to feel safe and cozy' },
        ],
    },
    {
        question: 'What’s your favorite childhood treat?',
        answers: [
            { option: 'A', text: 'Ice cream in a waffle cone' },
            { option: 'B', text: 'Dark chocolate' },
            { option: 'C', text: 'Marshmallows or sweet condensed milk' },
        ],
    },
];

const RESULTS = {
    A: {
        title: 'Pistachio Ice Cream',
        description:
            'You’re a fresh breeze of summer — bright, fun, and full of creativity! People love your energy and spontaneity.',
    },
    B: {
        title: 'Dark Chocolate with Sea Salt',
        description:
            'You’re deep, classy, and a little mysterious. You know what you want and you value quality.',
    },
    C: {
        title: 'Marshmallow Romantic',
        description:
            'You’re the definition of warmth and sweetness. Kind words, soft touches, and comfort are your superpowers.',
    },
};

export default function QuizScreen({navigation}) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState<string[]>([]);
    const [showResult, setShowResult] = useState(false);

    const handleAnswer = (option: string) => {
        const updatedAnswers = [...answers, option];
        if (currentQuestion + 1 === QUESTIONS.length) {
            setAnswers(updatedAnswers);
            setShowResult(true);
        } else {
            setAnswers(updatedAnswers);
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    const calculateResult = () => {
        const counts = { A: 0, B: 0, C: 0 };
        answers.forEach((ans) => {
            counts[ans as 'A' | 'B' | 'C']++;
        });
        const mostFrequent = Object.entries(counts).reduce((a, b) =>
            a[1] > b[1] ? a : b
        )[0];
        return RESULTS[mostFrequent as 'A' | 'B' | 'C'];
    };

    const restartQuiz = () => {
        setAnswers([]);
        setCurrentQuestion(0);
        setShowResult(false);
    };

    return (
        <SafeAreaView style={styles.container}>
            {showResult ? (
                <View style={styles.resultContainer}>
                    <Image source={require('../assets/img/Group86.png')} />
                    <Text style={styles.resultTitle}>{calculateResult().title}</Text>
                    <Text style={styles.resultText}>{calculateResult().description}</Text>
                    <TouchableOpacity onPress={restartQuiz} style={styles.button}>
                        <Text style={styles.buttonText}>🔄 Restart</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.pop(2)} style={[styles.button, { marginTop: 10 }]}>
                        <Text style={styles.buttonText}>⬅️ Back</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <ScrollView contentContainerStyle={styles.quizContainer}>
                    <Text style={styles.questionText}>{QUESTIONS[currentQuestion].question}</Text>
                    <Image
                        source={require('../assets/img/4c302bcf3fabc91d8db32a7340474e1d546aad90.png')}
                        style={styles.image}
                        resizeMode="contain"
                    />
                    {QUESTIONS[currentQuestion].answers.map((answer) => (
                        <TouchableOpacity
                            key={answer.option}
                            style={styles.answerButton}
                            onPress={() => handleAnswer(answer.option)}
                        >
                            <Text style={styles.answerText}>{`${answer.option}. ${answer.text}`}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#ffb3e6', padding: 20,},
    quizContainer: { flexGrow: 1, justifyContent: 'center',  paddingHorizontal: 50  },
    questionText: { fontSize: 26,textAlign: 'center', fontWeight: 'bold', marginBottom: 20, color: '#000' },
    answerButton: {
        backgroundColor: '#b366ff',
        padding: 15,
        borderRadius: 12,
        marginVertical: 10,
    },
    image: {
        width: 250,
        height: 250,
        marginBottom: -100,
    },
    answerText: { color: '#fff', fontSize: 16 },
    resultContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    resultTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 16,
        color: '#7e57c2',
        textAlign: 'center',
    },
    resultText: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 30,
        color: '#444',
    },
    button: {
        backgroundColor: '#80deea',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
    },
    buttonText: {
        color: '#004d40',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
    },
});
