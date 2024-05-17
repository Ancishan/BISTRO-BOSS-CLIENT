import PropTypes from 'prop-types';
import Cover from "./Cover/Cover";
import MenuItem from "./MenuItem";

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
