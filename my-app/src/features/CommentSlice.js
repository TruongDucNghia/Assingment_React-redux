import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { addComment, deleteComment, listComment } from '../api/comment'

export const addComments = createAsyncThunk(
    'comment/addComment',
    async (datas) =>{
        const {data} = await addComment(datas)
        return data
    }
)

export const deleteComments = createAsyncThunk(
    'comment/deleteComment',
    async (id) =>{
        const {data} = await deleteComment(id)
        return data
    }
)

export const getComments = createAsyncThunk(
    'comment/getComment',
    async () =>{
        const {data} = await listComment()
        return data
    }
)

const commentSlice = createSlice({
    name: 'comment',
    initialState:{
        value: []
    },
    extraReducers : (builder) =>{
        builder.addCase(addComments.fulfilled, (state, action) =>{
            state.value.push(action.payload)
        })
        builder.addCase(deleteComments.fulfilled, (state, action) =>{
            state.value = state.value.filter(item => item.id !== action.meta.arg)
        })
        builder.addCase(getComments.fulfilled, (state, action) =>{
            state.value = action.payload
        })
    }
})

export default commentSlice.reducer