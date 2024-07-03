import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import CartStore from './actionReducers/CartStore'
import LanguageStore from './actionReducers/LanguageStore'

const makeStore = () =>
  configureStore({
    reducer: {
      CartStore: CartStore,
      LanguageStore: LanguageStore,
    },
  });


export const wrapper = createWrapper(makeStore);