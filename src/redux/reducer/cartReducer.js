 const INIT_STATE = {
    carts: [],

};

export const cartReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
    case "ADD_TO_CART":
        const existingItemIndex = state.carts.findIndex(item => item.isbn === action.payload.isbn);
        if (existingItemIndex !== -1) {
            // here is the logic taht if you clicked once on the product, the quantity will be updated to 1
            const updatedCarts = [...state.carts];
            updatedCarts[existingItemIndex].quantity += 1;
            return {
                ...state,
                carts: updatedCarts
            };
        } else {
            
            return {
                ...state,
                carts: [...state.carts, { ...action.payload, quantity: 1 }]
            };
        }
    
        // case "ADD_TO_CART":
        //     return {
        //         ...state,
        //         carts: [...state.carts, action.payload]
        //     };
        case "REMOVE_TO_CART":
            const updatedCarts = state.carts.filter((item) => item.isbn !== action.payload);
            return {
                ...state,
                carts: updatedCarts
            };
        case "CART_INCREMENT":
            return {
                ...state,
                carts: state.carts.map((item) =>
                    item.isbn === action.payload && item.quantity !== action.payload
                        ? { ...item, quantity: (item.quantity || 1) + 1 }
                        : item
                )
            };
        case "CART_DECREMENT":
            return {
                ...state,
                carts: state.carts.map((item) =>
                    item.isbn === action.payload && item.quantity !== undefined
                        ? { ...item, quantity: Math.max((item.quantity || 1) - 1, 0) }
                        : item
                )
            };

            case "CLEAR_CART":
           
            return {
                ...state,
                carts: []
            };
            case "SET_CART":
            return {
                ...state,
                carts: action.payload
            };

            case 'UPDATE_CART_QUANTITY':
            return {
                ...state,
              carts: action.payload 
            };
        default:
            return state;
    }
};




