import {createSelector, createSlice} from '@reduxjs/toolkit';
import {AppThunk, RootState} from '.';
import {AuthenticationService, ProtectedService} from '../api';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    error: '',
  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});

// Extract the action creators object and the reducer
const {actions, reducer} = authSlice;
// Extract and export each action creator by name
export const {setUser} = actions;
// Export the reducer, either as a default or named export
export default reducer;

const selectUser = (state: RootState) => state.auth.user;
export const selectCurrentUser = createSelector(
  [selectUser], // Pass an array of input selectors
  user => user,
);

export const registerUser =
  (data: any): AppThunk =>
  async dispatch => {
    try {
      const response = await AuthenticationService.postAuthRegister(
        data.formValues,
      );

      dispatch(setUser(response));
      data.navigation.navigate('Home');
    } catch (error) {
      console.log(error);
    }
  };

export const loginUser =
  (data: any): AppThunk =>
  async dispatch => {
    try {
      const response = await AuthenticationService.postAuthLogin(
        data.formValues,
      );

      dispatch(setUser(response));
      data.navigation.navigate('Home');
    } catch (error) {
      console.log(error);
    }
  };

export const logoutUser =
  (data: any): AppThunk =>
  async dispatch => {
    try {
      await AuthenticationService.postLogout();

      dispatch(setUser(null));
      data.navigation.navigate('Home');
    } catch (error) {
      console.log(error);
    }
  };

export const protectedRoute = (): AppThunk => async () => {
  try {
    const response = await ProtectedService.getWelcome();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
