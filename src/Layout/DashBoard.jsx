import { FaAd, FaHome, FaShoppingCart } from "react-icons/fa";
import { GiDiscGolfBag } from "react-icons/gi";
import { IoMail } from "react-icons/io5";
import { MdRestaurantMenu, MdReviews } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";
import { ImSpoonKnife } from "react-icons/im";
import { RiMenuFold2Fill } from "react-icons/ri";
import { BiSolidFoodMenu } from "react-icons/bi";
import { FaUsersGear } from "react-icons/fa6";
import useAdmin from "../Hooks/useAdmin";


const DashBoard = () => {
    const [cart] = useCart();

    // TODO  get isAdmin value from the database
    const [isAdmin] = useAdmin();
    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-orange-400">

                <ul className="menu">
               {
                isAdmin ? <>
                 <li>
                        <NavLink to='/dashboard/AdminHome'>
                          <FaHome></FaHome>
                            Admin Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/addItems'>
                        <ImSpoonKnife />
                           Add Items
                        </NavLink>
                    </li>
                  
                    <li>
                        <NavLink to='/dashboard/manageItems'>
                        <RiMenuFold2Fill />
                        manage items
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/manageBooking'>
                        <BiSolidFoodMenu />
                         Manage Booking
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/allUsers'>
                        <FaUsersGear />
                       All Users
                        </NavLink>
                    </li>
                </> :
                <>
                 <li>
                        <NavLink to='/dashboard/userhome'>
                          <FaHome></FaHome>
                            User Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/cart'>
                            <FaShoppingCart></FaShoppingCart>
                            MY Cart <span>{cart.length}</span>
                        </NavLink>
                    </li>
                  
                    <li>
                        <NavLink to='/dashboard/reservation'>
                            <FaAd></FaAd>
                           Reserveration
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/review'>
                        <MdReviews />
                         Add  Review
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/bookings'>
                        <GiDiscGolfBag/>
                           My Bookings
                        </NavLink>
                    </li>
                    </>
               }

                    {/* shared link */}
                    <div className="divider"></div> 
                    <li>
                        <NavLink to='/'>
                        <FaHome></FaHome>
                         HOME
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/menu'>
                        <MdRestaurantMenu />
                        Menu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/ourshop/Salad'>
                        <GiDiscGolfBag/>
                       SHOP
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact'>
                        <IoMail />
                       Contact
                        </NavLink>
                    </li>
                </ul>

            </div>

            {/* dashboard content */}
            <div className="flex-1 p-4">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;