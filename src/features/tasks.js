import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [
    { taskId: 0, taskDesc: "Completing the course", isDone: false },
    { taskId: 1, taskDesc: "Attending the workshop", isDone: false },
    { taskId: 2, taskDesc: "Finishing the checkpoint", isDone: false },
    { taskId: 3, taskDesc: "Passing the one to one meeting", isDone: false },
  ],
  Filtred: [],
};
initialState.Filtred = initialState.value;
const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    taskAdd: (state, action) => {
      state.value.push(action.payload);
      state.Filtred.push(action.payload);
    },

    taskDone: (state, action) => {
      state.value.map((el, i) =>
        i === action.payload ? (el.isDone = true) : el
      );
      state.Filtred.map((el, i) =>
        i === action.payload ? (el.isDone = true) : el
      );
    },
    taskEdit: (state, action) => {
      const { idt, nDesc } = action.payload;
      const doit = (el) => {
        el.taskDesc = nDesc;
      };
      state.value.map((el, i) => (i === idt ? doit(el) : el));
      state.Filtred.map((el, i) => (i === idt ? doit(el) : el));
    },
    taskFilter: (state, action) => {
      state.Filtred = state.value.filter((el) =>
        action.payload === "Done"
          ? el.isDone === true
          : action.payload === "Todo"
          ? el.isDone === false
          : el
      );
    },
  },
});

export const { taskAdd, taskDone, taskEdit, taskFilter } = tasksSlice.actions;

export default tasksSlice.reducer;
