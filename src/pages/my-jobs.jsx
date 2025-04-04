// import CreatedApplications from "@/components/created-applications";
// import CreatedJobs from "@/components/created-jobs";
// import { useUser } from "@clerk/clerk-react";
// import { BarLoader } from "react-spinners";

// const MyJobs = () => {
//   const { user, isLoaded } = useUser();

//   if (!isLoaded) {
//     return <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />;
//   }

//   return (
//     <div>
//       <h1 className="gradient-title font-extrabold text-5xl sm:text-7xl text-center pb-8">
//         {user?.unsafeMetadata?.role === "candidate"
//           ? "My Applications"
//           : "My Jobs"}
//       </h1>
//       {user?.unsafeMetadata?.role === "candidate" ? (
//         <CreatedApplications />
//       ) : (
//         <CreatedJobs />
//       )}
//     </div>
//   );
// };

// export default MyJobs;



import CreatedApplications from "@/components/created-applications";
import CreatedJobs from "@/components/created-jobs";
import { useUser } from "@clerk/clerk-react";
import { BarLoader } from "react-spinners";

const MyJobs = () => {
  const { user, isLoaded } = useUser();

  if (!isLoaded) {
    return (
      <div className="flex justify-center items-center h-screen bg-[#020817]">
        <BarLoader width={200} color="#36d7b7" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020817] text-white px-6 py-12">
      <h1 className="text-center text-4xl sm:text-6xl font-extrabold bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text pb-6">
        {user?.unsafeMetadata?.role === "candidate"
          ? "My Applications"
          : "My Jobs"}
      </h1>

      <div className="mt-8 animate-fade-in">
        {user?.unsafeMetadata?.role === "candidate" ? (
          <CreatedApplications />
        ) : (
          <CreatedJobs />
        )}
      </div>
    </div>
  );
};

export default MyJobs;
