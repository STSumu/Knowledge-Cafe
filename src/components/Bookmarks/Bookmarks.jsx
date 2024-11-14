import {PropTypes } from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks,readingTime }) => {
  return (
    <div className="md:w-1/3 my-5">
      <div className="bg-[#6047EC]/[0.1] text-[#6047EC] border border-[#6047EC] py-5 px-12 rounded-lg">
        <h3 className="text-4xl">Spent time on read :{readingTime} min</h3>
      </div>
      <div className=" bg-[#111111]/[0.05] p-7 rounded-lg space-y-4 mt-6">
        <h1 className="font-bold text-2xl text-center">
          Bookmarked blogs:{bookmarks.length}
        </h1>
        {bookmarks.map((bookmark, idx) => (
          <Bookmark bookmark={bookmark} key={idx}></Bookmark>
        ))}
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.object.isRequired,
  readingTime:PropTypes.var,
};
export default Bookmarks;
