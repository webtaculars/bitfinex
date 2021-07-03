import { UPDATE_TRADES_DATA, UPDATE_TRADES_CHANNEL } from "./actionTypes";

export const tradesSubscribeAction = channelId => {
  return {
    type: UPDATE_TRADES_CHANNEL,
    channelId,
  };
};

export const tradesMessageAction = data => {
  return {
    type: UPDATE_TRADES_DATA,
    data,
  };
};
