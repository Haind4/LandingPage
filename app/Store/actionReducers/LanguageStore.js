import { createSlice } from '@reduxjs/toolkit'

export const LanguageStore = createSlice({
    name: 'LanguageStore',
    initialState: {
        language: 'en',
    },
    reducers: {
        setLanguage: (state, actions) => {
            state.language = actions.payload
        },
    }
})

export const { setLanguage } = LanguageStore.actions

export default LanguageStore.reducer