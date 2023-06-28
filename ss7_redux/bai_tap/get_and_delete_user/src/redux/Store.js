import thunk from "redux-thunk";
import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "../redux/reducer/Index";


const initialStore = {}
const middleWare = [thunk]


const store = createStore(
    rootReducer,
    initialStore,
    applyMiddleware(...middleWare)
)

export default store;