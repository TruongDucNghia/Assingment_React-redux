import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { addOrderApi, deleteOrderApi, getAllOrderApi } from '../api/order'


export const addOrder = createAsyncThunk(
    'order/addOrder',
    async (order) =>{
        const {data} = await addOrderApi(order)
        return data
    }
)

export const  getAllOrder = createAsyncThunk(
    'order/getAllOrder',
    async () =>{
        const {data} = await getAllOrderApi()
        return data
    }
)

export const deleteOrder = createAsyncThunk(
    'oder/deleteOrder',
    async (id) =>{
        const {data} = await deleteOrderApi(id)
        return data
    }
)

const OrderSlice = createSlice({
    'name': 'order',
    initialState:{
        value: []
    },
    extraReducers: (builder) =>{
       builder.addCase(addOrder.fulfilled, (state, actions) =>{
           state.value.push(actions.payload)
       }) 
       builder.addCase(getAllOrder.fulfilled, (state, actions) =>{
           state.value = actions.payload
       })
       builder.addCase(deleteOrder.fulfilled, (state, actions) =>{
           state.value = state.value.filter(item => item.id !== actions.meta.arg)
       })
    }
})

export default OrderSlice.reducer