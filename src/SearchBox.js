import React from 'react';

const SearchBox = ({ value, onSearchChange }) => {

  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--green bg-lightest-blue'
        type='text'
        placeholder='search robots'
        value={value}
        onChange={onSearchChange}
      />
    </div>
  );
};

export default SearchBox;
