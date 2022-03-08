import React, { useState } from 'react';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';
import './App.css';
function App() {
  const [posts, setPosts] = useState([]);
  console.log(posts);
  return (
    <div className='App'>
      <CreatePost addPost={(post) => setPosts([...posts, post])} />
      <PostList posts={posts} />
    </div>
  );
}

export default App;
