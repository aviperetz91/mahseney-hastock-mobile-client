import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
    screen: {
        margin: 20,
    },
    summary: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20,
        padding: 10,
        shadowColor: "black",
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 10,
        borderRadius: 10,
        backgroundColor: "white",
        elevation: 5,
    },
    summaryText: {
        fontSize: 16,
        fontWeight: "bold",
        
    },
    amount: {
        color: Colors.primary
    }
})

export default styles;