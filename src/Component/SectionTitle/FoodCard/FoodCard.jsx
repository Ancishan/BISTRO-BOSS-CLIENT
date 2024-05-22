import { Link, useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../../../Hooks/UseAuth";
import Swal from 'sweetalert2'
import axios from "axios";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from "../../../Hooks/useCart";

const FoodCard = ({item}) => {
    const {name, image, price, recipe, _id} = item;
    const {user} = UseAuth();
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = useAxiosSecure();
    const  [ ,refetch] = useCart();
    const handleAddToCart = () =>{
     if(user && user.email){
        //  send cart item to the database
        const cartItem ={
            menuID: _id,
            email: user.email,
            name,
            image, price
        }
        axiosSecure.post('/carts', cartItem)
        .then(res =>{
            console.log(res.data)
            if(res.data.insertedId){
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: `${name}  added to your cart`,
                    showConfirmButton: false,
                    timer: 1500
                  });
                //   refetch cart to update the cart item counter
                  refetch()
            }
        })

     }
     else{
        Swal.fire({
            title: "You are Not Login",
            text: "Please Login to add to the cart",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Login"
          }).then((result) => {
            if (result.isConfirmed) {
        //   send the login page
        navigate('/login', {state: {from: location }})
            }
          });
     }
    }

    return (
        <div>
            <div className="card card-compact w-full md:w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-800 text-white ">${price}</p>
                <div className="card-body flex flex-col items-center">
                    <h2 className="card-title ">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-center">
                        <button 
                        onClick={handleAddToCart}
                        className="btn btn-outline border-orange-500 border-0 border-b-4">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;