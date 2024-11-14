import { useEffect, useState } from 'react';

const Blogs = () => {
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
                blogs.map((blog)=>{
                    <div>
                        <img src={blog.cover} alt="" />
                    </div>
                })
            }
        </div>
    );
};

export default Blogs;