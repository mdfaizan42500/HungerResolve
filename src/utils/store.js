import {configureStore} from "@reduxjs/toolkit"
import ToogleSlice from "./ToogleSlice"

const store = configureStore({
    reducer : {
        ToogleSlice : ToogleSlice,
    }
})

export default store;
