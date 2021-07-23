import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { fetchText } from "./fetcherAPI";

export interface FetcherState {
  value: string;
  status: 'idle' | 'loading' | 'failed';
};

const initialState: FetcherState = {
  value: '',
  status: 'idle',
};

export const fetchAsync = createAsyncThunk(
  'fetcher/fetchText',
  async (address: string) => {
    const response = await fetchText(address);
    return response;
  }
);

export const fetcherSlice = createSlice({
  name: 'fetcher',
  initialState,
  reducers: {
    clearValue: (state) => {
      state.value = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value = action.payload;
      });
  },
});

export const { clearValue } = fetcherSlice.actions;

export const selectFetchValue = (state: RootState) => state.fetcher.value;
export const selectFetchStatus = (state: RootState) => state.fetcher.status;

export default fetcherSlice.reducer;
