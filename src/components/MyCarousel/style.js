import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flexDirection:'row', 
    alignItems: 'center',
    justifyContent: 'center',
  },
    carousel: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: 300,
      height: 300,
      borderWidth: 2,
      borderColor: Colors.dark,
      borderRadius: 10,
    },
    dots: {
      width: 10,
      height: 10,
      borderRadius: 5,
      marginHorizontal: 8,
      backgroundColor: Colors.primary
  },
  inactiveDots: {
    backgroundColor: Colors.dark
  }
});

export default styles;