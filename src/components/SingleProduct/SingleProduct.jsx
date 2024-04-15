import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/actions/action';
import styles from'../SingleProduct/SingleProduct.module.css';
import axios from 'axios';


const Product = () => {
  const dispatch = useDispatch();
  const { isbn } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8080/search?query=${isbn}`);
        const data = response.data.map((bookString) => JSON.parse(bookString)); 
        const selectedProduct = data.find((book) => book.isbn === isbn); 
        setProduct(selectedProduct);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product:', error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [isbn]);

  const send = async (item) => {
    dispatch(addToCart(item));
    alert("Item added successfully");
  };


  if (loading) return <Spinner animation="border" />;

  return (
    <div className={styles['single_page_container']}>
      {product ? (
        <div className={styles['book_container']}>
          <div className="col-lg-6 mt-5">
            <img 
              src={`http://127.0.0.1:8080/images/${product.image_name}`}
              alt={product.title}
            />
          </div>
        </div>
      ) : (
        <p>Book you are looking for not found.</p>
      )}
  
      {product && (
        <div className={styles['description_container']}>
          <h4 className={styles['category_info']}>{product.category}</h4>
          <h1 className={styles['title_info']}>{product.title}</h1>
          <h3>{product.author}</h3>
          <p className={styles['price_info']}>${product.price}</p>
          <button onClick={() => send(product)}>Add to Cart</button>

        </div>
      )}
    </div>
  );
};  

export default Product;
