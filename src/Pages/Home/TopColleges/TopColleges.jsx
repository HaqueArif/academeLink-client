import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TopCollegeEvents from "./TopCollegeEvents";
import TopCollegeSports from "./TopCollegeSports";
import TopCollegeResearch from "./TopCollegeResearch";


const TopColleges = () => {

    const [colleges, setColleges] = useState([])


    useEffect(() => {
        fetch('https://academe-link-server-site.vercel.app/colleges')
            .then(res => res.json())
            .then(data => {
                setColleges(data);
            });
    }, [])

    const sortedColleges = [...colleges].sort((a, b) => b.rating - a.rating);

    const topColleges = sortedColleges.slice(0, 3);



    return (
        <div className="xl:px-40 lg:px-20 md:px-5 px-3 mx-auto my-40">
            <h2 className="text-3xl sm:text-4xl text-start font-bold  mb-12"><span className="border-b-8 pb-2">Ranked Colleges</span></h2>
            <div className="grid md:grid-cols-3 gap-5">
                {
                    topColleges.map(college => <div key={college._id}>
                        <div className="card card-compact  bg-base-100 shadow">
                            <figure><img src={college.collegeImage} alt="college photo" /></figure>

                            <div className="card-body">
                                <h2 className="card-title">{college.collegeName}</h2>
                                <p><span className="font-bold">Admission:</span> <span>Start: {college.admissionDate.start}</span><span> - End: {college.admissionDate.end}</span></p>
                                <p><span className="font-bold">Rating: </span>{college.rating}</p>
                                <p><span className="font-bold">Total Research: </span>{college.researchHistory.length}</p>
                                <TopCollegeEvents events={college.events}></TopCollegeEvents>
                                <TopCollegeResearch researchHistory={college.researchHistory}></TopCollegeResearch>
                                <TopCollegeSports sports={college.sports}></TopCollegeSports>
                            </div>
                        </div>

                    </div>)
                }
            </div>
        </div>
    );
};

export default TopColleges;