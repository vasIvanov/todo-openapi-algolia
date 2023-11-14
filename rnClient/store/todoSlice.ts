import {createSelector, createSlice} from '@reduxjs/toolkit';
import {AppThunk, RootState} from '.';
import {TodosService} from '../api';

// interface ITodo {}

// interface ITodoState {
//   todos: ITodo[];
//   error: string;
// }

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: [],
    error: '',
  },
  reducers: {
    setTodos(state, action) {
      state.todos = action.payload;
    },
  },
});

// Extract the action creators object and the reducer
const {actions, reducer} = todoSlice;
// Extract and export each action creator by name
export const {setTodos} = actions;
// Export the reducer, either as a default or named export
export default reducer;

export const getTodos = (): AppThunk => async dispatch => {
  try {
    const response = await TodosService.getTodos();
    dispatch(setTodos(response));
  } catch (error) {
    console.log(error);
  }
};

export const createTodo =
  (data: any): AppThunk =>
  async dispatch => {
    try {
      console.log(data);

      const response = await TodosService.createTodo(data);
      console.log(response);

      dispatch(getTodos());
    } catch (error) {
      console.log(error);
    }
  };

export const deleteTodo =
  (id: number): AppThunk =>
  async dispatch => {
    try {
      await TodosService.deleteTodo(id);

      dispatch(getTodos());
    } catch (error) {
      console.log(error);
    }
  };

const selectTodos = (state: RootState) => state.todo.todos;
export const selectAllTodos = createSelector(
  [selectTodos], // Pass an array of input selectors
  todos => todos,
);

export const selectTodosLength = createSelector(
  [selectTodos], // Pass an array of input selectors
  todos => todos.length,
);
