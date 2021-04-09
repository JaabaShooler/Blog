import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import postsReducer from "./postsReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    post: postsReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
