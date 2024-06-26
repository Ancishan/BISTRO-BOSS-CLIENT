import { RiDeleteBin5Fill } from "react-icons/ri";
import SectionTitle from "../../Component/SectionTitle/SectionTitle";
import { FaPencil } from "react-icons/fa6";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import UseMenu from "../../Hooks/UseMenu";
import { Link } from "react-router-dom";


const MangesITem = () => {
    const [menu, ,refetch] = UseMenu();
    const axiosSecure = useAxiosSecure();
    const heandleDeleteITem = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`);
                // console.log(res.data);
                if (res.data.deletedCount > 0) {
                    // refetch to update the ui
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${item.name} has been deleted`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }

               
            }
        });

    }
    return (
        <div>
            <SectionTitle heading="Manages All Item" subHeading='Hurry up' ></SectionTitle>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            menu.map((item, index) => <tr key={item._id}>
                                <td>

                                    {index + 1}

                                </td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item?.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p>{item?.name}</p>
                                </td>
                                <td>${item?.price}</td>
                                <td>
                                    <Link to={`/dashboard/updateItem/${item._id}`}><button className="btn text-xl text-orange-600"><FaPencil /></button></Link>
                                </td>
                                <td>
                                    <button
                                        onClick={() => heandleDeleteITem(item)}
                                        className="btn text-xl text-orange-600"><RiDeleteBin5Fill /></button>
                                </td>
                            </tr>)
                        }

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MangesITem;