const initialState = {
    item: {},
    isLoaded: false,
    id: false,
    activeColor: 0,
    activeSize: 0
};

const itemCard = (state = initialState, action) => {

    switch (action.type) {
        case 'LINK_ITEM_CARD':
            return {
                ...state,
                id: action.payload,
            };
        case 'SET_CARD_ITEM':
            return {
                ...state,
                item: action.payload,
                activeColor: action.payload[0].color[0],
                activeSize: action.payload[0].sizes[0],
                isLoaded: true
            };
        case 'SET_CARD_COLOR':
            return {
                ...state,
                activeColor: action.payload,
            };
        case 'SET_CARD_SIZE':
            return {
                ...state,
                activeSize: action.payload,
            };

        case 'CARD_LOADED':
            return {
                ...state,
                isLoaded: action.payload
            };
        default:
            return state;
    }
}

export default itemCard;
