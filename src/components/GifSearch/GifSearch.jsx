import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './GifSearch.css';

const GifSearch = ({ setSelectedGif }) => {
  const [results, setResults] = useState([]);
  const [searchString, setSearchString] = useState('');
  const [showGifs, setShowGifs] = useState(false);

  const handleSearchChange = (e) => {
    setSearchString(e.target.value);
  };
  const handleGifClick = (url) => {
    setSelectedGif(url);
    setShowGifs(false);
  };
  useEffect(() => {
    async function fetchGifs(query) {
      const res = await axios.get(
        `https://api.giphy.com/v1/gifs/search?api_key=PMu4JA41javmHmyvxExoNNnKINzZYZmV&q=${query}&limit=6&offset=0&rating=g&lang=en`
      );
      setResults(res.data.data);
    }
    fetchGifs(searchString);
  }, [searchString]);
  return (
    <div className='container'>
      <button
        className='btn'
        id='add-gif-btn'
        onClick={() => setShowGifs(true)}
      >
        Add a Gif
      </button>
      {showGifs && (
        <div className='gif-container'>
          <input
            className='input'
            value={searchString}
            onChange={handleSearchChange}
            placeholder='Search Gifs'
          />
          <div
            className='scroller'
            style={{ border: !results.length && 'none' }}
          >
            {results.map((el) => (
              <div
                className='gif-wrapper'
                onClick={(e) => {
                  handleGifClick(el.images.fixed_height_small.url);
                }}
              >
                <img src={el.images.fixed_width.url} key={el.url} alt='gif' />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GifSearch;
