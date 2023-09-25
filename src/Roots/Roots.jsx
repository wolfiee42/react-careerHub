import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const Roots = () => {
    return (
        <div className="max-w-[90%] mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Roots;