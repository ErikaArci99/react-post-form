import { useState } from 'react'
import Header from './components/Header'
import PostForm from './components/PostForm'
import PostCards from './components/PostCards'
import './App.css'

function App() {

  return (
    <>
      <Header />
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
    </>
  );
}

export default App;