import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../Component/SectionTitle/SectionTitle";
import { ImSpoonKnife } from "react-icons/im";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
const image_hosting_key = import.meta.env.VITE_Image_Upload_token;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
    const {name, recipe, category, price, _id} = useLoaderData();
    const {register, handleSubmit, reset} = useForm()
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const onSubmit =async(data) => {
        console.log(data)
        // image upload to imgbb and then get an url
        const imageFile= {image: data.image[0]}
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers:{
                'content-type': 'multipart/form-data'
            }
        });
        if(res.data.success){
            // now send the menu item data to the server with the image
            const menuItem ={
                name: data.name,
                category:data.category,
                price: parseFloat(data.price),
                recipe:data.recipe,
                image: res.data.data.display_url
            }
            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
            console.log(menuRes.data)
            if(menuRes.data.modifiedCount > 0){
                // show success popup
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is Updated to the menu`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
            
        }
        
        console.log(res.data);
    
        };

    return (
        <div>
            <SectionTitle heading='Update Item' subHeading='Refresh info'></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text text-lg font-bold">Recipe Name*</span>
                        </label>
                        <input
                        defaultValue={name}
                            type="text"
                            placeholder="Recipe name"
                            className="input file-input-bordered w-full "
                            {...register("name", { required: true })}
                        />
                        {/* {errors.name && <span>This field is required</span>} */}
                    </div>
                    <div className="flex gap-4 w-full">
                        <div className="form-control w-full">
                            <label className="label w-full">
                                <span className="label-text text-lg font-bold">Category*</span>
                            </label>
                            <select defaultValue={category} {...register("category", { required: true })} className="select select-bordered w-full ">
                                <option disabled value= 'default'>Select a Category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                            {/* {errors.category && <span>This field is required</span>} */}
                        </div>
                        <div className="form-control w-full mb-6">
                            <label className="label">
                                <span className="label-text text-lg font-bold">Price*</span>
                            </label>
                            <input
                            defaultValue={price}
                                type="text"
                                placeholder="Price"
                                className="input file-input-bordered w-full "
                                {...register("price", { required: true })}
                            />
                            {/* {errors.price && <span>This field is required</span>} */}
                        </div>
                    </div>
                    <div className="form-control w-full pb-6">
                        <label className="label">
                            <span className="label-text text-lg font-bold">Recipe Details*</span>
                        </label>
                        <textarea defaultValue={recipe} {...register("recipe", { required: true })} placeholder="Recipe Details" />
                        {/* {errors.recipe && <span>This field is required</span>} */}
                    </div>
                    <div>
                        <input {...register("image", { required: true })} type="file" className="file-input w-full max-w-xs" />
                        {/* {errors.image && <span>This field is required</span>} */}
                    </div>
                    <button className="my-3 text-xl flex text-white rounded-md border-orange-400 bg-orange-600 px-2 py-2">
                        <ImSpoonKnife /> Update item
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;