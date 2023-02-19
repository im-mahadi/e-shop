'use client';

import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

export default function SearchWtIcon() {
  const [search, setSearch] = useState<string>('');

  return (
    <div className='relative'>
      <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
        <div className='text-gray h-5 w-5'>
          <FiSearch size={18} />
        </div>
      </div>
      <input
        type='text'
        className='block w-full rounded-2xl border border-gray-300 bg-gray-50 pl-10 text-sm text-gray-900 transition-all duration-300 focus:w-96 focus:border-blue-500 focus:ring-blue-500'
        placeholder='Search...'
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
    </div>
  );
}
