import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


const initCart = JSON.parse(localStorage.getItem('cart'))
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: initCart ?? []
    },
    reducers: {
        addCarts(state, actions) {
            const newCart = actions.payload
            const isCart = state.value.find(item => item.productId === newCart.productId)
            if (!isCart) {
                state.value.push(newCart)
            } else {
                isCart.quantity += newCart.quantity
                isCart.size.push(...newCart.size)
                isCart.color.push(...newCart.color)

            }
            console.log(state.value);
        },
        increaseQty(state, actions) {
            state.value.find(item => item.productId == actions.payload).quantity++;
        },
        decreaseQty(state, actions) {
            const currentProduct = state.value.find(item => item.productId == actions.payload);
            currentProduct.quantity--;
            if (currentProduct.quantity < 1) {
                const confirm = window.confirm("Bạn có muốn xóa sản phẩm này không ?");
                if (confirm) {
                    state.value = state.value.filter(item => item.productId != actions.payload)
                }
            }
        },
        removeItemInCart(state, actions) {
            const confirm = window.confirm("Bạn có muốn xóa sản phẩm này không ?");
            if (confirm) {
                state.value = state.value.filter(item => item.productId != actions.payload)
            }
        }
    }
})
export const { addCarts, increaseQty, decreaseQty, removeItemInCart } = cartSlice.actions
export default cartSlice.reducer