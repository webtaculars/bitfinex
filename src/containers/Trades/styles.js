import { StyleSheet } from "react-native";
import Colors from "../../theme";

export default StyleSheet.create({
  headerComponent: {
    backgroundColor: Colors.primaryBackgroundColor,
    justifyContent: "space-between",
    color: Colors.primarytext,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.lighter,
  },
  headerText: {
    padding: 10,
    color: Colors.primarytext,
    fontSize: 16,
  },
  primaryText: {
    color: Colors.primarytext,
    fontSize: 12,
  },
  tableHeading: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  tableHeadingText: {
    fontSize: 14,
    color: Colors.secondaryText,
  },
  tradeDataList: {
    minHeight: "100%",
    flexDirection: "column",
    marginTop: 5,
  },
});
