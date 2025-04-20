import React from 'react';
import { useBookContext } from '../context/BookContext';

const FilterTabs = () => {
  const { filter, setFilter } = useBookContext();

  const tabs = [
    { label: 'Semua', value: 'all' },
    { label: 'Milik', value: 'milik' },
    { label: 'Baca', value: 'dibaca' },
    { label: 'Beli', value: 'beli' },
  ];

  return (
    <div className="flex gap-3 mt-4 flex-wrap justify-center">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          className={`px-4 py-2 text-sm font-medium rounded-full border transition ${
            filter === tab.value
              ? 'bg-purple-700 text-white border-purple-700'
              : 'bg-white text-gray-700 border-gray-300 hover:bg-purple-100'
          }`}
          onClick={() => setFilter(tab.value)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default FilterTabs;
