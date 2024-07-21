import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-full bg-[#0a192f] flex justify-center items-center p-4 pt-[300px] "
    >
      <form
        method="POST"
        action="https://getform.io/f/nbdevzqa"
        className="flex flex-col max-w-[600px] w-full "
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-purple-600 text-gray-300 ">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            // Submit the form below or shoot me an email -
            jackbadger16@gmail.com
          </p>
        </div>
        <input
          className=" rounded bg-[#ccd6f6] p-2 "
          type="text"
          placeholder="Name"
          name="name "
        />
        <input
          className="rounded my-4 p-2 bg-[#ccd6f6] "
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="rounded bg-[#ccd6f6] p-2 "
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className=" rounded text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center ">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
