import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'red',
        paddingTop: 2,

        backgroundColor: '#f2f0e4',
        height: 48,
        width: 200,
        position: 'absolute',
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignItems: 'center'

    },

    button: {
        backgroundColor: 'white',
        width: 150,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,

        },
        shadowOpacity: 0.27,
        shadowRadius: 3.65,

        elevation: 20,

    },

    text: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'normal',
        margin: 10,
        alignSelf: 'center',
        letterSpacing: 1.5
    }
});

export default styles;
