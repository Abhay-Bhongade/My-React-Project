// import {createSlice,creatAsyncThunk} from "@reduxjs/toolkit";
// import axios from "axios";
// import { toast } from "react-toastify";

// const initialState = {
//     UserData : [],
//     loading : false,
//     error :""
// }

// const getAccessToken = () =>{
//     let token = localStorage.getItem("token");
//     return token || ""
// }

// const customId = "custom-id-yes"
// export const UserData = creatAsyncThunk("user/userData",async(Userform)=>{
//     try {
//         const config = {
//             headers:{
//                 "Authorization":`Bearer ${getAccessToken()}`,
//                 "Content-Type" :"application/json",
//                 "Content-Type" :"multipart/formdata"
//             }
//             }
//         const response = await axios.post("user-add",Userform,config);
//         return response?.data
//     } catch (error) {
//         toast.error(error?.response?.data?.messages,{toastId:customId})
//     }
// })


// const UserDataSlice = creatAsyncThunk({
//     name:"UserData",
//     initialState,
//     extrabuilders :(builder)=>{
//         builder.addCase(UserData.pending,(state)=>{
//             state.loading=true
//         }),
//         builder.addCase(UserData.fulfilled,(state,action)=>{
//             state.loading=false,
//             state.user = action.payload,
//             state.error = ""
//         }),
//         builder.addCase(UserData.rejected,(state,action)=>{
//             state.loading = false,
//             state.user = [],
//             state.error = action.error.message
//         })
//     }
// })

// export default UserDataSlice.reducer