const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
    itemsPrice: {}
};

const cart = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD_ITEM_TO_CART': {

            return {
                ...state,
                items: {
                    ...state.items,
                    [action.payload.id]: !state.items[action.payload.id]
                        ? [action.payload] : [...state.items[action.payload.id], action.payload]
                },
                itemsPrice: {
                    ...state.itemsPrice,
                    [action.payload.id]: !state.itemsPrice[action.payload.id]
                        ? action.payload.price : state.itemsPrice[action.payload.id] + action.payload.price
                },
                totalCount: state.totalCount + 1,
                totalPrice: state.totalPrice + action.payload.price,
            };
        }
        case 'CLEAR_CART': {
            return {
                ...state,
                items: {},
                totalPrice: 0,
                totalCount: 0,
                itemsPrice: {}
            }
        }

        case 'REMOVE_CART_ITEM': {
            const newItems = {
                ...state.items
            }
            const newItemsPrice = {
                ...state.itemsPrice
            }

            delete newItemsPrice[action.payload];
            delete newItems[action.payload]

            return {
                ...state,
                items: newItems,
                itemsPrice: newItemsPrice,
                totalPrice: state.totalPrice - state.itemsPrice[action.payload],
                totalCount: state.totalCount - state.items[action.payload].length
            }
        }

        case 'PLUS_CART_ITEM': {
            return {
                ...state,
                items: {
                    ...state.items,
                    [action.payload]: [...state.items[action.payload], state.items[action.payload][0]]
                },
                totalPrice: state.totalPrice + state.items[action.payload][0].price,
                totalCount: state.totalCount + 1,
                itemsPrice: {
                    ...state.itemsPrice,
                    [action.payload]: state.itemsPrice[action.payload] + state.items[action.payload][0].price
                },
            }
        }
        case 'MINUS_CART_ITEM': {
            
            return {
                ...state,
                items: {
                    ...state.items,
                    [action.payload]: state.items[action.payload].length > 1 ? state.items[action.payload].slice(1) : state.items[action.payload]
                },
                totalPrice: state.items[action.payload].length > 1 ? state.totalPrice - state.items[action.payload][0].price : state.totalPrice,
                totalCount: state.items[action.payload].length > 1 ? state.totalCount - 1 : state.totalCount,
                itemsPrice: {
                    ...state.itemsPrice,
                    [action.payload]: state.items[action.payload].length > 1 ? state.itemsPrice[action.payload] - state.items[action.payload][0].price : state.itemsPrice[action.payload], 
                },
            }

        }








        default:
            return state;
    }

}

export default cart;


