//map function / connect page
import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
//import Counter from './counter.js';
import Menu from './menu.js';
import ScrollStuff from './scrollStuff.js';
import ItemPage from './itemPage.js';
import Nav from './navigator.js';

//const state = 'hey';

const mapStateToProps = state => ({
  yo: state
})
// 3. function that creates react props called 'count' and 'color' and sets their values to the state.

const mapDispatchToProps = dispatch => ({
  increment: () => { dispatch({ type: 'INCREMENT' }) },
  decrement: () => { dispatch({ type: 'DECREMENT' }) },
  reset: () => { dispatch({ type: 'RESET' }) },
  redden: () => {dispatch({type: 'REDDEN'})},
})
/* 1. creates props called increment, decrement, and reset, and gives them functions
that send actions to the store*/
connect(mapStateToProps, mapDispatchToProps)(ItemPage);
export default connect(mapStateToProps, mapDispatchToProps)(Nav);

//export default connect(mapStateToProps, mapDispatchToProps)(Menu);

//Apparently, connect is what's sending the Menu component to App.js. Not sure why.


/*it starts here:

1. ccontainer.js: mapDispatchToProps() creates props called 'increment', 'decrement'...
and places functions inside them that send corresponding action types to the store.

2. counter.js: The props are set to event listeners in counter.js, and when event occurs,
the functions execute, sending the corresponding Action Type to the store.

2. store.js: The Reducer Function receives the Action Types and sets the state to whatever
that action type dictates in the reducer function.

3. ccontainer.js: mapStateToProps() then takes that state value and places it in React props
called 'count' and 'color'.

4. counter.js: wherever the prop {this.props.count} is placed, it will render as the state value.

**I think what you're failing to realize is that state is about data, not about layout or looks

*/
