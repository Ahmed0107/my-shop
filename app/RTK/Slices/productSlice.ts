"use client";
import { createSlice } from "@reduxjs/toolkit";
import { Product } from '../../../types';
import type { PayloadAction } from '@reduxjs/toolkit'


const initialState: Product[] = []

export const prodSlice = createSlice({
  name: "prodSlice",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const foundedProd = state.find((prod) => prod.id === action.payload.id)
      if (foundedProd) {
        alert("Product already there");
      } else {
        state.push(action.payload)
      }
    },

    removeFromCart: (state, action: PayloadAction<Product>) => {
      return state.filter((product) => product.id !== action.payload.id);
    },
  },
});

export const { addToCart, removeFromCart } = prodSlice.actions;

export default prodSlice.reducer;