import { createStore, combineReducers } from "redux";
import urlReducer from "./reducers";

// Combine reducers (currently only one reducer but set up for potential expansion)
const rootReducer = combineReducers({
  UserReducer: urlReducer, // Ensure this key matches the key used in useSelector
});

// Create Redux store
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
