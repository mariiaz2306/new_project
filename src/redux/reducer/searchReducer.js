import {
  SEARCH_BOOKS_REQUEST,
  SEARCH_BOOKS_SUCCESS,
  SEARCH_BOOKS_FAILURE,
} from '../actions/action';


const initialState = {
  searchTerm: '',
  searchResults: [],
  loading: false,
  error: null,
};


const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_BOOKS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SEARCH_BOOKS_SUCCESS:
      return {
        ...state,
        searchResults: action.payload,
        loading: false,
        error: null,
      };
    case SEARCH_BOOKS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
