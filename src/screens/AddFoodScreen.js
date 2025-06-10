import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import * as ImagePicker from 'react-native-image-picker';
import {addFood} from '../redux/slices/foodSlice';

const AddFoodScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const [image, setImage] = useState(null);
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [country, setCountry] = useState('');
    const [flavor, setFlavor] = useState('');
    const [category, setCategory] = useState('');
    const [popularity, setPopularity] = useState('');

    const pickImage = () => {
        ImagePicker.launchImageLibrary({ mediaType: 'photo' }, (response) => {
            if (!response.didCancel && !response.errorCode) {
                setImage(response.assets[0].uri);
            }
        });
    };

    const handleAdd = () => {
        const newFood = {
            id: Date.now().toString(),
            name,
            image,
            type,
            country,
            flavor,
            category,
            popularity,
        };
        dispatch(addFood(newFood));
        navigation.goBack();
    };


    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Name:"
                value={name}
                onChangeText={setName}
                style={styles.input}
            />

            <TouchableOpacity style={styles.imageBox} onPress={pickImage}>
                {image ? (
                    <Image source={{ uri: image }} style={styles.image} />
                ) : (
                    <Text style={styles.plusText}>+</Text>
                )}
            </TouchableOpacity>

            <View style={styles.infoBox}>
                <TextInput placeholder="Type:" value={type} onChangeText={setType} style={styles.item} />
                <TextInput placeholder="Country:" value={country} onChangeText={setCountry} style={styles.item} />
                <TextInput placeholder="Flavor:" value={flavor} onChangeText={setFlavor} style={styles.item} />
                <TextInput placeholder="Category:" value={category} onChangeText={setCategory} style={styles.item} />
                <TextInput placeholder="Popularity:" value={popularity} onChangeText={setPopularity} style={styles.item} />
            </View>

            <TouchableOpacity style={styles.doneButton} onPress={handleAdd}>
                <Text style={styles.doneText}>Done</Text>
            </TouchableOpacity>
        </View>
    );
};

export default AddFoodScreen;

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#ffb3e6', padding: 20, paddingTop: 50 },
    input: {
        backgroundColor: '#ffc6f9',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
    },
    imageBox: {
        height: 150,
        backgroundColor: '#a388f9',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: { width: '100%', height: '100%', borderRadius: 10 },
    plusText: { fontSize: 40, color: '#333' },
    infoBox: {
        backgroundColor: '#f6e56f',
        borderRadius: 10,
        marginTop: 10,
        padding: 10,
    },
    item: {
        backgroundColor: '#fff1a6',
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 20,
        marginVertical: 4,
    },
    doneButton: {
        backgroundColor: '#ff8be6',
        marginTop: 20,
        padding: 15,
        alignItems: 'center',
        borderRadius: 12,
    },
    doneText: { color: '#555', fontWeight: 'bold' },
});
