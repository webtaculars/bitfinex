import React, { PureComponent } from "react";
import { Text, View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import styles from "./styles";

export default class Ticker extends PureComponent {
  static defaultProps = {
    last_price: 100,
    VOLUME: 100,
    DAILY_CHANGE: 100,
    DAILY_CHANGE_PERC: 100,
    HIGH: 100,
    LOW: 100,
    isPriceIncreased: true,
    volumeUnit: "BTC",
  };

  render() {
    const { volumeUnit, tickerData } = this.props;
    const [
      bid,
      bid_size,
      ask,
      ask_size,
      daily_change,
      daily_change_percentage,
      last_price,
      volume,
      high,
      low,
    ] = tickerData;
    return (
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <FontAwesome name="bitcoin" style={styles.iconStyle} />
        </View>
        <View style={styles.dataContainer}>
          <View style={styles.rowContainer}>
            <Text style={styles.titleText}>BTC/USD</Text>
            <Text style={styles.titleText}>
              {last_price.toLocaleString("en-US", { maximumFractionDigits: 2 })}
            </Text>
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.primaryText}>
              <Text style={styles.secondaryText}>VOL </Text>
              {`${volume.toFixed(2)} `}
              <Text style={styles.volumeUnit}>{volumeUnit}</Text>
            </Text>
            <Text
              style={[
                styles.primaryText,
                daily_change > 0
                  ? styles.valueIncreasedText
                  : styles.valueDecreasedText,
              ]}>
              {daily_change.toFixed(2)}{" "}
              <FontAwesome name="caret-up" style={styles.caretIcon} /> (
              {(daily_change_percentage * 100).toFixed(2)}%)
            </Text>
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.primaryText}>
              <Text style={styles.secondaryText}>LOW </Text>
              {low.toLocaleString("en-US", { maximumFractionDigits: 2 })}
            </Text>
            <Text style={styles.primaryText}>
              <Text style={styles.secondaryText}>HIGH </Text>
              {high.toLocaleString("en-US", { maximumFractionDigits: 2 })}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
