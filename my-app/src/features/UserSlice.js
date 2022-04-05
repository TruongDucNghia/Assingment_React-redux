import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { signin, signup } from '../api/auth'

export const signups = createAsyncThunk(
    'user/signup',
    async (user) =>{
        const {data} = await signup(user)
        return data
    }
)

export const signins = createAsyncThunk(
    'user/signin',
    async (user) =>{
        const {data} = await signin(user)
        return data
    }
)

const UserSlice = createSlice({
    name: 'user',
    initialState: {
        value: []
    },
    extraReducers: (builder) =>{
        builder.addCase(signups.fulfilled, (state, actions) =>{
            state.value.push(actions.payload)
        })
        builder.addCase(signins.fulfilled, (state, actions) =>{
            state.value = actions.payload
        })
        builder.addCase(signins.rejected, (state, actions) =>{
            state.value = 'looix vclllll'
        })
    }
})

export default UserSlice.reducer