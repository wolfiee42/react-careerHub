import { Link } from "react-router-dom";

const Job = ({ datum }) => {
    console.log(datum);
    const { logo, job_title, company_name, remote_or_onsite, job_type } = datum
    return (
        <div className="shadow-lg p-5">
            <div>
                <img className="w-20 m-3" src={logo} alt="" />
            </div>
            <h3 className="text-xl font-semibold m-3">{job_title}</h3>
            <p className="m-3">{company_name}</p>
            <div className="flex justify-start items-center gap-2 m-3">
                <button className="border border-purple-700 font-medium p-1 rounded text-purple-700 hover:bg-purple-700 hover:text-white duration-200	">{remote_or_onsite}</button>
                <button className="border border-purple-700 font-medium p-1 rounded text-purple-700  hover:bg-purple-700 hover:text-white">{job_type}</button>
            </div>
            <Link>
                <button className="border hover:border-purple-700 font-medium p-2 rounded hover:text-purple-700 hover:bg-white bg-purple-700 text-white mb-3 ml-3">View Details</button>
            </Link>

        </div>
    );
};

export default Job;