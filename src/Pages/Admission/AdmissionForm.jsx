import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";

const AdmissionForm = () => {
    const collegeInfo = useLoaderData();
    const { _id, collegeName, collegeImage, events, rating, researchHistory, reviews, sports, } = collegeInfo

    const { user } = useContext(AuthContext);
    const userEmail = user && user.email
    console.log(userEmail);

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {
            collegeName: collegeName,
            email: userEmail,
            college_id: _id,
            collegeImage:collegeImage,
            events: events,
            rating: rating,
            researchHistory: researchHistory,
            reviews: reviews,
            sports: sports,

        }
    });

    const onSubmit = selectedCollege => {
        console.log(selectedCollege);
        fetch('https://academe-link-server-site.vercel.app/myCollege', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(selectedCollege)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Admission form has been submitted',
                        icon: 'success',
                        confirmButtonText: 'Done'
                    })
                }
            })
        reset();
    }

    return (
        <div>
            <div className="min-h-screen p-5 md:p-5 flex justify-center items-center">
                <div className="card flex-shrink-0 w-full max-w-2xl mb-20">
                    <div className="md:w-2xl mx-auto my-10 text-center font-bold">
                        <h2 className='text-3xl'>Admission Form </h2>
                        <p>for</p>
                        <p className="text-2xl bg-neutral/10 px-5 py-2">{collegeName}</p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="formLogin w-full shadow-xl bg-neutral py-5 px-3 md:px-20 md:py-10 hover:scale-105 hover:rounded-3xl duration-500">
                        <div className="md:flex gap-3">
                            <div className="w-full">
                                <label className="label">
                                    <span className="text-white text-xl font-bold">Candidate Name</span>
                                </label>
                                {errors.name && <p className="text-white ps-5 bg-[#ff5a0080]">{errors.name.message}</p>}
                                <input type="text" {...register('name', { required: 'Name is required.' })} placeholder="name" className="w-full px-5 py-3" />
                            </div>

                            <div className="w-full">
                                <label className="label">
                                    <span className="text-white text-xl font-bold">Candidate Email</span>
                                </label>
                                {errors.email && <p className="text-white ps-5 bg-[#ff5a0080]">{errors.email.message}</p>}
                                <input type="email" name="email" placeholder={user && user.email} className="w-full px-5 py-3"
                                    {...register('email')} disabled
                                />
                            </div>
                        </div>

                        <div className="md:flex gap-3">
                            <div className="w-full">
                                <label className="label">
                                    <span className="text-white text-xl font-bold">Subject</span>
                                </label>
                                {errors.name && <p className="text-white ps-5 bg-[#ff5a0080]">{errors.name.message}</p>}
                                <select className="w-full px-5 py-3" name="subject" {...register("subject")}>
                                    <option disabled>Select your subject</option>
                                    <option value="Computer Science and Engineering">Computer Science and Engineering</option>
                                    <option value="Civil Engineering">Civil Engineering</option>
                                    <option value="Architecture">Architecture</option>
                                    <option value="Business Administration">Business Administration</option>
                                    <option value="Economics">Economics</option>
                                    <option value="English Literature">English Literature</option>
                                    <option value="Mathematics">Mathematics</option>
                                    <option value="Islamic Studies">Islamic Studies</option>
                                    <option value="Psychology">Psychology</option>
                                </select>
                            </div>
                        </div>

                        <div className="md:flex gap-3">
                            <div className="w-full">
                                <label className="label">
                                    <span className="text-white text-xl font-bold">Current Address</span>
                                </label>
                                {errors.name && <p className="text-white ps-5 bg-[#ff5a0080]">{errors.name.message}</p>}
                                <input type="text" name="address" placeholder="Current Address" className="w-full px-5 py-3"
                                    {...register('address', { required: 'Current Address is required.' })}
                                />
                            </div>
                        </div>

                        <div className="md:flex gap-3">
                            <div className="w-full">
                                <label className="label">
                                    <span className="text-white text-xl font-bold">Selected College</span>
                                </label>
                                <input type="text" name="collegeName" placeholder={collegeName}  className="w-full px-5 py-3"
                                    {...register('collegeName',)} disabled
                                />
                            </div>
                        </div>

                        <div className="md:flex gap-3">
                            <div className="w-full">
                                <label className="label">
                                    <span className="text-white text-xl font-bold">Phone number</span>
                                </label>
                                <input type="number" name="phone" placeholder="Phone number" className="w-full px-5 py-3"
                                    {...register('phone', { required: 'Phone number is required.' })}
                                />
                            </div>

                            <div className="w-full">
                                <label className="label">
                                    <span className="text-white text-xl font-bold">
                                        Date of birth
                                    </span>
                                </label>
                                <input type="date" name="dob" placeholder="Phone number" className="w-full px-5 py-3"
                                    {...register('dob', { required: 'Date of birth is required.' })}
                                />
                            </div>
                        </div>
                        <div className="">
                            <label className="label">
                                <span className="text-white text-xl font-bold">
                                    Photo URL
                                </span>
                            </label>
                            {errors.photoUrl && <p className="text-white ps-5 bg-[#ff5a0080]">photo Url is required.</p>}
                            <input type="text" {...register('photoUrl', { required: true })} placeholder="Photo URL" className="w-full px-5 py-3" />
                        </div>




                        <div className=" loginHover mt-6">
                            <input type='submit' className="btn font-bold hover:bg-[#3870E8] hover:scale-105 duration-300  border-none bg-[#3870E8] text-[#fff] text-2xl mr-5 px-7 py-1" value='Apply' />
                        </div>
                    </form>


                </div>
            </div>
        </div>
    );
};

export default AdmissionForm;