import {
  UPDATE_TICKER_DATA,
  UPDATE_TICKER_CHANNEL,
} from "./../../actions/ticker/actionTypes";

const intialState = {
  channelId: null,
  data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  isLoading: true,
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case UPDATE_TICKER_CHANNEL:
      return {
        ...state,
        channelId: action.channelId,
        isLoading: false,
      };
    case UPDATE_TICKER_DATA:
      if (action.data && action.data[0] !== "hb") {
        return {
          ...state,
          data: action.data[0],
        };
      }
      return state;
    default:
      return state;
  }
};

export default reducer;
