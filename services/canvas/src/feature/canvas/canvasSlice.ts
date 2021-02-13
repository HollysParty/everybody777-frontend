import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CanvasState {
  color: string;
}
const initialState: CanvasState = {
  color: '#4A90E2'
};

const CanvasSlice = createSlice({
  name: 'viewer',
  initialState,
  reducers: {
    setColor(state, action: PayloadAction<string>) {
      state.color = action.payload;
    }
  }
});

export const { setColor } = CanvasSlice.actions;
export default CanvasSlice.reducer;
