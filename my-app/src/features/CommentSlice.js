import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { addComment, deleteComment, getCommentsId, listComment } from '../api/comment'

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

export const getCommentId = createAsyncThunk(
    'comment/getComment',
    async (id) =>{
        const {data} = await getCommentsId(id)
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
            // state.value.push(action.payload)
            console.log(action.payload);
        })
        builder.addCase(deleteComments.fulfilled, (state, action) =>{
            state.value = state.value.filter(item => item.id !== action.meta.arg)
        })
        builder.addCase(getCommentId.fulfilled, (state, action) =>{
            state.value = action.payload
        })
    }
})

export default commentSlice.reducer