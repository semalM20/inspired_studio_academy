// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   // count: 0,
//   count: parseInt(localStorage.getItem("cartCount")) || 0,
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     setCartCount(state, action) {
//       state.count = action.payload;
//       localStorage.setItem("cartCount", action.payload.toString());
//     },
//   },
// });

// export const { setCartCount } = cartSlice.actions;
// export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

// Retrieve cart count from localStorage and parse it as an integer
const storedCartCount = localStorage.getItem("cartCount");
const initialCartCount = storedCartCount ? parseInt(storedCartCount, 10) : 0;

const initialState = {
  count: initialCartCount,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartCount(state, action) {
      const count = action.payload;

      // Ensure count is a valid number before setting state and localStorage
      if (typeof count === "number" && !isNaN(count)) {
        state.count = count;
        localStorage.setItem("cartCount", count.toString());
      } else {
        console.warn("Invalid cart count value:", count);
      }
    },
  },
});

export const { setCartCount } = cartSlice.actions;
export default cartSlice.reducer;
