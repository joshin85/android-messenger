import { combineReducers } from "redux"

//Load services
import users from "./services/reducers/users"
import client from "./services/reducers/client"
import settings from "./services/reducers/settings"

//Load Components
import sidebar from "../components/sidebar/reducer"
import chatBox from "../components/chatBox/reducer"
import messageBox from "../components/messageBox/reducer"


export default combineReducers({
    users,
    client,
    settings,
    sidebar,
    chatBox,
    messageBox
});