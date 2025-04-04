// import { getSavedJobs } from "@/api/apiJobs";
// import JobCard from "@/components/job-card";
// import useFetch from "@/hooks/use-fetch";
// import { useUser } from "@clerk/clerk-react";
// import { useEffect } from "react";
// import { BarLoader } from "react-spinners";

// const SavedJobs = () => {
//   const { isLoaded } = useUser();

//   const {
//     loading: loadingSavedJobs,
//     data: savedJobs,
//     fn: fnSavedJobs,
//   } = useFetch(getSavedJobs);

//   useEffect(() => {
//     if (isLoaded) {
//       fnSavedJobs();
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [isLoaded]);

//   if (!isLoaded || loadingSavedJobs) {
//     return <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />;
//   }

//   return (
//     <div>
//       <h1 className="gradient-title font-extrabold text-6xl sm:text-7xl text-center pb-8">
//         Saved Jobs
//       </h1>

//       {loadingSavedJobs === false && (
//         <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {savedJobs?.length ? (
//             savedJobs?.map((saved) => {
//               return (
//                 <JobCard
//                   key={saved.id}
//                   job={saved?.job}
//                   onJobAction={fnSavedJobs}
//                   savedInit={true}
//                 />
//               );
//             })
//           ) : (
//             <div>No Saved Jobs 👀</div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SavedJobs;


import { getSavedJobs } from "@/api/apiJobs";
import JobCard from "@/components/job-card";
import useFetch from "@/hooks/use-fetch";
import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { BarLoader } from "react-spinners";

const SavedJobs = () => {
  const { isLoaded } = useUser();

  const {
    loading: loadingSavedJobs,
    data: savedJobs,
    fn: fnSavedJobs,
  } = useFetch(getSavedJobs);

  useEffect(() => {
    if (isLoaded) {
      fnSavedJobs();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoaded]);

  if (!isLoaded || loadingSavedJobs) {
    return (
      <div className="flex justify-center items-center h-screen bg-[#020817]">
        <BarLoader width={200} color="#36d7b7" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020817] text-white px-6 py-12">
      <h1 className="text-center text-4xl sm:text-6xl font-extrabold bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text pb-6">
        Saved Jobs
      </h1>

      {savedJobs?.length ? (
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedJobs.map((saved) => (
            <div
              key={saved.id}
              className="transform transition-all duration-300 hover:scale-105"
            >
              <JobCard
                job={saved?.job}
                onJobAction={fnSavedJobs}
                savedInit={true}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center h-64 text-gray-400 text-lg">
          No Saved Jobs 👀
        </div>
      )}
    </div>
  );
};

export default SavedJobs;
