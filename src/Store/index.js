import { compose, createStore, applyMiddleware } from "redux";
import { reducers } from "./../reducers/index";
import thunk from "redux-thunk";
export const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

store.subscribe(() => console.log(store.getState()));
