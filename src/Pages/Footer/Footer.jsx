import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-[#1d2023;] text-neutral-400  mx-auto mt-20'>
            <div className='flex gap-3 md:gap-5 flex-wrap justify-between py-10 bg-[#22272b] xl:px-40 lg:px-20 md:px-5 px-3'>
                <span>About Us</span>
                <span>Guides</span>
                <span>News</span>
                <span>Event & Webinars</span>
                <span>Careers</span>
                <span>Contact</span>
            </div>
            <div className='flex flex-wrap gap-2 py-3 justify-between xl:px-40 lg:px-20 md:px-5 px-3'>
                <p>@AcademeLink 2023 | <span className='text-white'>Privacy Policy | Term of Use</span></p>
                <div className='flex items-center text-white'>
                    Follow us on : <span className='p-2 bg-neutral-500 mx-2'><FaTwitter/></span> <span className='p-2 bg-neutral-500 mx-2'><FaFacebook/></span> <span className='p-2 bg-neutral-500 mx-2'><FaInstagram/></span> <span className='p-2 bg-neutral-500 mx-2'><FaLinkedin/></span> <span className='p-2 bg-neutral-500 mx-2'><FaYoutube/></span>
                </div>
            </div>
        </div>
    );
};

export default Footer;