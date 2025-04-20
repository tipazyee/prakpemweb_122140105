import { useState, useEffect } from 'react';

export const useLocalStorageBooks = () => {
  const [storedBooks, setStoredBooks] = useState(() => {
    const localData = localStorage.getItem('books');
    return localData ? JSON.parse(localData) : [];
  });

  const saveBooks = (books) => {
    localStorage.setItem('books', JSON.stringify(books));
  };

  return { storedBooks, saveBooks };
};