import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    form: {
        margin: 20,
    },
    pickerContainer: {
        flexDirection: "row"
    },
    formControl: {
        width: "100%",
        marginVertical: 5,
    },
    label: {
        alignSelf: "center",
        fontSize: 18
    },
    input: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5
    },
    buttonContainer: {
        marginTop: 10
    }
})

export default styles;