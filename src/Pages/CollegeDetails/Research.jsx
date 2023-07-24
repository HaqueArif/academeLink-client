

const Research = ({ researchHistory }) => {

    console.log(researchHistory);

    return (
        <div className="mt-20">
            <h2 className="text-3xl text-start font-semibold mb-10"><span className="border-b-8  pb-2">Research</span></h2>
            {researchHistory.map((section, index) => (
                <div key={index}>
                    {section.universityHistory && <p><span className="font-bold">University History: </span>{section.universityHistory}</p>}
                    {section.academicAchievements && <p><span className="font-bold">Academic Achievements: </span>{section.academicAchievements}</p>}
                    {section.campusFacilities && <p><span className="font-bold">Campus Facilities: </span>{section.campusFacilities}</p>}
                </div>
            ))}
        </div>
    );
};

export default Research;