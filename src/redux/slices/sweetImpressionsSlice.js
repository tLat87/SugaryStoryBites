import { createSlice } from '@reduxjs/toolkit';

const sweetImpressionsSlice = createSlice({
    name: 'sweetImpressions',
    initialState: [],
    reducers: {
        addSweetImpression: (state, action) => {
            state.push(action.payload);
        },
        deleteSweetImpression: (state, action) => {
            return state.filter(item => item.id !== action.payload);
        },
        createSweetImpression: (state) => {
            state.items = [];
        }
    },
});

export const { addSweetImpression, deleteSweetImpression, createSweetImpression } = sweetImpressionsSlice.actions;
export default sweetImpressionsSlice.reducer;
