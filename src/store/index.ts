import { configureStore } from "@reduxjs/toolkit";
import { todosSliceReducer } from "./reducers/todo";

export const store = configureStore({
  reducer: {
    todos: todosSliceReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
