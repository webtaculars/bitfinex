import { UPDATE_WS_CONNECTION_STATUS } from "./actionTypes";

export const wsConnectionAction = status => {
  return {
    type: UPDATE_WS_CONNECTION_STATUS,
    status,
  };
};
