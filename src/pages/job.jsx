// import { useEffect } from "react";
// import { BarLoader } from "react-spinners";
// import MDEditor from "@uiw/react-md-editor";
// import { useParams } from "react-router-dom";
// import { useUser } from "@clerk/clerk-react";
// import { Briefcase, DoorClosed, DoorOpen, MapPinIcon } from "lucide-react";

// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { ApplyJobDrawer } from "@/components/apply-job";
// import ApplicationCard from "@/components/application-card";

// import useFetch from "@/hooks/use-fetch";
// import { getSingleJob, updateHiringStatus } from "@/api/apiJobs";

// const JobPage = () => {
//   const { id } = useParams();
//   const { isLoaded, user } = useUser();

//   const {
//     loading: loadingJob,
//     data: job,
//     fn: fnJob,
//   } = useFetch(getSingleJob, {
//     job_id: id,
//   });

//   useEffect(() => {
//     if (isLoaded) fnJob();
//   }, [isLoaded]);

//   const { loading: loadingHiringStatus, fn: fnHiringStatus } = useFetch(
//     updateHiringStatus,
//     {
//       job_id: id,
//     }
//   );

//   const handleStatusChange = (value) => {
//     const isOpen = value === "open";
//     fnHiringStatus(isOpen).then(() => fnJob());
//   };

//   if (!isLoaded || loadingJob) {
//     return <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />;
//   }

//   return (
//     <div className="flex flex-col gap-8 mt-5">
//       <div className="flex flex-col-reverse gap-6 md:flex-row justify-between items-center">
//         <h1 className="gradient-title font-extrabold pb-3 text-4xl sm:text-6xl">
//           {job?.title}
//         </h1>
//         <img src={job?.company?.logo_url} className="h-12" alt={job?.title} />
//       </div>

//       <div className="flex justify-between ">
//         <div className="flex gap-2">
//           <MapPinIcon /> {job?.location}
//         </div>
//         <div className="flex gap-2">
//           <Briefcase /> {job?.applications?.length} Applicants
//         </div>
//         <div className="flex gap-2">
//           {job?.isOpen ? (
//             <>
//               <DoorOpen /> Open
//             </>
//           ) : (
//             <>
//               <DoorClosed /> Closed
//             </>
//           )}
//         </div>
//       </div>

//       {job?.recruiter_id === user?.id && (
//         <Select onValueChange={handleStatusChange}>
//           <SelectTrigger
//             className={`w-full ${job?.isOpen ? "bg-green-950" : "bg-red-950"}`}
//           >
//             <SelectValue
//               placeholder={
//                 "Hiring Status " + (job?.isOpen ? "( Open )" : "( Closed )")
//               }
//             />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="open">Open</SelectItem>
//             <SelectItem value="closed">Closed</SelectItem>
//           </SelectContent>
//         </Select>
//       )}

//       <h2 className="text-2xl sm:text-3xl font-bold">About the job</h2>
//       <p className="sm:text-lg">{job?.description}</p>

//       <h2 className="text-2xl sm:text-3xl font-bold">
//         What we are looking for
//       </h2>
//       <MDEditor.Markdown
//         source={job?.requirements}
//         className="bg-transparent sm:text-lg" // add global ul styles - tutorial
//       />
//       {job?.recruiter_id !== user?.id && (
//         <ApplyJobDrawer
//           job={job}
//           user={user}
//           fetchJob={fnJob}
//           applied={job?.applications?.find((ap) => ap.candidate_id === user.id)}
//         />
//       )}
//       {loadingHiringStatus && <BarLoader width={"100%"} color="#36d7b7" />}
//       {job?.applications?.length > 0 && job?.recruiter_id === user?.id && (
//         <div className="flex flex-col gap-2">
//           <h2 className="font-bold mb-4 text-xl ml-1">Applications</h2>
//           {job?.applications.map((application) => {
//             return (
//               <ApplicationCard key={application.id} application={application} />
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// };

// export default JobPage;



