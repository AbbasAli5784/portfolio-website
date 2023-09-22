import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate(formData);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
     
      console.log("Form Data Submitted", formData);
    }
  };

  const validate = (data) => {
    let newErrors = {};
    if (!data.name) newErrors.name = "Name is required!";
    if (!data.email) newErrors.email = "Email is required!";
    else if (!/\S+@\S+\.\S+/.test(data.email))
      newErrors.email = "Email is invalid!";
    if (!data.message) newErrors.message = "Message is required!";
    return newErrors;
  };

  return (
    <div
      name="contact"
      className="contact-page w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 "
    >
      <form
        onSubmit={handleSubmit}
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Submit the form below or shoot me an email at abbasali5784@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className="text-red-500">{errors.name}</p>}
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="text-red-500">{errors.email}</p>}
        <textarea
          className="bg-[#ccd6f6] p-2 "
          name="message"
          rows="10"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        {errors.message && <p className="text-red-500">{errors.message}</p>}
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center ">
          Lets Collaborate!
        </button>
      </form>
    </div>
  );
};

export default Contact;
