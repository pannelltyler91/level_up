import {createSlice} from '@reduxjs/toolkit'

export const taskSlice = createSlice({
    name:'tasks',
    initialState:{value:[]},
    reducers:{
        addTask:(state,action) => {
            let existingItem = state.value.find((task) => task.title === action.payload.title)

            existingItem? console.log('already exists'): console.log('new task')

        },

    }
})

export const {addTask} = taskSlice.actions;
export default taskSlice.reducer;
