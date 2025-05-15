import { configureStore } from "@reduxjs/toolkit";
import counter from "./slices/counter";

const store = configureStore({
    reducer: counter
})

export default store;