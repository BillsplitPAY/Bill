import { combineReducers } from 'redux';
import APIDataReducer from './reducer_apiData';
import CartReducer from './reducer_cart';
import PriceReducer from './reducer_price';
import OrderReducer from './reducer_order';
import TipReducer from './reducer_tip';
import CatReducer from './reducer_category';
import MenuReducer from './reducer_menu';
import CurrentItem from './reducer_currentItem';
import UserReducer from './reducer_user';

 export default combineReducers({
	APIData: APIDataReducer,
  load: 'yea',
  cart: CartReducer,
  price: PriceReducer,
  order: OrderReducer,
  tip: TipReducer,
  category: CatReducer,
  menu: MenuReducer,
  currentItem: CurrentItem,
  user: UserReducer,
});

//export default rootReducer;
