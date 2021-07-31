import { createStore } from "redux";
import { combineReducers } from "redux";
import productReducer from './reducers/productReducer';
import cartReducer from './reducers/cartReducer';
import glassReducer from './reducers/glassReducer';

const rootReducer = combineReducers({
  productReducer,
  cartReducer,
  glassReducer
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
)
