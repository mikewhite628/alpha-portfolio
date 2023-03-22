import React from "react";

function Contact() {
  return (
    <div
      id="contact"
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-offset="300"
      className="flex justify-center text-center text-white flex-col my-24 mx-6"
    >
      <h1 className="text-5xl font-bebas mb-6">Get In Touch</h1>
      <p className="sm:w-96 mx-auto text-lg">
        Although I’m not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I’ll
        try my best to get back to you!
      </p>
      <a href="mailto:mikewhite628@gmail.com">
        <button
          className="bg-indigo-500 py-2 px-4 rounded shadow w-42 mt-6 mx-auto hover:bg-indigo-600 
      hover:scale-110 duration-300"
        >
          {"Say Hello"}
        </button>
      </a>
    </div>
  );
}

export default Contact;
