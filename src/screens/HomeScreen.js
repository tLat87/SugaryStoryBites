import React, {useState} from 'react';
import {View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, Modal} from 'react-native';
import SweetDetailScreen from './FoodMoreInfoScreen';

const sweets = [
    {
        name: 'Ferrero Rocher',
        image: require('../assets/img/3bde0d79b33a58e2f4b66d88647161b3874468bb.png'),
        type: 'Candy',
        Country: 'Italy',
        Flavor: 'Hazelnut, Chocolate',
        Category: 'Premium Candy',
        Popularity: '★★★★★',
    },
    {
        name: 'Baklava',
        image: require('../assets/img/19504b06a6fe416b7f0c21c963548531108cd14a.png'),
        type: 'Pastry',
        Country: 'Turkey',
        Flavor: 'Honey, Pistachio',
        Category: 'Traditional Dessert',
        Popularity: '★★★★☆',
    },
    {
        name: 'Strawberry Mochi',
        image: require('../assets/img/23cdb19252068a86ac8b3a1dacb6822d09174047.png'),
        type: 'Confectionery',
        Country: 'Japan',
        Flavor: 'Strawberry, Rice',
        Category: 'Wagashi (Japanese sweet)',
        Popularity: '★★★★☆',
    },
    {
        name: 'Limoncello Caramels',
        image: require('../assets/img/3c742def33623ff4b7b9675741992ac9dd5c3ef5.png'),
        type: 'Caramel',
        Country: 'Italy',
        Flavor: 'Lemon, Cream',
        Category: 'Artisan Caramel',
        Popularity: '★★★☆☆',
    },
    {
        name: 'Toblerone',
        image: require('../assets/img/81660a954a1a62561867b105f24d4d2deeaf58e5.png'),
        type: 'Chocolate',
        Country: 'Switzerland',
        Flavor: 'Honey, Almond Nougat, Chocolate',
        Category: 'Chocolate Bar',
        Popularity: '★★★★★',
    },
    {
        name: 'Brownies',
        image: require('../assets/img/555d43f8a6f7259d84a98718d62802d72899b98b.png'),
        type: 'Confectionery',
        Country: 'USA',
        Flavor: 'Chocolate, Fudge',
        Category: 'Baked Dessert',
        Popularity: '★★★★★',
    },
];

const types = ['Candy', 'Pastry', 'Confectionery', 'Caramel', 'Chocolate'];

const SweetsCollection = ({ navigation }) => {
    const [filterVisible, setFilterVisible] = useState(false);
    const [activeTypes, setActiveTypes] = useState([]);

    const toggleType = (type) => {
        if (activeTypes.includes(type)) {
            setActiveTypes(activeTypes.filter(t => t !== type));
        } else {
            setActiveTypes([...activeTypes, type]);
        }
    };

    const applyFilter = () => {
        setFilterVisible(false);
    };


    const filteredSweets = activeTypes.length === 0
        ? sweets
        : sweets.filter(sweet => activeTypes.includes(sweet.type));

    return (
        <View style={{ flex: 1 }}>
            {/* Filter Modal */}
            <Modal visible={filterVisible} transparent animationType="fade">
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Filter</Text>
                        {types.map((type) => (
                            <TouchableOpacity
                                key={type}
                                style={[styles.filterOption, activeTypes.includes(type) && styles.activeFilter]}
                                onPress={() => toggleType(type)}
                            >
                                <Text>{type}</Text>
                                <Text>+</Text>
                            </TouchableOpacity>
                        ))}
                        <TouchableOpacity style={styles.applyButton} onPress={applyFilter}>
                            <Text style={{ fontWeight: 'bold' }}>Apply</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>Collection of sweets</Text>
                    <TouchableOpacity onPress={() => setFilterVisible(true)}>
                        <Image style={styles.icon} source={require('../assets/img/filter-svgrepo-com.png')} />
                    </TouchableOpacity>
                </View>

                {filteredSweets.map((sweet, index) => (
                    <View key={index} style={styles.card}>
                        <Image source={sweet.image} style={styles.image} />
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => navigation.navigate('FerreroRocherScreen', { sweet })}
                        >
                            <Text style={styles.buttonText}>{sweet.name}</Text>
                            <Image source={require('../assets/img/right.png')} style={styles.icon} />
                        </TouchableOpacity>
                    </View>
                ))}
                <View style={{ marginBottom: 130 }} />
            </ScrollView>
        </View>
    );
};

export default SweetsCollection;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9a9ec',
        paddingHorizontal: 16,
        paddingTop: 40,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.4)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        width: 300,
        backgroundColor: '#a78bfa',
        padding: 20,
        borderRadius: 20,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    filterOption: {
        backgroundColor: '#fff066',
        width: '100%',
        padding: 12,
        borderRadius: 10,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    activeFilter: {
        backgroundColor: '#ffe24d',
        borderColor: '#222',
        borderWidth: 2,
    },
    applyButton: {
        marginTop: 20,
        backgroundColor: '#ffee66',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 16,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 22,
        fontFamily: 'Nunito-Italic-VariableFont_wght',
    },
    icons: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
    },
    icon: {
        marginRight: 10,
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 16,
        marginBottom: 20,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 180,
        resizeMode: 'cover',
    },
    button: {
        backgroundColor: '#ffeb3b',
        padding: 10,
        flexDirection: 'row',
        position: 'absolute',
        bottom: 10,
        right: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 16,

    },
    buttonText: {
        fontWeight: '600',
    },
});
