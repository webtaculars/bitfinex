import React, { Component } from "react";
import { connect } from "react-redux";
import Loader from "../../components/Loader";

import Ticker from "../../components/Ticker";
import { constants } from "../../constants";
import { wsInit, wsSubscribe, wsUnsubscribe } from "../../services/sockets";
import {
  tickerMessageAction,
  tickerSubscribeAction,
} from "../../store/actions/ticker";
import { wsConnectionAction } from "../../store/actions/wsConnection";

class TickerContainer extends Component {
  constructor(props) {
    super(props);
    wsInit(constants.channels.TICKER);
  }

  componentDidMount = () => {
    this.tickerInit();
  };

  componentDidUpdate = prevProps => {
    if (
      prevProps.networkStatus !== this.props.networkStatus &&
      this.props.networkStatus
    ) {
      wsInit(constants.channels.TICKER);
      this.tickerInit();
    }
  };

  tickerInit = () => {
    const {
      wsConnectionStart,
      tickerSubscribe,
      tickerMessageRequest,
      wsConnectionClose,
    } = this.props;
    wsSubscribe(
      constants.channels.TICKER,
      "tBTCUSD",
      wsConnectionStart,
      tickerSubscribe,
      tickerMessageRequest,
      wsConnectionClose,
    );
  };

  wsConnectionClose = () => {};

  render() {
    const { tickerData, wsStatus, isLoading } = this.props;
    return (
      <>
        {isLoading ? <Loader /> : null}
        <Ticker
          {...this.props}
          tickerData={tickerData}
          volumeUnit={"BTC"}
          wsStatus={wsStatus}
        />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    channelId: state.tickerData.channelId,
    tickerData: state.tickerData.data,
    wsInitiated: state.wsConnectionData.initiated,
    wsStatus: state.wsConnectionData.status,
    isLoading: state.tickerData.isLoading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    tickerSubscribe: ({ chanId }) => dispatch(tickerSubscribeAction(chanId)),
    tickerMessageRequest: data => dispatch(tickerMessageAction(data)),
    wsConnectionStart: () => dispatch(wsConnectionAction(true)),
    wsConnectionClose: () => dispatch(wsConnectionAction(false)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TickerContainer);
