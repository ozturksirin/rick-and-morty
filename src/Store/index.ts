import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import episodeReducer from "./Slices/EpisodeSlice";
import characterReducer from "./Slices/CharacterSlice";

export const store = configureStore({
  reducer: {
    episode: episodeReducer,
    character: characterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
