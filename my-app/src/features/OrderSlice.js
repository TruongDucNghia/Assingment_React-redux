import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { addOrderApi, getAllOrderApi, updateOrderApi } from '../api/order'


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


export const updateOrder = createAsyncThunk(
    'order/updateOrder',
    async (order) =>{
        const {data} = await updateOrderApi(order)
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
       builder.addCase(updateOrder.fulfilled, (state, actions) =>{
           state.value = state.value.map(item => item.id === actions.payload.id ? actions.payload : item)
       })
    }
})

export default OrderSlice.reducer