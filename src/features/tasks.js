import {createSlice} from '@reduxjs/toolkit'

export const taskSlice = createSlice({
    name:'tasks',
    initialState:{value:[]},
    reducers:{
        addTask:(state,action) => {
            
        },

    }
})

export const {addTask} = taskSlice.actions;
export default taskSlice.reducer;
