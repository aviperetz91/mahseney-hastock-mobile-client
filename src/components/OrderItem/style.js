import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    orderItem: {
        shadowColor: "black",
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 10,
        elevation: 4,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        padding: 10,
        marginVertical: 10,
        marginHorizontal: 20
    },
    summary: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        marginVertical: 10
    },
    totalAmount: {
        fontSize: 16,
        fontWeight: "bold"
    },
    date: {
        fontSize: 16,
        color: "#888"
    },
    itemContainer: {
        marginTop: 10
    }
})

export default styles;