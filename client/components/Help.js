import * as React from 'react';
import { Text, View, SafeAreaView, StyleSheet, Image, FlatList, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useCallback, useState, useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import styles from './styles/help.style';

SplashScreen.preventAutoHideAsync();

export default Help = () => {
    return (
        <View style={styles.container}>
            <View style={styles.titleWrapper}>
                <Text style={styles.titleText}>Help</Text>
            </View>

            <View style={styles.bodyWrapper}>
                <Text style={styles.bodyText}>
                    Welcome to the Emergency Aid App, your reliable companion in times of medical emergencies. This Help Section is designed to guide you through the app's features and ensure you make the most of its capabilities when every second counts.
                </Text>
            </View>

            <View style={styles.contentWrapper}>
                <Text style={styles.contentText1}>
                    1. Emergency Contacts:
                </Text>
                <Text style={styles.contentText2}>
                    Add and manage essential contacts, including family, friends, and medical professionals.
                    Ensure that your emergency contacts are up-to-date, and test the emergency call feature to confirm its functionality.
                </Text>
            </View>

            <View style={styles.contentWrapper}>
                <Text style={styles.contentText1}>
                    2. Medical History:
                </Text>
                <Text style={styles.contentText2}>
                    Add and manage essential contacts, including family, friends, and medical professionals.
                    Ensure that your emergency contacts are up-to-date, and test the emergency call feature to confirm its functionality.
                </Text>
            </View>

            <View style={styles.contentWrapper}>
                <Text style={styles.contentText1}>
                    3. First Aid Instructions:
                </Text>
                <Text style={styles.contentText2}>
                    Add and manage essential contacts, including family, friends, and medical professionals.
                    Ensure that your emergency contacts are up-to-date, and test the emergency call feature to confirm its functionality.
                </Text>
            </View>
        </View>
    )
}