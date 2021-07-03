import React, { Component } from "react";
import { connect } from "react-redux";
import Ticker from "../../components/Ticker";
import { constants } from "../../constants";
import { wsInit, wsSubscribe, wsUnsubscribe } from "../../services/sockets";
import {
  tickerMessageAction,
  tickerSubscribeAction,
} from "../../store/actions/ticker";

class TickerContainer extends Component {
  constructor(props) {
    super(props);
    wsInit(constants.channels.TICKER);
  }

  componentDidMount = () => {
    this.tickerInit();
  };

  componentWillUnmount = () => {
    // wsUnsubscribe(
    //   chanelTypes.TICKER,
    //   this.props.chanId,
    //   this.props.onTickerUnsubscribe,
    // );
  };

  tickerInit = () => {
    const { tickerSubscribe, tickerMessageRequest } = this.props;
    wsSubscribe(
      constants.channels.TICKER,
      "tBTCUSD",
      tickerSubscribe,
      tickerMessageRequest,
    );
  };

  render() {
    console.log("this.props.tickerData");
    const { tickerData } = this.props;
    return (
      <Ticker {...this.props} tickerData={tickerData} volumeUnit={"BTC"} />
    );
  }
}

const mapStateToProps = state => {
  return {
    channelId: state.tickerData.channelId,
    tickerData: state.tickerData.data,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    tickerSubscribe: ({ chanId }) => dispatch(tickerSubscribeAction(chanId)),
    tickerMessageRequest: data => dispatch(tickerMessageAction(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TickerContainer);
