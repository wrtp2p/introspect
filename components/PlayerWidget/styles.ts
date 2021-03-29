import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#131313',
    width: '100%',
    borderWidth: 2,
    borderColor: 'transparent',

  },
  progress: {
    height: 3,
    backgroundColor: 'orange'
  },
  row: {
    flexDirection: 'row',
  },
  image: {
    width: 45,
    height: 45,
    marginRight: 10,
    margin: 10,
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    marginRight: 50,
  },
  nameContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 100,
    justifyContent: 'space-around',
    marginLeft: 70,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10,
  },
  artist: {
    color: 'lightgray',
    fontSize: 18,
  }
})

export default styles;
