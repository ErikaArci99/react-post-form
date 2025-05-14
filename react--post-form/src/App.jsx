import { useState } from 'react'
import Header from './components/Header'
import PostForm from './components/PostForm'
import PostCards from './components/PostCards'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <div className="container d-flex justify-content-center mt-5">
        <PostForm />
      </div>
      <div className="container d-flex justify-content-center mt-5">
        <PostCards />
      </div>
    </>
  );
}

export default App;