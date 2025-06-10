import React from 'react';
import {
    View, Text, StyleSheet, ImageBackground,
    TouchableOpacity, ScrollView, Image
} from 'react-native';
import { useSelector } from 'react-redux';

const StoriesAndFactsScreen = ({ navigation }) => {
    const foodItems = useSelector(state => state.food.items);
    const savedSweets = useSelector(state => state.savedSweets);

    // const foodItems = []
    // const savedSweets = []


    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Stories and facts</Text>

            <View style={styles.factBox}>
                <Text style={styles.factTitle}>Fact of the day!</Text>
                <Text style={styles.factText}>
                    <Text style={styles.bold}>January 10:</Text> The most expensive candy in the world costs $250 and is covered with edible gold.
                </Text>
            </View>

            <Text style={styles.sectionTitle}>Saved Dishes</Text>
            {savedSweets?.length > 0 ? (
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
                    {savedSweets.map((sweet, index) => (
                        <ImageBackground
                            key={index}
                            source={sweet.image}
                            style={styles.cardImage}
                            imageStyle={styles.cardImageStyle}
                        >
                            <TouchableOpacity
                                onPress={() => navigation.navigate('FerreroRocherScreen', { sweet })}
                                style={styles.cardContent}
                            >
                                <Text style={styles.cardText}>{sweet.name}</Text>
                                <TouchableOpacity style={styles.readButton}>
                                    <Text style={styles.readText}>Read</Text>
                                </TouchableOpacity>
                            </TouchableOpacity>
                        </ImageBackground>
                    ))}
                </ScrollView>
            ) : (
                <View style={styles.emptyMessageContainer}>
                    <Text style={styles.emptyMessageText}>No saved sweets yet</Text>
                </View>
            )}


            {/* User Added Food Section */}
            <Text style={styles.sectionTitle}>My Dishes</Text>
            {!foodItems ? (
                <Text style={styles.noDishes}>You haven't added any dishes yet.</Text>
            ) : (
                foodItems.map(item => (
                    <ImageBackground
                        key={item.id}
                        source={item.image ? { uri: item.image } : require('../assets/img/4c302bcf3fabc91d8db32a7340474e1d546aad90.png')} // замените на свой плейсхолдер
                        style={styles.cardImage}
                        imageStyle={styles.cardImageStyle}
                    >
                        <TouchableOpacity style={styles.cardContent} onPress={() => navigation.navigate('FerreroRocherScreen')}>
                            <View>
                                <Text style={styles.cardText}>{item.name}</Text>
                                {/*<Text style={styles.foodDetail}>Type: {item.type}</Text>*/}
                                {/*<Text style={styles.foodDetail}>Country: {item.country}</Text>*/}
                                {/*<Text style={styles.foodDetail}>Flavor: {item.flavor}</Text>*/}
                                {/*<Text style={styles.foodDetail}>Category: {item.category}</Text>*/}
                                {/*<Text style={styles.foodDetail}>Popularity: {item.popularity}</Text>*/}
                            </View>
                            <View style={styles.readButton}>
                                <Text style={styles.readText}>Read</Text>
                                <Image source={require('../assets/img/right.png')} style={styles.icon} />
                            </View>
                        </TouchableOpacity>
                    </ImageBackground>
                ))
            )}
            <TouchableOpacity style={styles.favourites} onPress={() => navigation.navigate('AddFoodScreen')}>
                <Text style={styles.favText}>Favourites +</Text>
            </TouchableOpacity>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        paddingTop: 50,
        flexGrow: 1,
        backgroundColor: '#f9a9ec',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    factBox: {
        backgroundColor: '#fff26d',
        padding: 12,
        borderRadius: 12,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 3,
    },
    emptyMessageContainer: {
        padding: 20,
        alignItems: 'center',
    },
    emptyMessageText: {
        fontSize: 16,
        color: '#555',
        fontStyle: 'italic',
    },
    factTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 4,
    },
    factText: {
        fontSize: 14,
    },
    bold: {
        fontWeight: 'bold',
    },
    cardImage: {
        height: 180,
        marginBottom: 16,
        justifyContent: 'flex-end',
        borderRadius: 16,
        overflow: 'hidden',
    },
    cardImageStyle: {
        resizeMode: 'cover',
    },
    cardContent: {
        backgroundColor: '#fff26d',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    cardText: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    readButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    readText: {
        fontWeight: 'bold',
        marginRight: 4,
    },
    favourites: {
        backgroundColor: '#fff26d',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
        borderRadius: 12,
        marginBottom: 32,
    },
    favText: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    noDishes: {
        fontSize: 16,
        fontStyle: 'italic',
        color: '#444',
        marginBottom: 20,
    },
    foodCard: {
        flexDirection: 'row',
        backgroundColor: '#fff26d',
        borderRadius: 10,
        padding: 10,
        marginBottom: 12,
        alignItems: 'center',
    },
    foodImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginRight: 10,
    },
    foodInfo: {
        flex: 1,
    },
    foodName: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 4,
    },
    foodDetail: {
        fontSize: 12,
        color: '#333',
    },
});

export default StoriesAndFactsScreen;
