import React from 'react';
import { useBookContext } from '../context/BookContext';
import BookCard from '../components/BookCard';

const OwnedPage = () => {
  const { books } = useBookContext();
  const ownedBooks = books.filter(book => book.status === 'milik');

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-purple-800 mb-6 text-center">
          Buku yang Saya Miliki
        </h2>

        {ownedBooks.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ownedBooks.map(book => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">Belum ada buku yang Anda miliki.</p>
        )}
      </div>
    </div>
  );
};

export default OwnedPage;
