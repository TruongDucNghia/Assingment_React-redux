import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteUserApi, listUserApi, updateUserApi } from "../api/auth";

export const getAllUser = createAsyncThunk(
    'user/getAll',
    async () =>{
        const {data} = await listUserApi()
        return data
    }
)

export const updateAccount = createAsyncThunk(
    'user/updateRole',
    async (user) =>{
        const {data} = await updateUserApi(user)
        return data
    }
)

export const deleteAccount = createAsyncThunk(
    'user/deleteAccount',
    async (id) =>{
        const {data} = await deleteUserApi(id)
        return data
    }
)

const AccountSlice = createSlice({
    name: 'account',
    initialState:{
        value: []
    },
    extraReducers: (builder) =>{
        builder.addCase(getAllUser.fulfilled, (state, actions) =>{
            state.value = actions.payload
        })
        builder.addCase(updateAccount.fulfilled, (state, actions) =>{
            state.value = state.value.map(item => item.id === actions.payload.id ? actions.payload : item)
        })
        builder.addCase(deleteAccount.fulfilled, (state, actions) =>{
            state.value = state.value.filter(item => item.id !== actions.meta.arg)
        })
    }
})

export default AccountSlice.reducer