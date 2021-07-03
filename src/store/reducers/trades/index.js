import {
  UPDATE_TRADES_DATA,
  UPDATE_TRADES_CHANNEL,
} from "./../../actions/trades/actionTypes";

const intialState = {
  channelId: null,
  trades: [],
  isLoading: true,
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case UPDATE_TRADES_CHANNEL:
      return {
        ...state,
        channelId: action.channelId,
        isLoading: false,
      };
    case UPDATE_TRADES_DATA:
      const [data] = action.data;
      if (Array.isArray(data)) {
        return {
          ...state,
          trades: [
            ...state.trades,
            ...data.map(([id, time, amount, price]) => ({
              id,
              time,
              amount,
              price,
            })),
          ],
        };
      } else {
        const [flag] = action.data;
        if (flag === "hb") {
          return state;
        }
        const [, [id, time, amount, price]] = action.data;
        let idExists = false;
        let updatedTrades = state.trades.map(item => {
          if (id === item.id) {
            idExists = true;
          }
          return id === item.id
            ? {
                ...item,
                id,
                time,
                amount,
                price,
              }
            : item;
        });

        return {
          ...state,
          trades: idExists
            ? updatedTrades
            : [{ id, time, amount, price }, ...state.trades],
        };
      }
      return state;
    default:
      return state;
  }
};

export default reducer;
