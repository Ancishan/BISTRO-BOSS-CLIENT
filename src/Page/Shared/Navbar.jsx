import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Routes/AuthProvider";
import { BsFillCartPlusFill } from "react-icons/bs";
import useCart from "../../Hooks/useCart";
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }
    const NavOptions = <>
        <Link to='/' className="text-yellow-700 pr-4 font-bold text-xl">HOME</Link>
        <Link to='/menu' className="text-yellow-700 pr-4 font-bold text-xl">MENU</Link>
        <Link to='/contact' className="text-yellow-700 pr-4 font-bold text-xl">CONTACT US</Link>
        <Link to='/dashboard' className="text-yellow-700 pr-4 font-bold text-xl">DASHBOARD</Link>
        <Link to='/ourshop/Salad' className="text-yellow-700 pr-4 font-bold text-xl">OUR SHOP</Link>
        <li>
            <Link to='/' className="">
                <button className="btn btn-ghost -p-4 -mt-4 text-2xl">
                <BsFillCartPlusFill />
                    <div className="">+{cart.length}</div>
                </button>
            </Link>
        </li>
        {
            user ?
                <div className="flex justify-center">

                    <Link onClick={handleLogOut} className="text-yellow-700 pr-4 font-bold text-xl">LogOut</Link>
                    <span className="text-yellow-700 pr-4 font-bold text-xl">{user?.displayName}</span>
                    <img className="rounded-full w-12 h-12" src={user?.photoURL} alt="" />
                </div>
                :
                <Link to='/login' className="text-yellow-700 pr-4 font-bold text-xl">LOGIN</Link>
        }
    </>

    return (
        <div className="navbar bg-opacity-30 text-white max-w-screen-xl mx-auto bg-black fixed z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 opacity-40 shadow  rounded-box w-32">
                        {NavOptions}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Bistro</a>
            </div>
            <div className="navbar-center hidden lg:flex pl-4">
                <ul className="menu menu-horizontal px-6">
                    {NavOptions}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;