import { UPDATE_TICKER_DATA, UPDATE_TICKER_CHANNEL } from "./actionTypes";

export const tickerSubscribeAction = channelId => {
  return {
    type: UPDATE_TICKER_CHANNEL,
    channelId,
  };
};

export const tickerMessageAction = data => {
  return {
    type: UPDATE_TICKER_DATA,
    data,
  };
};
