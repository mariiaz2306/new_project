import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { BASE_URL } from '../../../utils/config';
import axios from 'axios';
import { clearCart } from '../../../redux/actions/action';
import styles from '../CartOrderForm/CartOrderForm.module.css'

const CartOrderForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        phone: ''
    });

    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // sendin the order to backend
            await axios.post(`${BASE_URL}/sale/send`, formData);
            // here i clear the cart after submition
            dispatch(clearCart());
            //I had an idea to make to here a modlwindow but next time I promise to do it)
            alert('Order submitted successfully! Our SalesDepartment will call you soon');
        } catch (error) {
            console.error('Error submitting order:', error);
            alert('Error submitting order. Please try again later.');
        }
    };

    return (
        <div className={styles['form-container']}>
            <h2>Order Form</h2>
            <form onSubmit={handleSubmit}>
             {/* I will skip also the validation here, just made it quite simple for demonstration */}
                <div className={styles['form-group']}>
                    <label>Full Name:</label>
                    <input type="text" placeholder="Full Name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className={styles['form-group']}>
                    <label>Address:</label>
                    <input type="text" placeholder="Address" name="address" value={formData.address} onChange={handleChange} required />
                </div>
                <div className={styles['form-group']}>
                    <label>Phone Number:</label>
                    <input type="tel" placeholder="Phone Number" name="phone" value={formData.phone} onChange={handleChange} required />
                </div>
                <button className= {styles['form-group']} type="submit">Submit Order</button>
            </form>
        </div>
    );
};

export default CartOrderForm;
