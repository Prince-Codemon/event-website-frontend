import {configureStore} from '@reduxjs/toolkit'
import authSlice  from './models/authSlice'
import userService from './services/userService'

const store = configureStore({
    reducer:{
        "auth":authSlice,
        [userService.reducerPath]:userService.reducer
    }

})
export default store