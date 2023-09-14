import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './features/todoSlice';

const store = configureStore({
    reducer: {
        todoDate: todoReducer
    }
});

export default store;
