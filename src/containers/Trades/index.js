import React, { Component } from "react";
import { FlatList, View, Text } from "react-native";
import { connect } from "react-redux";

import styles from "./styles";
import Trade from "../../components/Trade";
import Loader from "../../components/Loader";

import { constants } from "../../constants";
import { wsInit, wsSubscribe, wsUnsubscribe } from "../../services/sockets";
import {
  tradesMessageAction,
  tradesSubscribeAction,
} from "../../store/actions/trades";
import { wsConnectionAction } from "../../store/actions/wsConnection";

class TradesContainer extends Component {
  constructor(props) {
    super(props);
    wsInit(constants.channels.TRADES);
  }

  componentDidMount = () => {
    this.tradesInit();
  };

  componentDidUpdate = prevProps => {
    if (
      prevProps.networkStatus !== this.props.networkStatus &&
      this.props.networkStatus
    ) {
      wsInit(constants.channels.TRADES);
      this.tradesInit();
    }
  };

  tradesInit = () => {
    const {
      wsConnectionStart,
      tradesSubscribe,
      tradesMessageRequest,
      wsConnectionClose,
    } = this.props;

    wsSubscribe(
      constants.channels.TRADES,
      "tBTCUSD",
      wsConnectionStart,
      tradesSubscribe,
      tradesMessageRequest,
      wsConnectionClose,
    );
  };

  renderItem = ({ item }) => {
    return <Trade {...this.props} tradeData={item} />;
  };

  headerComponent = () => {
    return (
      <View style={styles.headerComponent}>
        <Text style={styles.headerText}>TRADES</Text>
        {/* <View style={styles.tableHeading}>
          <Text style={styles.tableHeadingText}>TIME</Text>
          <Text style={styles.tableHeadingText}>PRICE</Text>
          <Text style={styles.tableHeadingText}>AMOUNT</Text>
        </View> */}
      </View>
    );
  };

  render() {
    const { tradesData, isLoading = true } = this.props;

    return (
      <>
        <FlatList
          data={tradesData}
          renderItem={this.renderItem}
          ListHeaderComponent={this.headerComponent}
          contentContainerStyle={styles.tradeDataList}
          showsVerticalScrollIndicator={false}
        />
        {isLoading ? <Loader /> : null}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    tradesData: state.tradesData.trades,
    isLoading: state.tradesData.isLoading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    tradesSubscribe: ({ chanId }) => dispatch(tradesSubscribeAction(chanId)),
    tradesMessageRequest: data => dispatch(tradesMessageAction(data)),
    wsConnectionStart: () => dispatch(wsConnectionAction(true)),
    wsConnectionClose: () => dispatch(wsConnectionAction(false)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TradesContainer);
