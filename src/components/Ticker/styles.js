import { StyleSheet } from "react-native";
import Colors from "../../theme";

export default StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#19272e",
  },
  rowContainer: {
    flexDirection: "row",
    paddingVertical: 2,
    justifyContent: "space-between",
  },
  titleText: {
    color: Colors.primarytext,
    fontSize: 16,
  },
  primaryText: {
    color: Colors.primarytext,
    fontSize: 12,
  },
  secondaryText: {
    color: Colors.secondaryText,
    fontSize: 12,
  },
  valueIncreasedText: {
    color: Colors.valueIncreasedText,
  },
  valueDecreasedText: {
    color: Colors.valueDecreasedText,
  },
  volumeUnit: {
    textDecorationLine: "underline",
    textDecorationColor: Colors.primarytext,
  },
});
