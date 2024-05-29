import UseAuth from "../../../Hooks/UseAuth";


const UserHome = () => {
    const {user} = UseAuth();
    return (
        <div>
        <h2 className="">
        <span>Hi, WelCome</span>
        {
            user?.displayName?user.displayName : 'Back'
        }
        </h2>
    </div>
    );
};

export default UserHome;