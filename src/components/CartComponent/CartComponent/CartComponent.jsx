// import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { removeFromCart, incrementCartItem, decrementCartItem } from '../../../redux/actions/action';
// import CartOrderForm from "../CartOrderForm/CartOrderForm"
// import "../CartComponent/CartComponent.css"

// const Cart = () => {
//     const [totalPrice, setTotalPrice] = useState(0);

//     const carts = useSelector(state => state.cartReducer.carts);
//     const dispatch = useDispatch();

//     const handleRemoveFromCart = (isbn) => {
//         dispatch(removeFromCart(isbn));
//     };

//     const handleIncrementQuantity = (isbn) => {
//         dispatch(incrementCartItem(isbn));
//     };

//     const handleDecrementQuantity = (isbn) => {
//         dispatch(decrementCartItem(isbn));
//     };

//     useEffect(() => {
//         let total = 0;
//         carts.forEach(item => {
//             if (item.price && item.quantity) {
//                 total += (item.price * item.quantity);
//             }
//         });
//         setTotalPrice(total);
//     }, [carts]);

//     return (
//         <div>
//             <h2>Shopping Cart</h2>
//             {carts.length === 0 ? (
//                 <p>Your cart is empty</p>
//             ) : (
//                 <div>
//                     {carts.map(item => (
//                         <div key={item.isbn}>
//                             <p>{item.title} </p>
//                             <img
//                 src={`http://127.0.0.1:8080/images/${item.image_name}`}
//                 alt={item.title}
//               />
//                             <p>${item.price}</p>
//                             <p>Quantity: {item.quantity}</p> 
//                             <button onClick={() => handleRemoveFromCart(item.isbn)}>Remove</button>
//                             <button onClick={() => handleDecrementQuantity(item.isbn)}>-</button>
//                             <button onClick={() => handleIncrementQuantity(item.isbn)}>+</button>
//                         </div>
//                     ))}
//                     <p>Total Price: ${isNaN(totalPrice) ? 0 : totalPrice.toFixed(2)}</p>
//                     <CartOrderForm/>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Cart;

// Cart.js
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, incrementCartItem, decrementCartItem, updateCartItemCount, updateTotalItems } from '../../../redux/actions/action';
import CartOrderForm from "../CartOrderForm/CartOrderForm";
import '../CartComponent/CartComponent.css'
import { Link } from 'react-router-dom';

const Cart = () => {
    const [totalPrice, setTotalPrice] = useState(0);

    const carts = useSelector(state => state.cartReducer.carts);
    const dispatch = useDispatch();

    const handleRemoveFromCart = (isbn) => {
        dispatch(removeFromCart(isbn));
    };

    const handleIncrementQuantity = (isbn) => {
        dispatch(incrementCartItem(isbn));
    };

    const handleDecrementQuantity = (isbn) => {
        dispatch(decrementCartItem(isbn));
    };

    useEffect(() => {
        let total = 0;
        carts.forEach(item => {
            if (item.price && item.quantity) {
                total += (item.price * item.quantity);
            }
        });
        setTotalPrice(total);
    }, [carts]);


    useEffect(() => {
        let totalQuantity = 0;
        carts.forEach(item => {
            totalQuantity += item.quantity;
        });
        dispatch(updateTotalItems(totalQuantity)); 
    }, [carts, dispatch]);
   
    return (
        <div className="cart-container">
            <h2>Shopping Cart</h2>
            {carts.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div className='cart_products'>
                    {carts.map(item => (
                        <div key={item.isbn} className="cart-item">
                            <img
                                src={`http://127.0.0.1:8080/images/${item.image_name}`}
                                alt={item.title}
                                className="cart-item-image"
                            />
                            <div className="cart-item-info">
                                <h3>
                                    <Link to={`/books/${item.isbn}`}>{item.title}</Link>
                                </h3>
                                <p style={{ marginTop: '10px', fontWeight: 'bold', fontSize: '20px'}}>${item.price}</p>
                                <p className="cart-item-quantity" style={{ marginTop: '10px', fontWeight: 'bold'}}>Quantity: {item.quantity}</p>
                                <div className="cart-item-buttons">
                                    <button onClick={() => handleRemoveFromCart(item.isbn)}>Remove</button>
                                    <button onClick={() => handleDecrementQuantity(item.isbn)}>-</button>
                                    <button onClick={() => handleIncrementQuantity(item.isbn)}>+</button>
                                </div>
                            </div>
                        </div>
                    ))}
                  
                   
                
                        
                    </div>
            )}
              <div className='order_form'>
                        <p className="cart-total-price" style={{ color: '#b85ac9', fontWeight: 'bold', fontSize: '30px'}}>Total Price: ${isNaN(totalPrice) ? 0 : totalPrice.toFixed(2)}</p>
                      <CartOrderForm />
                        </div>
          
        </div>
    );
};

export default Cart;
    
    