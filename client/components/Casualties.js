import * as React from 'react';
import { useCallback, useState, useMemo, useEffect } from 'react';
import { Text, View, SafeAreaView, StyleSheet, Image, FlatList, TouchableOpacity, TextInput, ScrollView, Pressable } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import { SelectList } from 'react-native-dropdown-select-list'
import styles from './styles/casualties.style';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Navbar from './Navbar';
import { MultipleSelectList } from 'react-native-dropdown-select-list';
import axios from 'axios';
import { apiPost } from './common/axios';

SplashScreen.preventAutoHideAsync();
Feather.loadFont();
MaterialCommunityIcons.loadFont();

export default Casualties = ({ navigation }) => {
    const [selected, setSelected] = React.useState([]);
    const [disease, setDisease] = React.useState([]);
    const [medications, setMedications] = React.useState([]);

    const [selectedId, setSelectedId] = useState();
    const [selectedLabel, setSelectedLabel] = useState(null);
    const [ageselected, setAgeSelected] = useState("");
    const [bgselected, setBgSelected] = useState("");
    const [injuryTime, setInjuryTime] = useState("");
    const [synopsisselected, setSynopsisSelected] = useState([]);
    const [name, setName] = useState("");
    const [injuryLocation, setInjuryLocation] = useState("")

    // useEffect(() => {
    //     sendDiseaseData();
    //     // console.log(selected);
    // });

    const sendDiseaseData = async () => {
        console.log(selected.join(" "))
        const disease = await apiPost('/casuality/predictdisease', selected);
        console.log(disease)
        setDisease(disease);
    };

    const sendMedsData = async () => {
        console.log(selected.join(" "))
        const meds = await apiPost('/casuality/predictmeds', selected);
        console.log(meds)
        setMedications(meds);
    };

    const navigate2Casualties2 = () => {
        navigation.navigate("Casualties2", {
            synopsis: synopsisselected,
            selectedId: selectedId,
            name: name,
            gender: selectedLabel,
            age: ageselected,
            bloodGroup: bgselected,
            disease: disease,
            medications: medications
        })
    }

    const handleConfirmPress = async () => {
        await sendDiseaseData();
        await sendMedsData();
    }

    const handleNextPress = async () => {
        await sendDiseaseData();
        await sendMedsData();
        
        navigate2Casualties2();
    };

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Profile', value: 'profile' },
        { label: 'Settings', value: 'settings' },
        { label: 'Logout', value: 'logout', },
    ]);

    const handleDropdownChange = (item) => {
        if (item === 'profile') {
            navigation.navigate("Profile1");
        } else if (item === 'settings') {
            navigation.navigate("Settings");
        }

        setOpen(false);
    };

    const radioButtons = useMemo(() => ([
        {
            id: '1', // acts as primary key, should be unique and non-empty string
            label: 'Male',
            value: 'option1'
        },
        {
            id: '2',
            label: 'Female',
            value: 'option2'
        },
        {
            id: '3',
            label: 'Other',
            value: 'option3'
        }
    ]), []);

    const agedata = [
        { key: '1', value: '1-3 Y' },
        { key: '2', value: '4-7 Y' },
        { key: '3', value: '8-14 Y' },
        { key: '4', value: '15-20 Y' },
        { key: '5', value: '21-35 Y' },
        { key: '6', value: '36-60 Y' },
        { key: '7', value: '61-80 Y' },
    ]

    const bgdata = [
        { key: '1', value: 'A+' },
        { key: '2', value: 'A-' },
        { key: '3', value: 'B+' },
        { key: '4', value: 'B-' },
        { key: '5', value: 'O+' },
        { key: '6', value: 'O-' },
        { key: '7', value: 'AB+' },
        { key: '8', value: 'AB-' },
    ]

    const timeinjury = [
        { key: '1', value: '15 mins ago' },
        { key: '2', value: '30 mins ago' },
        { key: '3', value: '1 hr ago' },
        { key: '4', value: '2 hr ago' },
        { key: '5', value: '3 hr ago' },
        { key: '6', value: '4 hr ago' },
        { key: '7', value: '5 hr ago' },
        { key: '8', value: '6 hr ago' },
    ]

    const synopsisdata2 = [
        { key: '1', value: 'itching' },
        { key: '2', value: 'skin_rash' },
        { key: '3', value: 'nodal_skin_eruptions' },
        { key: '4', value: 'continuous_sneezing' },
        { key: '5', value: 'shivering' },
        { key: '6', value: 'chills' },
        { key: '7', value: 'joint_pain' },
        { key: '8', value: 'stomach_pain' },
        { key: '9', value: 'acidity' },
        { key: '10', value: 'ulcers_on_tongue' },
        { key: '11', value: 'muscle_wasting' },
        { key: '12', value: 'vomiting' },
        { key: '13', value: 'burning_micturition' },
        { key: '14', value: 'spotting_urination' },
        { key: '15', value: 'dischromic_patches' },
        { key: '16', value: 'watering_from_eyes' },
        { key: '17', value: 'cough' },
        { key: '18', value: 'chest_pain' },
        { key: '19', value: 'yellowish_skin' },
        { key: '20', value: 'nausea' },
        { key: '21', value: 'loss_of_appetite' },
        { key: '22', value: 'abdominal_pain' },
        { key: '23', value: 'yellowing_of_eyes' },
        { key: '24', value: 'indigestion' },
        { key: '25', value: 'passage_of_gases' },
        { key: '26', value: 'internal_itching' },
    ]

    return (
        <View style={styles.container}>
            <Navbar handleDropdownChange={handleDropdownChange} />

            <View style={styles.titleWrapper}>
                <Text style={styles.titleText}>Patient Details</Text>
            </View>

            <ScrollView>
                <View style={styles.synopsisContainer}>
                    <Text style={styles.synopsisHeader}>Primary Synopsis*:</Text>
                </View>

                <View style={styles.psContainer}>
                    <View style={styles.listContainer}>
                        <MultipleSelectList
                            setSelected={(val) => setSelected(val)}
                            data={synopsisdata2}
                            save="value"
                            boxStyles={styles.synopsisBox}
                            dropdownStyles={styles.synopsisDropdown}
                            // onSelect={() => alert(selected)}
                            label="Categories"
                        />
                    </View>
                </View>

                <View style={styles.nameSearchContainer}>
                    <Text style={styles.nameHeader}>Name*:</Text>
                    <View style={styles.nameSearchWrapper}>
                        <TextInput
                            style={styles.nameSearchInput}
                            value={name}
                            onChangeText={(inputText) => setName(inputText)}
                            placeholder='Name'
                        />
                    </View>
                </View>

                <View style={styles.genderContainer}>
                    <Text style={styles.genderHeader}>Gender*:</Text>
                    <RadioGroup
                        style={styles.genderChoices}
                        radioButtons={radioButtons}
                        onPress={(id) => {
                            setSelectedId(id);
                            const selectedRadioButton = radioButtons.find(button => button.id === id);
                            if (selectedRadioButton) {
                                setSelectedLabel(selectedRadioButton.label);
                            }
                        }}
                        selectedId={selectedId}
                        layout='row'
                    />
                </View>

                <View style={styles.ageSearchContainer}>
                    <Text style={styles.ageHeader}>Age:</Text>
                    <View style={styles.ageSearchWrapper}>
                        <SelectList
                            setSelected={(val) => setAgeSelected(val)}
                            data={agedata}
                            save="value"
                            maxHeight={100}
                            boxStyles={styles.ageBox}
                            inputStyles={{ paddingHorizontal: 0 }}
                            dropdownStyles={styles.ageDropdown}
                        />
                    </View>
                </View>

                <View style={styles.bgContainer}>
                    <Text style={styles.bgHeader}>Blood Group*:</Text>
                    <View style={styles.bgWrapper}>
                        <SelectList
                            setSelected={(val) => setBgSelected(val)}
                            data={bgdata}
                            save="value"
                            maxHeight={100}
                            boxStyles={styles.bgBox}
                            inputStyles={{ paddingHorizontal: 0 }}
                            dropdownStyles={styles.bgDropdown}
                        />
                    </View>
                </View>

                <View style={styles.nextContainer}>
                    <TouchableOpacity
                        style={[styles.nextBtn, {
                            backgroundColor: !selectedId || !name || !bgselected || !synopsisselected ? "#B7BCB5" : "black",
                            borderWidth: !selectedId || !name || !bgselected || !synopsisselected ? 0 : 1
                        }]}

                        onPress={handleNextPress}

                        disabled={!selectedId || !name || !bgselected || !synopsisselected ? true : false}>
                        <Text style={styles.nextBtnText}>Next</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}