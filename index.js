import { createStore, combineReducers, applyMiddleware } from "redux";

import * as actionCreators from "./actionCreators.js";
import * as actionCreators1 from "./actionCreators1.js";
import noteReducer from "./reducer.js";
import todoReducer from "./reducer1.js";

import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

// combines multiple reducers, commonly named as rootReducer
const rootReducer = combineReducers({
  noteReducer,
  todoReducer,
});

// 1.
// creates a store and takes reducer(s) as a parameter
const store = createStore(rootReducer);

// 2.
// createStore takes an enhancer as the second parameter in our case it is redux-logger viz. a middleware
// and we apply middleware using applyMiddleware.
// const store = createStore(rootReducer, applyMiddleware(logger.logger));

// 3.
// same as above but we are composing it with redux-devtools-extension for a better view in browser
// make sure to add Redux Devtools as an extension to Chrome
// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(logger.logger))
// );

//subcribe to the store, if state in the store gets modified then subscribe method gets invoked and runs the callback/listener
const unsubscribe = store.subscribe(() => console.log(store.getState()));

// dispatching actions
// notes
store.dispatch(actionCreators.addNote("note 1"));
store.dispatch(actionCreators.addNote("note 2"));

//unsubscribing from the store
unsubscribe();

// store.dispatch(actionCreators.addNote("note 3"));
// store.dispatch(actionCreators.markResolved(2));
// store.dispatch(actionCreators.markResolved(3));
// store.dispatch(actionCreators.removeNote(3));
// todos
store.dispatch(actionCreators1.addTodo("todo 1"));
store.dispatch(actionCreators1.addTodo("todo 2"));
