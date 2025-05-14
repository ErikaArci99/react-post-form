import { useState } from 'react'
import PostForm from './components/PostForm'
import PostCards from './components/PostCards'
import './App.css'

function App() {

  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-12 col-lg-8">
          <form>
            < PostForm />
          </form>
        </div>
        <PostCards />
      </div>
    </div>
  );
}

export default App;