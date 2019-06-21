import { FILTERED_DATA, DATA_LOADED, DATA_ERROR, PAGINATED_DATA, FAV_DATA, CLEAR_DATA, LOAD_FAV_DATA } from "../constants/action-types"

const initialState = {
    bankDetails : [],
    favData: [],
    filteredData : [],
    dataToDisplay : []
}

function rootReducer(state = initialState, action) {
    
    if (action.type === DATA_LOADED) {
        return Object.assign({}, state, {bankDetails: action.payload, filteredData: action.payload})
    }
    else if (action.type === FILTERED_DATA) {
        return Object.assign({}, state, {filteredData: action.payload})
    }
    else if (action.type === DATA_ERROR) {
        return Object.assign({}, state, {dataToDisplay: action.payload})
    }
    else if (action.type === PAGINATED_DATA) {
        return Object.assign({}, state, {dataToDisplay: action.payload})
    }
    else if (action.type === LOAD_FAV_DATA) {
        return Object.assign({}, state, {favData: action.payload, filteredData: action.payload, bankDetails: action.payload})
    }
    else if (action.type === FAV_DATA) {
        return Object.assign({}, state, {favData: action.payload})
    }
    else if (action.type === CLEAR_DATA) {
        return Object.assign({}, state, { filteredData: state.favData})
    }

    return state
}

export default rootReducer