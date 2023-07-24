import React from 'react';

const TopCollegeResearch = ({researchHistory}) => {
    return (
        <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title">
            <h2 className="text-2xl text-start font-semibold mb-10"><span>Research</span></h2>
            </div>
            <div className="collapse-content">
            
            {researchHistory.map((history, index) => (
                <div key={index}>
                    {history.universityHistory && <p><span className="font-bold">University History: </span>{history.universityHistory}</p>}
                    {history.academicAchievements && <p><span className="font-bold">Academic Achievements: </span>{history.academicAchievements}</p>}
                    {history.campusFacilities && <p><span className="font-bold">Campus Facilities: </span>{history.campusFacilities}</p>}
                </div>
            ))}
            </div>
        </div>
    );
};

export default TopCollegeResearch;