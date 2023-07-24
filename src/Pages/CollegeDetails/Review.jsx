import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "./styles.css";


const Review = ({ reviews, _id }) => {
    console.log(reviews);
    const { register, handleSubmit, reset } = useForm();
    const [newReview, setNewReview] = useState({ username: '', rating: '', reviewText: '' });

    
     
    
    return (
        <div className="mt-20">
            <h2 className="text-3xl text-start font-semibold  mb-10"><span className="border-b-8  pb-2">Reviews</span></h2>
            <Swiper className="mySwiper">
                {reviews.map((review, i) => (
                    <SwiperSlide key={i}>
                        <div>
                            <h2>{review.username}</h2>
                            <p>{review.rating}</p>
                            <p>{review.reviewText}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>

    );
};

export default Review;