import { createSlice } from "@reduxjs/toolkit"

const getLocalCartData = () => {
    let cartData = localStorage.getItem("cartData")
    if(cartData){
      return JSON.parse(localStorage.getItem("cartData"))
    }else{
      return []
    }
  }

const cartQuantity = () => {
    let cartQuantity = localStorage.getItem("cartQuantity")
    if(cartQuantity){
      return JSON.parse(localStorage.getItem("cartQuantity"))
    }else if(cartQuantity <= 0){
      return []
    }
  }

export const cartSlice = createSlice({
    name: "cart",
    initialState: { cartValue: getLocalCartData(), quantity: cartQuantity() },
    reducers: {
        addToCart: (state, action) => {
            const find = state.cartValue.findIndex((elem, ind) => ind === action.payload.id)
            console.log(find)
            if (find >= 0) {
                state.cartValue[find].quantity += 1;
            } else {
                const tempValue = { ...action.payload.cartData, quantity: 1 }
                state.cartValue.push(tempValue)
                state.quantity += 1
            }
            // }
        },
        deleteCartData: (state, action) => {
            state.cartValue = state.cartValue.filter((elem, ind) => ind !== action.payload.id)
            state.quantity -= 1
        },
        addCartItem: (state, action) => {
            const find = action.payload.id
            state.cartValue[find].quantity += 1
        },
        minusCartItem: (state, action) => {
            const find = action.payload.id
            if (state.cartValue[find].quantity > 1) {
                state.cartValue[find].quantity -= 1
            }else if(state.cartValue[find].quantity === 1){
            state.cartValue = state.cartValue.filter((elem, ind) => ind !== action.payload.id)
            state.quantity -= 1
            }
        }
    }
});

export const { addToCart, deleteCartData, addCartItem, minusCartItem } = cartSlice.actions;
export default cartSlice.reducer;