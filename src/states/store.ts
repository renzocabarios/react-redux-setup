import { configureStore } from '@reduxjs/toolkit'
import sampleReducer from './sample/slice'

export const store = configureStore({
    reducer: {
        sampleReducer
    }
})  