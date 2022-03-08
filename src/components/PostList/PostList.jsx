import React from 'react';
import Post from '../Post';

const PostList = ({ posts }) => {
  return (
    <>
      {posts.length > 0 && <div style={{ marginTop: 30 }}>Posts</div>}
      <div>
        {posts.map((post) => (
          <Post data={post} />
        ))}
      </div>
    </>
  );
};

export default PostList;
