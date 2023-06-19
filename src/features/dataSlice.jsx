import { createSlice } from '@reduxjs/toolkit'

// Initial state object is defined and includes 'objectID' and 'apiData.'
const initialState = {
    objectId: 10245,
    apiData: {}
}
// 'data slice is created by 'createSlice' and defines the reducers' data setting, clearing data, for inputting an ID, and incrementing/decrementing the ID.
export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setData: (state, action) => {
            return {...state, apiData : action.payload}
        },
        clearData: () => {
            return initialState
        },
        inputId: (state, action) => {
            return { ...state, objectId: action.payload }
        },
        incrementId: (state) => {
            return { ...state, objectId: state.objectId + 1 }
        },
        decrementId: (state) => {
            return { ...state, objectId: state.objectId - 1 }
        }
    }
})

export const { setData, clearData, incrementId, decrementId, inputId } = dataSlice.actions

// 'fetchData' thunk fetches data from API referencing 'objectID' from the state. 'stateData' action will be dispatched.
export const fetchData = () => {
    const fetchDataThunk = async (dispatch, getState) => {
        let state = getState()
        const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${state.data.objectId}`)
        const rData = await response.json()
        dispatch(setData(rData))
    }
    return fetchDataThunk
}

export default dataSlice.reducer