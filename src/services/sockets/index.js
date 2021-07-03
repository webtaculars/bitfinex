import { constants } from "../../constants";

const connections = {};

export const wsInit = (chanelType, onStartConnection) => {
  const ws = new WebSocket(constants.publicWS);
  connections[chanelType] = ws;
};

export const wsSubscribe = (
  chanelType,
  symbol,
  onStart,
  onSubscribe,
  onRequest,
  onClose,
) => {
  const ws = connections[chanelType];
  const msg = JSON.stringify({
    event: "subscribe",
    channel: chanelType,
    symbol,
  });
  ws.onopen = () => {
    onStart();
    ws.send(msg);
  };

  ws.onmessage = e => {
    onMessage(onSubscribe, onRequest, e);
  };

  ws.onclose = e => {
    onClose(e);
  };
};

export const wsUnsubscribe = (chanelType, chanId, onUnsubscribe) => {
  const ws = connections[chanelType];
  const msg = JSON.stringify({
    event: "unsubscribe",
    chanId: chanId,
  });
  ws.onopen = () => {
    ws.send(msg);
  };
  ws.onmessage = event => {
    const response = JSON.parse(event.data);
    if (response.event === "unsubscribed") {
      onUnsubscribe();
    }
  };
};

export const onMessage = (onSubscribe, onRequest, event) => {
  const response = JSON.parse(event.data);
  if (Array.isArray(response)) {
    const [chanId, ...data] = response;
    onRequest(data);
  } else {
    if (response.event === "subscribed") {
      onSubscribe(response);
    }
  }
};
