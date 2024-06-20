import { configureStore } from "@reduxjs/toolkit"
import rootReducer from "./redux/rootReducer"

const reduxStore = configureStore({
  reducer: rootReducer,
})

export default reduxStore
