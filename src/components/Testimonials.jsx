// import { useState } from "react";
// import testimonialCard from "./testimonialCard";
// import { FiChevronLeft } from "react-icons/fi";
// import { FiChevronRight } from "react-icons/fi";
// const Testimonials = (props) => {
//   let review = props.reviews;
//   const [index,setIndex]=useState(0);
//   function leftShiftHandler(){
//       if(index-1<0){
//         setIndex(review.length-1);
//       }
//       else{
//         setIndex(index-1);
//       }
//   }
//   function rightShiftHandler(){
//       if(index+1>=review.length){
//         setIndex(0);
//       }
//       else{
//         setIndex(index+1);
//       }
//   }
//   function surpriseHandler(){
//       let randomIndex=Math.floor(Math.random()*review.length);
//       setIndex(randomIndex);
//   }
//   return (
//     <div className="flex flex-col w-[85vw] md:w-[700px] bg-white justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md">
//       <testimonialCard review={review[index]}></testimonialCard>

//       <div className="flex text-3xl mt-5 gap-3 text-violet-400 font-bold text-center mx-auto ">
//         <button  onClick={leftShiftHandler} className="cursor-pointer hover:text-violet-500 "><FiChevronLeft></FiChevronLeft></button>
//         <button  onClick={rightShiftHandler} className="cursor-pointer hover:text-violet-500 "> <FiChevronRight></FiChevronRight></button>
//       </div>
//       <div className="mt-6">
//         <button onClick={surpriseHandler} className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg">Surprise me</button>
//       </div>
//     </div>
//   );
// };
// export default Testimonials;



// import React from "react";
// import { Link } from "react-router-dom";
// import { Button } from "@/components/ui/button";

// const Testimonials = ({ reviews }) => {
//   // Fallback sample data if no reviews prop is provided
//   const testimonialsData =
//     reviews && reviews.length > 0
//       ? reviews
//       : [
//           {
//             id: 1,
//             name: "John Doe",
//             company: "Google",
//             feedback:
//               "This platform helped me connect with amazing mentors!",
//             image: "https://via.placeholder.com/150",
//           },
//           {
//             id: 2,
//             name: "Jane Smith",
//             company: "Amazon",
//             feedback:
//               "Great experience! The mentors are very knowledgeable.",
//             image: "https://via.placeholder.com/150",
//           },
//           {
//             id: 3,
//             name: "David Lee",
//             company: "Microsoft",
//             feedback:
//               "I couldn't be happier with the opportunities this platform provides.",
//             image: "https://via.placeholder.com/150",
//           },
//         ];

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold text-center mb-6 text-white">
//         Testimonials
//       </h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {testimonialsData.map((testimonial) => (
//           <div
//             key={testimonial.id}
//             className="bg-gray-800 border p-6 rounded-lg shadow-lg"
//           >
//             <img
//               src={testimonial.image}
//               alt={testimonial.name}
//               className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
//             />
//             <h2 className="text-xl font-semibold text-center text-green-400">
//               {testimonial.name}
//             </h2>
//             <p className="text-center text-gray-400">{testimonial.company}</p>
//             <p className="mt-4 text-center text-gray-300">
//               {testimonial.feedback}
//             </p>
//           </div>
//         ))}
//       </div>
     
//     </div>
//   );
// };

// export default Testimonials;



import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Testimonials = ({ reviews }) => {
  // Fallback sample data if no reviews prop is provided
  const testimonialsData =
    reviews && reviews.length > 0
      ? reviews
      : [
          {
            id: 1,
            name: "John Doe",
            company: "Google",
            feedback: "This platform helped me connect with amazing mentors!",
            image: "https://via.placeholder.com/150",
          },
          {
            id: 2,
            name: "Jane Smith",
            company: "Amazon",
            feedback: "Great experience! The mentors are very knowledgeable.",
            image: "https://via.placeholder.com/150",
          },
          {
            id: 3,
            name: "David Lee",
            company: "Microsoft",
            feedback:
              "I couldn't be happier with the opportunities this platform provides.",
            image: "https://via.placeholder.com/150",
          },
          {
            id: 4,
            name: "Alice Johnson",
            company: "Apple",
            feedback: "Amazing results and wonderful support.",
            image: "https://via.placeholder.com/150",
          },
          {
            id: 5,
            name: "Robert Brown",
            company: "Facebook",
            feedback:
              "An exceptional experience with remarkable mentorship.",
            image: "https://via.placeholder.com/150",
          },
        ];

  return (
    <div className="container mx-auto px-4 py-8" style={{ backgroundColor: "#020817" }}>
      <h1 className="text-3xl font-bold text-center mb-6 text-white">
        Testimonials
      </h1>
      <Carousel
        plugins={[Autoplay({ delay: 2000, stopOnInteraction: false })]}
        className="w-full"
      >
        <CarouselContent className="flex gap-6">
          {testimonialsData.map((testimonial) => (
            <CarouselItem
              key={testimonial.id}
              className="flex flex-col items-center border p-6 rounded-lg shadow-lg min-w-[300px]"
              style={{ backgroundColor: "#020817" }}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mb-4 object-cover"
              />
              <h2 className="text-xl font-semibold text-center text-green-400">
                {testimonial.name}
              </h2>
              <p className="text-center text-gray-400">{testimonial.company}</p>
              <p className="mt-4 text-center text-gray-300">
                {testimonial.feedback}
              </p>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Testimonials;
