import {createSlice} from '@reduxjs/toolkit'

export const taskSlice = createSlice({
    name:'tasks',
    initialState:{value:[],error:''},
    reducers:{
        addTask:(state,action) => {
            let existingItem = state.value.find((task) => task.name === action.payload.name)

            existingItem? state.error = 'Task already exists!': 
            (state.value = [...state.value,action.payload])
            state.error = ""
            console.log(state.value)

        },

    }
})

export const {addTask} = taskSlice.actions;
export default taskSlice.reducer;
