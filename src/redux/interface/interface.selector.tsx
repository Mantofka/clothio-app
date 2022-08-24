import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../store";

import { InterfaceStateProps } from "./interface.reducer";

const selectInterface = (state: RootState): InterfaceStateProps =>
  state.interface;

export const selectThemeMode = createSelector(
  [selectInterface],
  (theme) => theme.themeMode
);
