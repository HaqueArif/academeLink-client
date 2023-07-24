import { useLoaderData } from "react-router-dom";
import Sports from "./Sports";
import Research from "./Research";
import Payment from "./Payment";
import Review from "./Review";


const CollegeDetails = () => {

    const collegeInfo = useLoaderData();
    const {_id, admissionDate, collegeName, collegeImage, events, rating, researchHistory, reviews, sports, } = collegeInfo
    console.log(collegeInfo);

    return (
        <div className="xl:px-40 lg:px-20 md:px-5 mt-20 px-3 mx-auto">
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={collegeImage} alt="college photo" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{collegeName}</h2>
                    <div>
                        <p className="mt-10 mb-2"><span className="font-bold ">College Rating:</span> {rating}</p>
                        <p>The Admission will start on {admissionDate.start} and the last date of admission is {admissionDate.end}</p>
                    </div>
                </div>
            </div>
            <Review reviews={reviews} _id={_id}></Review>
            <Payment></Payment>
            <div className="mt-20">
                <h2 className="text-3xl text-start font-semibold mb-10"><span className="border-b-8  pb-2">College Events</span></h2>
                <div className="">
                {
                    events.map((event, i)=> <div key={i} className="mb-5"> 

                        <h2 className="font-bold">{event.eventName}</h2>
                        <p><span className="font-bold">Location:</span> {event.location}</p>
                        <p><span className="font-bold">Description:</span> {event.description}</p>

                    </div> )
                }
                </div>
            </div>
            <div>
                <Sports sports={sports}></Sports>
                <Research researchHistory={researchHistory}></Research>
            </div>
        </div>
    );
};

export default CollegeDetails;