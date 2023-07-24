import { useState } from "react";


const TopCollegeSports = ({ sports }) => {
    const [items, setItems] = useState(sports);

    const filterItem = (ci) => {
        const updatedItems = sports.filter((sport) => {
            return sport.sportName === ci;
        })
        setItems(updatedItems);
    }

    return (
        <div>

            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title">
                    <h2 className="text-2xl text-start font-bold mb-10"><span>Sports</span></h2>
                </div>
                <div className="collapse-content">
                    <div>
                        <button data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000" onClick={() => setItems(sports)} className=' shadow-md  px-3 py-2 rounded-2xl font-semibold'>All</button>
                        <button data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000" onClick={() => filterItem('Football')} className=' shadow-md  px-3 py-2 rounded-2xl font-semibold mx-3'>Football</button>
                        <button data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000" onClick={() => filterItem('Basketball')} className=' shadow-md  px-3 py-2 rounded-2xl font-semibold'>Basketball</button>
                        <button data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000" onClick={() => filterItem('Swimming')} className=' shadow-md  px-3 py-2 rounded-2xl font-semibold'>Swimming</button>
                    </div>
                    <div className='my-5 ' >
                        {
                            items.map((sport, i) => <div key={i}>
                                <h2 className="font-bold">{sport.sportName}</h2>
                                <p><span className="font-bold">Ratings: </span>{sport.rating}</p>
                                <p className="text-justify"><span className="font-bold">Details: </span>{sport.details}</p>
                            </div>)
                        }
                    </div>
                </div>
            </div>



        </div>
    );
};

export default TopCollegeSports;