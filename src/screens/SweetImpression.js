import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView,
} from 'react-native';
import { useSelector } from 'react-redux';

const SweetImpression = ({ navigation }) => {
    const impressions = useSelector(state => state.sweetImpressions);
    console.log('impressions: ', impressions);
    return (
        <ScrollView style={styles.scrollContainer}>
            <Text style={styles.header}>My sweet impressions</Text>

            <TouchableOpacity
                style={styles.addButton}
                onPress={() => navigation.navigate('AddSweetImpressionScreen')}
            >
                <Text style={styles.plus}>+</Text>
            </TouchableOpacity>

            <Image
                source={require('../assets/img/437162ef2fee90899af31700d9e32678e6eef5f6.png')}
                style={{ width: 200, height: 200, alignSelf: 'center' }}
            />

            {impressions.map(item => (
                <View key={item.id} style={styles.card}>
                    {item.image && (
                        <Image source={{ uri: item.image }} style={styles.cardImage} />
                    )}
                    <TouchableOpacity   onPress={() => navigation.navigate('SweetDetailScreen', { item })} style={styles.cardFooter}>
                        <View style={styles.cardInfo}>
                            <Text style={styles.cardTitle}>{item.name}</Text>
                            <Text style={styles.cardDate}>{item.date}</Text>
                        </View>
                        <Text style={styles.cardScore}>{item.score}</Text>
                    </TouchableOpacity>
                </View>
            ))}
            <View style={{marginBottom: 120}}/>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        paddingTop: 50,
        // marginBottom: 1000,
        backgroundColor: '#f9a9ec',
        padding: 16,
        flex:1,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    addButton: {
        backgroundColor: '#fff26d',
        padding: 12,
        borderRadius: 20,
        alignItems: 'center',
        marginBottom: 16,
    },
    plus: {
        fontSize: 28,
        fontWeight: 'bold',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 20,
        overflow: 'hidden',
        marginBottom: 16,
        borderWidth: 2,
        borderColor: '#f9a9ec',
    },
    cardImage: {
        width: '100%',
        height: 180,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#ffe680',
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    cardInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        marginRight: 8,
    },
    cardDate: {
        fontSize: 14,
        color: '#333',
    },
    cardScore: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#f18b01',
    },
});

export default SweetImpression;
