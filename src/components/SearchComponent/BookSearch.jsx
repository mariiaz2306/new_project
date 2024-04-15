import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { searchBooksFailure, searchBooksRequest, searchBooksSuccess } from '../../redux/actions/action';
import '../SearchComponent/BookSearch.css'
import { Link } from 'react-router-dom';


const BookSearch = () => {
  const dispatch = useDispatch();
  const { searchResults, loading, error } = useSelector((state) => state.search);
  const [searchTerm, setSearchTerm] = useState('');
  let searchTimeout;

  const handleSearch = async (title) => {
    const url = `http://127.0.0.1:8080/search?query=${title}`;
    dispatch(searchBooksRequest());

    try {
      const response = await axios.get(url);
      const books = response.data.map((bookString) => JSON.parse(bookString));
      dispatch(searchBooksSuccess(books));
    } catch (error) {
      dispatch(searchBooksFailure(error.message));
    }
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchTerm(value);

    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      handleSearch(value);
    }, 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchTerm);
  };

  // here is the effect of clearing the search with a help of unmounting
  useEffect(() => {
    return () => {
      dispatch(searchBooksSuccess([])); // I clear the search results when unmounting the component
    };
  }, [dispatch]); //  I specify here the dependency so that the effect triggers only when the dispatch changes.

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
         className='searchbar'
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search the book by name"
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      <div className="book-container">
        {searchResults.map((book) => (
          <div key={book.isbn} className="book">
             <Link to={`/books/${book.isbn}`}>
            <img
              src={`http://127.0.0.1:8080/images/${book.image_name}`}
              alt={book.title}
            />
            </Link>
            <div>
              <h3>{book.title}</h3>
             
              <p><strong>Author:</strong> {book.author}</p>
              <p><strong>Category:</strong> {book.category}</p>
              <p><strong>Pages:</strong> {book.pages}</p>
              <p><strong>Price:</strong> $ {book.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookSearch;
