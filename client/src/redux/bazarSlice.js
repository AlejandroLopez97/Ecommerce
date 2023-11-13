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
    //eliminar item, resetear carrito, incrementar items y drecementar items
    addToCart: (state, action)=>{
      const item = state.productData.find(
        (item) => item._id === action.payload._id
      );

      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.productData.push(action.payload);
      }
    },
    deleteItem: (state, action) => {
      state.productData = state.productData.filter(
        (item) => item._id !== action.payload
      );
    },
    resetCart: (state) =>{
      state.productData = [];
    },
    increamentQuantity: (state, action) =>{
      const item = state.productData.find(
        (item) => item._id === action.payload._id
      );
      if (item) {
        item.quantity++;
      }
    },
    decrementQuantity: (state, action) =>{
      const item = state.productData.find(
        (item) => item._id === action.payload._id
      );
      if (item.quantity === 1){
        item.quantity = 1;
      }else{
        item.quantity--;
      }
    },
  }
});

export const {
  addToCart,
  deleteItem,
  resetCart,
  increamentQuantity,
  decrementQuantity,
} = bazarSlice.actions;
export default bazarSlice.reducer;