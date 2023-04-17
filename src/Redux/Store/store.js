import { configureStore } from "@reduxjs/toolkit";
import mainProfile from "../Reducer/profilo";


const store = configureStore ({
    reducer: mainProfile
})

export default store