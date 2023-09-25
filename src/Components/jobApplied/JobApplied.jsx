const JobApplied = ({data}) => {
    const {logo, job_title, company_name} = data
    return (
        <div className="border p-5 m-5">
            <div>
                <img className="w-40" src={logo} alt="" />
            </div>
            <h2 className="text-xl font-semibold">{job_title}</h2>
            <h2 className="text-lg font-bold">{company_name}</h2>
        </div>
    );
};

export default JobApplied;