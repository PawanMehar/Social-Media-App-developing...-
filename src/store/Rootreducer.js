import PostReducer from "./PostReducer";
import AuthReducer from "./AuthReducer";
import {combineReducers} from "redux";
import { firestoreReducer } from "react-redux-firebase";

const Rootreducer = combineReducers({
    auth: AuthReducer,
    post: PostReducer,
    firestore: firestoreReducer
})
export default Rootreducer