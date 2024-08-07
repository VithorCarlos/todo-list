import { combineReducers } from "@reduxjs/toolkit";
import { todosSliceReducer } from "./todo";

const rootReducer = combineReducers({ todos: todosSliceReducer });

export type RootReducer = ReturnType<typeof rootReducer>;

export { rootReducer };
