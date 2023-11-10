import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productData: [],
  userInfo: null,
};

export const bazarSlice = createSlice({
  name:"bazar",
  initialState,
  reducers:{
    // funcionalidad para agregar al carrito de CompressionStream, donde valido sin son igual la accion o no para 
    // saber si incremento la cantidad o agrego otro producto al carrito de compras
    addToCart: (state, action)=>{
      const item = state.productData.find(
        (item) => item._id === action.payload._id
      );

      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.productData.push(action.payload);
      }
    }
  }
});

export const {addToCart} = bazarSlice.actions;
export default bazarSlice.reducer;