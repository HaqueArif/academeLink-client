import { useState } from "react";


const Sports = ({ sports }) => {


    const [items, setItems] = useState(sports);

    const filterItem = (ci) => {
        const updatedItems = sports.filter((sport) => {
            return sport.sportName === ci;
        })
        setItems(updatedItems);
    }

    return (
        <div className="mt-20">
            <h2 className="text-3xl text-start font-bold mb-10"><span className="border-b-8 pb-2">Sports</span></h2>
            <p data-aos="fade-left" data-aos-duration="2000" className='mb-3'>Check out my projects section! I've worked on diverse React front-end projects, showcasing my skills in creating interactive interfaces, optimizing performance, and more.</p>
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
            <div className='my-5 grid md:grid-cols-2 gap-5' >
                {
                    items.map((sport, i) => <div key={i}>
                        <h2 className="font-bold">{sport.sportName}</h2>
                        <p><span className="font-bold">Ratings: </span>{sport.rating}</p>
                        <p><span className="font-bold">Details: </span>{sport.details}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Sports;