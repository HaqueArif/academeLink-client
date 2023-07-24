import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Profile = () => {

    const { user } = useContext(AuthContext);

    console.log(user);

    const [colleges, setColleges] = useState([])
    console.log(colleges);

    useEffect(() => {
        if (user && user.email) {
          const url = `https://academe-link-server-site.vercel.app/myCollege?email=${user.email}`;
          fetch(url)
            .then((res) => res.json())
            .then((data) => {
              setColleges(data);
            });
        }
      }, [user]);

    return (
        <div className="xl:px-40 lg:px-20 md:px-5 px-3 my-20">
            <h2 className="text-3xl text-start font-semibold  mb-10"><span className="border-b-8  pb-2">Profile</span></h2>
            <div className="flex gap-5 flex-wrap">
            
                {
                    colleges.map(college => <div key={college._id} className="flex flex-wrap gap-5 items-end ">
                        <img className=" w-28 h-28  md:w-60 md:h-60 rounded-full" src={college.photoUrl} alt="" />
                        <div>
                            <h1 className="">{college.name}</h1>
                            <h1>Date of birth: {college.dob}</h1>
                            <h1>Email: {college.email}</h1>
                            <h1>University: {college.collegeName}</h1>
                            <h1>Subject: {college.subject}</h1>
                        </div>
                    </div>)
                }

                <div className="py-10">


                </div>
            </div>

        </div>
    );
};

export default Profile;