import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { selectToken } from "../auth/selectors";
import toast from "react-hot-toast";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

axios.defaults.headers.common["Authorization"] = `${selectToken}`;

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (newContact, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", newContact);
      toast.success("Successfully added contact!");
      return response.data;
    } catch (error) {
      toast.error("Something went wrong, try again!");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactID, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactID}`);
      toast.success("Successfully deleted contact!");
      return response.data;
    } catch (error) {
      toast.error("Something went wrong, try again!");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
