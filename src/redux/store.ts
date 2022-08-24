import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./root-reducer";
import logger from "redux-logger";
import { StateType } from "typesafe-actions";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";

const store = configureStore({ reducer: rootReducer, middleware: [logger] });

export type RootState = StateType<typeof rootReducer>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
