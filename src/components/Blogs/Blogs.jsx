import { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import PropTypes from 'prop-types';

const Blogs = ({handleBookmark,handleMarkAsRead}) => {
    const[blogs,setBlogs]=useState([]);
    useEffect(() =>{
        fetch('./blogs.json')
        .then(res => res.json())
        .then(data => {setBlogs(data)
        console.log(data);});
    },[])
    return (
        <div className='md:w-2/3'>
            {
                blogs.map(blog=>
                    <Blog blog={blog} key={blog.id} handleBookmark={() =>handleBookmark(blog)} handleMarkAsRead={handleMarkAsRead}></Blog>
                )
            }
        </div>
    );
};

Blogs.propTypes={
    blogs:PropTypes.object.isRequired,
    handleBookmark:PropTypes.func.isRequired,
    handleMarkAsRead:PropTypes.func.isRequired,
}
export default Blogs;