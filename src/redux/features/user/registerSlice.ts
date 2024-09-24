import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface UserState {
    name: string;
    email: string;
    password: string;
    phone: string;
    role: string;
    address: string;
  }

const initialState  = {
  name: "",
  email: "",
  password: "",
  phone: "",
  address: "",
};
const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    setUser: (state, action:PayloadAction<UserState>) => {
      state.name = action.payload.name
      state.email = action.payload.email
      state.password = action.payload.password
      state.phone = action.payload.phone
      state.address = action.payload.address
    },
  },
});

export const {setUser} = registerSlice.actions

export default registerSlice.reducer

