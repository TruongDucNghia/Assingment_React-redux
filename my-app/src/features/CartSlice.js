import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        value: []
    },
    extraReducers: () =>{

    }
})

export default cartSlice.reducer