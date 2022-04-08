import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { addCartApi, deleteCartApi } from '../api/cart'
export const addCarts = createAsyncThunk(
    'cart/addCart',
    async (cart) =>{
        const {data} = await addCartApi(cart)
        return data
    }
)

export const deleteCarts = createAsyncThunk(
    'cart/deleteCart',
    async (id) =>{
        const {data} = await deleteCartApi(id)
        return data
    }
)
const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        value: []
    },
    extraReducers: (builder) =>{
        builder.addCase(addCarts.fulfilled, (state, actions) =>{
            state.value.push(actions.payload)
        })
        builder.addCase(deleteCarts.fulfilled, (state, actions) =>{
            state.value = state.value.filter(item => item.id !== actions.meta.arg)
        })
    }
})

export default cartSlice.reducer