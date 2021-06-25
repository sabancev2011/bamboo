
const initialState = {
    items: [],
    isLoaded: false,
    activeColor: 0,
    activeSize: 0
};

const items = (state = initialState, action) => {

    switch (action.type) {
        case 'SET_ITEMS':
            return {
                ...state,
                items: action.payload,
                activeColor: action.payload.reduce((acc, item) => {
                    return {...acc,
                        [item.id]: item.color[0]}
                }, {}),
                activeSize: action.payload.reduce((acc, item) => {
                    return {...acc,
                        [item.id]: item.sizes[0]}
                }, {}),
                isLoaded: true
            };
        case 'SET_LOADED':
            return {
                ...state,
                isLoaded: action.payload
            };
        case 'SET_ACTIVE_COLOR':
            return {
                ...state,
                activeColor: {
                    ...state.activeColor,
                    [action.payload.id]: action.payload.name
                }
            };
            case 'SET_ACTIVE_SIZE':
            return {
                ...state,
                activeSize: {
                    ...state.activeSize,
                    [action.payload.id]: action.payload.name
                }
            };
        default:
            return state;
    }
}

export default items;