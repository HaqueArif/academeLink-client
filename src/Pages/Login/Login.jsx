
import { Link, useLocation, useNavigate } from "react-router-dom";
import googleLogos from '../../assets/media/google.png'
import loadingGif from '../../assets/loading.gif'
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext, useState } from "react";


const Login = () => {
    const [error, setError] = useState(null);

    const { loading, signIn, SignInWithGoogle } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/"

    if(loading){
        return <div className='min-h-screen flex justify-center items-center'>
            <img src={loadingGif} alt="" />
        </div>
    }

    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        form.reset();
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true });
            })

            .catch(error => {
                console.log(error);
                if (error.code === 'auth/user-not-found') {
                    setError('Email address not found. Please check and try again.');
                } else if (error.code === 'auth/wrong-password') {
                    setError('Incorrect password.');
                } else {
                    setError('Something went wrong. Please try again later.');
                }
            });
    }
    const handleGoogleSignIn = () => {
        SignInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log('errorrrr', error.message);
            })
    }

    return (
        <div className="mb-60 mt-20 px-2">
            <h2 className="text-3xl md:text-5xl text-center text-slate-500 font-semibold mt-10 mb-10">Login</h2>
            <form onSubmit={handleSignIn}>
                <div className='max-w-lg shadow-2xl bg-base-100 rounded-2xl mx-auto pt-2 pb-10 px-2'>
                    <div className=' rounded-2xl px-5 md:px-8 py-8'>
                        <div className='flex flex-col mb-3'>
                            <label htmlFor="email">Email</label>
                            <input type="email" name='email' placeholder='Your Email' className='border bg-transparent border-gray-500 rounded-lg py-3 px-3' required />
                        </div>

                        <div className='flex flex-col'>
                            <label htmlFor="password">Password</label>
                            <input type="password" name='password' placeholder='Your Password' className='border bg-transparent  border-gray-500 rounded-lg py-3 px-3' required />
                            <span className='mt-2'>Forget password?</span>
                        </div>

                        <p className='mt-2 text-sm text-red-700'>{error}</p>
                    </div>

                    <div className='mt-5 px-6'>
                        <button className=' btn w-full bg-neutral text-white hover:bg-accent font-bold border-none'>Login</button>
                    </div>

                    <div className='text-center mt-2'>
                        <Link to="/register" className='hover:btn-link'>New to ACADEME ? <span className="link">Register</span></Link>
                    </div>

                    <div>
                        <p className='text-center mt-5'>Or Login With</p>
                        <div className='flex gap-3 mt-2 justify-center'>
                            <Link onClick={handleGoogleSignIn}><img src={googleLogos} alt="" className='w-8' /></Link>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;