import { createSlice } from "@reduxjs/toolkit";

const getFromCart=()=>{
  let cart =localStorage.getItem('cart');
  if (cart) {
    return JSON.parse(localStorage.getItem('cart'))
  }
  else{
    return [];
  }
}
const storageInlocal=(data)=>{
  localStorage.setItem('cart',JSON.stringify(data))
}
const initialState={
    carts:getFromCart(),
    itemCount:0,
    totalAmount:0
}
const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const isItemCart=state.carts.find(item=>item.id===action.payload.id);
            if (isItemCart) {
                const tempCart=state.carts.map(item=>{
                    if (item.id===action.payload.id) {
                        let tempQyt=item.quantity+action.payload.quantity;
                        let totalPrice=tempQyt+item.price;
                        return {...item,quantity:tempQyt,totalPrice:totalPrice}
                    }
                    else {
                        return item
                    }
                })
                state.carts=tempCart;
                storageInlocal(state.carts);
            }
            else{
                state.carts.push(action.payload);
                storageInlocal(state.carts)
            }
        },
        removeCart:(state,action)=>{
            const tempCart=state.carts.filter(item=>item.id!==action.payload)
            state.carts=tempCart;
            storageInlocal(state.carts)
        },
        clearCart:(state,action)=>{
            state.carts=[];
            storageInlocal(state.carts)
        },
        getCartTotal:(state)=>{
            state.totalAmount = state.carts.reduce((cartTotal,cartItem)=>{
                return cartTotal+cartItem.price*cartItem.quantity;
            },0);
            state.itemCount=state.carts.length;
        }
    }
})   
export const {addToCart,removeCart,clearCart,getCartTotal}=cartSlice.actions;
export default cartSlice.reducer;