import { combineReducers } from "redux";
import Counter from "./conter"

const rootReducer = combineReducers({
    count: Counter
})

export default rootReducer