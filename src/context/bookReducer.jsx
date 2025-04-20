export const bookReducer = (state, action) => {
    switch (action.type) {
      case 'SET_BOOKS':
        return { ...state, books: action.payload };
      case 'ADD_BOOK':
        return { ...state, books: [...state.books, action.payload] };
      case 'UPDATE_BOOK_STATUS':
        return {
          ...state,
          books: state.books.map((book) =>
            book.id === action.payload.id ? { ...book, status: action.payload.status } : book
          ),
        };
      case 'SET_FILTER':
        return { ...state, filter: action.payload };
      case 'SET_SEARCH_QUERY':
        return { ...state, searchQuery: action.payload };
      default:
        return state;
    }
  };