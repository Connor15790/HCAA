import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    menuContainer: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    menuBtn: {
        marginRight: 10,
        paddingVertical: 0
    },
    dropdown: {
        display: 'none',
    },
    dropdownContainer: {
        height: 40,
        marginBottom: 20,
        // width: "90%"
    },
    dropdownWrapper: {
        width: 150,
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        alignContent: "center",
        marginLeft: 212,
        marginTop: 20
    },
    dropdownLabel: {
        fontSize: 10,
        textAlign: "center",
        padding: 20
    },
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 50,
        alignItems: "center"
    },
    profileImage: {
        width: 45,
        height: 45,
        borderRadius: 40
    },
    loginBtn: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderColor: "black",
        backgroundColor: "#F68A11",
        borderWidth: 1,
        borderRadius: 10
    },
    loginText: {
        fontFamily: "Montserrat-Regular",
        color: "white",
    },
    titleWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingTop: 0,
        alignItems: "center"
    },
    appTitle: {
        fontSize: 32,
        fontFamily: "Montserrat-Bold",
        color: "#51B209",
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 0
    },
    homeButtons: {
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
    },
    casualtyHeader: {
        paddingVertical: 30,
        paddingHorizontal: 50,
        borderColor: "black",
        borderWidth: 1,
        marginTop: 50,
        borderRadius: 10,
        backgroundColor: "#BBC7B8",
    },
    recordsHeader: {
        paddingVertical: 30,
        paddingHorizontal: 64,
        borderColor: "black",
        borderWidth: 1,
        marginTop: 50,
        borderRadius: 10,
        backgroundColor: "#BBC7B8"
    },
    emergencyHeader: {
        paddingVertical: 30,
        paddingHorizontal: 34,
        borderColor: "black",
        borderWidth: 1,
        marginTop: 50,
        borderRadius: 10,
        backgroundColor: "#BBC7B8"
    },
    casualtyTitle: {
        fontSize: 20,
        fontFamily: "Montserrat-Medium"
    },
    recordsTitle: {
        fontSize: 28,
        fontFamily: "Montserrat-Medium"
    },
    emergencyTitle: {
        fontSize: 28,
        fontFamily: "Montserrat-Medium"
    },
    logoContainer: {
        flex: 0,
        alignItems: "center"
    },
    logo: {
        width: 150,
        height: 150
    },
})

export default styles;