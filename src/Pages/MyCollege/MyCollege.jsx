import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaCheckCircle } from 'react-icons/fa';
import Research from '../CollegeDetails/Research';
import { AuthContext } from '../../Provider/AuthProvider';

const MyCollege = () => {

    const { user } = useContext(AuthContext);

    const [colleges, setColleges] = useState([])
    const url = `https://academe-link-server-site.vercel.app/myCollege?email=${user && user.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setColleges(data);
            });
    }, [url])

    console.log(colleges);

    return (
        <div className='xl:px-40 lg:px-20 md:px-5 px-3 my-20'>
            <div className='grid md:grid-cols-2 gap-5'>
                {
                    colleges.map((college, i) => (<div key={i}>
                        <div className="card card-compact  bg-base-100 shadow">
                            <figure><img src={college.collegeImage} alt="college photo" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{college.collegeName} <FaCheckCircle className='text-primary' /> </h2>
                                <p><span className='font-bold'>Candidate Name:</span> {college.name}</p>
                                <p><span className='font-bold'>Candidate Email:</span> {college.email}</p>
                                <p><span className='font-bold'>Candidate address:</span> {college.address}</p>
                                <p><span className='font-bold'>Candidate Date of birth:</span> {college.dob}</p>

                                <div className="card-actions justify-end">

                                    <Link className='text-center px-5 py-3 rounded hover:rounded-3xl duration-300 bg-purple-800 text-white w-full' to={`/collegeDetails/${college.college_id}`}>See Collage Details</Link>
                                </div>
                            </div>
                        </div>
                    </div>))
                }
            </div>

        </div>
    );
};

export default MyCollege;