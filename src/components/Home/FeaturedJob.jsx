import { useEffect, useState } from "react";
import Jobs from "./Jobs";

const FeaturedJob = () => {
    const [jobs, setJobs] = useState([]);
    const [datalength, setDatalength] = useState(4);

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
                jobs.slice(0, datalength).map((job)=><Jobs key={job.id} job={job}></Jobs>)
            }
        </div>
        <div className={`${datalength === jobs.length && 'hidden'} card-actions justify-center`}>
            <button onClick={()=>setDatalength(jobs.length)} className="btn my-5 bg-orange-300 hover:bg-orange-500 border-orange-800 text-black">
              Show All
            </button>
          </div>
        </div>
    );
};

export default FeaturedJob;