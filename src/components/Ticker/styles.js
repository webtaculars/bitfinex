import { StyleSheet } from "react-native";
import Colors from "../../theme";

export default StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: Colors.primaryBackgroundColor,
    flexDirection: "row",
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  dataContainer: {
    flex: 1,
    marginLeft: 10,
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
  iconStyle: { color: Colors.lighter, fontSize: 26 },
  caretIcon: {
    fontSize: 14,
    alignSelf: "center",
  },
});
