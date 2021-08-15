import {createSlice} from "@reduxjs/toolkit"

export const authSlice = createSlice({
    name:"auth",
    initialState:{
        token:null,
        login:false,
        user:{}
    },
    reducers:{
        setToken: (state,action)=>{
            state.token = action.payload
        },
        setLogin:(state)=>{
            state.login = true
        },
        setLogout:(state)=>{
            state.login = false
        },
        setUser:(state,action)=>{
            state.user = action.payload
        }
    }
})

export const {setToken,setLogin,setLogout,setUser} = authSlice.actions
export default authSlice.reducer