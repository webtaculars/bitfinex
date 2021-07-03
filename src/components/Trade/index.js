import React, { PureComponent } from "react";
import { Text, View } from "react-native";
import { ListItem } from "react-native-elements";
import styles from "./styles";

export default class Trade extends PureComponent {
  static defaultProps = {};

  render() {
    const { tradeData = {} } = this.props;
    const { id, amount, price, time } = tradeData;
    return (
      <ListItem key={id} bottomDivider containerStyle={styles.container}>
        <Text style={styles.primaryText}>
          {new Date(time).toLocaleTimeString("en-US", { hour12: false })}
        </Text>
        <Text style={styles.primaryText}>{price.toFixed(2)}</Text>
        <Text style={styles.primaryText}>{amount.toFixed(4)}</Text>
      </ListItem>
    );
  }
}
