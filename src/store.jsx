// Imports 'configureStore' from @reduxjs/tookit and the 'dataReducer' from 'datasplice'.
import { configureStore } from '@reduxjs/toolkit'
import dataReducer from './features/dataSlice'
import { logger } from './features/middleware'

// Redux store is created using 'configureStore' and sets the reducer configuration that includes 'dataReducer'
// 'logger' middleware is added to the store.
export const store = configureStore({
    reducer: {
        data: dataReducer
    },
    middleware: [logger]
})