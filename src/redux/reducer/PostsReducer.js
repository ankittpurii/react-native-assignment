import { SET_POSTS } from "../types";

const INITIAL_STATE = {
    postsList: []
};


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_POSTS:
            // console.log(state, "state")
            return ;
        default:
            return state;
    }
};