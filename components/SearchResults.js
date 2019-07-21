'use strict'

import React from 'react';

const SearchResults = ({ results }) => (
  let resultsArray = results.map((result,i) => {<li><p key={i}>{result.description}</p></li>});
  <ul className='search-results'>
    {resultsArray}
  </ul>
);

export default SearchResults;
