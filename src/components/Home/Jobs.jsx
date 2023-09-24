import { CiLocationOn } from "react-icons/ci";
import { AiOutlineDollar } from "react-icons/ai";
const Jobs = ({ job }) => {
  const {
    logo,
    job_title,
    remote_or_onsite,
    job_type,
    company_name,
    location,
    salary,
  } = job;
  return (
    <div>
      <div className="card w-full glass">
        <figure>
          <img className="w-48 p-8" src={logo} alt="car!" />
        </figure>
        <div className="card-body justify-start">
          <h2 className="text-2xl font-bold justify-start">{job_title}</h2>
          <p>{company_name}</p>
          <div className="my-5">
            <button className="mr-5 px-5 py-2 border rounded border-orange-500 text-orange-500">
              {remote_or_onsite}
            </button>
            <button className=" px-5 py-2 border rounded border-orange-500 text-orange-500">
              {job_type}
            </button>
          </div>
          <div className="flex justify-center gap-8 my-5">
            <div className="justify-center">
              <h2 className="flex items-center gap-2">
                <CiLocationOn className="text-2xl" />
                {location}
              </h2>
            </div>
            <div className="justify-center">
              <h2 className="flex items-center gap-2">
                <AiOutlineDollar className="text-2xl" />
                {salary}
              </h2>
            </div>
          </div>
          <div className="card-actions justify-center">
            <button className="btn bg-orange-300 hover:bg-orange-500 border-orange-800 text-black">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
