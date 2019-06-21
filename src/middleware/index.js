import { FILTER_DATA, DATA_REQUESTED, DATA_LOADED, FILTERED_DATA, DATA_ERROR, PAGINATED_DATA, PAGINATE_DATA } from '../constants/action-types'
import bankDetails from "../util/bankDetails"

const filterList = (filterTerm, List) => {
    const lowerCasedFilter = filterTerm.toLowerCase()
    return List.filter(item => {
        return Object.keys(item).some(key => 
            typeof item[key] === "string" && item[key].toLowerCase().includes(lowerCasedFilter))
    })
}

export function filterListMiddleware({ getState, dispatch }) {
    return function(next) {
        return function(action) {
            if (action.type === FILTER_DATA) {
                const filteredData = filterList(action.payload, getState().bankDetails)
                dispatch({ type: FILTERED_DATA, payload: filteredData })
            }
            return next(action)
        }
    }
}

export function dataRequestedMiddleware({ dispatch }) {
    return function(next) {
        return function(action) {
            if (action.type === DATA_REQUESTED) {
                bankDetails.search(action.payload)
                            .then( banks => {
                                dispatch({ type: DATA_LOADED, payload: banks})
                            })
                            .catch( error => {
                                console.log(error.message)
                                dispatch({ type: DATA_ERROR, payload: {"error": "Error Loading Data"}})
                            })
            }
            return next(action)
        }
    }
}

export function paginateDataMiddleware({ getState, dispatch }) {
    return function(next) {
        return function(action) {
            if (action.type === PAGINATE_DATA) {
                const indexOfLastItem = (action.payload.currentPage + 1) * action.payload.itemsPerPage
                const indexOfFirstItem = indexOfLastItem - action.payload.itemsPerPage
                const list = getState().filteredData.slice(indexOfFirstItem, indexOfLastItem)
                
                dispatch({ type: PAGINATED_DATA, payload: list })
            }
            return next(action)
        }
    }
}