import { useEffect } from "react";
import { BarLoader } from "react-spinners";
import MDEditor from "@uiw/react-md-editor";
import { useParams } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { Briefcase, DoorClosed, DoorOpen, MapPinIcon } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ApplyJobDrawer } from "@/components/apply-job";
import ApplicationCard from "@/components/application-card";

import useFetch from "@/hooks/use-fetch";
import { getSingleJob, updateHiringStatus } from "@/api/apiJobs";

const JobPage = () => {
  const { id } = useParams();
  const { isLoaded, user } = useUser();

  const { loading: loadingJob, data: job, fn: fnJob } = useFetch(getSingleJob, {
    job_id: id,
  });

  useEffect(() => {
    if (isLoaded) fnJob();
  }, [isLoaded]);

  const { loading: loadingHiringStatus, fn: fnHiringStatus } = useFetch(updateHiringStatus, {
    job_id: id,
  });

  const handleStatusChange = (value) => {
    const isOpen = value === "open";
    fnHiringStatus(isOpen).then(() => fnJob());
  };

  if (!isLoaded || loadingJob) {
    return <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />;
  }

  return (
    <div className="flex flex-col gap-8 mt-8 px-6 md:px-12 lg:px-20">
      {/* Job Title & Company Logo */}
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6">
        <h1 className="gradient-title font-extrabold text-4xl sm:text-5xl lg:text-6xl text-center md:text-left">
          {job?.title}
        </h1>
        {job?.company?.logo_url && (
          <img src={job?.company?.logo_url} className="h-16 w-auto rounded-lg shadow-md" alt={job?.title} />
        )}
      </div>

      {/* Job Info Section */}
      <div className="flex flex-wrap justify-between bg-gray-900 p-4 rounded-lg shadow-md text-white">
        <div className="flex items-center gap-2 text-lg">
          <MapPinIcon className="text-blue-400" /> {job?.location}
        </div>
        <div className="flex items-center gap-2 text-lg">
          <Briefcase className="text-yellow-400" /> {job?.applications?.length} Applicants
        </div>
        <div className={`flex items-center gap-2 text-lg ${job?.isOpen ? "text-green-400" : "text-red-400"}`}>
          {job?.isOpen ? <DoorOpen /> : <DoorClosed />}
          {job?.isOpen ? "Open" : "Closed"}
        </div>
      </div>

      {/* Recruiter Hiring Status */}
      {job?.recruiter_id === user?.id && (
        <div className="w-full flex justify-center md:justify-start">
          <Select onValueChange={handleStatusChange}>
            <SelectTrigger className={`w-60 py-3 text-lg font-semibold border ${job?.isOpen ? "border-green-400" : "border-red-400"}`}>
              <SelectValue placeholder={`Hiring Status: ${job?.isOpen ? "Open" : "Closed"}`} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="open">Open</SelectItem>
              <SelectItem value="closed">Closed</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}

      {/* Job Description Section */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-blue-400 mb-3">About the Job</h2>
        <p className="text-gray-300 text-lg">{job?.description}</p>
      </div>

      {/* Job Requirements Section */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-purple-400 mb-3">What We Are Looking For</h2>
        <MDEditor.Markdown source={job?.requirements} className="bg-transparent text-gray-300 text-lg" />
      </div>

      {/* Apply Button for Non-Recruiters */}
      {job?.recruiter_id !== user?.id && (
        <div className="w-full flex justify-center">
          <ApplyJobDrawer
            job={job}
            user={user}
            fetchJob={fnJob}
            applied={job?.applications?.some((ap) => ap.candidate_id === user.id)}
          />
        </div>
      )}

      {/* Loading Indicator for Hiring Status Update */}
      {loadingHiringStatus && <BarLoader width={"100%"} color="#36d7b7" />}

      {/* Applications List (Only Visible to Recruiter) */}
      {job?.applications?.length > 0 && job?.recruiter_id === user?.id && (
        <div className="bg-gray-900 p-6 rounded-lg shadow-md">
          <h2 className="font-bold text-xl text-white mb-4">Applications</h2>
          <div className="grid gap-4">
            {job?.applications.map((application) => (
              <ApplicationCard key={application.id} application={application} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default JobPage;
