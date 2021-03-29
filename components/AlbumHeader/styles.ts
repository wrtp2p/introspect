import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    margin: 50,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,

    },
    shadowOpacity: 0.27,
    shadowRadius: 3.65,

    elevation: 20,
  },
  image: {
    width: 200,
    height: 200,
    margin: 15,
  },
  name: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
  },
  creatorContainer: {
    flexDirection: "row",
    margin: 10,
    backgroundColor: '#f2f0e4',
    borderRadius: 50,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 2,
    //   height: 4,
    //
    // },
    // shadowOpacity: 0.27,
    // shadowRadius: 3.65,
    // elevation: 10,
  },
  creator: {
    color: '#6b695c',
    margin: 5,
    fontSize: 20,
  },
  likes: {
    color: '#6b695c',
    margin: 5,
    fontSize: 20,
  },
  button: {
    backgroundColor: '#1CD05D',
    height: 60,
    width: 175,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 4,

    },
    shadowOpacity: 0.27,
    shadowRadius: 3.65,

    elevation: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  }
});

export default styles;
