import { createAction } from "typesafe-actions";
import InterfaceTypes from "./interface.types";

export const changeTheme = createAction(InterfaceTypes.CHANGE_THEME)();

export const setTheme = createAction(
  InterfaceTypes.SET_THEME,
  (theme: string) => theme
)<string>();
