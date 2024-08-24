import React from 'react'
import { IoSearch } from 'react-icons/io5';

const SearchBox = () => {
  return (
    <div className='searchBox position-relative d-flex align-items-center'>
      <input type="text" placeholder='Search Hear....' />
<IoSearch className='searchIcon' />
    </div>
  )
}

export default SearchBox;
