import { combineReducers } from "redux"
import todos from "./todos"
import filters from "./filter"

const redApp = combineReducers({
    todos,
    filters
});

export default redApp;