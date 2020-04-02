import Config from "./Config";

export const executeGetRequest = async (endpoint, token) => {
    try {
        const res = await fetch(Config.strings.base_url + `/v1/search_by_date?tags=story&page=0`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                authorization: 'Bearer',
            },
        })
        const response = await res.json()
        return response;
    } catch (err) {
        console.log(err)
    }
};