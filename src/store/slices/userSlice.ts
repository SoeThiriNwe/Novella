import { envApi } from '@/general/arrarryrryrr'
import { UserType } from '@/type/userType'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


export interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0,
}

export const checkAndCreateUser = createAsyncThunk("",async({name , email}:UserType , thunkApi)=>{
    fetch(envApi+"/user",{
        method : "POST",
        headers : {"content-type":"application/json"},
        body : JSON.stringify({name , email})
    })
})

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    
  },
})

export const {} = userSlice.actions

export default userSlice.reducer