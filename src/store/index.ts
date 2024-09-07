import { configureStore } from "@reduxjs/toolkit";
import quizSlice from "./Quiz/quizSlice";
 const store = configureStore({
  reducer:{
    quizSlice,
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export { store}