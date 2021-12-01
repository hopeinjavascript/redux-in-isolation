# Redux

## create data store

create a store which will be your single source of truth

```
const store = createStore(rootReducer);
```

## action types

plan and define the actions you would need in your project and create an action object with action type and any data/payload if need be

```
export default {
  ADD_NOTE: "ADD_NOTE",
  REMOVE_NOTE: "REMOVE_NOTE",
  MARK_RESOLVED: "MARK_RESOLVED",
};
```

## action creators

create an action creator which is essentially a function so that we dont have to write the action type object again and again while dispatching the action and doing so it also ensures encapsulation which hides the implementation details

```
export function addNote(note) {
  return {
    type: actionTypes.ADD_NOTE,
    payload: {
      note,
    },
  };
}
```

## state change in reducer

after actions are defines and created we change the state in reducer depending upon the type of action fired from the application, every action should return an updated state based on the action type and payload

```
function reducer(state = [], action) {
  if (action.type === actionTypes.MARK_RESOLVED) {
    return state.map((note) =>
      note.id !== action.payload.id ? note : { ...note, resolved: true }
    );
  }
  return state;
}
```

## subcribe to the store

we can subscribe to store for any changes, the callback/listener is invoked when state in the store is updated

```
const unsubscribe = store.subscribe(() => console.log(store.getState()));
```

## unsubscribe from the store

subscribing to the store, it returns an unsubscribe function which can be used to unsubscribe from the store.

```
unsubscribe()
```

## combine reducers

combine multiple reducers in your application in a single reducer, commonly named as rootReducer

```
const rootReducer = combineReducers({
  noteReducer,
  todoReducer,
});
```

## apply middleware

we apply middleware using applyMiddleware.

```
const store = createStore(rootReducer, applyMiddleware(logger.logger));
```

## compose with redux dev tools

we can compose(ex. middlewares) with redux-devtools-extension for a better view in browser, make sure to add Redux Devtools as an extension to Chrome

```
const store = createStore(
rootReducer,
composeWithDevTools(applyMiddleware(logger.logger))
);
```
