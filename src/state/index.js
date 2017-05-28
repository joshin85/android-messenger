import { applyMiddleware, createStore } from "redux"

//Services
import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

import reducer from "./reducers"

const middleware = applyMiddleware(promise(), thunk, logger)
 
export default createStore(reducer, middleware)