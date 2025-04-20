import React from 'react';
import { useBookContext } from '../context/BookContext';
import BookCard from '../components/BookCard';
import SearchBar from '../components/SearchBar';
import FilterTabs from '../components/FilterTabs';

const HomePage = () => {
  const {
    books,
    filter,
    searchQuery,
    newBookTitle,
    setNewBookTitle,
    newBookStatus,
    setNewBookStatus,
    addBook,
  } = useBookContext();

  const filteredBooks = books.filter((book) => {
    const matchesFilter = filter === 'all' || book.status === filter;
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center text-purple-800">Daftar Buku Saya</h2>

        {/* Tambah Buku */}
        <div className="bg-white rounded-lg shadow p-4 mb-6">
          <h3 className="text-lg font-semibold mb-3 text-gray-800">Tambah Buku Baru</h3>
          <div className="flex flex-col md:flex-row gap-3">
            <input
              type="text"
              placeholder="Judul Buku"
              value={newBookTitle}
              onChange={(e) => setNewBookTitle(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 w-full md:w-1/2"
            />
            <select
              value={newBookStatus}
              onChange={(e) => setNewBookStatus(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 w-full md:w-1/4"
            >
              <option value="milik">Milik</option>
              <option value="dibaca">Baca</option>
              <option value="beli">Beli</option>
            </select>
            <button
              onClick={addBook}
              className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded w-full md:w-auto"
            >
              Tambah Buku
            </button>
          </div>
        </div>

        <SearchBar />
        <FilterTabs />

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
