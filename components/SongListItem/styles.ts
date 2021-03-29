import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,
  },
  image: {
    width: 75,
    height: 75,
  },
  rightContainer: {
    justifyContent: 'space-around',
    marginLeft: 15,
  },
  title: {
    color: 'black',
    fontSize: 24,
  },
  artist: {
    color: '#6b695c',
    fontSize: 20,
  }
})

export default styles;
