import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ESideBlockState } from '../utils/types/sideBlockState';
import AppState from './states/AppState';
import { RootState } from './store';

const initialState: AppState = {
  sideBlockState: ESideBlockState.PHONE, // NONE - initial state
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    changeSideBlockState: (state, action: PayloadAction<ESideBlockState>) => {
      state.sideBlockState = action.payload;
    },
  },
});

export const { changeSideBlockState } = appSlice.actions;

export const selectSideBlockState = (state: RootState) => {
  return state.app.sideBlockState;
};
export default appSlice.reducer;
