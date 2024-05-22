import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Routes/AuthProvider";
import Swal from 'sweetalert2'

const SignUp = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate()
    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                // const loggedUser = result.user;
                console.log(result)
                updateUserProfile(data.name, data.photoURL)
                .then(() =>{
                    console.log('user profile info update')
                    reset();
                    Swal.fire({
                        title: "Successfully Login",
                        showClass: {
                          popup: `
                            animate__animated
                            animate__fadeInUp
                            animate__faster
                          `
                        },
                        hideClass: {
                          popup: `
                            animate__animated
                            animate__fadeOutDown
                            animate__faster
                          `
                        }
                      });
                      navigate('/');
                })
                .catch(error => console.log(error))
            })
        
    }
    return (
        <div>
            <Helmet>
                <title>Bisto Boss || Login</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign UP now!</h1>

                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" {...register("name", { required: true })} name="name" className="input input-bordered" />
                                {errors.name && <span className="text-red-400">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" {...register("email")} name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" placeholder="Photo Url"  {...register("photoURL",{required: true})} className="input input-bordered"  />
                                {errors.photoURL?.type === 'required' && <span>photo url must be</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" {...register("password", { required: true, minLength: 6, maxLength: 20, pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ })} name="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <span>Password is required</span>}
                                {errors.password?.type === 'minLength' && <span>pass must be six character</span>}
                                {errors.password?.type === 'maxLength' && <span>pass must be less than 20 character</span>}
                                {errors.password?.type === 'pattern' && <span>at least one upper and lower and special and digit </span>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign Up</button>
                            </div>
                        </form>
                        <p>already Sign Up? <Link to='/login'>LogIn</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;