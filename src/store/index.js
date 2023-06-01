import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import {
  authReducer,
  cartReducer,
  categoriesReducer,
  ordersReducer,
  productsReducer,
} from './reducers';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  cart: cartReducer,
  orders: ordersReducer,
  auth: authReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
