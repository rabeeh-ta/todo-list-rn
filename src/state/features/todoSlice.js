import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    selectedTodoDate:new Date()
}

const todoDateSlice = createSlice({
    name:'todoDate',
    initialState,
    reducers:{
        changeSelectedTodoDate:(state,action) => {
            state.selectedTodoDate = action.payload
        }
    }
})

export default todoDateSlice.reducer
export const {changeSelectedTodoDate } = todoDateSlice.actions