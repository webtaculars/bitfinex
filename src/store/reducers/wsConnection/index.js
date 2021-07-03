import { UPDATE_WS_CONNECTION_STATUS } from "./../../actions/wsConnection/actionTypes";

const intialState = {
  initiated: false,
  status: false,
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case UPDATE_WS_CONNECTION_STATUS:
      return {
        ...state,
        status: action.status,
        initiated: true,
      };
    default:
      return state;
  }
};

export default reducer;
