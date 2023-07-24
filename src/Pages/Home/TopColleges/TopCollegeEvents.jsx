import React from 'react';

const TopCollegeEvents = ({ events }) => {
    console.log(events);
    return (
        <div className="mt-5">
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title">
                    <h2 className="font-bold"><span>College Events</span></h2>
                </div>
                <div className="collapse-content">
                    <div className="">
                        {
                            events.map((event, i) => <div key={i} className="mb-5">

                                <h2 className="font-bold">{event.eventName}</h2>
                                <p className='text-justify'><span className="font-bold">Location:</span> {event.location}</p>
                                <p className='text-justify'><span className="font-bold">Description:</span> {event.description}</p>

                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopCollegeEvents;