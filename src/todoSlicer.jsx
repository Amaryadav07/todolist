
// import { createSlice } from "@reduxjs/toolkit";

// const createSlice=createSlice({
//    name:"mycounter",
//    initialState:{
//     count:0,
//    },
//    reducers:{
//     increment:(state)=>{
//         state.count++;
//     },
//     decrement:(state)=>{
//         state.count--;
//     }
//    }
// })
// export default createSlice.reducer;
// export const{increment,decrement}=createSlice.actions;




// import { createSlice } from "@reduxjs/toolkit";


// const colorSlice=createSlice({
//     name:"mycolor",
//     initialState:{
//         color:"red"
//     },
//     reducers:{
//         changeColor:(state,action)=>{
            
            
//             state.color=action.payload;
//         }
//     }
// })
// export default colorSlice.reducer;
// export const {changeColor}=colorSlice.actions;








// import { createSlice } from "@reduxjs/toolkit";


// const todoSlice=createSlice({
//     name:"todo",
//     initialState:{
//         task:[]
//     },
//     reducers:{
//         addTask:(state,action)=>{
            
            
//             state.task.push(action.payload);
//         }
//     }
// })
// export default todoSlice.reducer;
// export const {addTask}=todoSlice.actions;








import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    task: [],
  },

  reducers: {
    addTask: (state, actions) => {
      state.task.push(actions.payload);
    },
    RemoveTask: (state, actions) => {
      state.task = state.task.filter((key) => key.id != actions.payload.id);
    },
    taskComplete: (state, actions) => {
      for (var i = 0; i < state.task.length; i++) {
        if (state.task[i].id == actions.payload.id) {
          state.task[i].taskStatus = true;
        }
      }
    },
    taskInComplete: (state, actions) => {
      for (var i = 0; i < state.task.length; i++) {
        if (state.task[i].id == actions.payload.id) {
          state.task[i].taskStatus = false;
        }
      }
    },
    myEditSave: (state, actions) => {
      for (var i = 0; i < state.task.length; i++) {
        if (state.task[i].id == actions.payload.id) {
          state.task[i].work = actions.payload.work;
        }
      }
    },
  },
});

export const { addTask, RemoveTask, taskComplete, taskInComplete, myEditSave } =
  todoSlice.actions;
export default todoSlice.reducer;
