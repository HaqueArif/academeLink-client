import Hero from "../Hero/Hero";
import SearchCollege from "../SearchCollege/SearchCollege";
import TopColleges from "../TopColleges/TopColleges";


const Home = () => {
    return (
        <div className="min-h-screen">
            <SearchCollege></SearchCollege>
            <Hero></Hero>
            <TopColleges></TopColleges>
        </div>
    );
};

export default Home;