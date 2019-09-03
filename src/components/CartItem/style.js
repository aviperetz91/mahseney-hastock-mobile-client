import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    cartItem: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 5
    },
    contentContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    image: {
        borderRadius: 5,
        width: 50,
        height: 50
    },
    quantity: {
        color: "#888",
        fontSize: 16
    },
    text: {
        fontSize: 14,
        fontWeight: "bold"
    },
    deleteButton: {
        marginLeft: 20
    }
})

export default styles;