import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  UserButton,
  SignIn,
  useUser,
} from "@clerk/clerk-react";
import { Button } from "./ui/button";
import { BriefcaseBusiness, Heart, PenBox } from "lucide-react";

const Header = () => {
  const [showSignIn, setShowSignIn] = useState(false);

  const [search, setSearch] = useSearchParams();
  const { user } = useUser();

  useEffect(() => {
    if (search.get("sign-in")) {
      setShowSignIn(true);
    }
  }, [search]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowSignIn(false);
      setSearch({});
    }
  };

  return (
    <>
      <nav className="py-4 flex justify-between items-center">
        <Link to="/">
          <img src="/logo.jpg" className="h-20" alt="Hirrd Logo" />
        </Link>

        <div className="flex gap-8">
          <SignedOut>
            <Button variant="outline" onClick={() => setShowSignIn(true)}>
              Login
            </Button>
          </SignedOut>
          <SignedIn>
            {user?.unsafeMetadata?.role === "recruiter" && (
              <Link to="/post-job">
                <Button variant="destructive" className="rounded-full">
                  <PenBox size={20} className="mr-2" />
                  Post a Job
                </Button>
              </Link>
            )}
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                },
              }}
            >
              <UserButton.MenuItems>
                <UserButton.Link
                  label="My Jobs"
                  labelIcon={<BriefcaseBusiness size={15} />}
                  href="/my-jobs"
                />
                <UserButton.Link
                  label="Saved Jobs"
                  labelIcon={<Heart size={15} />}
                  href="/saved-jobs"
                />
                <UserButton.Action label="manageAccount" />
              </UserButton.MenuItems>
            </UserButton>
          </SignedIn>
        </div>
      </nav>

      {showSignIn && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleOverlayClick}
        >
          <SignIn
            signUpForceRedirectUrl="/onboarding"
            fallbackRedirectUrl="/onboarding"
          />
        </div>
      )}
    </>
  );
};

export default Header;



// import { useEffect, useState } from "react";
// import { Link, useSearchParams } from "react-router-dom";
// import {
//   SignedIn,
//   SignedOut,
//   UserButton,
//   SignIn,
//   useUser,
// } from "@clerk/clerk-react";
// import { Button } from "./ui/button";
// import { BriefcaseBusiness, Heart, PenBox, MessageCircle } from "lucide-react";
// import Testimonials from "./testimonials"; // Import Testimonials Component

// const Header = () => {
//   const [showSignIn, setShowSignIn] = useState(false);
//   const [showTestimonials, setShowTestimonials] = useState(false); // State to handle Testimonials Modal
//   const [search, setSearch] = useSearchParams();
//   const { user } = useUser();

//   useEffect(() => {
//     if (search.get("sign-in")) {
//       setShowSignIn(true);
//     }
//   }, [search]);

//   const handleOverlayClick = (e) => {
//     if (e.target === e.currentTarget) {
//       setShowSignIn(false);
//       setShowTestimonials(false); // Hide Testimonials on clicking outside
//       setSearch({});
//     }
//   };

//   return (
//     <>
//       <nav className="py-4 flex justify-between items-center">
//         <Link to="/">
//           <img src="/logo.jpg" className="h-20" alt="Hirrd Logo" />
//         </Link>

//         <div className="flex gap-8">
//           <Button
//             variant="outline"
//             className="rounded-full flex items-center gap-2"
//             onClick={() => setShowTestimonials(true)}
//           >
//             <MessageCircle size={18} />
//             Testimonials & Feedback
//           </Button>

//           <SignedOut>
//             <Button variant="outline" onClick={() => setShowSignIn(true)}>
//               Login
//             </Button>
//           </SignedOut>
//           <SignedIn>
//             {user?.unsafeMetadata?.role === "recruiter" && (
//               <Link to="/post-job">
//                 <Button variant="destructive" className="rounded-full">
//                   <PenBox size={20} className="mr-2" />
//                   Post a Job
//                 </Button>
//               </Link>
//             )}
//             <UserButton
//               appearance={{
//                 elements: {
//                   avatarBox: "w-10 h-10",
//                 },
//               }}
//             >
//               <UserButton.MenuItems>
//                 <UserButton.Link
//                   label="My Jobs"
//                   labelIcon={<BriefcaseBusiness size={15} />}
//                   href="/my-jobs"
//                 />
//                 <UserButton.Link
//                   label="Saved Jobs"
//                   labelIcon={<Heart size={15} />}
//                   href="/saved-jobs"
//                 />
//                 <UserButton.Action label="manageAccount" />
//               </UserButton.MenuItems>
//             </UserButton>
//           </SignedIn>
//         </div>
//       </nav>

//       {/* Sign-In Modal */}
//       {showSignIn && (
//         <div
//           className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
//           onClick={handleOverlayClick}
//         >
//           <SignIn
//             signUpForceRedirectUrl="/onboarding"
//             fallbackRedirectUrl="/onboarding"
//           />
//         </div>
//       )}

//       {/* Testimonials & Feedback Modal */}
//       {showTestimonials && (
//         <div
//           className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
//           onClick={handleOverlayClick}
//         >
//           <div className="bg-white p-8 rounded-lg shadow-lg w-[85vw] md:w-[700px]">
//             <Testimonials
//               reviews={[
//                 {
//                   id: 1,
//                   name: "John Doe",
//                   company: "Google",
//                   feedback: "This platform helped me connect with amazing mentors!",
//                   image: "https://via.placeholder.com/150",
//                 },
//                 {
//                   id: 2,
//                   name: "Jane Smith",
//                   company: "Amazon",
//                   feedback: "Great experience! The mentors are very knowledgeable.",
//                   image: "https://via.placeholder.com/150",
//                 },
//               ]}
//             />
//             <Button
//               className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white"
//               onClick={() => setShowTestimonials(false)}
//             >
//               Close
//             </Button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Header;
