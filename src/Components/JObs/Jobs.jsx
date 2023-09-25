import { useLoaderData } from "react-router-dom";
import Job from "../Job/Job";

const Jobs = () => {
    const data = useLoaderData();
    return (
        <div>
            <h2  className="text-xl text-center">Featured Jobs</h2>
            <div className="grid grid-cols-2 gap-6">
                {
                    data.map(datum => <Job datum={datum} key={datum.id}></Job>)
                }
            </div>
        </div>
    );
};

export default Jobs;