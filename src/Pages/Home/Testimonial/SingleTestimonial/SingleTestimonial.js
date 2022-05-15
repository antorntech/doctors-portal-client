import React from "react";

const SingleTestimonial = ({ testimonial }) => {
  return (
    <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg mt-28 my-10 lg:my-20">
      <div className="flex justify-center md:justify-end -mt-16">
        <img
          className="w-20 h-20 object-cover rounded-full border-2 border-primary"
          src={testimonial.img}
        />
      </div>
      <div>
        <h2 className="text-gray-800 text-3xl font-semibold">
          {testimonial.name}
        </h2>
        <p className="mt-2 text-gray-600">{testimonial.description}</p>
      </div>
      <div className="flex justify-end mt-4">
        <h4 className="text-xl font-medium text-primary">
          {testimonial.nickName}
        </h4>
      </div>
    </div>
  );
};

export default SingleTestimonial;
