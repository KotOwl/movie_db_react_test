import {configureStore} from "@reduxjs/toolkit";
import {pageStoreSlice} from "../slices/pageStoreSlice.ts";
import {genreStoreSlice} from "../slices/genreStoreSlice.ts";
import {genreNameStoreSlice} from "../slices/genreNameStoreSlice.ts";
import {filmResponseStoreSlice} from "../slices/filmResponseStoreSlice.ts";


export const store = configureStore({
    reducer: {
        pageSlice:pageStoreSlice.reducer,
        genreFilterSlice:genreStoreSlice.reducer,
        genreNameSlice:genreNameStoreSlice.reducer,
        filmSlice:filmResponseStoreSlice.reducer,
        // sortSlice:,
    }
})
