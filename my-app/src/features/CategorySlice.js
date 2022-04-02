import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { addCategory, deleteCategory, getCategory, UpdateCategory } from '../api/category'
export const addCategorys = createAsyncThunk(
    'category/addCategory',
    async (dataCate) =>{
        const {data} = await addCategory(dataCate)
        return data
    }
)

export const getCategorys = createAsyncThunk(
    'category/getCategory',
    async () =>{
        const {data} = await getCategory()
        return data
    }
)

export const updateCategorys = createAsyncThunk(
    'category/updateCategory',
    async (dataCate) =>{
        const {data} = await UpdateCategory(dataCate)
        return data
    }
)

export const deleteCategorys = createAsyncThunk(
    'category/deleteCategorys',
    async (id) =>{
        const {data} = await deleteCategory(id)
        return data
    }
)

const CategorySlice = createSlice({
    name: 'category',
    initialState:{
        value: []
    },
    extraReducers: (builder) =>{
        builder.addCase(getCategorys.fulfilled, (state, actions) =>{
            state.value = actions.payload
        })
        builder.addCase(addCategorys.fulfilled, (state, actions) =>{
            state.value.push(actions.payload)
        })
        builder.addCase(updateCategorys.fulfilled, (state, actions) =>{
            const cateUpdate = state.value.map(item => item.id === actions.payload.id ? actions.payload : item)
            state.value = cateUpdate
        })
        builder.addCase(deleteCategorys.fulfilled, (state, actions) =>{
            console.log(actions);
            const cateDelete = state.value.filter(item => item.id !== actions.meta.arg)
            state.value = cateDelete
        })
    }
})

export default CategorySlice.reducer