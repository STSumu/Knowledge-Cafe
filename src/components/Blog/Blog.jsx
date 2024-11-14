import PropTypes from 'prop-types'; // ES6
import { CiBookmark } from "react-icons/ci";


const Blog = ({blog,handleBookmark}) => {
    const {title,cover_image,author,img,reading_time,hashtags,posted_date}=blog;

    return (
        <div className='my-5 border-b-2 pb-4'>
            <img className='rounded-lg h-[450px] w-full mb-4 border'src={cover_image} alt="" />
            <div className='flex justify-between my-4'>
               <div className='flex justify-between gap-6'>
                   <img className='w-14 h-14 rounded-full' src={img} alt="" />
                   <div>
                   <h3 className='text-xl font-bold'>{author}</h3>
                   <p className='opacity-60'>{posted_date}</p>
                   </div>
               </div>
               <div className='flex justify-between items-center'>
                  <span className='opacity-60'>{reading_time}</span>
                   <button onClick={handleBookmark}><CiBookmark /></button>
               </div>
            </div>
           <h1 className='text-4xl font-bold mb-4'>{title}</h1>
           <div className='opacity-60 flex gap-4'>
            {
                hashtags.map((hashtag,idx)=> <span key={idx}  className='hover:text-blue-800'><a href="">#{hashtag}</a></span>)
            }
           </div>
           <div className='my-7'><u><a href="" className='text-[#6047EC]'>Mark as read</a></u></div>
        </div>
    );
};

Blog.proptypes={
    blog : PropTypes.object.isRequired,
    handleBookmark:PropTypes.func.isRequired,
}
export default Blog;