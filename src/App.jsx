
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs';
import Bookmarks from './components/Bookmarks/Bookmarks';
import {useState } from 'react';


function App() {
  const [bookmarks,setBookmarks]=useState([]);
  const [readingTime,setReadingtime]=useState(0);

  const handleBookmark=(blog) => {
     const newBookmarks=[...bookmarks,blog];
     setBookmarks(newBookmarks);
  }
  const handleMarkAsRead=(time) => {
        const newTime=readingTime + time;
        setReadingtime(newTime);
  }
  return (
    <div className='container mx-auto'>
    <Header></Header>
    <div className='md:flex gap-6 mt-3'>
      <Blogs handleBookmark={handleBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
      <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
    </div>
     
    </div>
  )
}

export default App
