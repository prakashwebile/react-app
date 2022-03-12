
export const userListAction = () => {
    const url = "https://api.github.com/users";
    return (dispatch) => {
        dispatch(getLoadingData())
        return (fetch(url))
            .then(res => res.json())
            .then(json => {

                return (dispatch(getDataLoadSuccess(json)))
            })
            .catch(err => {

                dispatch(getDataLoadFailure(err))
            })
    }
}

function getLoadingData() {
    return {
        type: "HOME_DATA_LOADING"
    }
}

function getDataLoadSuccess(data) {
    return {
        type: "HOME_DATA_SUCCESS",
        data
    }
}

function getDataLoadFailure(err) {
    return {
        type: "HOME_DATA_ERROR"
    }
}