// import React, { useEffect, useState } from "react";
// import { createClient } from "@supabase/supabase-js";
// // Supabase Configuration
// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
// const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
// const supabase = createClient(supabaseUrl, supabaseKey);

// const Mentors = () => {
//   const [mentors, setMentors] = useState([]);

//   useEffect(() => {
//     const fetchMentors = async () => {
//       const { data, error } = await supabase.from("mentors").select("*");
//       if (error) {
//         console.error("Error fetching mentors:", error);
//       } else {
//         setMentors(data);
//       }
//     };
//     fetchMentors();
//   }, []);

//   return (
//     <div className="flex flex-wrap justify-center gap-6 p-6 bg-gray-900">
//       {mentors.length > 0 ? (
//         mentors.map((mentor) => (
//           <div
//             key={mentor.id}
//             className="max-w-sm bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105"
//           >
//             {/* Mentor Image */}
//             <img
//               src={mentor.imagelink} // Fetch image from the database
//               alt={mentor.name}
//               className="w-full h-48 object-cover"
//               onError={(e) => (e.target.src = "https://via.placeholder.com/150")} // Fallback image
//             />

//             {/* Mentor Details */}
//             <div className="p-5">
//               <h3 className="text-xl font-bold text-gray-800">{mentor.name}</h3>
//               <p className="text-sm text-gray-600">{mentor.company}</p>
//               <p className="text-gray-700 font-medium mt-2">
//                 Experience: {mentor.experience} years
//               </p>
//               <p className="text-gray-600 mt-2 text-sm">{mentor.description}</p>
//             </div>
//           </div>
//         ))
//       ) : (
//         <p className="text-white text-lg">No mentors found.</p>
//       )}
//     </div>
//   );
// };

// export default Mentors;


// import React, { useEffect, useState } from "react";
// import { createClient } from "@supabase/supabase-js";

// // Supabase Configuration
// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
// const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
// const supabase = createClient(supabaseUrl, supabaseKey);

// const Mentors = () => {
//   const [mentors, setMentors] = useState([]);
//   const [filter, setFilter] = useState(""); // State for the filter text

//   useEffect(() => {
//     const fetchMentors = async () => {
//       const { data, error } = await supabase.from("mentors").select("*");
//       if (error) {
//         console.error("Error fetching mentors:", error);
//       } else {
//         setMentors(data);
//       }
//     };
//     fetchMentors();
//   }, []);

//   // Generate image file names (m1.jpg, m2.jpg, ..., m5.jpg)
//   const imageFiles = Array.from({ length: 10 }, (_, index) => `m${index + 1}.jpg`);

//   // Filter mentors based on the company name
//   const filteredMentors = mentors.filter((mentor) => {
//     return mentor.company.toLowerCase().includes(filter.toLowerCase()); // Filter based on company
//   });

//   return (
//     <div className="flex flex-col items-center p-6 bg-gray-900">
//       {/* Heading */}
//       <h2 className="text-3xl font-bold text-white mb-6">Find your right mentors...</h2>

//       {/* Filter Bar */}
//       <div className="mb-6 w-full max-w-md">
//         <input
//           type="text"
//           placeholder="Search by company..."
//           className="w-full p-2 rounded-lg border-2 border-gray-300 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
//           value={filter}
//           onChange={(e) => setFilter(e.target.value)} // Update filter on input change
//         />
//       </div>

//       {/* Mentor Cards */}
//       <div className="flex flex-wrap justify-center gap-6">
//         {filteredMentors.length > 0 ? (
//           filteredMentors.map((mentor, index) => {
//             // Dynamically use the image file name from the imageFiles array
//             const imageUrl = `https://avaldmbupcbjzwoifknx.supabase.co/storage/v1/object/public/mentorimg/${imageFiles[index]}`;

//             return (
//               <div
//                 key={mentor.id}
//                 className="max-w-sm bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105"
//               >
//                 {/* Mentor Image */}
//                 <img
//                   src={imageUrl} // Use the dynamically generated image URL
//                   alt={mentor.name}
//                   className="w-full h-48 object-contain"
//                   onError={(e) => (e.target.src = "https://via.placeholder.com/150")} // Fallback image
//                 />

//                 {/* Mentor Details */}
//                 <div className="p-5">
//                   <h3 className="text-xl font-bold text-gray-800">{mentor.name}</h3>
//                   <p className="text-sm text-gray-600">{mentor.company}</p>
//                   <p className="text-gray-700 font-medium mt-2">
//                     Experience: {mentor.experience} years
//                   </p>
//                   <p className="text-gray-600 mt-2 text-sm">{mentor.description}</p>
//                 </div>
//               </div>
//             );
//           })
//         ) : (
//           <p className="text-white text-lg">No mentors found.</p>
//         )}
//       </div>

//       {/* Register Button */}
//       <div className="mt-6">
//         <button className="bg-green-400 p-2 rounded font-bold text-white hover:bg-green-500">
//           Register as a mentor
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Mentors;



