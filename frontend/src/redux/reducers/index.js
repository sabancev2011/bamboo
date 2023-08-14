import { combineReducers } from 'redux';
import filters from './filters';
import items from './items';
import cart from './cart';
import itemCard from './itemCard';

const rootReduser = combineReducers({
    filters,
    items,
    cart,
    itemCard
});

export default rootReduser;