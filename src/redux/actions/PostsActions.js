import { executeGetRequest } from "../../utils/FetchUtils";
import { SET_POSTS } from "../types";

export const getPostsList = (page) => {
    return async (dispatch) => {
        try {
            const response = await executeGetRequest(`/v1/search_by_date?tags=story&page=${page}`);
            dispatch({ type: SET_POSTS, payload: response.hits })
        } catch (error) {
            return { error: error };
        }
    };
};