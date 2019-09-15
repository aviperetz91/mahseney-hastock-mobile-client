import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: Colors.primary,
        paddingHorizontal: 15,
        paddingVertical: 2
    },
    buttonText: {
        alignSelf: 'center',
        color: Colors.primary,
        fontSize: 16,
        fontWeight: 'bold',
        paddingTop: 10,
        paddingBottom: 10
    }
})
  
export default styles;