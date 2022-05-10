import { styleProvider } from "../redux/store"
import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";

export const rootReducer = combineReducers({
    styleProvider
});

export const store = createStore(
    rootReducer,
    applyMiddleware(logger)
)