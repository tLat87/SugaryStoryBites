import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {addSweet, removeSweet} from '../redux/slices/savedSweetsSlice';

const FerreroRocherScreen = ({ route, navigation }) => {
    const { sweet } = route.params;
    const dispatch = useDispatch();

    const savedSweets = useSelector(state => state.savedSweets);
    const isSaved = savedSweets.some(item => item.name === sweet.name);

    const toggleSave = () => {
        if (isSaved) {
            dispatch(removeSweet(sweet));
        } else {
            dispatch(addSweet(sweet));
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.content}>
                <TouchableOpacity
                    style={styles.header}
                    onPress={() => navigation.goBack()}
                >
                    <Image source={require('../assets/img/Expand_left.png')} style={styles.icon} />
                    <Text style={styles.title}>{sweet.name}</Text>
                </TouchableOpacity>

                <Image source={sweet.image} style={styles.image} />

                <View style={styles.card}>
                    <Text style={styles.label}><Text style={styles.bold}>Type:</Text> {sweet.type}</Text>
                    <Text style={styles.label}><Text style={styles.bold}>Country:</Text> {sweet.Country}</Text>
                    <Text style={styles.label}><Text style={styles.bold}>Flavor:</Text> {sweet.Flavor}</Text>
                    <Text style={styles.label}><Text style={styles.bold}>Category:</Text> {sweet.Category}</Text>
                    <Text style={styles.label}><Text style={styles.bold}>Popularity:</Text> {sweet.Popularity}</Text>
                </View>
            </ScrollView>

            <View style={styles.footer}>
                <TouchableOpacity onPress={toggleSave}>
                    <Image
                        source={
                            isSaved
                                ? require('../assets/img/heart-svgrepo-com.png')
                                : require('../assets/img/fgvhijo.png')
                        }

                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fda7f8',
        paddingTop: 40,
    },
    content: {
        padding: 20,
        paddingBottom: 100,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    icon: {
        width: 24,
        height: 24,
        marginRight: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        borderRadius: 12,
        marginBottom: 20,
    },
    card: {
        backgroundColor: '#fff066',
        borderRadius: 12,
        padding: 15,
    },
    label: {
        fontSize: 15,
        marginBottom: 8,
    },
    bold: {
        fontWeight: 'bold',
    },
    footer: {
        position: 'absolute',
        bottom: 30,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
});

export default FerreroRocherScreen;
