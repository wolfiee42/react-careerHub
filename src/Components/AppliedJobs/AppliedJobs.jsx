import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredItems } from "../../LocalStorage/LocalStorage";
import JobApplied from "../jobApplied/JobApplied";

const AppliedJobs = () => {
    const data = useLoaderData();
    const [dataApplied, setAppliedData] = useState([]);
    useEffect(() => {
        const savedData = getStoredItems();
        const appliedData = data.filter(datum => savedData.includes(datum.id));
        setAppliedData(appliedData)
    }, [])
    console.log(dataApplied);
    return (
        <div>
            <h2 className="text-xl text-center">Welcome from applied job section</h2>
            <p className=" p-5 ml-5 text-xl">applied jobs : {dataApplied.length}</p>
            <div>
                {
                    dataApplied.map(data => <JobApplied data={data} key={data.id}></JobApplied>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;