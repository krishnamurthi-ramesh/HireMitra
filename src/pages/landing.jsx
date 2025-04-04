// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
// } from "@/components/ui/carousel";
// import Autoplay from "embla-carousel-autoplay";
// import companies from "../data/companies.json";
// import partners from "../data/partners.json";
// import faqs from "../data/faq.json";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import { Link } from "react-router-dom";
// import ApplicationCard from "@/components/application-card";

// const LandingPage = () => {
//   return (
//     <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">
//       <section className="text-center ">
//         <h1 className="flex flex-col items-center justify-center gradient-title font-extrabold text-4xl sm:text-6xl lg:text-8xl tracking-tighter py-4">
//           Find Your Dream Job
//           <span className="flex items-center gap-2 sm:gap-6">
//             and get Hired !
//             {/* <img
//               src="/logo.jpg"
//               className="h-14 sm:h-24 lg:h-32"
//               alt="Hirrd Logo"
//             /> */}
//           </span>
//         </h1>
//         <p className="text-gray-300 sm:mt-4 text-xs sm:text-xl">
//           Explore thousands of job listings or find the perfect candidate
//         </p>
//       </section>
//       <div className="flex gap-6 justify-center">
//         <Link to={"/jobs"}>
//           <Button className="bg-red-500 hover:bg-red-600 text-white size-xl">
//             Find Jobs
//           </Button>
//         </Link>
//         <Link to={"/post-job"}>
//           <Button className="bg-yellow-500 hover:bg-yellow-600 text-white size-xl">
//             Post a Job
//           </Button>
//         </Link>
//       </div>
//       <div className="flex gap-6 justify-center">
//         <Link to={"/career"}>
//           <Button className="bg-blue-500 hover:bg-blue-600 text-white size-xl">
//             Skill Up
//           </Button>
//         </Link>
//         <Link to={"/mentors"}>
//         <Button className="bg-green-500 hover:bg-green-600 text-white size-xl">
//   Guidance & Referrals
// </Button>
//         </Link>
//       </div>
//       <Carousel
//         plugins={[
//           Autoplay({
//             delay: 2000,
//           }),
//         ]}
//         className="w-full py-10"
//       >
//         <CarouselContent className="flex gap-5 sm:gap-20 items-center">
//           {companies.map(({ name, id, path }) => (
//             <CarouselItem key={id} className="basis-1/3 lg:basis-1/6 ">
//               <img
//                 src={path}
//                 alt={name}
//                 className="h-9 sm:h-14 object-contain"
//               />
//             </CarouselItem>
//           ))}
//         </CarouselContent>
//       {/* </Carousel> */}
//       <br></br><br></br><br></br>
//         <CarouselContent className="flex gap-5 sm:gap-20 items-center">
//           {partners.map(({ name, id, path }) => (
//             <CarouselItem key={id} className="basis-1/3 lg:basis-1/6 ">
//               <img
//                 src={path}
//                 alt={name}
//                 className="h-9 sm:h-14 object-contain"
//               />
//             </CarouselItem>
//           ))}
//         </CarouselContent>
//       </Carousel>

//       {/* <img src="/banner.jpeg" className="w-full" /> */}

//       <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <Card>
//           <CardHeader>
//             <CardTitle className="font-bold">For Job Seekers</CardTitle>
//           </CardHeader>
//           <CardContent>
//             Search and apply for jobs, track applications, and more.
//           </CardContent>
//         </Card>
//         <Card>
//           <CardHeader>
//             <CardTitle className="font-bold">For Employers</CardTitle>
//           </CardHeader>
//           <CardContent>
//             Post jobs, manage applications, and find the best candidates.
//           </CardContent>
//         </Card>
//       </section>

//       <Accordion type="multiple" className="w-full">
//         {faqs.map((faq, index) => (
//           <AccordionItem key={index} value={`item-${index + 1}`}>
//             <AccordionTrigger>{faq.question}</AccordionTrigger>
//             <AccordionContent>{faq.answer}</AccordionContent>
//           </AccordionItem>
//         ))}
//       </Accordion>
//     </main>
//   );
// };

