import {createSlice} from '@reduxjs/toolkit';
import {AppThunk} from '.';
import {HealthService} from '../api';

const someSlice = createSlice({
  name: 'some',
  initialState: {
    data: '',
  },
  reducers: {
    setData(state, action) {
      state.data = action.payload;
    },
  },
});

// Extract the action creators object and the reducer
const {actions, reducer} = someSlice;
// Extract and export each action creator by name
export const {setData} = actions;
// Export the reducer, either as a default or named export
export default reducer;

export const checkAPIHealth = (): AppThunk => async dispatch => {
  try {
    const response = await HealthService.health();

    dispatch(setData(response.data));
    setTimeout(() => {
      dispatch(setData(''));
    }, 1000);
  } catch (error) {
    console.log(error);
  }
};
