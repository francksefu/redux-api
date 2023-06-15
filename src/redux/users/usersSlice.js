import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  isLoading: false,
  error: undefined,
}


export const fetchUser = createAsyncThunk('user/fetchUser', async() => {
    try{
        const resp = await fetch('https://randomuser.me/api/?results=5');
        const data = await resp.json();
        return data.results;
    }catch(err) {

    }
})

const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
        state.users = action.payload;
        state.isLoading = false;
    });
    builder.addCase(fetchUser.pending, (state) => {
        state.isLoading = true;
    });
    builder.addCase(fetchUser.rejected, state => {
        state.error = 'Something went wrong...'
    })
  }
});

export default usersSlice.reducer;