// export default LandingPage;

// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
// } from "@/components/ui/carousel";
// import Autoplay from "embla-carousel-autoplay";
// import companies from "../data/companies.json";
// import partners from "../data/partners.json";
// import faqs from "../data/faq.json";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import { Link } from "react-router-dom";

// const LandingPage = () => {
//   return (
//     <main className="flex flex-col gap-16 py-12 sm:py-24 container mx-auto px-4">
//       {/* Hero Section */}
//       <section className="text-center">
//         <h1 className="gradient-title font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight py-4">
//           Find Your Dream Job
//         </h1>
//         <p className="text-gray-400 text-lg sm:text-xl mt-4">
//           Explore thousands of job listings or find the perfect candidate
//         </p>

//         {/* Action Buttons */}
//         <div className="flex flex-wrap justify-center gap-4 mt-6">
//           <Link to="/jobs">
//             <Button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 text-lg rounded-xl">
//               Find Jobs
//             </Button>
//           </Link>
//           <Link to="/post-job">
//             <Button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 text-lg rounded-xl">
//               Post a Job
//             </Button>
//           </Link>
//         </div>
//         <div className="flex flex-wrap justify-center gap-4 mt-4">
//           <Link to="/career">
//             <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 text-lg rounded-xl">
//               Skill Up
//             </Button>
//           </Link>
//           <Link to="/mentors">
//             <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 text-lg rounded-xl">
//               Guidance & Referrals
//             </Button>
//           </Link>
//         </div>
//       </section>

//       {/* Companies Carousel */}
//       {/* <div className="w-full max-w-6xl mx-auto">
//         <Carousel plugins={[Autoplay({ delay: 2000, loop: true })]} className="py-8">
//           <CarouselContent className="flex justify-center items-center gap-10 sm:gap-16">
//             {companies.map(({ name, id, path }) => (
//               <CarouselItem key={id} className="flex justify-center">
//                 <img src={path} alt={name} className="h-12 sm:h-16 object-contain" />
//               </CarouselItem>
//             ))}
//           </CarouselContent>
//         </Carousel>
//       </div> */}

//       {/* Partners Carousel */}
//       {/* <div className="w-full max-w-6xl mx-auto">
//         <Carousel plugins={[Autoplay({ delay: 2000, loop: true })]} className="py-8">
//           <CarouselContent className="flex justify-center items-center gap-10 sm:gap-16">
//             {partners.map(({ name, id, path }) => (
//               <CarouselItem key={id} className="flex justify-center">
//                 <img src={path} alt={name} className="h-12 sm:h-16 object-contain" />
//               </CarouselItem>
//             ))}
//           </CarouselContent>
//         </Carousel>
//       </div> */}
//       <Carousel
//         plugins={[
//           Autoplay({
//             delay: 2000,
//           }),
//         ]}
//         className="w-full py-10"
//       >
//         <CarouselContent className="flex gap-5 sm:gap-20 items-center">
//           {companies.map(({ name, id, path }) => (
//             <CarouselItem key={id} className="basis-1/3 lg:basis-1/6 ">
//               <img
//                 src={path}
//                 alt={name}
//                 className="h-9 sm:h-14 object-contain"
//               />
//              </CarouselItem>
//           ))}
//         </CarouselContent>
//       {/* </Carousel> */}
//       <br></br><br></br><br></br>
//         <CarouselContent className="flex gap-5 sm:gap-20 items-center">
//           {partners.map(({ name, id, path }) => (
//             <CarouselItem key={id} className="basis-1/3 lg:basis-1/6 ">
//               <img
//                 src={path}
//                 alt={name}
//                 className="h-9 sm:h-14 object-contain"
//               />
//             </CarouselItem>
//           ))}
//         </CarouselContent>
//        </Carousel>
//       {/* Job Seeker & Employer Section */}
//       {/* <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <Card className="shadow-lg rounded-xl">
//           <CardHeader>
//             <CardTitle className="font-bold text-xl">For Job Seekers</CardTitle>
//           </CardHeader>
//           <CardContent className="text-gray-600">
//             Search and apply for jobs, track applications, and more.
//           </CardContent>
//         </Card>
//         <Card className="shadow-lg rounded-xl">
//           <CardHeader>
//             <CardTitle className="font-bold text-xl">For Employers</CardTitle>
//           </CardHeader>
//           <CardContent className="text-gray-600">
//             Post jobs, manage applications, and find the best candidates.
//           </CardContent>
//         </Card>
//       </section> */}

