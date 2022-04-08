import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { addCartApi, deleteCartApi } from '../api/cart'

export const deleteCarts = createAsyncThunk(
    'cart/deleteCart',
    async (id) => {
        const { data } = await deleteCartApi(id)
        return data
    }
)
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: []
    },
    reducers: {
        addCarts(state, actions) {
            const newCart = actions.payload
            const isCart = state.value.find(item => item.productId === newCart.productId)
            if (!isCart) {
                state.value.push(newCart)
            } else {
                // const newQuantity = isCart.quantity + newCart.quantity
                // state.value.push()
                isCart.quantity += newCart.quantity
                isCart.size.push(...newCart.size)
                isCart.color.push(...newCart.color)
            }
        }
    }
})
export const {addCarts} = cartSlice.actions
export default cartSlice.reducer