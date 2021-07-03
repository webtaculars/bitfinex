import React, { PureComponent } from "react";
import { Text, View } from "react-native";
import styles from "./styles";

export default class NetworkStatusToast extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text>No Internet Connection</Text>
      </View>
    );
  }
}
