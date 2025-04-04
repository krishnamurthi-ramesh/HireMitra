// import { useEffect, useState } from "react";
// import { useUser } from "@clerk/clerk-react";
// import { State } from "country-state-city";
// import { BarLoader } from "react-spinners";
// import useFetch from "@/hooks/use-fetch";

// import JobCard from "@/components/job-card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// import { getCompanies } from "@/api/apiCompanies";
// import { getJobs } from "@/api/apiJobs";

// const JobListing = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [location, setLocation] = useState("");
//   const [company_id, setCompany_id] = useState("");

//   const { isLoaded } = useUser();

//   const {
//     // loading: loadingCompanies,
//     data: companies,
//     fn: fnCompanies,
//   } = useFetch(getCompanies);

//   const {
//     loading: loadingJobs,
//     data: jobs,
//     fn: fnJobs,
//   } = useFetch(getJobs, {
//     location,
//     company_id,
//     searchQuery,
//   });

//   useEffect(() => {
//     if (isLoaded) {
//       fnCompanies();
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [isLoaded]);

//   useEffect(() => {
//     if (isLoaded) fnJobs();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [isLoaded, location, company_id, searchQuery]);

//   const handleSearch = (e) => {
//     e.preventDefault();
//     let formData = new FormData(e.target);

//     const query = formData.get("search-query");
//     if (query) setSearchQuery(query);
//   };

//   const clearFilters = () => {
//     setSearchQuery("");
//     setCompany_id("");
//     setLocation("");
//   };

//   if (!isLoaded) {
//     return <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />;
//   }

//   return (
//     <div className="">
//       <h1 className="gradient-title font-extrabold text-6xl sm:text-7xl text-center pb-8">
//         Latest Jobs
//       </h1>
//       <form
//         onSubmit={handleSearch}
//         className="h-14 flex flex-row w-full gap-2 items-center mb-3"
//       >
//         <Input
//           type="text"
//           placeholder="Search Jobs by Title.."
//           name="search-query"
//           className="h-full flex-1  px-4 text-md"
//         />
//         <Button type="submit" className="h-full sm:w-28" variant="blue">
//           Search
//         </Button>
//       </form>

//       <div className="flex flex-col sm:flex-row gap-2">
//         <Select value={location} onValueChange={(value) => setLocation(value)}>
//           <SelectTrigger>
//             <SelectValue placeholder="Filter by Location" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectGroup>
//               {State.getStatesOfCountry("IN").map(({ name }) => {
//                 return (
//                   <SelectItem key={name} value={name}>
//                     {name}
//                   </SelectItem>
//                 );
//               })}
//             </SelectGroup>
//           </SelectContent>
//         </Select>

//         <Select
//           value={company_id}
//           onValueChange={(value) => setCompany_id(value)}
//         >
//           <SelectTrigger>
//             <SelectValue placeholder="Filter by Company" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectGroup>
//               {companies?.map(({ name, id }) => {
//                 return (
//                   <SelectItem key={name} value={id}>
//                     {name}
//                   </SelectItem>
//                 );
//               })}
//             </SelectGroup>
//           </SelectContent>
//         </Select>
//         <Button
//           className="sm:w-1/2"
//           variant="destructive"
//           onClick={clearFilters}
//         >
//           Clear Filters
//         </Button>
//       </div>

//       {loadingJobs && (
//         <BarLoader className="mt-4" width={"100%"} color="#36d7b7" />
//       )}

//       {loadingJobs === false && (
//         <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {jobs?.length ? (
//             jobs.map((job) => {
//               return (
//                 <JobCard
//                   key={job.id}
//                   job={job}
//                   savedInit={job?.saved?.length > 0}
//                 />
//               );
//             })
//           ) : (
//             <div>No Jobs Found 😢</div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default JobListing;


import { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { State } from "country-state-city";
import { BarLoader } from "react-spinners";
import useFetch from "@/hooks/use-fetch";

import JobCard from "@/components/job-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { getCompanies } from "@/api/apiCompanies";
import { getJobs } from "@/api/apiJobs";

const JobListing = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");
  const [company_id, setCompany_id] = useState("");
  const { isLoaded } = useUser();

  const { data: companies, fn: fnCompanies } = useFetch(getCompanies);
  const { loading: loadingJobs, data: jobs, fn: fnJobs } = useFetch(getJobs, {
    location,
    company_id,
    searchQuery,
  });

  useEffect(() => {
    if (isLoaded) fnCompanies();
  }, [isLoaded]);

  useEffect(() => {
    if (isLoaded) fnJobs();
  }, [isLoaded, location, company_id, searchQuery]);

  const handleSearch = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    const query = formData.get("search-query");
    if (query) setSearchQuery(query);
  };

  const clearFilters = () => {
    setSearchQuery("");
    setCompany_id("");
    setLocation("");
  };

  if (!isLoaded) {
    return <BarLoader className="mb-4" width="100%" color="#36d7b7" />;
  }

  return (
    <div className="bg-[#020817] min-h-screen p-8 text-white">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-green-400">
        🚀 Explore Latest Jobs
      </h1>

      <form onSubmit={handleSearch} className="flex gap-3 mb-6">
        <Input
          type="text"
          placeholder="Search Jobs by Title.."
          name="search-query"
          className="flex-1 px-4 py-3 text-lg bg-gray-800 border border-gray-700 text-white rounded-lg"
        />
        <Button type="submit" className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg font-semibold">
          Search
        </Button>
      </form>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <Select value={location} onValueChange={setLocation}>
          <SelectTrigger className="bg-gray-800 text-white border-gray-700">
            <SelectValue placeholder="Filter by Location" />
          </SelectTrigger>
          <SelectContent className="bg-gray-800 text-white border-gray-700">
            <SelectGroup>
              {State.getStatesOfCountry("IN").map(({ name }) => (
                <SelectItem key={name} value={name}>{name}</SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select value={company_id} onValueChange={setCompany_id}>
          <SelectTrigger className="bg-gray-800 text-white border-gray-700">
            <SelectValue placeholder="Filter by Company" />
          </SelectTrigger>
          <SelectContent className="bg-gray-800 text-white border-gray-700">
            <SelectGroup>
              {companies?.map(({ name, id }) => (
                <SelectItem key={id} value={id}>{name}</SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <Button className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-lg" onClick={clearFilters}>
          Clear Filters
        </Button>
      </div>

      {loadingJobs && <BarLoader className="mt-4" width="100%" color="#36d7b7" />}

      {!loadingJobs && (
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs?.length ? (
            jobs.map((job) => (
              <JobCard key={job.id} job={job} savedInit={job?.saved?.length > 0} />
            ))
          ) : (
            <div className="text-xl text-gray-400">No Jobs Found 😢</div>
          )}
        </div>
      )}
    </div>
  );
};

export default JobListing;
