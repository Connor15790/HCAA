import * as React from 'react';
import { Text, View, SafeAreaView, StyleSheet, Image, FlatList, TouchableOpacity, TextInput, Button, Modal, Dimensions, SubText, HeadingText } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useFonts } from 'expo-font';
import { useCallback, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import styles from './styles/home.style';
import DropDownPicker from 'react-native-dropdown-picker';
import Navbar from './Navbar';
import { Alert } from 'react-native';
import { showYesNoPrompt } from './common/userPrompt';


SplashScreen.preventAutoHideAsync();
Feather.loadFont();
MaterialCommunityIcons.loadFont();

export default Home = ({ navigation, prop }) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Profile', value: 'profile' },
        { label: 'Settings', value: 'settings' },
        { label: 'Logout', value: 'logout', },
    ]);

    const handleDropdownChange = async (item) => {
        // Handle actions based on selected dropdown item
        // console.log('Selected:', item);

        if (item === 'profile') {
            navigation.navigate("Profile1");
        } else if (item === 'settings') {
            navigation.navigate("Settings");
        }
        if (item == 'logout') {
            const userPressedYes = await showYesNoPrompt('Confirmation', 'Do you want to proceed?');
            if (userPressedYes) {
                navigation.navigate("Auth");
                console.log('User pressed Yes');
                // Perform actions for "Yes"
            } else {
                console.log('User pressed No');
                // Perform actions for "No"
            }
        }

        // Close the dropdown after selection
        setOpen(false);
    };


    let [fontsLoaded] = useFonts({
        "Montserrat-Bold": require("../assets/fonts/Montserrat-Bold.ttf"),
        "Montserrat-Medium": require("../assets/fonts/Montserrat-Medium.ttf"),
        "Montserrat-Regular": require("../assets/fonts/Montserrat-Regular.ttf"),
        "Montserrat-SemiBold": require("../assets/fonts/Montserrat-SemiBold.ttf"),
        "CrimsonText-Bold": require("../assets/fonts/CrimsonText-Bold.ttf")
    })

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded])

    if (!fontsLoaded) return null;

    return (
        <View style={styles.container} onLayout={onLayoutRootView}>
            <Navbar handleDropdownChange={handleDropdownChange} />

            <View style={styles.logoContainer}>
                <Image
                    source={require("../assets/images/mednav.png")}
                    style={styles.logo}
                />
            </View>

            <View style={styles.titleWrapper}>
                <Text style={styles.appTitle}>MedNav</Text>
            </View>

            <View style={styles.homeButtons}>
                <TouchableOpacity style={styles.casualtyHeader} onPress={() => navigation.navigate("Casualties")}>
                    <Text style={styles.casualtyTitle}>Casualty Ward</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.recordsHeader} onPress={() => navigation.navigate("Records")}>
                    <Text style={styles.recordsTitle}>Records</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.emergencyHeader} onPress={() => navigation.navigate("Emergencies")}>
                    <Text style={styles.emergencyTitle}>Emergencies</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

