import React from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';

export default function ViewJobs() {
    const [data, setData] = React.useState([]);
    const [searchJob, setSearch] = React.useState();
    const [companyname, setCompanyName] = React.useState();
    const [job, setJob] = React.useState([]);
    const [jobs, setJobs] = React.useState([]);
    const history = useHistory();
    React.useEffect(() => {
        getData();
    }, [])

    const getData = async() => {
        try {
            const res = await axios.get("/job/viewJobs");
            // console.log(res)
            setData(res.data);
        } catch (error) {
            
        }
    }

    const search = async(e) => {
      e.preventDefault();
      console.log(searchJob);
      try {
            const res = await axios.post("/job/searchbylocation", {location: searchJob});
            setJob(res.data);
        } catch (error) {
            
        }
    } 

    const filterDate = async(e) => {
      e.preventDefault();
      try {
            const res = await axios.get("/job/searchbyDate");
            console.log(res)
            setData(res.data);
        } catch (error) {
            
        }
    }
   return (
     <div>
       <form action="" onSubmit={search}>
         <div
           className="mb-3"
         >
           <input
             type="text"
             className="form-control w-50 mt-3 mb-3"
             placeholder="Search By Location or Company Name"
             aria-label="Recipient's username"
             aria-describedby="button-addon2"
             onChange={(e) => setSearch(e.target.value)}
           />
           <button
             className="btn btn-outline-success btn-sm"
             type="submit"
             id="button-addon2"
             style={{marginLeft: 410}}
           >
             Search
           </button>
         </div>
       </form>
       <div className="row">
         <form action="" onSubmit={filterDate}>
         </form>
       </div>
       <div className="row">
         {searchJob
           ? job.map((job) => (
               <div className="col-5 p-3 border m-3">
                 <div className="d-flex  align-items-center">
                   <img
                     src="react.png"
                     alt=""
                     width={30}
                     height={30}
                     style={{ marginRight: 10 }}
                   />
                   <p className="pt-3">{job.title}</p>
                 </div>
                 <p>{job.description}</p>
                 <p>Location: {job.location}</p>
                 <p>Experience Required: {job.experience}</p>
                 <button
                   className="btn btn-secondary"
                   onClick={() => {
                     history.push("/upload");
                   }}
                 >
                   Apply Now
                 </button>
               </div>
             ))
           : data.map((job) => (
               <div className="col-5 p-3 border m-3">
                 <div className="d-flex  align-items-center">
                   <img
                     src="react.png"
                     alt=""
                     width={30}
                     height={30}
                     style={{ marginRight: 10 }}
                   />
                   <p className="pt-3">{job.title}</p>
                 </div>
                 <p>{job.description}</p>
                 <p>Location: {job.location}</p>
                 <p>Experience Required: {job.experience}</p>
                 <button
                   className="btn btn-secondary"
                   onClick={() => {
                     history.push("/upload");
                   }}
                 >
                   Apply Now
                 </button>
               </div>
             ))}
       </div>
     </div>
   );
}
