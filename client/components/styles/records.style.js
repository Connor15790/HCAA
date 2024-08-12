import { StyleSheet, Dimensions } from "react-native";

const deviceWidth = Math.round(Dimensions.get("window").width);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 50,
        alignItems: "center",
        marginRight: 310
    },
    profileImage: {
        width: 45,
        height: 45,
        borderRadius: 40
    },
    dateWrapper: {
        justifyContent: "left",
        flexDirection: "row",
        marginTop: 50,
        paddingHorizontal: 35,
    },
    dateHeader: {
        fontSize: 16,
        fontWeight: "bold",
        paddingTop: 3
    },
    searchContainer: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginTop: 0,
        height: 50,
        paddingHorizontal: 20,
    },
    searchWrapper: {
        flex: 1,
        backgroundColor: "white",
        marginRight: 12,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        height: "80%",
    },
    searchInput: {
        width: "100%",
        height: "100%",
        paddingHorizontal: 16,
    },
    searchBtn: {
        width: 45,
        height: "80%",
        backgroundColor: "black",
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    searchBtnImage: {
        width: "50%",
        height: "50%",
        tintColor: "white",
    },
    cardContainer: {
        flexDirection: "row",
        backgroundColor: "white",
        marginHorizontal: 20,
        marginTop: 20,
        marginBottom: 10,
        height: 120,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOpacity: 0.75,
        shadowOffset: {
            width: 5,
            height: 5
        },
        shadowRadius: 5,
        elevation: 7
    },
    dateContainer: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        marginVertical: 15,
        width: "28%",
        marginLeft: 10,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOpacity: 0.75,
        shadowOffset: {
            width: 5,
            height: 5
        },
        shadowRadius: 5,
        elevation: 6,
        paddingTop: 5,
    },
    patientDetails: {
        paddingTop: 13,
        paddingHorizontal: 15,
        // backgroundColor: "red",
        width: 150
    },
    patientName: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 12
    },
    patientAge: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 12
    },
    patientGender: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 12
    },
    patientSynopsis: {
        marginTop: 5,
        fontFamily: "Montserrat-SemiBold",
        fontSize: 12,
        color:'red'
    },
    dateText: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 12
    },
    timeText: {
        marginTop: 10
    },
    checkPart: {
        // backgroundColor: "red",
        width: "25%",
        paddingVertical: 10,
        alignItems: "center"
    },
    editBtn: {
        paddingTop: 45,
        alignItems: "left"
    },
    check: {
        alignItems: "flex-end",
        paddingRight: 0
    },
    editnDelete: {
        flex: 1,
        flexDirection: "row",
        // paddingHorizontal: 20,
        
    },
    delBtn: {
        paddingTop: 45,
        alignItems: "flex-end",
        paddingLeft: 10
    },
    delBtnImage: {

    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 5,
        paddingVertical: 30,
        paddingHorizontal: 50,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalText: {
        marginBottom: 10,
        textAlign: 'center',
        fontFamily: "Montserrat-SemiBold",
        fontSize: 20,
    },
    modalText1: {
        marginTop: 3,
        fontFamily: "Montserrat-Medium",
    },
    modalTextInput: {
        backgroundColor: "white",
        justifyContent: "center",
        paddingLeft: 10,
        borderRadius: 3,
        // borderWidth: 1,
        // // width: 100
    },
    button1: {
        borderRadius: 10,
        paddingVertical: 5,
        elevation: 2,
        marginTop: 10,
        paddingHorizontal: 25,
        marginHorizontal: 20,
    },
    button2: {
        borderRadius: 10,
        paddingVertical: 5,
        elevation: 2,
        marginTop: 10,
        paddingHorizontal: 35,
    },
    buttonClose: {
        backgroundColor: 'black',
    },
    textStyle1: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    textStyle2: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    closeBtn: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    buttonConfirm: {
        backgroundColor: "white"
    },
    deleteButtons: {
        flexDirection: "row",
        alignItems: "center",
        padding: 20,
        paddingVertical: 15,
        marginRight: 18,
        marginTop: 10
    },
    button0: {
        borderRadius: 10,
        paddingVertical: 5,
        elevation: 2,
        marginTop: 10,
        paddingHorizontal: 12,
        width: 80
    },
    buttonClose0: {
        backgroundColor: 'black',
    },
    textStyle0: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    noUsersContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    noUsersText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
})

export default styles;