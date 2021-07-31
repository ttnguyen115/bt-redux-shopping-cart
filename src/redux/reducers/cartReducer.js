const initialState = {
    cart: [],
    quantity: 0
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            state.cart = action.payload;
            state.quantity++;
            return { ...state };
    
        case 'ADD_QUANTITY': 
            state.cart = state.cart.map(item => (
                (item.id === action.payload)
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ));
            state.quantity++;
            return { ...state };

        case 'REMOVE_QUANTITY':
            state.cart = state.cart.map(item => (
                (item.id === action.payload)
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ));
            state.quantity--;
            return { ...state };

        case 'REMOVE_PRODUCT':
            state.cart = state.cart.filter(item => item.id !== action.payload);
            state.quantity--;
            return { ...state };

        default:
            return state;
    }
}

export default cartReducer;