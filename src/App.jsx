
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs';
import Bookmarks from './components/Bookmarks/Bookmarks';
import { useEffect, useState } from 'react';
function App() {
  const [bookmarks,setBookmarks]=useState([]);
  const handleBookmark=() => {
    console.log("bookmark adding");
  }
  return (
    <div className='container mx-auto'>
    <Header></Header>
    <div className='md:flex'>
      <Blogs handleBookmark={handleBookmark}></Blogs>
      <Bookmarks></Bookmarks>
    </div>
     
    </div>
  )
}

export default App
