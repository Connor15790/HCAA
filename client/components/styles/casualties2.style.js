import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    titleWrapper: {
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        marginTop: 0,
    },
    titleText: {
        color: "#51B209",
        fontSize: 30,
        fontFamily: "Montserrat-Bold",
        textDecorationLine: "underline"
    },
    timeWrapper: {
        justifyContent: "left",
        alignItems: "center",
        flexDirection: "row",
        marginTop: 30,
        height: 40,
        paddingHorizontal: 20
    },
    timeText: {
        fontSize: 20,
        fontWeight: "bold",
    },
    timeddWrapper: {
        justifyContent: "left",
        marginTop: 10,
        paddingHorizontal: 20,
    },
    timeBox: {
        backgroundColor: "white",
    },
    timeDropdown: {
        height: 200
    },
    siteWrapper: {
        justifyContent: "left",
        alignItems: "center",
        flexDirection: "row",
        marginTop: 10,
        height: 40,
        paddingHorizontal: 20
    },
    siteText: {
        fontSize: 20,
        fontWeight: "bold",
    },
    siteddWrapper: {
        justifyContent: "left",
        marginTop: 10,
        paddingHorizontal: 20,
    },
    siteBox: {
        backgroundColor: "white",
    },
    siteDropdown: {
        height: 200
    },
    symptomsTitleWrapper: {
        justifyContent: "left",
        alignItems: "center",
        flexDirection: "row",
        marginTop: 10,
        height: 40,
        paddingHorizontal: 20
    },
    symptomsTitleText: {
        fontSize: 20,
        fontWeight: "bold",
    },
    symptomsWrapper: {
        justifyContent: "left",
        marginTop: 10,
        paddingHorizontal: 20,
    },
    symptomsInput: {
        backgroundColor: "white",
        borderRadius: 3,
        paddingHorizontal: 10,
        paddingVertical: 10,
        textAlignVertical: "top"
    },
    allergiesTitleWrapper: {
        justifyContent: "left",
        alignItems: "center",
        flexDirection: "row",
        marginTop: 10,
        height: 40,
        paddingHorizontal: 20
    },
    allergiesTitleText: {
        fontSize: 20,
        fontWeight: "bold",
    },
    allergiesWrapper: {
        justifyContent: "left",
        marginTop: 10,
        paddingHorizontal: 20,
    },
    allergiesInput: {
        backgroundColor: "white",
        borderRadius: 3,
        paddingHorizontal: 10,
        paddingVertical: 10,
        textAlignVertical: "top"
    },
    prevmedTitleWrapper: {
        justifyContent: "left",
        alignItems: "center",
        flexDirection: "row",
        marginTop: 10,
        height: 40,
        paddingHorizontal: 20
    },
    prevmedTitleText: {
        fontSize: 20,
        fontWeight: "bold",
    },
    prevmedWrapper: {
        justifyContent: "left",
        marginTop: 10,
        paddingHorizontal: 20,
    },
    prevmedInput: {
        backgroundColor: "white",
        borderRadius: 3,
        paddingHorizontal: 10,
        paddingVertical: 10,
        textAlignVertical: "top",
    },
    nextContainer: {
        marginTop: 0,
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: 20
    },
    nextBtn: {
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderColor: "black",
        borderWidth: 2,
        marginTop: 30,
        borderRadius: 10,
        marginLeft: 240,
        backgroundColor: "black"
    },
    nextBtnText: {
        fontFamily: "Montserrat-SemiBold",
        color: "white"
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 25,
        alignItems: 'center',
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
        marginBottom: 15,
        textAlign: 'center',
        fontFamily: "Montserrat-SemiBold"
    },
    button: {
        borderRadius: 10,
        paddingVertical: 5,
        elevation: 2,
        marginTop: 10,
        paddingHorizontal: 12
    },
    buttonClose: {
        backgroundColor: 'black',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    synopsisContainer: {
        justifyContent: "left",
        flexDirection: "column",
        marginTop: 10,
        paddingHorizontal: 20,
    },
    synopsisContainerHeader: {
        justifyContent: "left",
        flexDirection: "row",
        marginTop: 30,
        paddingHorizontal: 20,
    },
    synopsisHeader: {
        fontSize: 18,
        fontWeight: "bold",
        paddingTop: 3
    },
    synopsisText: {
        fontSize: 16,
        paddingTop: 3
    },
})

export default styles;