const INITIAL_STATE = {
    cartItems: [],

}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            const indexItemAdded = state.cartItems.findIndex(item => item.id === action.payload.id)
            if (indexItemAdded !== -1) {
                
                const newCartItems = [...state.cartItems]
                newCartItems[indexItemAdded].quantity += action.payload.quantity
                return {
                    ...state,
                    cartItems: newCartItems
                }

            } else {
                
                const newCartItems = [...state.cartItems, action.payload]
                return {
                    ...state,
                    cartItems: newCartItems
                }

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