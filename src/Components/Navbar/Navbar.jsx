import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className="flex justify-center items-center gap-5 text-xl p-5">
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/jobs'}>Jobs</NavLink>
                <NavLink to={'/applied'}>AppliedJobs</NavLink>
            </nav>
        </div>
    );
};

export default Navbar;