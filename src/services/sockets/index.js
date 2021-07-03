import { constants } from "../../constants";

const connections = {};

export const wsInit = chanelType => {
  const wss = new WebSocket(constants.publicWS);
  connections[chanelType] = wss;
  console.log("wsInit");
  wss.onopen = () => {
    console.log("connected");
    // setInterval(() => ping(chanelType), 1000);
  };
};

export const ping = chanelType => {
  const wss = connections[chanelType];
  const msg = JSON.stringify({
    event: "ping",
    cid: 1234,
  });
  wss.onopen = () => {
    wss.send(msg);
  };
};

export const wsSubscribe = (chanelType, symbol, onSubscribe, onRequest) => {
  const wss = connections[chanelType];
  console.log("wsSubscribe");

  const msg = JSON.stringify({
    event: "subscribe",
    channel: chanelType,
    symbol,
  });
  wss.onopen = () => {
    wss.send(msg);
  };

  wss.onmessage = e => {
    onMessage(onSubscribe, onRequest, e);
  };
};

export const wsUnsubscribe = (chanelType, chanId, onUnsubscribe) => {
  const wss = connections[chanelType];
  const msg = JSON.stringify({
    event: "unsubscribe",
    chanId: chanId,
  });
  wss.onopen = () => {
    wss.send(msg);
  };
  wss.onmessage = event => {
    const response = JSON.parse(event.data);
    if (response.event === "unsubscribed") {
      onUnsubscribe();
    }
  };
};

export const onMessage = (onSubscribe, onRequest, event) => {
  console.log("onMessage");

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
