import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface NewsLayoutState {
    order: LayoutTypes
}

export type LayoutTypes  = "list" | "tiles"

const initialState: NewsLayoutState = {
    order: 'list',
    
}

export const newsLayoutSlice = createSlice({
    name: 'newsLayout',
    initialState,
    reducers: {
        changeLayout: (state, action: PayloadAction<LayoutTypes>) => {
            state.order = action.payload
        }
    }
})

export const { changeLayout } = newsLayoutSlice.actions;

export default newsLayoutSlice.reducer