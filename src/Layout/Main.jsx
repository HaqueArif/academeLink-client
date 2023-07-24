import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";
import Footer from "../Pages/Footer/Footer";


const Main = () => {
    return (
        <div>
            <Navbar />
            <div className="min-h-screen">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;