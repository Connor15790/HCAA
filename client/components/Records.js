import * as React from 'react';
import { Text, View, SafeAreaView, StyleSheet, Image, FlatList, TouchableOpacity, TextInput, ScrollView, Dimensions, Modal } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useFonts } from 'expo-font';
import { useCallback, useState, useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import styles from './styles/records.style';
import CheckBox from 'react-native-check-box';
import { format } from 'date-fns';
import { apiPost, apiGet } from './common/axios';
import Navbar from './Navbar';

SplashScreen.preventAutoHideAsync();
Feather.loadFont();
MaterialCommunityIcons.loadFont();

export default Records = ({ navigation }) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Profile', value: 'profile' },
        { label: 'Settings', value: 'settings' },
        { label: 'Logout', value: 'logout', },
    ]);
    const [name, setName] = useState("");
    const [checkedItems, setCheckedItems] = useState(false);
    const [cardData, setCardData] = useState([]);
    const [originalCardData, setOriginalCardData] = useState([]);
    const [selectedPatient, setSelectedPatient] = useState(null);

    const [itemToEdit, setItemToEdit] = useState(null);
    const [itemToDelete, setItemToDelete] = useState(null);

    const [patientModalVisible, setPatientModalVisible] = useState(false);
    const [editModalVisible, setEditModalVisible] = useState(false);
    const [deleteModalVisible, setDeleteModalVisible] = useState(false);

    const [patientName, setPatientName] = useState(selectedPatient?.name || "");
    const [age, setAge] = useState(selectedPatient?.age || "");
    const [gender, setGender] = useState(selectedPatient?.gender || "");
    const [bloodgroup, setBloodgroup] = useState(selectedPatient?.bloodGroup || "");
    const [synopsis, setSynopsis] = useState(selectedPatient?.primarySynopsis || "");
    const [status, setStatus] = useState(selectedPatient?.checked ? "Checked" : "Not Checked");
    const [patientSymptoms, setPatientSymptoms] = useState(selectedPatient?.injuryDetails?.symptoms || "")

    useEffect(() => {
        async function fetchPatientData() {
            const response = await apiGet('/casuality/getPatient')
            const initialCheckedItems = response.data.reduce((acc, item) => {
                acc[item._id] = item.checked;
                return acc;
            }, {});
            setCardData(response.data)
            setOriginalCardData(response.data);
            setCheckedItems(initialCheckedItems);
            // console.log(response.data)
        }
        fetchPatientData()
    }, [])

    // Update the cardData when the user types in the search field
    useEffect(() => {
        if (name.trim() === "") {
            setCardData(originalCardData);
        } else {
            // Filter the card data based on the search input
            setCardData((prevData) =>
                prevData.filter(
                    (item) =>
                        item.patientName.toLowerCase().includes(name.toLowerCase()) ||
                        item.primarySynopsis.toLowerCase().includes(name.toLowerCase())
                )
            );
        }
    }, [name]);

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

    //function to toggle different checkboxes
    const toggleCheckbox = async (itemId) => {
        console.log("Checkbox toggled")
        setCheckedItems((prevCheckedItems) => ({
            ...prevCheckedItems,
            [itemId]: !prevCheckedItems[itemId],
        }));
        const toggleResponse = await apiPost('/casuality/togglePatientCheck', { patientId: itemId });

    };

    // Function to filter cardData based on the search name
    const filterCardData = () => {
        if (name === '') {
            return cardData;
        } else {
            return cardData.filter(
                (item) =>
                    item.patientName.toLowerCase().includes(name.toLowerCase()) ||
                    item.primarySynopsis.toLowerCase().includes(name.toLowerCase())
            );
        }
    };

    //function to edit a patient
    const handleEdit = () => {
        const formData = {
            age,
            gender,
            bloodgroup,
            synopsis,
            status,
            symptoms
        };
    };

    //function to delete a patient
    const handleDelete = (itemId) => {
        setItemToDelete(itemId);
        setDeleteModalVisible(true);
    };

    const confirmDelete = async () => {
        // console.log("Confirm btn pressed")
        try {
            console.log(`Deleting item with id: ${itemToDelete}`);
            const deleteResponse = await apiPost('/casuality/deletePatient', { patientId: itemToDelete });

            if (deleteResponse) {
                alert(deleteResponse.message)
                // update the cardData after deletion
                const response = await apiGet('/casuality/getPatient');
                setDeleteModalVisible(false);
                setCardData(response.data);
            } else {
                alert(deleteResponse.message)
            }
            // Close the modal after deletion
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    return (
        <View style={styles.container}>
            <Navbar handleDropdownChange={handleDropdownChange} />

            <View style={styles.searchContainer}>
                <View style={styles.searchWrapper}>
                    <TextInput
                        style={styles.searchInput}
                        value={name}
                        onChangeText={(inputText) => setName(inputText)}
                        placeholder="Search Patient"
                    />
                </View>

                <TouchableOpacity
                    style={styles.searchBtn}
                    onPress={() => {
                        // Update cardData based on the search name
                        setCardData(filterCardData());
                    }}>
                    <Image
                        source={require('../assets/icons/search.png')}
                        resizeMode="contain"
                        style={styles.searchBtnImage}
                    />
                </TouchableOpacity>
            </View>


            <Modal
                animationType="slide"
                transparent={true}
                visible={patientModalVisible}
                backdropOpacity={0.5}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>{selectedPatient?.patientName}</Text>
                        <Text style={styles.modalText1}>Age: {selectedPatient?.age}</Text>
                        <Text style={styles.modalText1}>Gender: {selectedPatient?.gender}</Text>
                        <Text style={styles.modalText1}>Blood Group: {selectedPatient?.bloodGroup}</Text>
                        <Text style={styles.modalText1}>Synopsis: {selectedPatient?.primarySynopsis}</Text>
                        <Text style={styles.modalText1}>Status: {selectedPatient?.checked ? "Checked" : "Not checked"}</Text>
                        <Text style={styles.modalText1}>Symtoms: {selectedPatient?.injuryDetails?.symptoms}</Text>
                        <View style={styles.closeBtn}>
                            <TouchableOpacity
                                style={[styles.button0, styles.buttonClose0]}
                                onPress={() => {
                                    setPatientModalVisible(!patientModalVisible);
                                    setSelectedPatient(null); // Clear selected patient after closing modal
                                }}
                            >
                                <Text style={styles.textStyle0}>Close</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={editModalVisible}
                backdropOpacity={0.5}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>{selectedPatient?.patientName}</Text>
                        <View style={{ flexDirection: "row", borderBottomWidth: 1 }}>
                            <Text style={styles.modalText1}>Age: </Text>
                            <TextInput
                                style={styles.modalTextInput}
                                value={age}
                                onChangeText={(inputText) => setAge(inputText)}
                            >
                            </TextInput>
                        </View>
                        {/* <View style={{ flexDirection: "row" }}>
                            <Text style={styles.modalText1}>Gender: </Text>
                            <TextInput
                                style={styles.modalTextInput}
                                // value={formData.gender}
                                onChangeText={(value) => handleChange('gender', value)}
                            >
                                {selectedPatient?.gender}
                            </TextInput>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={styles.modalText1}>Blood Group: </Text>
                            <TextInput
                                style={styles.modalTextInput}
                                // value={formData.bloodgroup}
                                onChangeText={(value) => handleChange('bloodgroup', value)}
                            >
                                {selectedPatient?.bloodGroup}
                            </TextInput>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={styles.modalText1}>Synopsis: </Text>
                            <TextInput
                                style={styles.modalTextInput}
                                // value={formData.synopsis}
                                onChangeText={(value) => handleChange('synopsis', value)}
                            >
                                {selectedPatient?.primarySynopsis}
                            </TextInput>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={styles.modalText1}>Status: </Text>
                            <TextInput
                                style={styles.modalTextInput}
                                // value={formData.status}
                                onChangeText={(value) => handleChange('status', value)}
                            >
                                {selectedPatient?.checked ? "Checked" : "Not checked"}
                            </TextInput>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={styles.modalText1}>Symtoms: </Text>
                            <TextInput
                                style={styles.modalTextInput}
                                // value={formData.symptoms}
                                onChangeText={(value) => handleChange('symptoms', value)}
                            >
                                {selectedPatient?.injuryDetails?.symptoms}
                            </TextInput>
                        </View> */}

                        <View style={styles.closeBtn}>
                            <TouchableOpacity
                                style={[styles.button0, styles.buttonClose0]}
                                onPress={handleEdit}
                            >
                                <Text style={styles.textStyle0}>Edit</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[styles.button0, styles.buttonClose0]}
                                onPress={() => {
                                    setEditModalVisible(!editModalVisible);
                                    setSelectedPatient(null); // Clear selected patient after closing modal
                                }}
                            >
                                <Text style={styles.textStyle0}>Close</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={deleteModalVisible}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Are you sure?</Text>
                        <View style={styles.deleteButtons}>
                            <TouchableOpacity
                                style={[styles.button1, styles.buttonConfirm]}
                                onPress={confirmDelete}>
                                <Text style={styles.textStyle1}>Confirm</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.button2, styles.buttonClose]}
                                onPress={() => setDeleteModalVisible(!deleteModalVisible)}>
                                <Text style={styles.textStyle2}>Close</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

            <ScrollView>
                {(name.trim() === ''
                    ? cardData
                    : cardData.filter(
                        (item) =>
                            item.patientName.toLowerCase().includes(name.toLowerCase()) ||
                            item.primarySynopsis.toLowerCase().includes(name.toLowerCase())
                    )
                ).map((item) => (
                    <TouchableOpacity
                        key={item._id} // Make sure to use a unique key for each item
                        onPress={() => {
                            setSelectedPatient(item);
                            setPatientModalVisible(true);
                        }}
                    >
                        <View style={styles.cardContainer}>
                            <View style={styles.dateContainer}>
                                <Text style={styles.dateText}>
                                    {format(new Date(item.injuryDetails.dateOfCreation), 'd MMM, yyyy')}
                                </Text>
                                <Text style={styles.timeText}>
                                    {format(new Date(item.injuryDetails.dateOfCreation), 'h:mm a')}
                                </Text>
                            </View>
                            <View style={styles.patientDetails}>
                                <Text style={styles.patientName}>{item.patientName}</Text>
                                <Text style={styles.patientAge}>Age: {item.age}</Text>
                                <Text style={styles.patientGender}>Gender: {item.gender}</Text>
                                <Text style={styles.patientSynopsis}>{item.primarySynopsis}</Text>
                            </View>
                            <View style={styles.checkPart}>
                                <CheckBox
                                    style={styles.check}
                                    isChecked={checkedItems[item._id] || false}
                                    onClick={() => toggleCheckbox(item._id)}
                                />
                                <View style={styles.editnDelete}>
                                    <TouchableOpacity
                                        key={item._id}
                                        style={styles.editBtn}
                                        onPress={() => {
                                            setSelectedPatient(item);
                                            setEditModalVisible(true);
                                        }}
                                    >
                                        <Image
                                            source={require('../assets/icons/edit.png')}
                                            resizeMode='contain'
                                            style={styles.editBtnImage}
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={styles.delBtn}
                                        onPress={() => handleDelete(item._id)}
                                    >
                                        <Image
                                            source={require('../assets/icons/trash-2.png')}
                                            resizeMode='contain'
                                            style={styles.delBtnImage}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
                {cardData.length === 0 && (
                    <View style={styles.noUsersContainer}>
                        <Text style={styles.noUsersText}>No results Found</Text>
                    </View>
                )}
            </ScrollView>
        </View>

    )
}