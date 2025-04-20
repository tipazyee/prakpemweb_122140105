// import { createContext, useContext, useState } from 'react';

// export const BookContext = createContext();

// export const BookProvider = ({ children }) => {
//   const [books, setBooks] = useState([]);
//   const [ownedBooks, setOwnedBooks] = useState([]);
//   const [readingBooks, setReadingBooks] = useState([]);

//   return (
//     <BookContext.Provider value={{ books, setBooks, ownedBooks, setOwnedBooks, readingBooks, setReadingBooks }}>
//       {children}
//     </BookContext.Provider>
//   );
// };

// // custom hook (opsional tapi bagus)
// export const useBookContext = () => useContext(BookContext);
import React, { createContext, useState, useEffect, useReducer, useContext } from 'react';
import { bookReducer } from './bookReducer';
import { useLocalStorageBooks } from '../hooks/useLocalStorageBooks';

const BookContext = createContext();

const initialState = {
  books: [],
  filter: 'all',
  searchQuery: '',
};

export const BookProvider = ({ children }) => {
  const [state, dispatch] = useReducer(bookReducer, initialState);
  const { storedBooks, saveBooks } = useLocalStorageBooks();
  const [newBookTitle, setNewBookTitle] = useState('');
  const [newBookStatus, setNewBookStatus] = useState('milik'); // Default status saat menambah buku

  useEffect(() => {
    if (storedBooks) {
      dispatch({ type: 'SET_BOOKS', payload: storedBooks });
    }
  }, [storedBooks]);

  useEffect(() => {
    saveBooks(state.books);
  }, [state.books, saveBooks]);

  const addBook = () => {
    if (newBookTitle.trim() !== '') {
      const newBook = {
        id: Date.now(), // Simple unique ID
        title: newBookTitle,
        status: newBookStatus,
      };
      dispatch({ type: 'ADD_BOOK', payload: newBook });
      setNewBookTitle('');
    }
  };

  const updateBookStatus = (id, newStatus) => {
    dispatch({ type: 'UPDATE_BOOK_STATUS', payload: { id, status: newStatus } });
  };

  const setFilter = (filterType) => {
    dispatch({ type: 'SET_FILTER', payload: filterType });
  };

  const setSearchQuery = (query) => {
    dispatch({ type: 'SET_SEARCH_QUERY', payload: query });
  };

  return (
    <BookContext.Provider value={{
      books: state.books,
      filter: state.filter,
      searchQuery: state.searchQuery,
      newBookTitle,
      setNewBookTitle,
      newBookStatus,
      setNewBookStatus,
      addBook,
      updateBookStatus,
      setFilter,
      setSearchQuery,
    }}>
      {children}
    </BookContext.Provider>
  );
};

export const useBookContext = () => {
  return useContext(BookContext);
};