import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

// Supabase Configuration
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const Mentors = () => {
  const [mentors, setMentors] = useState([]);
  const [filter, setFilter] = useState(""); // State for the filter text

  useEffect(() => {
    const fetchMentors = async () => {
      const { data, error } = await supabase.from("mentors").select("*");
      if (error) {
        console.error("Error fetching mentors:", error);
      } else {
        setMentors(data);
      }
    };
    fetchMentors();
  }, []);

  // Generate image file names (m1.jpg, m2.jpg, ..., m10.jpg)
  const imageFiles = Array.from({ length: 10 }, (_, index) => `m${index + 1}.jpg`);

  // Filter mentors based on the company name
  const filteredMentors = mentors.filter((mentor) =>
    mentor.company.toLowerCase().includes(filter.toLowerCase()) // Filter based on company
  );

  return (
    <div className="bg-[#020817] min-h-screen flex flex-col items-center p-6">
      {/* Heading */}
      <h2 className="text-4xl font-extrabold text-white mb-6 text-center">
        Find Your Right Mentor 🚀
      </h2>

      {/* Filter Bar */}
      <div className="mb-6 w-full max-w-md">
        <input
          type="text"
          placeholder="Search by company..."
          className="w-full p-3 rounded-lg border-2 border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
          value={filter}
          onChange={(e) => setFilter(e.target.value)} // Update filter on input change
        />
      </div>

      {/* Mentor Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {filteredMentors.length > 0 ? (
          filteredMentors.map((mentor, index) => {
            const imageUrl = `https://avaldmbupcbjzwoifknx.supabase.co/storage/v1/object/public/mentorimg/${imageFiles[index] || "default.jpg"}`;
            return (
              <div
                key={mentor.id}
                className="bg-gray-900 rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
              >
                {/* Mentor Image */}
                <img
                  src={imageUrl}
                  alt={mentor.name}
                  className="w-full h-48 object-contain"
                  onError={(e) => (e.target.src = "https://via.placeholder.com/150")}
                />
                {/* Mentor Details */}
                <div className="p-5">
                  <h3 className="text-xl font-bold text-green-400">{mentor.name}</h3>
                  <p className="text-sm text-gray-400">{mentor.company}</p>
                  <p className="text-gray-300 mt-2 font-medium">Experience: {mentor.experience} years</p>
                  <p className="text-gray-400 mt-2 text-sm">{mentor.description}</p>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-white text-lg">No mentors found.</p>
        )}
      </div>

      {/* Register Button */}
      <div className="mt-8">
        <button className="bg-green-500 hover:bg-green-600 px-5 py-3 rounded-lg font-semibold text-white transition duration-300">
          Register as a Mentor
        </button>
      </div>
    </div>
  );
};

export default Mentors;









// import React, { useEffect, useState } from "react";
// import { createClient } from "@supabase/supabase-js";
// import { Button } from "@/components/ui/button";

// // Supabase Configuration
// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
// const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
// const supabase = createClient(supabaseUrl, supabaseKey);

// const Mentors = () => {
//   const [mentors, setMentors] = useState([]);
//   const [filter, setFilter] = useState(""); // State for the filter text

//   useEffect(() => {
//     const fetchMentors = async () => {
//       const { data, error } = await supabase.from("mentors").select("*");
//       if (error) {
//         console.error("Error fetching mentors:", error);
//       } else {
//         setMentors(data);
//       }
//     };
//     fetchMentors();
//   }, []);

//   // Generate image file names dynamically
//   const imageFiles = Array.from({ length: mentors.length }, (_, index) => `m${index + 1}.jpg`);

//   // Filter mentors based on the company name
//   const filteredMentors = mentors.filter((mentor) =>
//     mentor.company?.toLowerCase().includes(filter.trim().toLowerCase())
//   );
  

//   return (
//     <div className="flex flex-col items-center p-8 bg-gradient-to-b from-gray-900 to-black min-h-screen text-white">
//       {/* Heading */}
//       <h2 className="text-4xl font-bold mb-6 text-green-400">Find Your Ideal Mentor</h2>

//       {/* Search Bar */}
//       <div className="mb-6 w-full max-w-md">
//         <input
//           type="text"
//           placeholder="Search by company..."
//           className="w-full p-3 rounded-lg border border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
//           value={filter}
//           onChange={(e) => setFilter(e.target.value)}
//         />
//       </div>

