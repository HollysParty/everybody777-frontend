import React, {
  Context,
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState
} from 'react';

interface CanvasContextState {
  color: string;
  setColor: Dispatch<SetStateAction<string>>;
}
const CanvasContext: Context<CanvasContextState> = createContext(
  {} as CanvasContextState
);

const CanvasProvider = ({ children }: { children: React.ReactNode }) => {
  const [color, setColor] = useState<string>('#4A90E2');
  const value = {
    color,
    setColor
  };

  return (
    <CanvasContext.Provider value={value}>{children}</CanvasContext.Provider>
  );
};

function useCanvasState() {
  const context = useContext(CanvasContext);
  if (!context) {
    throw new Error('useCanvasState must be used within a CanvasContext');
  }
  return context;
}

export { CanvasProvider, useCanvasState };

export default CanvasContext;
