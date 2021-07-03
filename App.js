import React, { Component } from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import { Provider } from "react-redux";
import NetInfo from "@react-native-community/netinfo";

import Ticker from "./src/containers/Ticker";
import Trades from "./src/containers/Trades";
import NetworkStatusToast from "./src/components/NetworkStatusToast";

import configureStore from "./src/store";
import Colors from "./src/theme";

const store = configureStore();

class App extends Component {
  state = {
    networkStatus: true,
  };

  componentDidMount = () => {
    NetInfo.addEventListener(state => {
      this.setState({
        networkStatus:
          state.isConnected && state.isInternetReachable ? true : false,
      });
    });
  };

  render() {
    const { networkStatus } = this.state;
    return (
      <Provider store={store}>
        <SafeAreaView style={styles.backgroundStyle}>
          <View style={styles.header}>
            <Text style={styles.headerText}>BTC/USD</Text>
          </View>
          <Ticker networkStatus={networkStatus} />
          <Trades networkStatus={networkStatus} />
          {!networkStatus ? <NetworkStatusToast /> : null}
        </SafeAreaView>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: Colors.primaryBackgroundColor,
  },
  header: {
    padding: 10,
    backgroundColor: Colors.primaryBackgroundColor,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: Colors.primaryDark,
  },
  headerText: {
    color: Colors.primarytext,
    fontSize: 18,
  },
});

export default App;
