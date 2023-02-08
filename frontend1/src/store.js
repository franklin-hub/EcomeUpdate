import {legacy_createStore as createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {productListReducers, productDetailsReducers} from './reducers/productReducers';

const reducer =combineReducers({
    productList:productListReducers,
    productDetails:productDetailsReducers,
})


const initailState = {
    // cart:{cartItems:cartItemsFromStorage},
    // userLogin:{userInfo:userInfoFromStorage}
}

const middleware=[thunk]
const store = createStore(reducer,initailState,composeWithDevTools(applyMiddleware(...middleware)))

export default store;