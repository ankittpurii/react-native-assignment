import { SET_POSTS } from "../types";

const INITIAL_STATE = {
    postsList: []
};


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_POSTS:
            return { ...state, postsList: [...action.payload] }

        default:
            return state;
    }
};