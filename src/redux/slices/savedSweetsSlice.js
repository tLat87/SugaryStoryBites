import { createSlice } from '@reduxjs/toolkit';

const savedSweetsSlice = createSlice({
    name: 'savedSweets',
    initialState: [],
    reducers: {
        addSweet: (state, action) => {
            const exists = state.find(sweet => sweet.name === action.payload.name);
            if (!exists) {
                state.push(action.payload);
            }
        },
        removeSweet: (state, action) => {
            return state.filter(sweet => sweet.name !== action.payload.name);
        },
        clearAllSweets: (state) => {
            state.items = [];
        },
    },
});

export const { addSweet, removeSweet, clearAllSweets } = savedSweetsSlice.actions;

export default savedSweetsSlice.reducer;
