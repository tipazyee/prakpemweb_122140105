import React from 'react';
import { useBookContext } from '../context/BookContext';

const BookCard = ({ book }) => {
  const { updateBookStatus } = useBookContext();

  const handleStatusChange = (event) => {
    updateBookStatus(book.id, event.target.value);
  };

  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      {/* Tambahkan info penulis jika ada di data buku */}
      <p>Status: {book.status}</p>
      <div className="actions">
        <select value={book.status} onChange={handleStatusChange}>
          <option value="milik">Milik</option>
          <option value="dibaca">Baca</option>
          <option value="beli">Beli</option>
        </select>
        {/* Tambahkan tombol lain sesuai kebutuhan */}
      </div>
    </div>
  );
};

export default BookCard;