import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    branchItem: {
        margin: 5
    },
    titleContainer: {
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 5
    },
    title:{
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        paddingVertical: 10,
    },
    locationContainer: {
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
    },
    location: {
        height: 300,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        backgroundColor: "#ccc",
    },
    addressContainer: {
        marginVertical: 8,
    },
    address: {
        fontSize: 20,
        textAlign: "center"
    }
})

export default styles;