//       {/* Mentor Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
//         {filteredMentors.length > 0 ? (
//           filteredMentors.map((mentor, index) => {
//             const imageUrl = `https://avaldmbupcbjzwoifknx.supabase.co/storage/v1/object/public/mentorimg/${imageFiles[index] || "default.jpg"}`;
//             return (
//               <div
//                 key={mentor.id}
//                 className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
//               >
//                 {/* Mentor Image */}
//                 <img
//                   src={imageUrl}
//                   alt={mentor.name}
//                   className="w-full h-48 object-cover"
//                   onError={(e) => (e.target.src = "https://via.placeholder.com/150")}
//                 />
//                 {/* Mentor Details */}
//                 <div className="p-5">
//                   <h3 className="text-xl font-bold text-green-400">{mentor.name}</h3>
//                   <p className="text-sm text-gray-400">{mentor.company}</p>
//                   <p className="text-gray-300 mt-2 font-medium">Experience: {mentor.experience} years</p>
//                   <p className="text-gray-400 mt-2 text-sm">{mentor.description}</p>
//                 </div>
//               </div>
//             );
//           })
//         ) : (
//           <p className="text-white text-lg">No mentors found.</p>
//         )}
//       </div>

//       {/* Register Button */}
//       <div className="mt-8">
//         <Button className="bg-green-500 px-6 py-3 rounded-lg font-bold text-white hover:bg-green-600 transition-transform transform hover:scale-105">
//           Register as a Mentor
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default Mentors;

/* eslint-disable react/prop-types */
/* eslint-disable react/prop-types */
// import { Heart, MapPinIcon, Trash2Icon } from "lucide-react";
// import { Button } from "@components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "components/ui/card";
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

//   if (!job) {
//     return (
//       <Card className="p-6 shadow-xl rounded-lg border border-gray-700 bg-gray-900 text-white">
//         <p className="text-red-500 font-bold">Error: Job data is missing.</p>
//       </Card>
//     );
//   }

//   const { loading: loadingDeleteJob, fn: fnDeleteJob } = useFetch(deleteJob, {
//     job_id: job?.id,
//   });

//   const {
//     loading: loadingSavedJob,
//     data: savedJob,
//     fn: fnSavedJob,
//   } = useFetch(saveJob);

//   const handleSaveJob = async () => {
//     if (!user || !job?.id) return;
//     await fnSavedJob({
//       user_id: user.id,
//       job_id: job.id,
//     });
//     onJobAction();
//   };

//   const handleDeleteJob = async () => {
//     if (!job?.id) return;
//     await fnDeleteJob();
//     onJobAction();
//   };

//   useEffect(() => {
//     if (savedJob !== undefined) setSaved(savedJob?.length > 0);
//   }, [savedJob]);

//   return (
//     <Card className="flex flex-col p-6 shadow-xl rounded-lg border border-gray-700 bg-gradient-to-r from-gray-900 to-black text-white backdrop-blur-lg">
//       {loadingDeleteJob && (
//         <BarLoader className="mt-2" width="100%" color="#36d7b7" />
//       )}
//       <CardHeader className="flex justify-between items-center">
//         <CardTitle className="text-lg font-bold text-white flex-1">
//           {job.title || "Unknown Job Title"}
//         </CardTitle>
//         {isMyJob && job?.id && (
//           <Trash2Icon
//             fill="red"
//             size={22}
//             className="text-red-500 cursor-pointer hover:text-red-700 transition-transform transform hover:scale-110"
//             onClick={handleDeleteJob}
//           />
//         )}
//       </CardHeader>
//       <CardContent className="flex flex-col gap-4">
//         <div className="flex justify-between items-center">
//           {job?.company?.logo_url ? (
//             <img
//               src={job.company.logo_url}
//               className="h-10 w-auto object-contain rounded-lg shadow-md"
//               alt="Company Logo"
//             />
//           ) : (
//             <p className="text-gray-400 text-sm">No Company Logo</p>
//           )}
//           <div className="flex items-center text-gray-400">
//             <MapPinIcon size={18} className="mr-1 text-gray-300" />{" "}
//             {job.location || "Unknown Location"}
//           </div>
//         </div>
//         <hr className="border-gray-600" />
//         <p className="text-gray-300 text-sm leading-relaxed">
//           {job.description
//             ? job.description.substring(0, job.description.indexOf(".")) + "."
//             : "No description available."}
//         </p>
//       </CardContent>
//       <CardFooter className="flex gap-3 mt-3">
//         {job?.id ? (
//           <Link to={`/job/${job.id}`} className="flex-1">
//             <Button
//               variant="secondary"
//               className="w-full bg-green-500 text-white hover:bg-green-600 shadow-md transition-transform transform hover:scale-105"
//             >
//               More Details
//             </Button>
//           </Link>
//         ) : (
//           <p className="text-gray-400">No job details available.</p>
//         )}
//         {!isMyJob && job?.id && (
//           <Button
//             variant="outline"
//             className="w-12 h-12 flex items-center justify-center border-gray-500 hover:border-gray-300 rounded-full transition-transform transform hover:scale-110"
//             onClick={handleSaveJob}
//             disabled={loadingSavedJob}
//           >
//             {saved ? (
//               <Heart size={22} fill="red" stroke="red" />
//             ) : (
//               <Heart size={22} className="text-gray-400 hover:text-gray-300" />
//             )}
//           </Button>
//         )}
//       </CardFooter>
//     </Card>
//   );
// };

// export default JobCard;
