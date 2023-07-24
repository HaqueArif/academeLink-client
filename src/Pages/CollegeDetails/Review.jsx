import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";


const Review = ({ reviews, _id }) => {
    console.log(reviews);
    const { register, handleSubmit, reset } = useForm();
    const [newReview, setNewReview] = useState({ username: '', rating: '', reviewText: '' });

    const onSubmit = (data) => {
        const { username, rating, reviewText } = data;
        setNewReview({ username, rating, reviewText });

        fetch('https://academe-link-server-site.vercel.app/colleges', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newReview)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.insertedId) {
                Swal.fire({
                    title: 'Success!',
                    text: 'New Toy has been added',
                    icon: 'success',
                    confirmButtonText: 'Done'
                })
            }
        })

        // reset();
      };
      console.log(newReview);
    
    return (
        <div className="mt-20">
            <h2 className="text-3xl text-start font-semibold  mb-10"><span className="border-b-8  pb-2">Reviews</span></h2>
            {
                reviews.map((review, i) => (<div key={i}>
                    <h2>{review.username}</h2>
                    <p>{review.rating}</p>
                    <p>{review.reviewText}</p>
                </div>))
            }
            <div className="my-5">
                <p className="text-xl font-semibold">Give your Review</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="my-3">
                        <input type="text" {...register('username')} placeholder="Your Name" />
                    </div>
                    <div className="my-3">
                        <input type="text" {...register('rating')} placeholder="Rating (1-5)" />
                    </div>
                    <div className="my-3">
                        <textarea {...register('reviewText')} placeholder="Your Review" rows="4" />
                    </div>
                    <button type="submit">Submit Review</button>
                </form>
            </div>
        </div>

    );
};

export default Review;