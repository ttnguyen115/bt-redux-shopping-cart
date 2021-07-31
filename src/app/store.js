import { createStore } from "redux";
import { combineReducers } from "redux";
import productReducer from './../redux/reducers/productReducer';
import cartReducer from './../redux/reducers/cartReducer';

const rootReducer = combineReducers({
  productReducer,
  cartReducer
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
)
