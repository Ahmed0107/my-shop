'use client'
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import prodReducer from './Slices/productSlice'
import { persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";

const presistConfig = {
  key: "sameh-shop",
  storage
}

const reducers = combineReducers({
  cart: prodReducer
})

const presistedReducers = persistReducer(presistConfig, reducers)

export const store = configureStore({
  reducer: presistedReducers
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
