import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {persistor, store} from "./src/redux/store";
import MainTabNavigator from "./src/navigation/MainTabNavigator";
import FerreroRocherScreen from "./src/screens/FoodMoreInfoScreen";
import AddFoodScreen from "./src/screens/AddFoodScreen";
import AddSweetImpressionScreen from "./src/screens/AddSweetImpressionScreen";
import QuizScreen from "./src/screens/QuizScreen.tsx";
import SweetDetailScreen from "./src/screens/SweetDetailScreen";
import AboutDeveloperScreen from "./src/screens/AboutDeveloperScreen";
const Stack = createStackNavigator();

export default function App() {

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer>
                    <Stack.Navigator screenOptions={{
                        headerStyle: { backgroundColor: '#000000', height: 180 },
                        headerShadowVisible: false,
                    }}>

                        <Stack.Screen name="MainTab" component={MainTabNavigator} options={{ headerShown: false }} />
                        <Stack.Screen name="FerreroRocherScreen" component={FerreroRocherScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="AddFoodScreen" component={AddFoodScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="AddSweetImpressionScreen" component={AddSweetImpressionScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="QuizScreen" component={QuizScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="SweetDetailScreen" component={SweetDetailScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="AboutDeveloperScreen" component={AboutDeveloperScreen} options={{ headerShown: false }} />


                    </Stack.Navigator>
                </NavigationContainer>
          </PersistGate>
         </Provider>
    );
}
