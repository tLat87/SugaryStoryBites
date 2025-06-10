import React, { useState } from 'react';
import {View, Text, StyleSheet, Switch, TouchableOpacity, Alert, Linking} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {useDispatch} from "react-redux";
import {clearedFood} from "../redux/slices/foodSlice";
import {createSweetImpression} from "../redux/slices/sweetImpressionsSlice";
import {clearAllSweets} from "../redux/slices/savedSweetsSlice";

export default function SettingsScreen() {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const handleDeleteAll = () => {
        Alert.alert('Delete all?', 'Are you sure you want to delete all notes and gallery?', [
            { text: 'Cancel', style: 'cancel' },
            { text: 'Yes', onPress: () => {
                    dispatch(clearedFood())
                    dispatch(createSweetImpression())
                    dispatch(clearAllSweets())
                }},
        ]);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Settings</Text>

            <TouchableOpacity style={styles.itemRow} onPress={handleDeleteAll}>
                <Text style={styles.itemText}>Delete all notes and gallery</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.itemRow} onPress={() => Linking.openURL('https://www.termsfeed.com/live/a5ef66a3-c3ac-48a2-bfd7-8d58d8a493b3')}>
                <Text style={styles.itemText}>Privacy Policy</Text>
                <Text style={styles.arrow}>›</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.itemRow} onPress={() => navigation.navigate('AboutDeveloperScreen')}>
                <Text style={styles.itemText}>About developer</Text>
                <Text style={styles.arrow}>›</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffb3e6',
        paddingHorizontal: 20,
        paddingTop: 50,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 30,
        color: '#000',
    },
    itemRow: {
        backgroundColor: '#ffee58',
        borderRadius: 15,
        paddingVertical: 15,
        paddingHorizontal: 20,
        marginBottom: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    itemText: {
        fontSize: 16,
        color: '#000',
    },
    arrow: {
        fontSize: 22,
        color: '#000',
    },
});
