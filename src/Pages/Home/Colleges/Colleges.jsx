import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Colleges = () => {

    const [colleges, setColleges] = useState([])


    useEffect(() => {
        fetch('https://academe-link-server-site.vercel.app/colleges')
            .then(res => res.json())
            .then(data => {
                setColleges(data);
            });
    }, [])

    return (
        <div className="xl:px-40 lg:px-20 md:px-5 px-3 mx-auto my-20">
            <div className="grid md:grid-cols-2 gap-5">
                {
                    colleges.map(college => <div key={college._id}>
                        <div className="card card-compact  bg-base-100 shadow-xl">
                            <figure><img src={college.collegeImage} alt="college photo" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{college.collegeName}</h2>
                                <p><span className="font-bold">Admission:</span> <span>Start: {college.admissionDate.start}</span><span> - End: {college.admissionDate.end}</span></p>
                                <p><span className="font-bold">Rating: </span>{college.rating}</p>
                                <p><span className="font-bold">Total Research: </span>{college.researchHistory.length}</p>

                                <div className="card-actions justify-end">
                                    <Link className="px-5 py-3 rounded hover:rounded-3xl duration-300 bg-purple-800 text-white" to={`/collegeDetails/${college._id}`}>Details</Link>
                                </div>
                            </div>
                        </div>

                    </div>)
                }
            </div>
        </div>
    );
};

export default Colleges;