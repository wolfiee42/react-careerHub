import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredItems } from "../../LocalStorage/LocalStorage";
import JobApplied from "../jobApplied/JobApplied";

const AppliedJobs = () => {
    const data = useLoaderData();
    console.log(data);
    const [dataApplied, setAppliedData] = useState([]);
    const [displayDataApplied, setDisplaydataApplied] = useState([])

    useEffect(() => {
        const savedData = getStoredItems();
        const appliedData = data.filter(datum => savedData.includes(datum.id));
        setAppliedData(appliedData);
        setDisplaydataApplied(appliedData);
    }, [data])

    const handleFilter = (filter) => {
        if (filter === 'all') {
            setDisplaydataApplied(dataApplied);
        } else if (filter === 'Remote') {
            const remoteData = dataApplied.filter(job => job.remote_or_onsite === "Remote");
            setDisplaydataApplied(remoteData);
        } else if (filter === 'Onsite') {
            const onsiteData = dataApplied.filter(job => job.remote_or_onsite === "Onsite");
            setDisplaydataApplied(onsiteData);
        }
    }

    return (
        <div>
            <h2 className="text-xl text-center">Welcome from applied job section</h2>
            <div className="flex justify-around items-center">
                <p className=" p-5 ml-5 text-xl">applied jobs : {dataApplied.length}</p>
                <div className="dropdown dropdown-bottom">
                    <label tabIndex={0} className="btn m-1">Filter</label>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li onClick={()=> handleFilter("all")}><a>All</a></li>
                        <li onClick={()=> handleFilter("Remote")}><a>Remote</a></li>
                        <li onClick={()=> handleFilter("Onsite")}><a>Onsite</a></li>
                    </ul>
                </div>
            </div>
            <div>
                {
                    displayDataApplied.map(data => <JobApplied data={data} remote_or_onsite={data.remote_or_onsite} key={data.id}></JobApplied>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;