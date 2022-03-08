import React from 'react';

const Post = ({ data }) => {
  return (
    <div className='post'>
      <p>{data.text}</p>
      <img src={data.image} alt='gif' />
    </div>
  );
};

export default Post;
