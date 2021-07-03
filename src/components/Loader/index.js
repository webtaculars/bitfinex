import React, { PureComponent } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import Colors from "../../theme";

export default class Loader extends PureComponent {
  render() {
    return (
      <View style={styles.container} pointerEvents={"box-only"}>
        <ActivityIndicator color={Colors.lighter} size="large" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    paddingTop: 200,
    width: "100%",
    height: "100%",
  },
});
