import {createSlice} from '@reduxjs/toolkit'


const initValue = JSON.parse(localStorage.getItem('favorite'))
const favoriteSlice = createSlice({
    name: 'favorite',
    initialState:{
        value: initValue ?? []
    },
    reducers:{
        addFavorite(state, action) {
            const newFavorite = action.payload
            const isCheck = state.value.find(item => item.id === newFavorite.id)
            if(!isCheck){
                state.value.push(newFavorite)
                localStorage.setItem('favorite', JSON.stringify(state.value))
            }else{
                state.value = state.value
            }
        },
        deleteFavorite(state, actions){
            const id = actions.payload
            const newFavorite = state.value.filter(item => item.id !== id)
            localStorage.setItem('favorite', JSON.stringify(newFavorite))
            state.value = newFavorite
        }
    }
})
export const {addFavorite, deleteFavorite} = favoriteSlice.actions
export default favoriteSlice.reducer