import React from "react";

const SingleTestimonial = ({ testimonial }) => {
  return (
    <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
      <div class="flex justify-center md:justify-end -mt-16">
        <img
          class="w-20 h-20 object-cover rounded-full border-2 border-primary"
          src={testimonial.img}
        />
      </div>
      <div>
        <h2 class="text-gray-800 text-3xl font-semibold">{testimonial.name}</h2>
        <p class="mt-2 text-gray-600">{testimonial.description}</p>
      </div>
      <div class="flex justify-end mt-4">
        <h4 class="text-xl font-medium text-indigo-500">
          {testimonial.nickName}
        </h4>
      </div>
    </div>
  );
};

export default SingleTestimonial;
