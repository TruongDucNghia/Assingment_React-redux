import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { signin, signup, updateUserApi } from '../api/auth'
import { toast } from 'react-toastify';

export const signups = createAsyncThunk(
    'user/signup',
    async (user) =>{
        const {data} = await signup(user)
        return data
    }
)

export const updateUser = createAsyncThunk(
    'user/updateUser',
    async (user) =>{
        const {data} = await updateUserApi(user)
        return data
    }
)

export const signins = createAsyncThunk(
    'user/signin',
    async (user) =>{
        try {
            const {data} = await signin(user)
            localStorage.setItem('user', JSON.stringify(data.user))
            const toatMess = () => toast.success('Chúc mừng bạn đăng nhập thành công !')
            toatMess()
            return data.user
        } catch (error) {
            const toatMess = () => toast.error('Đăng nhập thất bại vui lòng thử lại !')
            toatMess()
            return []
        }
    }
)

export const logout = createAsyncThunk(
    'user/logout',
    () =>{
        localStorage.removeItem('user')
    }
)


const initUser = JSON.parse(localStorage.getItem('user'))

const UserSlice = createSlice({
    name: 'user',
    initialState: {
        value: initUser ?? []
    },
    extraReducers: (builder) =>{
        builder.addCase(signups.fulfilled, (state, actions) =>{
            state.value.push(actions.payload)
        })
        builder.addCase(signins.fulfilled, (state, actions) =>{
            state.value = actions.payload
        })
        builder.addCase(logout.fulfilled, (state, actions) =>{
            state.value = []
        })
        builder.addCase(updateUser.fulfilled, (state, actions) =>{
            // console.log(state.value);    
            state.value = actions.payload
        })
        
    }
})

export default UserSlice.reducer