import { combineReducers } from 'redux';
import canvasSlice from '../feature/canvas/canvasSlice';

const rootReducer = combineReducers({
  canvas: canvasSlice
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
