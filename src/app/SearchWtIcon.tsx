'use client';

import { FiSearch } from 'react-icons/fi';

export default function SearchWtIcon() {
  return (
    <div className='relative'>
      <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
        <div className='text-gray h-5 w-5'>
          <FiSearch size={18} />
        </div>
      </div>
      <input
        type='text'
        id='search-navbar'
        className='block w-full rounded-2xl border border-gray-300 bg-gray-50 p-2 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
        placeholder='Search...'
      />
    </div>
  );
}
