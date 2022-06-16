import React from 'react';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Colors from '../../themes/Colors';
import VendorProfile from '../../screens/vendor/VendorProfile';
import VendorChangeProfile from '../../screens/vendor/VendorChangeProfile';
import VendorEditProfile from '../../screens/vendor/VendorEditProfile';
import VendorJoined from '../../screens/vendor/VendorJoined';
import VendorLevel from '../../screens/vendor/VendorLevel';

const VendorProfileStack = createNativeStackNavigator();

const VendorProfileStackScreen = () => {
    return (
        <VendorProfileStack.Navigator
            headerMode="screen"
            screenOptions={styles.screen}
        >
            <VendorProfileStack.Screen
                name="VendorProfile"
                component={VendorProfile}
                options={{ headerShown: false }}
            />
            <VendorProfileStack.Screen
                name="VendorChangeProfile"
                component={VendorChangeProfile}
                options={{ headerShown: false }}
            />
            <VendorProfileStack.Screen
                name="VendorEditProfile"
                component={VendorEditProfile}
                options={{ headerShown: false }}
            />
            <VendorProfileStack.Screen
                name="VendorJoined"
                component={VendorJoined}
                options={{ headerShown: false }}
            />
            <VendorProfileStack.Screen
                name="VendorLevel"
                component={VendorLevel}
                options={{ headerShown: false }}
            />
        </VendorProfileStack.Navigator>
    );
}

const styles = StyleSheet.create({
    screen: {
        headerStyle: {
            backgroundColor: Colors.primary,
        },
        headerTintColor: Colors.white,
        headerTitleStyle: {
            fontWeight: 'bold',
        },
        headerTitleAlign: 'center',
    },
});

export default VendorProfileStackScreen;