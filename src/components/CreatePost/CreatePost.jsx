import React, { useState } from 'react';
import GifSearch from '../GifSearch';

import './CreatePost.css';

const CreatePost = ({ addPost }) => {
  const [selectedGif, setSelectedGif] = useState(null);
  const [postText, setPostText] = useState('');
  return (
    <>
      <div className='post-container'>
        <input
          className='post-text'
          placeholder='Write Something To Post'
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
        />
        {selectedGif && (
          <div className='post-gif-container'>
            <button className='close-btn' onClick={() => setSelectedGif(null)}>
              X
            </button>
            <img src={selectedGif} alt='gif' />
          </div>
        )}
      </div>
      <div className='btn-container'>
        <GifSearch setSelectedGif={setSelectedGif} />
        <button
          id='post-btn'
          onClick={() => {
            addPost?.({
              text: postText,
              image: selectedGif,
            });
            setPostText('');
            setSelectedGif(null);
          }}
        >
          Post
        </button>
      </div>
    </>
  );
};

export default CreatePost;
