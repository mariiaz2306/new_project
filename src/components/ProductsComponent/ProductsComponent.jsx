import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from '../ProductsComponent/ProductsComponent.module.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/action';
import { BASE_URL } from '../../utils/config';
import BookSearch from '../SearchComponent/BookSearch';

const ProductList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(BASE_URL);
        const data = response.data.map(bookString => JSON.parse(bookString));
        setBooks(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={styles['product-list-container']}>
      <BookSearch/>
      <h2>See All the Books</h2>
      <div className={styles['book-container']} >
        {books.map((book) => (
          <div key={book.isbn} className={styles['book']}>
            <Link to={`/books/${book.isbn}`}>
              <img
                src={`http://127.0.0.1:8080/images/${book.image_name}`}
                alt={book.title}
              />
             <h3 className='title'>{book.title.length > 15 ? `${book.title.substring(0, 30)}...` : book.title}</h3> 
             {/* here I minimised the number of letters in title */}
              </Link>
              
              <div>
               
                <p>Author: {book.author}</p>
                <p>Category: {book.category}</p>
                <p>Pages: {book.pages}</p>
                <p>Price: ${book.price}</p>
                <p>ISBN: {book.isbn}</p>
              </div>
            
            <button onClick={() => handleAddToCart(book)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
