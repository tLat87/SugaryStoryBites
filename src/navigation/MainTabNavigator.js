import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import {useNavigation} from '@react-navigation/native';
import StoriesAndFactsScreen from '../screens/StoriesАactsScreen';
import SweetImpression from '../screens/SweetImpression';
import QuizScreen from '../screens/QuizScreen';
import SettingsScreen from '../screens/SettingsScreen';
import SweetQuizScreen from '../screens/SweetQuizScreen';

const Tab = createBottomTabNavigator();

const getTabIcon = (routeName) => {
    switch (routeName) {
        case 'Home':
            return require('../assets/img/bookmark-square-minimalistic-svgrepo-com1.png');
        case 'StoriesАactsScreen':
            return require('../assets/img/collections-svgrepo-com1.png');
        case 'SweetImpression':
            return require('../assets/img/note-text-svgrepo-com1.png');
        case 'SweetQuizScreen':
            return require('../assets/img/light-bulb-line-drawing-svgrepo-com1.png');
        case 'SettingsScreen':
            return require('../assets/img/Frame3.png');
    }
};

const MainTabNavigator = () => {
    const navigation = useNavigation();
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerStyle: { backgroundColor: '#1F2021', shadowColor: '#1F2021' },
                headerTitleStyle: {
                    color: 'white',
                    fontFamily:'Quantico-BoldItalic',
                    fontSize: 40,
                },
                // headerShadowVisible: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 40,
                    left: 20,
                    right: 20,
                    elevation: 5,
                    width: '80%',
                    marginLeft: '10%',
                    backgroundColor: '#F8E767',
                    borderRadius: 30,
                    paddingTop: 15,
                    height: 70,
                    paddingBottom: 10,
                    shadowColor: '#000',
                    shadowOpacity: 0.1,
                    shadowOffset: { width: 0, height: 4 },
                    shadowRadius: 10,
                },
                headerShown: false,
                tabBarIcon: () => (
                    <Image
                        source={getTabIcon(route.name)}
                        style={{ }}
                    />
                ),
            })}
        >

            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: '',
                    headerTitle: 'Home',
                }}
            />

            <Tab.Screen
                name="StoriesАactsScreen"
                component={StoriesAndFactsScreen}
                options={{
                    tabBarLabel: '',
                    headerTitle: 'Home',
                }}
            />

            <Tab.Screen
                name="SweetImpression"
                component={SweetImpression}
                options={{
                    tabBarLabel: '',
                    headerTitle: 'Home',
                }}
            />

            <Tab.Screen
                name="SweetQuizScreen"
                component={SweetQuizScreen}
                options={{
                    tabBarLabel: '',
                    headerTitle: 'Home',
                }}
            />

            <Tab.Screen
                name="SettingsScreen"
                component={SettingsScreen}
                options={{
                    tabBarLabel: '',
                    headerTitle: 'Home',
                }}
            />

        </Tab.Navigator>
    );
};

export default MainTabNavigator;
