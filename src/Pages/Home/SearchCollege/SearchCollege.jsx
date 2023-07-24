import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const SearchCollege = () => {

    const [colleges, setColleges] = useState([])
    const [searchCollege, setSearchCollege] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
        fetch('https://academe-link-server-site.vercel.app/colleges')
            .then(res => res.json())
            .then(data => {
                setColleges(data);
            });
    }, [])

    const handleSearch = () => {
        const filteredColleges = colleges.filter((college) =>
            college.collegeName.toLowerCase().includes(searchCollege.toLowerCase())
        );
        setSearchResults(filteredColleges);
        setShowMessage()
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSearch(searchResults.length === 0 );
        }
    };

    console.log(colleges);
    return (
        <div className="xl:px-40 lg:px-20 md:px-5 px-3">
            <div className="text-center mb-5">
                <input type="text" value={searchCollege} placeholder="Search for a college..." className="input input-bordered input-success w-full max-w-xs" onChange={(e) => setSearchCollege(e.target.value)} onKeyPress={handleKeyPress} />
                <button className="btn btn-primary ms-2" onClick={handleSearch}>Search</button>
            </div>

            <div className="grid md:grid-cols-2 gap-5 mb-5">
                {searchCollege !== "" &&
                    searchResults.map(college => <div key={college._id}>
                        <div className="card card-compact  bg-base-100 shadow-md">
                            <figure><img src={college.collegeImage} alt="college photo" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{college.collegeName}</h2>
                                <p><span className="font-bold">Admission:</span> <span>Start: {college.admissionDate.start}</span><span> - End: {college.admissionDate.end}</span></p>
                                <div className="card-actions justify-end">
                                    <Link to={`/collegeDetails/${college._id}`} className="px-5 py-3 rounded hover:rounded-3xl duration-300 bg-purple-800 text-white">Details</Link>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            {showMessage && <p>No results found.</p>}
        </div>
    );
};

export default SearchCollege;