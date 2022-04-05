import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { addProduct, deleteProduct, getProduct, updateProduct } from '../api/products'


export const addProducts = createAsyncThunk(
    'product/addProduct',
    async (product) => {
        const { data } = await addProduct(product)
        return data
    }
)

export const getProducts = createAsyncThunk(
    'product/getProduct',
    async () => {
        const {data} = await getProduct()
        return data
    }
)

export const deleteProducts = createAsyncThunk(
    'product/deleteProduct',
    async (id) =>{
        const {data} = await deleteProduct(id)
        return data
    }
)

export const updateProducts = createAsyncThunk(
    'product/updateProduct',
    async (product) =>{
        const {data} = await updateProduct(product)
        return data
    }
)


const ProductSlice = createSlice({
    name: 'products',
    initialState: {
        value: []
    },
    extraReducers: (builder) => {
        builder.addCase(addProducts.fulfilled, (state, actions) =>{
            state.value.push(actions.payload)
        })
        builder.addCase(getProducts.fulfilled, (state, actions) =>{
            state.value = actions.payload
        })
        builder.addCase(deleteProducts.fulfilled, (state, actions) =>{
            state.value = state.value.filter(item => item.id !== actions.meta.arg)
        })
        builder.addCase(updateProducts.fulfilled, (state, actions) =>{
            const productUpdtae =  state.value.map(item => item.id === actions.payload.id ? actions.payload : item)
            state.value = productUpdtae
        })
    }
})

export default ProductSlice.reducer