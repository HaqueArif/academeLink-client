import { Link } from 'react-router-dom';
import banner from '../../../assets/Hero/hero.png'
import model from '../../../assets/Hero/heroModel.png'

const Hero = () => {
    return (
        <div className='xl:px-40 lg:px-20 md:px-5 px-3 mx-auto mb-40'>
            <div
                className="grid md:grid-cols-2 gap-y-2 bg-center bg-cover h-auto shadow-lg rounded-3xl pt-24 sm:pt-28 md:px-10"
                style={{ backgroundImage: `url(${banner})` }}
            >
                <div className='flex items-center'>
                    <div>
                        <div>
                            <h1 className='text-4xl sm:text-5xl font-extrabold text-purple-800'>WELCOME TO</h1>
                            <p className='mt-2 text-4xl sm:text-5xl font-extrabold text-purple-800'>ACADEMELINK</p>
                            <p className='text-lg mt-1 mb-20 uppercase'>Open now <span className='text-purple-800'>for registration</span></p>
                        </div>
                        <Link to="/admission" className='px-5 py-3 hover:rounded-3xl duration-300 bg-purple-800 text-white'>Admission Now</Link>
                    </div>
                        
                </div>
                <div className='flex items-end justify-end'>
                    <img className='w-3/6 md:w-4/6' src={model} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;