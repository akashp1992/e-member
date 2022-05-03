import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import {
  formReducer,
  loginReducer,
  registerUserReducer,
  NewProjectReducer,
} from "./reducers/user.reducer";

const finalReducer = combineReducers({
  loginReducer: loginReducer,
  registerUserReducer: registerUserReducer,
  form: formReducer,
  NewProjectReducer: NewProjectReducer,
});

const currentUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : null;

const initialReducer = {
  loginReducer: { currentUser: currentUser },
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  finalReducer,
  initialReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
