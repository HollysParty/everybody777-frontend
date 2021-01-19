import React, { Context, createContext, useContext, useRef } from 'react';
import { Client, over } from 'stompjs';
import { WEBSOCKET_URL } from '../const';

const WebSocketContext: Context<any> = createContext(null);

const WebSocketProvider = ({ children }: { children: React.ReactNode }) => {
  const ws = useRef<WebSocket | any>(null);
  const stompClient = useRef<Client | null>(null);

  if (!ws.current) {
    // new WebSocket(url) => url needs to have wss or ws prefix. so I use SockJS
    // But SockJS has no type definition and can used by CDN way -_-
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    ws.current = new SockJS(WEBSOCKET_URL);
    ws.current.onopen = () => {
      console.error('websocket onopen');
    };
    ws.current.onclose = () => {
      console.error('websocket onclose');
    };
    ws.current.onmessage = () => {
      console.error('websocket onmessage');
    };
    ws.current.onerror = () => {
      console.error('websocket onerror');
    };
  }

  if (!stompClient.current) {
    stompClient.current = over(ws.current);
  }

  const value = {
    stompClient: stompClient.current
  };

  return (
    <WebSocketContext.Provider value={value}>
      {children}
    </WebSocketContext.Provider>
  );
};

const useStompClient = () => {
  const context = useContext(WebSocketContext);
  if (!context) {
    throw new Error('useCanvasState must be used within a CanvasContext');
  }
  return context;
};

export { useStompClient, WebSocketProvider };
