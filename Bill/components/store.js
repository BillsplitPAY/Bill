//page for store and reducer function
import { createStore } from 'redux'

function adder(arr, val){
  return [...arr, val];
}
const Jackson = {
  name: 'Lyn'
}

export const counter = (state =['Lyn'], action) => {
  switch (action.type) {
  case 'INCREMENT':
    return [...state, 'Jackson'];
  case 'DECREMENT':
    return [...state, 'right'];
  case 'RESET':
    return 0;
  default:
    return state;
  }
}
//reducer function receives actions sent by increment/decrement props and sets state accordingly

// export const colorer = (state = 'white', action)=> {
//   switch (action.type){
//     case 'redden':
//     return 'red';
//     default:
//     return state;
//   }
// }

const store = createStore(counter);


export default store;
