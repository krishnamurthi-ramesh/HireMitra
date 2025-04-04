// /* eslint-disable react/prop-types */
// import { Heart, MapPinIcon, Trash2Icon } from "lucide-react";
// import { Button } from "./ui/button";
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "./ui/card";
// import { Link } from "react-router-dom";
// import useFetch from "@/hooks/use-fetch";
// import { deleteJob, saveJob } from "@/api/apiJobs";
// import { useUser } from "@clerk/clerk-react";
// import { useEffect, useState } from "react";
// import { BarLoader } from "react-spinners";

// const JobCard = ({
//   job,
//   savedInit = false,
//   onJobAction = () => {},
//   isMyJob = false,
// }) => {
//   const [saved, setSaved] = useState(savedInit);

//   const { user } = useUser();

//   const { loading: loadingDeleteJob, fn: fnDeleteJob } = useFetch(deleteJob, {
//     job_id: job.id,
//   });

//   const {
//     loading: loadingSavedJob,
//     data: savedJob,
//     fn: fnSavedJob,
//   } = useFetch(saveJob);

//   const handleSaveJob = async () => {
//     await fnSavedJob({
//       user_id: user.id,
//       job_id: job.id,
//     });
//     onJobAction();
//   };

//   const handleDeleteJob = async () => {
//     await fnDeleteJob();
//     onJobAction();
//   };

//   useEffect(() => {
//     if (savedJob !== undefined) setSaved(savedJob?.length > 0);
//   }, [savedJob]);

//   return (
//     <Card className="flex flex-col">
//       {loadingDeleteJob && (
//         <BarLoader className="mt-4" width={"100%"} color="#36d7b7" />
//       )}
//       <CardHeader className="flex">
//         <CardTitle className="flex justify-between font-bold">
//           {job.title}
//           {isMyJob && (
//             <Trash2Icon
//               fill="red"
//               size={18}
//               className="text-red-300 cursor-pointer"
//               onClick={handleDeleteJob}
//             />
//           )}
//         </CardTitle>
//       </CardHeader>
//       <CardContent className="flex flex-col gap-4 flex-1">
//         <div className="flex justify-between">
//           {job.company && <img src={job.company.logo_url} className="h-6" />}
//           <div className="flex gap-2 items-center">
//             <MapPinIcon size={15} /> {job.location}
//           </div>
//         </div>
//         <hr />
//         {job.description.substring(0, job.description.indexOf("."))}.
//       </CardContent>
//       <CardFooter className="flex gap-2">
//         <Link to={`/job/${job.id}`} className="flex-1">
//           <Button variant="secondary" className="w-full">
//             More Details
//           </Button>
//         </Link>
//         {!isMyJob && (
//           <Button
//             variant="outline"
//             className="w-15"
//             onClick={handleSaveJob}
//             disabled={loadingSavedJob}
//           >
//             {saved ? (
//               <Heart size={20} fill="red" stroke="red" />
//             ) : (
//               <Heart size={20} />
//             )}
//           </Button>
//         )}
//       </CardFooter>
//     </Card>
//   );
// };

// export default JobCard;



/* eslint-disable react/prop-types */
/* eslint-disable react/prop-types */
import { Heart, MapPinIcon, Trash2Icon } from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Link } from "react-router-dom";
import useFetch from "@/hooks/use-fetch";
import { deleteJob, saveJob } from "@/api/apiJobs";
import { useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { BarLoader } from "react-spinners";

const JobCard = ({
  job,
  savedInit = false,
  onJobAction = () => {},
  isMyJob = false,
}) => {
  const [saved, setSaved] = useState(savedInit);
  const { user } = useUser();

  const { loading: loadingDeleteJob, fn: fnDeleteJob } = useFetch(deleteJob, {
    job_id: job.id,
  });

  const {
    loading: loadingSavedJob,
    data: savedJob,
    fn: fnSavedJob,
  } = useFetch(saveJob);

  const handleSaveJob = async () => {
    await fnSavedJob({
      user_id: user.id,
      job_id: job.id,
    });
    onJobAction();
  };

  const handleDeleteJob = async () => {
    await fnDeleteJob();
    onJobAction();
  };

  useEffect(() => {
    if (savedJob !== undefined) setSaved(savedJob?.length > 0);
  }, [savedJob]);

  return (
    <Card className="flex flex-col p-4 shadow-lg rounded-lg border border-gray-800 bg-black text-white">
      {loadingDeleteJob && (
        <BarLoader className="mt-2" width="100%" color="#36d7b7" />
      )}
      <CardHeader className="flex justify-between items-center">
        <CardTitle className="text-lg font-semibold text-white flex-1">
          {job.title}
        </CardTitle>
        {isMyJob && (
          <Trash2Icon
            fill="red"
            size={20}
            className="text-red-500 cursor-pointer hover:text-red-700"
            onClick={handleDeleteJob}
          />
        )}
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          {job.company && (
            <img
              src={job.company.logo_url}
              className="h-8 w-auto object-contain"
              alt="Company Logo"
            />
          )}
          <div className="flex items-center text-gray-400">
            <MapPinIcon size={16} className="mr-1 text-gray-300" /> {job.location}
          </div>
        </div>
        <hr className="border-gray-600" />
        <p className="text-gray-300 text-sm">
          {job.description.substring(0, job.description.indexOf("."))}.
        </p>
      </CardContent>
      <CardFooter className="flex gap-2 mt-2">
        <Link to={`/job/${job.id}`} className="flex-1">
          <Button variant="secondary" className="w-full bg-gray-700 text-white hover:bg-gray-600">
            More Details
          </Button>
        </Link>
        {!isMyJob && (
          <Button
            variant="outline"
            className="w-12 h-12 flex items-center justify-center border-gray-400 hover:border-gray-600"
            onClick={handleSaveJob}
            disabled={loadingSavedJob}
          >
            {saved ? (
              <Heart size={22} fill="red" stroke="red" />
            ) : (
              <Heart size={22} className="text-gray-400 hover:text-gray-300" />
            )}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default JobCard;
