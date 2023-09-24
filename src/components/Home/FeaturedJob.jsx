import { useEffect, useState } from "react";
import Jobs from "./Jobs";

const FeaturedJob = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() =>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
        
    },[])
    console.log(jobs)
    return (
        <div>
            <div className="my-5">
            <h2 className="text-5xl  my-5">Featured Jobs: {jobs.length}</h2>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
        </div>
        <div className="grid grid-cols-2 gap-28 m-16">
            {
                jobs.map((job)=><Jobs key={job.id} job={job}></Jobs>)
            }
        </div>
        </div>
    );
};

export default FeaturedJob;