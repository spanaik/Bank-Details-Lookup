import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers/index'
import { filterListMiddleware, dataRequestedMiddleware, paginateDataMiddleware } from "../middleware/index"
import thunk from 'redux-thunk'

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    rootReducer,
    storeEnhancers(applyMiddleware(filterListMiddleware, dataRequestedMiddleware, paginateDataMiddleware, thunk))
)

export default store