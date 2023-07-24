import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";


const Admission = () => {

    const { user } = useContext(AuthContext);

    const [colleges, setColleges] = useState([])

    useEffect(() => {
        fetch('https://academe-link-server-site.vercel.app/colleges')
            .then(res => res.json())
            .then(data => {
                setColleges(data);
            });
    }, [])

    const handleAlert = ()=>{
        if(!user){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You have to log in first to view details',
              })
        }
    }

    return (
        <div className='xl:px-40 lg:px-20 md:px-5 px-3 mx-auto mt-20 mb-60'>
            <h2 className="text-xl md:text-3xl text-start font-semibold mb-10"><span className="border-b-8  pb-2">Select college for Admission</span></h2>
            <div className="flex flex-wrap gap-5">
                {
                    colleges.map(college => <div key={college._id}>
                        {/* <h2 className="card-title">{college.collegeName}</h2> */}
                        <Link to={`/admission/${college._id}`}><button onClick={handleAlert} className="bg-accent px-5 py-2 rounded-3xl">{college.collegeName}</button></Link>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Admission;