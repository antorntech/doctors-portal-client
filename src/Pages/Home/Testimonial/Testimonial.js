import React from "react";
import quote from "../../../assets/icons/quote.svg";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import SingleTestimonial from "./SingleTestimonial/SingleTestimonial";

const Testimonial = () => {
  const testimonials = [
    {
      _id: 1,
      name: "Willian Fruid",
      nickName: "Chione",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people1,
    },
    {
      _id: 2,
      name: "Rosa Jenny",
      nickName: "Sweety",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people2,
    },
    {
      _id: 3,
      name: "Jiya Samira",
      nickName: "Miuty",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people3,
    },
  ];
  return (
    <section className="mt-16">
      <div className="testimonial-header flex justify-between items-start">
        <div>
          <h3 className="text-3xl lg:text-2xl text-primary">Testimonial</h3>
          <h2 className="text-3xl lg:text-4xl">What Our Patients Says</h2>
        </div>
        <div>
          <img className="w-40" src={quote} alt="" />
        </div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:mt-10">
        {testimonials.map((testimonial) => (
          <SingleTestimonial
            key={testimonial._id}
            testimonial={testimonial}
          ></SingleTestimonial>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
