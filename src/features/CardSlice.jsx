import { createSlice } from "@reduxjs/toolkit"
const getLocalData = () => {
    let data = localStorage.getItem("data")
    if(data){
      return JSON.parse(localStorage.getItem("data"))
    }else{
      return []
    }
  }

export const cardSlice = createSlice({
    name: "card",
    initialState: { value: getLocalData()},
    reducers: {
        addData: (state, action) => {
            state.value.push(action.payload)
        },
        deleteData: (state, action) => {
            state.value = state.value.filter((elem, ind) => ind !== action.payload.id)
        }
    }
});

export const { addData, deleteData } = cardSlice.actions;
export default cardSlice.reducer;