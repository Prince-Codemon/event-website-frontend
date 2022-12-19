import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const userService = createApi({
    reducerPath:'userService',
    baseQuery:fetchBaseQuery({
        baseUrl:'http://localhost:5000/api/',
    }),
    endpoints:(builder)=>{
        return{
            login:builder.mutation({
                query:(data)=>{
                    return{
                        url:'login',
                        method:"POST",
                        body:data
                    }
                }
            }),
            register:builder.mutation({
                query:(data)=>{
                    return{
                        url:'register',
                        method:"POST",
                        body:data
                    }
                }
            }),

        }

    }
})

export const {useLoginMutation, useRegisterMutation} = userService
export default userService