import * as React from 'react';
import { useCallback, useState, useMemo } from 'react';
import { Text, View, SafeAreaView, StyleSheet, Image, FlatList, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import { SelectList } from 'react-native-dropdown-select-list'
import styles from './styles/casualties3.style';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
Feather.loadFont();
MaterialCommunityIcons.loadFont();

export default Casualties3 = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.titleWrapper}>
                    <Text style={styles.titleText}>Patient Job Sheet</Text>
                </View>
            </View>
        </ScrollView>
    )
}