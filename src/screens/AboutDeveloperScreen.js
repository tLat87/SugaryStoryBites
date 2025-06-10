import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';

const AboutDeveloperScreen = ({ navigation }) => {
    const handleOpenGitHub = () => {
        Linking.openURL('https://github.com/yourusername');
    };

    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.goBack()}>
                <Image source={require('../assets/img/Expand_left.png')} style={styles.icon} />
                <Text style={styles.title}>About Developer</Text>
            </TouchableOpacity>

            <Image source={require('../assets/img/Group86.png')} style={styles.image} />

            <Text style={styles.description}>
                This app was created just for fun and to practice React Native skills. It combines playful design with hands-on coding to explore mobile UI ideas and features.
            </Text>

            <Text style={styles.detail}>Email: SugaryStoryBites@gmail.com</Text>
            <Text style={styles.detail}>Country: USA</Text>

            <Text style={styles.label}>Навыки</Text>
            <Text style={styles.taste}>React Native, JavaScript, TypeScript, Firebase, REST APIs</Text>

            <Text style={styles.label}>Настроение от кода</Text>
            <Text style={styles.stars}>⭐⭐⭐⭐⭐</Text>


            <View style={{ marginBottom: 50 }} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#f9a9ec',
        paddingTop: 60,
    },
    title: {
        backgroundColor: '#fff26d',
        padding: 10,
        borderRadius: 16,
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 8,
    },
    icon: {
        width: 24,
        height: 24,
        marginRight: 8,
    },
    image: {
        width: '100%',
        // height: 200,
        borderRadius: 12,
        marginVertical: 16,
    },
    description: {
        backgroundColor: '#fff26d',
        padding: 10,
        borderRadius: 16,
        marginBottom: 8,
        fontSize: 16,
    },
    detail: {
        backgroundColor: '#fff26d',
        padding: 10,
        borderRadius: 16,
        marginBottom: 8,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
    },
    taste: {
        backgroundColor: '#fff26d',
        padding: 10,
        borderRadius: 16,
        marginBottom: 8,
        fontSize: 18,
        color: 'green',
        textAlign: 'center',
    },
    stars: {
        backgroundColor: '#fff26d',
        padding: 10,
        borderRadius: 16,
        fontSize: 22,
        textAlign: 'center',
        color: '#ffcc00',
    },
});

export default AboutDeveloperScreen;
