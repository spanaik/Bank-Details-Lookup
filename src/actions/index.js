import { FILTER_DATA, DATA_REQUESTED, PAGINATE_DATA, FAV_DATA, CLEAR_DATA, LOAD_FAV_DATA } from '../constants/action-types'

export function filterData(payload) {
    return { type: FILTER_DATA, payload }
}

export function requestData(payload) {
    return { type: DATA_REQUESTED, payload }
}

export function paginateData(payload) {
    return { type: PAGINATE_DATA, payload }
}

export function pushFavData(payload) {
    return { type: FAV_DATA, payload }
}

export function loadFavData(payload) {
    return { type: LOAD_FAV_DATA , payload }
}

export function clearData(payload) {
    return { type: CLEAR_DATA }
}