import { createSlice } from "@reduxjs/toolkit";

const ToogleSlice = createSlice({
    name : 'ToogleSlice',
    initialState : {
        searchBarToogle  : false,
    },
    reducers : {
            toogleSearchBar : (state,actions)=> {
                state.searchBarToogle = !state.searchBarToogle;
            },
    }
})


export const {toogleSearchBar} = ToogleSlice.actions;
export default ToogleSlice.reducer;
