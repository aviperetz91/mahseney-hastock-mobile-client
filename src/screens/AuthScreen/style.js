import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    form: {
        margin: 20,
    },
    formControl: {
        width: "100%",
        marginVertical: 5,
    },
    input: {
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5
    },
    buttonsContainer: {
        marginTop: 15,
    },
    button: {
        marginVertical: 5
    },
    errorMessage: {
        paddingVertical: 4,
        paddingHorizontal: 12,
        fontSize: 12,
        // fontWeight: "bold",
        fontStyle: "italic",
        color: "#888"
    }
})

export default styles;