import { Link } from "react-router-dom";


const FoodCard = ({item}) => {
    const {name, image, price, recipe} = item;
    return (
        <div>
            <div className="card card-compact w-full md:w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-800 text-white ">${price}</p>
                <div className="card-body flex flex-col items-center">
                    <h2 className="card-title ">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-center">
                        <Link to=''><button className="btn btn-outline border-orange-500 border-0 border-b-4">Add To Cart</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;