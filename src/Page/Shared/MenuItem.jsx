

const MenuItem = ({item}) => {
    const {name, image, price, recipe} = item;
    return (
        <div className="flex space-x-4 mb-6">
            <img style={{borderRadius: '0 200px 200px 200px'}} className='w-[120px]' src={image}  />
            <div>
                <h3 className="uppercase">{name}-------</h3>
                <p className="">{recipe}</p>
            </div>
            <p className="text-yellow-400">${price}</p>
        </div>
    );
};

export default MenuItem;