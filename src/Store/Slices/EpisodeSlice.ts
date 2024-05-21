import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../index";
import { Episodes } from "../types/Episode";
import API from "@/Api";

export const getEpisodes = createAsyncThunk("episode/getEpisodes", async () => {
  const response = await API.GET<Episodes | null>("/episode");
  console.log("response", response.data);
  return response.data;
});

export const episodeSlice = createSlice({
  name: "episode",
  initialState: {
    episodes: null as Episodes | null,
    loading: false as boolean,
    error: undefined as string | undefined,
  },
  reducers: {
    setEpisodes: (state, action) => {
      state.episodes = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getEpisodes.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getEpisodes.fulfilled,
      (state, action: PayloadAction<Episodes | null>) => {
        state.loading = false;
        state.episodes = action.payload;
      }
    );
    builder.addCase(getEpisodes.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const {} = episodeSlice.actions;

export default episodeSlice.reducer;
