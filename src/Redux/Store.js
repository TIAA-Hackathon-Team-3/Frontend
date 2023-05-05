import {combineReducers, legacy_createStore as createStore} from "redux"
import { AuthReducers } from "./Reducers/AuthReducers";

const rootReducer = combineReducers({
    AuthDetails: AuthReducers,
})
const Store = createStore(rootReducer);


export default Store;