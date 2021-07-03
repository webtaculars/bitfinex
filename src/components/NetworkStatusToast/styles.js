import { StyleSheet } from "react-native";
import Colors from "../../theme";

export default StyleSheet.create({
  container: {
    padding: 10,
    alignSelf: "center",
    backgroundColor: "#EE4B2B",
    zIndex: 10,
    position: "absolute",
    width: "95%",
    bottom: 150,
  },
  text: {
    color: Colors.primarytext,
  },
});
