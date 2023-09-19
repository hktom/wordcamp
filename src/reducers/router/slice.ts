import { createSlice } from "@reduxjs/toolkit";

export interface IRouterState {
  page: string;
}

export const initialState: IRouterState = {
  page: "home",
};

export const routerReducer = createSlice({
  name: "router",
  initialState,
  reducers: {
    change_page: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { change_page } = routerReducer.actions;

export default routerReducer.reducer;
