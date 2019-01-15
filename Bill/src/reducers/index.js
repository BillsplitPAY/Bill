import { combineReducers } from 'redux';
import MenuReducer from './reducer_menu';
import CartReducer from './reducer_cart';
import PriceReducer from './reducer_price';
import OrderReducer from './reducer_order';
import TipReducer from './reducer_tip';
import CatReducer from './reducer_category';
import NewMenuReducer from './reducer_newMenu';
import CurrentItem from './reducer_currentItem';
import UserReducer from './reducer_user';

 export default combineReducers({
	menu: MenuReducer,
  load: 'yea',
  cart: CartReducer,
  price: PriceReducer,
  order: OrderReducer,
  tip: TipReducer,
  category: CatReducer,
  newMenu: NewMenuReducer,
  currentItem: CurrentItem,
  user: UserReducer,
});

//export default rootReducer;
