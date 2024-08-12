import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    changepassHeader: {
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        marginTop: 120
    },
    changepassText: {
        color: "#51B209",
        fontSize: 28,
        fontFamily: "Montserrat-Bold",
        textDecorationLine: "underline"
    },
    newPassSearchContainer: {
        justifyContent: "left",
        alignItems: "left",
        marginTop: 50,
        height: 40,
        paddingHorizontal: 40
    },
    newPassHeader: {
        fontSize: 16,
        fontWeight: "bold"
    },
    newPassSearchWrapper: {
        flex: 1,
        backgroundColor: "white",
        marginTop: 10,
        justifyContent: "center",
        paddingLeft: 10,
        borderRadius: 3,
        height: "50%",
        paddingVertical: 15
    },
    newPassSearchInput: {
        height: 20,
        fontSize: 16
    },
    confirmNewPassSearchContainer: {
        justifyContent: "left",
        alignItems: "left",
        marginTop: 40,
        height: 40,
        paddingHorizontal: 40
    },
    confirmNewPassHeader: {
        fontSize: 16,
        fontWeight: "bold"
    },
    confirmNewPassSearchWrapper: {
        flex: 1,
        backgroundColor: "white",
        marginTop: 10,
        justifyContent: "center",
        paddingLeft: 10,
        borderRadius: 3,
        height: "50%",
        paddingVertical: 15
    },
    confirmNewPassSearchInput: {
        height: 20,
        fontSize: 16
    },
    loginBtn: {
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 30
    },
    loginWrapper: {
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderColor: "black",
        borderWidth: 1,
        marginTop: 40,
        borderRadius: 5,
        backgroundColor: "#BBC7B8",
    },
    loginButtonText: {
        fontSize: 20,
        fontFamily: "Montserrat-Medium",
        color: "white"
    },
})

export default styles;