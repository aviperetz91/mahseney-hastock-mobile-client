import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
    screen: {
        margin: 20,
    },
    centered: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    summary: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20,
        padding: 10,
    },
    summaryText: {
        fontSize: 16,
        fontWeight: "bold",
        
    },
    amount: {
        color: Colors.primary
    },
})

export default styles;