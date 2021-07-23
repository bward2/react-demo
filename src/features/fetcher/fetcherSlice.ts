import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { fetchText } from "./fetcherAPI";

export interface FetcherState {
  value: any;
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
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        console.log(action);
        state.value = action.payload;
      });
  },
});

export const selectFetchValue = (state: RootState) => state.fetcher.value;

export default fetcherSlice.reducer;
