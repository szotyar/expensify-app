import {createStore} from 'redux';

// Action generators: functions that return action objects

// using the object destructuring. if there's no object, we default to an empty object
// and we can get the incrementBy from an empty object and make it default to 1 
const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ({number}) => ({
  type: 'SET',
  number
});

const resetCount = () => ({
  type: 'RESET'
});

// Reducers
// reducers are pure functions
// the output is only determined by the input, 
// it doesn't use anything else from outside, and doesn't change anything else outside either
// 2. never change state or action (just return a new state)

const countReducer = (state = {count: 0}, action) => {
  switch(action.type){
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
    case 'SET':
      return {
        count: action.number
      }
    case 'RESET':
      return {
        count: 0
      }
    default:
      return state;
  }
}

const store = createStore(countReducer);

// subscribe runs every time the store changes
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});



// Actions - an object that gets sent to the store

//increment the count
// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// });

store.dispatch(incrementCount({incrementBy: 5}));

store.dispatch(incrementCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy: 10}));

store.dispatch(resetCount());

store.dispatch(setCount({number: 101}));


