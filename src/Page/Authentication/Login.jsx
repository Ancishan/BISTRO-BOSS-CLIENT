import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Routes/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2'
const Login = () => {
  const captchaRef = useRef(null)
  const navigate = useNavigate();
  const location = useLocation()

  const from = location.state?.from?.pathname || '/';


  const [disabled, setDisabled] = useState(true);

  const { signIn } = useContext(AuthContext) //auth firebase login 1


  useEffect(() => {
    loadCaptchaEnginge(6);
  }, [])


  const handleLogin = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value
    const password = form.password.value;
    console.log(email, password)
    signIn(email, password) // 2nd step firebase login
      .then(result => {
        const user = result.user;
        console.log(user)
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
       navigate(from, {replace: true});
      })
  }

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false)
    }
    else {
      setDisabled(true)
    }

  }
  return (
    <div>
      <Helmet>
        <title>Bisto Boss || Login</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  < LoadCanvasTemplate />
                </label>
                <input  onBlur={handleValidateCaptcha}  type="text" ref={captchaRef} name="captcha" placeholder="Captcha" className="input input-bordered" required />
                {/* <button className='btn btn-outline btn-xs mt-2'>Validate</button> */}
              </div>
              <div className="form-control mt-6">

                <input disabled={disabled} className="btn btn-primary" type="submit" value='LogIn' />
              </div>
            </form>
            <p className='flex justify-center pb-5'><small>New Here ? <Link to='/signup'>Create an Account</Link></small></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;