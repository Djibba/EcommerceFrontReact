const INITIAL_STATE = {
    cartItems: [],

}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]
            }
            
        case "UPDATE_ITEM":
            return {
                ...state,
                cartItems: state.cartItems.map(item => item.id === action.payload.id ? action.payload : item)
            }

        case "REMOVE_FROM_CART":
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
            }
        case "CLEAR_CART":
            return {
                ...state,
                cartItems: []
            }
        default:
            return state
    }
}

export default cartReducer