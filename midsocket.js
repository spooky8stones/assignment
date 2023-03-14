export const createWebSocketMiddleware = (url) => {
    let socket = null;
  
    const onOpen = (store) => (event) => {
      console.log('WebSocket connection established');
      store.dispatch({ type: 'websocket/connected' });
    };
  
    const onClose = (store) => () => {
      console.log('WebSocket connection closed');
      store.dispatch({ type: 'websocket/disconnected' });
      socket = null;
    };
  
    const onMessage = (store) => (event) => {
      const data = JSON.parse(event.data);
      store.dispatch({ type: 'websocket/messageReceived', payload: data });
    };
  
    return (storeAPI) => (next) => (action) => {
      switch (action.type) {
        case 'websocket/connect':
          if (socket !== null) {
            socket.close();
          }
  
          socket = new WebSocket(url);
          socket.onmessage = onMessage(storeAPI);
          socket.onclose = onClose(storeAPI);
          socket.onopen = onOpen(storeAPI);
  
          break;
  
        case 'websocket/disconnect':
          if (socket !== null) {
            socket.close();
          }
          socket = null;
  
          break;
  
        case 'websocket/sendMessage':
          if (socket !== null) {
            socket.send(JSON.stringify(action.payload));
          }
  
          break;
  
        default:
          return next(action);
      }
    };
  };
  