//       {/* FAQ Section */}
//       {/* <Accordion type="multiple" className="w-full">
//         {faqs.map((faq, index) => (
//           <AccordionItem key={index} value={`item-${index + 1}`} className="border-b">
//             <AccordionTrigger className="text-lg font-semibold text-gray-800">
//               {faq.question}
//             </AccordionTrigger>
//             <AccordionContent className="text-gray-600">
//               {faq.answer}
//             </AccordionContent>
//           </AccordionItem>
//         ))}
//       </Accordion> */}
//        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
//          <Card>
//            <CardHeader>
//              <CardTitle className="font-bold">For Job Seekers</CardTitle>
//            </CardHeader>
//            <CardContent>
//              Search and apply for jobs, track applications, and more.
//            </CardContent>
//          </Card>
//          <Card>
//            <CardHeader>
//              <CardTitle className="font-bold">For Employers</CardTitle>
//           </CardHeader>
//           <CardContent>
//             Post jobs, manage applications, and find the best candidates.
//           </CardContent>
//          </Card>
//        </section>

//       <Accordion type="multiple" className="w-full">
//          {faqs.map((faq, index) => (
//           <AccordionItem key={index} value={`item-${index + 1}`}>
//             <AccordionTrigger>{faq.question}</AccordionTrigger>
//             <AccordionContent>{faq.answer}</AccordionContent>
//           </AccordionItem>
//         ))}
//       </Accordion>
//     </main>
//   );
// };

// export default LandingPage;

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import companies from "../data/companies.json";
import partners from "../data/partners.json";
import faqs from "../data/faq.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import Testimonials from "@/components/Testimonials"; // Make sure the component is exported as Testimonials (PascalCase)
import Contact from "@/components/Contact"; // Make sure the component is exported as Testimonials (PascalCase)

