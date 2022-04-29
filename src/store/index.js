import { configureStore } from '@reduxjs/toolkit'
import todoReducer from "../reducers/reducer";

export default configureStore({
  reducer: {
      todo: todoReducer
  },
})