import { useState } from 'react';
import Header from './components/Header';
import PostForm from './components/PostForm';
import PostCards from './components/PostCards';
import './App.css';

function App() {
  const [postData, setPostData] = useState(null);

  return (
    <>
      <Header />
      <div className="container d-flex justify-content-center">
        <PostForm setPostData={setPostData} />
      </div>
      <div className="container d-flex justify-content-center">
        <PostCards postData={postData} />
      </div>
    </>
  );
}

export default App;