const LandingPage = () => {
  // Sample testimonials data
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      company: "Google",
      feedback: "This platform truly helped me land my dream job!",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.NqY3rNMnx2NXYo3KJfg43gHaHa&rs=1&pid=ImgDetMain",
    },
    {
      id: 2,
      name: "Jane Smith",
      company: "Amazon",
      feedback:
        "Great experience and excellent support throughout the process.",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.XGhgkK8C_IYHjzdWalWQ4QHaLE&rs=1&pid=ImgDetMain",
    },
    {
      id: 3,
      name: "David Lee",
      company: "Facebook",
      feedback:
        "I couldn't be happier with the opportunities this platform provides.",
      image: "https://iproedu.in/wp-content/uploads/2024/08/Pranav-Mate.png",
    },
    {
      id: 4,
      name: "Ben Lee",
      company: "Flipkart",
      feedback:
        "I couldn't be happier with the opportunities this platform provides.",
      image:
        "https://profile-images.xing.com/images/313d09e1e0c03c33d1c6f345415d4c30-1/manish-pittappillil-shibu.1024x1024.jpg",
    },
    {
      id: 5,
      name: "Sam Baraon",
      company: "Cisco",
      feedback:
        "I couldn't be happier with the opportunities this platform provides.",
      image: "https://iproedu.in/wp-content/uploads/2024/08/Pranav-Mate.png",
    },
    {
      id: 6,
      name: "Anurag ",
      company: "Meta",
      feedback:
        "I couldn't be happier with the opportunities this platform provides.",
      image:
        "https://webportal.easternuni.edu.bd/student/profile/student_images/163400034.jpg",
    },
    {
      id: 7,
      name: "Sharok ",
      company: "Apple",
      feedback:
        "I couldn't be happier with the opportunities this platform provides.",
      image:
        "https://fmsbd.com/wp-content/uploads/2020/07/S.M.-ZAHIRUL-ISLAM-JOHN-SR.-EXECUTIVE-OPERATION.jpeg",
    },
  ];

  return (
    <main className="flex flex-col gap-16 py-12 sm:py-24 container mx-auto px-4">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="gradient-title font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight py-4">
          Find Your Dream Job
        </h1>
        <p className="text-gray-400 text-lg sm:text-xl mt-4">
          Explore thousands of job listings or find the perfect candidate
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <Link to="/jobs">
            <Button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 text-lg rounded-xl">
              Find Jobs
            </Button>
          </Link>
          <Link to="/post-job">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 text-lg rounded-xl">
              Post a Job
            </Button>
          </Link>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <Link to="/career">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 text-lg rounded-xl">
              Skill Up
            </Button>
          </Link>
          <Link to="/mentors">
            <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 text-lg rounded-xl">
              Guidance & Referrals
            </Button>
          </Link>
        </div>
      </section>

      {/* Companies & Partners Carousel */}
      <Carousel plugins={[Autoplay({ delay: 2000 })]} className="w-full py-10">
        <CarouselContent className="flex gap-5 sm:gap-20 items-center">
          {companies.map(({ name, id, path }) => (
            <CarouselItem key={id} className="basis-1/3 lg:basis-1/6 ">
              <img
                src={path}
                alt={name}
                className="h-9 sm:h-14 object-contain"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <br />
        <br />
        <br /> {/* spacing between companies and partners */}
        <CarouselContent className="flex gap-5 sm:gap-20 items-center">
          {partners.map(({ name, id, path }) => (
            <CarouselItem key={id} className="basis-1/3 lg:basis-1/6 ">
              <img
                src={path}
                alt={name}
                className="h-9 sm:h-14 object-contain"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Job Seeker & Employer Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="font-bold">For Job Seekers</CardTitle>
          </CardHeader>
          <CardContent>
            Search and apply for jobs, track applications, and more.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="font-bold">For Employers</CardTitle>
          </CardHeader>
          <CardContent>
            Post jobs, manage applications, and find the best candidates.
          </CardContent>
        </Card>
      </section>
      
      {/* FAQ Section */}
      <Accordion type="multiple" className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <section className="py-10">
        <Testimonials reviews={reviews} />
      </section>

      <section id="contact" className="bg-black py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white">Contact Us</h2>
          <p className="text-white mt-2 text-lg">
            Have questions? Reach out to us, and we'll get back to you soon.
          </p>
          <form action="https://getform.io/f/bmdkjqoa" method="POST" className="bg-white p-8 rounded-lg shadow-xl mt-6 max-w-md mx-auto">
            <label className="block text-gray-700 font-medium mb-1">Full Name</label>
            <input type="text" name="name" className="w-full p-3 border rounded-lg mb-3 focus:ring-2 focus:ring-blue-400" placeholder="Your Name" required />
            
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input type="email" name="email" className="w-full p-3 border rounded-lg mb-3 focus:ring-2 focus:ring-blue-400" placeholder="Your Email" required />
            
            <label className="block text-gray-700 font-medium mb-1">Message</label>
            <textarea name="message" className="w-full p-3 border rounded-lg mb-3 focus:ring-2 focus:ring-blue-400" placeholder="Your Message" required></textarea>
            
            <button type="submit" className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-all mt-4">Send</button>
          </form>

          <div className="mt-6 text-white">
            <p>
              Email: <a href="mailto:contact@yourwebsite.com" className="text-blue-500">contact@Hiremitra.com</a>
            </p>
            <p>
              Phone: <a href="tel:+1234567890" className="text-blue-500">+91-9635348621</a>
            </p>
          </div>
        </div>
      </section>


        {/* <Contact /> */}
      
    </main>
  );
};

export default LandingPage;
