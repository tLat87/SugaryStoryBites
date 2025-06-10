import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Image,
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { useDispatch } from 'react-redux';
import { addSweetImpression } from '../redux/slices/sweetImpressionsSlice';
import MapView, { Marker } from 'react-native-maps';

const AddSweetImpressionScreen = ({ navigation }) => {
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [country, setCountry] = useState('');
    const [note, setNote] = useState('');
    const [date, setDate] = useState('');
    const [location, setLocation] = useState(null);
    const [region, setRegion] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    });
    const [company, setCompany] = useState('');
    const [taste, setTaste] = useState(null);
    const [mood, setMood] = useState(0);
    const [image, setImage] = useState(null);

    const pickImage = () => {
        const options = {
            mediaType: 'photo',
            quality: 1,
            includeBase64: false,
        };

        launchImageLibrary(options, response => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.errorCode) {
                console.log('ImagePicker Error: ', response.errorMessage);
            } else if (response.assets && response.assets.length > 0) {
                setImage(response.assets[0].uri);
            }
        });
    };

    const handleMapPress = (e) => {
        const { latitude, longitude } = e.nativeEvent.coordinate;
        setLocation({ latitude, longitude });
    };

    const handleSubmit = () => {
        dispatch(addSweetImpression({
            id: Date.now().toString(),
            name,
            type,
            country,
            note,
            date,
            location,
            company,
            taste,
            mood,
            image,
        }));
        navigation.goBack();
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.header}>My sweet impressions</Text>
            <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={setName} />
            <TextInput style={styles.input} placeholder="Selected type" value={type} onChangeText={setType} />
            <TextInput style={styles.input} placeholder="Country of origin" value={country} onChangeText={setCountry} />

            <TouchableOpacity style={styles.imageBox} onPress={pickImage}>
                {image ? <Image source={{ uri: image }} style={styles.image} /> : <Text style={styles.addImage}>+</Text>}
            </TouchableOpacity>

            <TextInput
                style={styles.input}
                placeholder="Note"
                value={note}
                onChangeText={setNote}
                multiline
            />

            <TextInput style={styles.input} placeholder="Date" value={date} onChangeText={setDate} />

            <View style={styles.mapContainer}>
                <Text style={{ marginBottom: 6 }}>Tap to choose location</Text>
                <MapView
                    style={styles.map}
                    initialRegion={region}
                    onPress={handleMapPress}
                >
                    {location && <Marker coordinate={location} title="Selected Location" />}
                </MapView>
                {location && (
                    <Text style={{ marginTop: 6 }}>
                        Selected: {location.latitude.toFixed(5)}, {location.longitude.toFixed(5)}
                    </Text>
                )}
            </View>

            <TextInput style={styles.input} placeholder="Company" value={company} onChangeText={setCompany} />

            <View style={styles.ratingBox}>
                <Text>Taste</Text>
                <View style={styles.stars}>
                    {[1, 2, 3, 4, 5].map(num => (
                        <TouchableOpacity key={num} onPress={() => setTaste(num)}>
                            <Text style={taste >= num ? styles.starActive : styles.star}> {num} </Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <Text>Mood after</Text>
                <View style={styles.stars}>
                    {[1, 2, 3, 4, 5].map(num => (
                        <TouchableOpacity key={num} onPress={() => setMood(num)}>
                            <Text style={mood >= num ? styles.starActive : styles.star}>★</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>

            <TouchableOpacity style={styles.doneButton} onPress={handleSubmit}>
                <Text style={styles.doneText}>Done</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 50,
        padding: 16,
        backgroundColor: '#f9a9ec',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    input: {
        backgroundColor: '#fff26d',
        borderRadius: 12,
        padding: 12,
        marginBottom: 12,
    },
    imageBox: {
        height: 150,
        backgroundColor: '#fff26d',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12,
        borderRadius: 12,
    },
    addImage: {
        fontSize: 36,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 12,
    },
    mapContainer: {
        height: 250,
        marginBottom: 12,
        borderRadius: 12,
        overflow: 'hidden',
        backgroundColor: '#fff',
        padding: 6,
    },
    map: {
        flex: 1,
        borderRadius: 12,
    },
    ratingBox: {
        backgroundColor: '#f9d3f3',
        padding: 12,
        borderRadius: 12,
        marginBottom: 12,
    },
    stars: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 8,
    },
    star: {
        fontSize: 24,
        color: '#ccc',
    },
    starActive: {
        fontSize: 24,
        color: '#000',
    },
    doneButton: {
        backgroundColor: '#f983f3',
        padding: 16,
        alignItems: 'center',
        borderRadius: 16,
    },
    doneText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#444',
    },
});

export default AddSweetImpressionScreen;
