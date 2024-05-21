import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import API from "@/Api";
import { Character } from "../types/Character";

export const getCharacter = createAsyncThunk(
  "characters/getCharacter",
  async (id: number) => {
    const response = await API.GET<Character | null>(`/character/${id}`);
    return response.data;
  }
);

export const getSingleCharacter = createAsyncThunk(
  "characters/getSingleCharacter",
  async (id: number) => {
    const response = await API.GET<Character | null>(`/character/${id}`);
    return response.data;
  }
);

export const characterSlice = createSlice({
  name: "characters",
  initialState: {
    allCharacter: null as Character[] | null,
    singleCharacter: null as Character | null,
    loading: false as boolean,
    error: undefined as string | undefined,
  },
  reducers: {
    setAllCharacter: (state) => {
      state.allCharacter = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCharacter.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getCharacter.fulfilled,
      (state, action: PayloadAction<Character | null>) => {
        state.loading = false;
        state.allCharacter = action.payload
          ? [...(state.allCharacter || []), action.payload]
          : state.allCharacter;
      }
    );

    builder.addCase(getCharacter.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(getSingleCharacter.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getSingleCharacter.fulfilled,
      (state, action: PayloadAction<Character | null>) => {
        state.loading = false;
        state.singleCharacter = action.payload;
      }
    );
    builder.addCase(getSingleCharacter.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { setAllCharacter } = characterSlice.actions;

export default characterSlice.reducer;
