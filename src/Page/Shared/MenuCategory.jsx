import PropTypes from 'prop-types';
import Cover from "./Cover/Cover";
import MenuItem from "./MenuItem";
import { Link } from 'react-router-dom';

const MenuCategory = ({ items = [], title, coverImg }) => {
    return (
        <div className='pt-8'>
            {title && <Cover img={coverImg} title={title} />}
            <div className="grid md:grid-cols-2 gap-x-4 my-16">
                {Array.isArray(items) ? (
                    items.map(item => (
                        <MenuItem key={item._id} item={item} />
                    ))
                ) : (
                    <p>No items available</p>
                )}
            </div>
            <div className=' flex justify-center pb-4 '>
                <Link to={`/ourshop/${title}`}>
                    <button className="btn btn-outline border-0 border-b-4">Order Your Favorite Food</button>
                </Link>
            </div>

        </div>
    );
};

MenuCategory.propTypes = {
    items: PropTypes.array,
    title: PropTypes.string,
    coverImg: PropTypes.string,
};

MenuCategory.defaultProps = {
    items: [],
};

export default MenuCategory;
