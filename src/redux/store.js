import { createStore, applyMiddleware } from 'redux';
import rootReduser from './reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(
    rootReduser,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);


export default store;