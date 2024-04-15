import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/action';
import { BASE_URL } from '../utils/config';

const useRandomBooks = () => {
  const [randomBooks, setRandomBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(BASE_URL);
        const data = response.data.map(bookString => JSON.parse(bookString));
        const shuffledBooks = data.sort(() => 0.5 - Math.random());
        const randomBooks = shuffledBooks.slice(0, 8);
        setRandomBooks(randomBooks);
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

  return { randomBooks, loading, error, handleAddToCart };
};

export default useRandomBooks;
