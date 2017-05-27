import { combineReducers } from "redux"

import users from "./users"
import client from "./client"
import settings from "./settings"

export default combineReducers({
    users,
    client,
    settings
});