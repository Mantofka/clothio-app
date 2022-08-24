import { ActionType, getType } from "typesafe-actions";
import * as interfaces from "./interface.actions";

export type InterfacesAction = ActionType<typeof interfaces>;

export type InterfaceStateProps = {
  themeMode: string;
};

const InterfaceState: InterfaceStateProps = {
  themeMode: "light",
};

export type InterfaceReducerType = ReturnType<typeof InterfaceReducer>;

const InterfaceReducer = (
  state: InterfaceStateProps = InterfaceState,
  action: InterfacesAction
) => {
  switch (action.type) {
    case getType(interfaces.changeTheme):
      return {
        ...state,
        themeMode: state.themeMode === "light" ? "dark" : "light",
      };
    case getType(interfaces.setTheme):
      return {
        ...state,
        themeMode: action.payload,
      };

    default:
      return { ...state };
  }
};

export default InterfaceReducer;
