import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cart.push(action.payload.product);
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(
                (product) => product.id !== action.payload.id
            );
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
