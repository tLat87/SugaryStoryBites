import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import { persistConfig } from './persistConfig';
import { combineReducers } from 'redux';
import foodReducer from './slices/foodSlice';
import sweetImpressionsReducer from './slices/sweetImpressionsSlice';
import savedSweetsReducer from './slices/savedSweetsSlice';

const rootReducer = combineReducers({
  food: foodReducer,
  sweetImpressions: sweetImpressionsReducer,
  savedSweets: savedSweetsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
