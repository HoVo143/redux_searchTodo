import { legacy_createStore } from "redux";
import todoReducer from "./reducers";


const store = legacy_createStore(todoReducer)

export default store