import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../components/ProductsComponent/ProductsComponent.module.css';
import useRandomBooks from '../utils/useRandomBooks';
import Banner from '../components/Banner/Banner';

const HomePage = () => {
  const { randomBooks, loading, error, handleAddToCart } = useRandomBooks();
//   Here I reuse the function useRandomBooks (we choose randomly 8 books and display them on the main page) in order to clean the code and make it easier to read.
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <Banner/>
      <div className={styles['product-list-container']}>
        <h2 style={{ textAlign: 'center', marginTop: '20px', fontSize: '50px'}}>Discover our Bestsellers</h2> 
        {/* I'm agree inline styles r not the best solution here but it works perfectly here). */}
        <div className={styles['book-container']} >
          {randomBooks.map((book) => (
            <div key={book.isbn} className={styles['book']}>
              <Link to={`/books/${book.isbn}`}>
                <img
                  src={`http://127.0.0.1:8080/images/${book.image_name}`}
                  alt={book.title}
                />
                <h3>{book.title.length > 15 ? `${book.title.substring(0, 30)}...` : book.title}</h3>
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
    </>
  );
};

export default HomePage;
