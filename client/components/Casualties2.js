import * as React from 'react';
import { useCallback, useState, useMemo, useEffect } from 'react';
import { Text, View, SafeAreaView, StyleSheet, Image, FlatList, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView, Platform, Modal, Pressable, ActivityIndicator } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import { SelectList } from 'react-native-dropdown-select-list'
import styles from './styles/casualties2.style';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { apiPost, apiGet } from './common/axios';
import Navbar from './Navbar';
import { fetchDiseaseData } from './common/apiservice';
import { fetchMedsData } from './common/apiservice';

SplashScreen.preventAutoHideAsync();
Feather.loadFont();
MaterialCommunityIcons.loadFont();

export default Casualties2 = ({ route, navigation, props }) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Profile', value: 'profile' },
        { label: 'Settings', value: 'settings' },
        { label: 'Logout', value: 'logout', },
    ]);

    const [timeselected, setTimeSelected] = useState("");
    // const [siteselected, setSiteSelected] = useState("");
    const [symptoms, setSymptoms] = useState("");
    const [allergies, setAllergies] = useState("");
    const [prevmed, setPrevmed] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
        
    const [ddata, setdData] = useState(null);
    const [dloading, setdLoading] = useState(true);
    const [derror, setdError] = useState(null);

    const [mdata, setmData] = useState(null);
    const [mloading, setmLoading] = useState(true);
    const [merror, setmError] = useState(null);
    
    // useEffect(() => {
    //     // const getData1 = async () => {
    //     //     try {
    //     //         const result = await fetchDiseaseData();
    //     //         setdData(result);
    //     //     } catch (error) {
    //     //         setdError(error);
    //     //     } finally {
    //     //         setdLoading(false);
    //     //     }
    //     // };

    //     const getData2 = async () => {
    //         try {
    //             const result = await fetchMedsData();
    //             setmData(result);
    //         } catch (error) {
    //             setmError(error);
    //         } finally {
    //             setmLoading(false);
    //         }
    //     };
        
    //     // console.log(dloading)
        
    //     // getData1();
    //     getData2();
    // }, []);
    
    // if (dloading && mloading) {
    //     return <ActivityIndicator size="xlarge" color="#0000ff" style={{alignItems: "center", justifyContent: "center", flex: 1}} />;
    // }
    
    // if (derror && merror) {
    //     return <Text style={styles.errorText}>Error: {derror.message}</Text>;
    // }
    
    const { synopsis, selectedId, name, gender, bloodGroup, age, disease, medications } = route.params;

    let medarr = medications;
    console.log(medarr)
    // const arr = medarr[0].split(",")

    const handleDropdownChange = (item) => {
        // Handle actions based on selected dropdown item
        // console.log('Selected:', item);

        if (item === 'profile') {
            navigation.navigate("Profile1");
        } else if (item === 'settings') {
            navigation.navigate("Settings");
        }

        // Close the dropdown after selection
        setOpen(false);
    };

    const submitForm = async () => {
        try {
            const formData = {
                primarySynopsis: disease,
                patientName: name,
                gender: gender,
                timeOfAccident: timeselected,
                // siteselected,
                bloodGroup,
                symptoms,
                allergies,
                age,
                previousMedications: prevmed
            }

            const response = await apiPost('/casuality/patientDetails', formData);
            if (response.status == 200) {
                // setModalVisible(!modalVisible)
                navigation.navigate("Records")
                alert(response.message)
            } else {
                alert(response.message)
            }

            // If the login is successful, you can handle the response here.
            // For example, you might save the token in AsyncStorage and navigate to the home screen.

            console.log('Login success:', response.data);

        } catch (error) {
            // Handle login failure
            console.error('Login failed:', error);
        }
    }

    return (

        <View style={styles.container}>
            <Navbar handleDropdownChange={handleDropdownChange} />

            <ScrollView>
                <View style={styles.titleWrapper}>
                    <Text style={styles.titleText}>Synopsis</Text>
                </View>

                <View style={styles.synopsisContainerHeader}>
                    <Text style={styles.synopsisHeader}>Probable Disease:</Text>
                </View>

                <View style={styles.synopsisContainer}>
                    <Text style={styles.synopsisText}>The patient has a probable case of - </Text>
                    <Text style={styles.synopsisText}>{disease}</Text>
                </View>

                <View style={styles.synopsisContainerHeader}>
                    <Text style={styles.synopsisHeader}>Suggested Medications:</Text>
                </View>

                <View style={styles.synopsisContainer}>
                    <Text style={styles.synopsisText}>Suggested medications for the patient - </Text>
                    <Text style={styles.synopsisText}>{medications}</Text>
                </View>

                <View style={styles.centeredView}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}>
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalText}>Form has been submitted!</Text>
                                <TouchableOpacity
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => setModalVisible(!modalVisible)}>
                                    <Text style={styles.textStyle}>Close</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                </View>

                <View style={styles.nextContainer}>
                    <TouchableOpacity style={styles.nextBtn} onPress={submitForm}>
                        <Text style={styles.nextBtnText}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>

    )
}