import { nextId } from "@/utils/next-todo-id";
import { createSlice } from "@reduxjs/toolkit";
import { TodoAppStateData } from "./action-types";
import { STATUS } from "@/utils/helpers/enums/status";

const initialState: TodoAppStateData = {
  data: [],
  filters: {
    status: STATUS.ALL,
    colors: [],
  },
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, { payload }) => {
      state.data.unshift({
        id: nextId(state.data),
        text: payload.text,
        completed: false,
      });
    },

    removeTodo: (state, { payload }) => {
      state.data = state.data.filter((todo) => todo.id !== payload);
    },

    toggleCompleted: (state, { payload }) => {
      state.data = state.data.map((todo) =>
        todo.id === payload
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      );
    },

    selectColor: (state, { payload }) => {
      state.data = state.data.map((todo) =>
        payload.id === todo.id ? { ...todo, color: payload.color } : todo
      );
    },

    markAllCompleted: (state) => {
      state.data = state.data.map((todo) => ({ ...todo, completed: true }));
    },

    removeAllCompleted: (state) => {
      state.data = state.data.map((todo) => ({ ...todo, completed: false }));
    },

    changeStatus: (state, { payload }) => {
      state.filters.status = payload;
    },

    selectColorsToFilter: (state, { payload }) => {
      const color = payload.toLowerCase();

      if (state.filters.colors.includes(color)) {
        state.filters.colors = state.filters.colors.filter(
          (existingColor) => existingColor !== color
        );
      } else {
        state.filters.colors.push(color);
      }
    },
  },
});

export const {
  actions: {
    addTodo,
    removeTodo,
    toggleCompleted,
    selectColor,
    markAllCompleted,
    removeAllCompleted,
    changeStatus,
    selectColorsToFilter,
  },
} = todosSlice;

export const todosSliceReducer = todosSlice.reducer;
