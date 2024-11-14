
import { PropTypes } from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title}=bookmark;
    return (
        <div className='bg-white rounded-lg p-5'>
            <h1>{title}</h1>
        </div>
    );
};
Bookmark.propTypes={
    bookmark:PropTypes.object.isRequired,
}
export default Bookmark;