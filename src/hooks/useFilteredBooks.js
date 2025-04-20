import { useState, useEffect } from 'react';

function useFilteredBooks(books, filter, searchTerm) {
  const [filteredBooks, setFilteredBooks] = useState(books);

  useEffect(() => {
    let results = books;

    if (filter !== 'all') {
      results = results.filter(book => book.status === filter);
    }

    if (searchTerm) {
      results = results.filter(book =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredBooks(results);
  }, [books, filter, searchTerm]);

  return filteredBooks;
}

export default useFilteredBooks;