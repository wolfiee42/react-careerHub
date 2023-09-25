import { Link, useLoaderData, useParams } from "react-router-dom";
import Swal from 'sweetalert2'


const JobDetails = () => {
    const { id } = useParams()
    const idInt = parseInt(id)
    const data = useLoaderData();
    const detail = data.find(datum => datum.id === idInt)
    console.log(detail);
    const { job_description, job_responsibility, job_type, location, experiences, educational_requirements } = detail;


    const handleApplyBtn = () => {
        Swal.fire(
            'Congratulation!You Applied Successfully.',
          )
    }
    return (
        <div>
            <h2>Hello from job details section: {id}</h2>
            <div>
                <h2 className=" mt-3"><span className="text-lg font-semibold">Job Description : </span>{job_description}</h2>
                <h2 className=" mt-3"><span className="text-lg font-semibold">Job Responsibilities : </span>{job_responsibility}</h2>
                <h2 className=" mt-3"><span className="text-lg font-semibold">Experience : </span>{experiences}</h2>
                <h2 className=" mt-3"><span className="text-lg font-semibold">Educational requierments : </span>{educational_requirements}</h2>
                <div className="flex justify-start items-center gap-6">
                    <h2 className=" mt-3"><span className="text-lg font-semibold">Job Type : </span>{job_type}</h2>
                    <h2 className=" mt-3"><span className="text-lg font-semibold">Location : </span>{location}</h2>
                </div>
                <Link>
                    <button onClick={handleApplyBtn} className="border hover:border-purple-700 font-medium p-2 rounded hover:text-purple-700 hover:bg-white bg-purple-700 text-white mt-5">Apply Now</button>
                </Link>
            </div>
        </div>
    );
};

export default JobDetails;