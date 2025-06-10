// slices/foodSlice.js
import { createSlice } from '@reduxjs/toolkit';

const foodSlice = createSlice({
    name: 'food',
    initialState: {
        items: [],
    },
    reducers: {
        addFood: (state, action) => {
            console.log('Reducer addFood called with:', action.payload);
            state.items.push(action.payload);
        },

        deleteFood: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        clearedFood: (state) => {
            state.items = [];
        }
    },
});

export const { addFood, deleteFood, clearedFood } = foodSlice.actions;
export default foodSlice.reducer;
