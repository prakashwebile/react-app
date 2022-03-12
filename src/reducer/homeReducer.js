const intialState = {
    data: [],
    loading: false,
    error: false,
    msg: ""
}
export default (state = intialState, action) => {
    switch (action.type) {
        case "HOME_DATA_LOADING":
            return {
                ...state,
                loading: true,
            };
        case "HOME_DATA_SUCCESS":
            return {
                ...state,
                data: action.data,
                loading: false
            };
        case "HOME_DATA_ERROR":
            return {
                ...state,
                loading: false,
                error: true,
                msg: ""
            };
        default:
            return state;
    }


}