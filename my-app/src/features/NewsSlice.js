import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {addNewsApi, deleteNewsApi, get3NewsApi, getNewsApi, updateNewsApi} from '../api/news'

export const addNews = createAsyncThunk(
    'news/addNews',
    async (news) =>{
        const {data} = await addNewsApi(news)
        return data
    }
)

export const listNews = createAsyncThunk(
    'news/listNews',
    async () =>{
        const {data} = await getNewsApi()
        return data
    }
)

export const deleteNews = createAsyncThunk(
    'news/deleteNews',
    async (id) =>{
        const {data} = await deleteNewsApi(id)
        return data
    }
)

export const updateNews = createAsyncThunk(
    'news/updateNews',
    async (news) =>{
        const {data} = await updateNewsApi(news)
        return data
    }
)

export const getList3news = createAsyncThunk(
    'new/getList3News',
    async () =>{
        const {data} = await get3NewsApi()
        return data
    }
)

const NewsSlice = createSlice({
    name: 'news',
    initialState: {
        value: []
    },
    extraReducers: (builder) =>{
        builder.addCase(addNews.fulfilled, (state, actions) =>{
            state.value.push(actions.payload)
        })
        builder.addCase(listNews.fulfilled, (state, actions) =>{
            state.value = actions.payload
        })
        builder.addCase(deleteNews.fulfilled, (state, actions) =>{
            state.value = state.value.filter(item => item.id !== actions.meta.arg)
        })
        builder.addCase(updateNews.fulfilled, (state, actions) =>{
            state.value = state.value.map(item => item.id === actions.payload.id ? actions.payload : item)
        })
        builder.addCase(getList3news.fulfilled, (state, actions) =>{
            state.value = actions.payload
        })
    }
})

export default NewsSlice.reducer