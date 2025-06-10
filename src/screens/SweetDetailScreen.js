
import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const SweetDetailScreen = ({ route , navigation}) => {
    const { item } = route.params;

    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity style={{flexDirection: 'row',alignItems: 'center'}} onPress={() => navigation.goBack()}>
                <Image source={require('../assets/img/Expand_left.png')} style={styles.icon} />
                <Text style={styles.title}>{item.name}</Text>
            </TouchableOpacity>
            <Text style={styles.type}>{item.type}</Text>
            <Text style={styles.country}>{item.country}</Text>

            {item.image && (
                <Image source={{ uri: item.image }} style={styles.image} />
            )}

            <Text style={styles.description}>{item.note}</Text>

            {/* Карта */}
            {item.location && (
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: item.location.latitude,
                        longitude: item.location.longitude,
                        latitudeDelta: 0.01,
                        longitudeDelta: 0.01,
                    }}
                >
                    <Marker
                        coordinate={{
                            latitude: item.location.latitude,
                            longitude: item.location.longitude,
                        }}
                        title={item.name}
                        description={item.country}
                    />
                </MapView>
            )}

            <Text style={styles.detail}>{item.company}</Text>

            <Text style={styles.label}>Taste</Text>
            <Text style={styles.taste}>{item.taste}</Text>

            <Text style={styles.label}>Mood after</Text>
            <Text style={styles.stars}>{item.mood}</Text>
            <View style={{marginBottom: 50}}/>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#f9a9ec',
        paddingTop: 60,
        // alignItems: 'stretch',
    },
    title: {
        backgroundColor: '#fff26d',
        padding: 10,
        borderRadius: 16,
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 8,
    },
    type: {
        backgroundColor: '#fff26d',
        padding: 10,
        borderRadius: 16,
        marginBottom: 8,
    },
    country: {
        backgroundColor: '#fff26d',
        padding: 10,
        borderRadius: 16,
        marginBottom: 8,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 12,
        marginVertical: 16,
    },
    map: {
        width: '100%',
        height: 200,
        borderRadius: 12,
        marginBottom: 16,
    },
    description: {
        backgroundColor: '#fff26d',
        padding: 10,
        borderRadius: 16,
        marginBottom: 8,
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

export default SweetDetailScreen;
