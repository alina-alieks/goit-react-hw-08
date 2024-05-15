import { configureStore } from "@reduxjs/toolkit";
import contacts from "./contacts/slice";
import filters from "./filters/slice";
import auth from "./auth/slice";

export const store = configureStore({
  reducer: {
    contacts: contacts,
    filters: filters,
    auth: auth,
  },
});
