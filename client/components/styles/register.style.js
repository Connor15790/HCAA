import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    registerHeader: {
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        marginTop: 80
    },
    registerText: {
        color: "#51B209",
        fontSize: 32,
        fontFamily: "Montserrat-Bold",
        textDecorationLine: "underline"
    },
    usernameSearchContainer: {
        justifyContent: "center",
        alignItems: "left",
        flexDirection: "column",
        marginTop: 20,
        height: 80,
        paddingHorizontal: 20
    },
    usernameHeader: {
        fontSize: 16,
        fontWeight: "bold"
    },
    usernameSearchWrapper: {
        flex: 1,
        backgroundColor: "white",
        marginTop: 5,
        justifyContent: "center",
        paddingLeft: 5,
        borderRadius: 3,
        height: "80%",
    },
    usernameSearchInput: {
        height: 20,
        fontSize: 16,
        paddingHorizontal: 8
    },
    professionSearchContainer: {
        justifyContent: "left",
        marginTop: 20,
        paddingHorizontal: 20,
    },
    professionHeader: {
        fontSize: 16,
        fontWeight: "bold",
        paddingTop: 3
    },
    professionSearchWrapper: {
        width: 150,
        marginLeft: 0,
    },
    professionBox: {
        backgroundColor: "white",
        height: 50,
        borderWidth: 0,
        borderRadius: 3,
        paddingVertical: 0,
        alignItems: "center",
        textAlign: "flex-start",
        marginTop: 5
    },
    professionDropdown: {
        height: 200
    },
    loginBtn: {
        justifyContent: "center",
        // flexDirection: "column",
        alignItems: "center",
        marginBottom: 20
    },
    loginWrapper: {
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderColor: "black",
        borderWidth: 1,
        marginTop: 20,
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