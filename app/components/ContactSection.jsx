import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill out all fields.");
      return;
    }

    // Handle form submission logic here (API call, etc.)
    console.log("Form submitted:", formData);
    alert("Message sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="flex py-16 bg-gray-100 relative overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div
        className="paintBg bg-main rounded-2xl absolute h-full top-0 left-0 lg:left-[-350px] w-[100%] lg:w-[70%] lg:skew-y-[15deg] lg:skew-x-[50deg] z-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      ></motion.div>

      <div className="justify-center items-center relative z-10 flex flex-col lg:flex-row m-auto w-[90%] md:w-[80%] lg:w-[80%] gap-8">
        {/* Left Content */}
        <motion.div
          className="flex-1 text-white z-10"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="ClinicaLogo">
            <img
              src="/clinicaLogo.png"
              alt="Clinica Logo"
              className="w-40 mb-4 rounded-3xl"
            />
            <p className="text-white text-4xl font-bold">Your trusted clinic</p>
            <p className="mt-4">
              Regístrate y disfruta de todas las ventajas que te ofrecemos,
              introduce tus platos y empieza la transformación de tu restaurante.
            </p>
          </div>
        </motion.div>

        {/* Right Form */}
        <motion.div
          className="flex-1 bg-white p-6 rounded-2xl shadow-2xl w-[100%]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <motion.input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="p-3 border border-gray-300 rounded-2xl"
              required
              whileHover={{ scale: 1.02 }}
            />
            <motion.input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="p-3 border border-gray-300 rounded-2xl"
              required
              whileHover={{ scale: 1.02 }}
            />
            <motion.input
              type="number"
              name="number"
              value={formData.number}
              onChange={handleChange}
              placeholder="Your Number"
              className="p-3 border border-gray-300 rounded-2xl"
              required
              whileHover={{ scale: 1.02 }}
            />
            <motion.textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={5}
              className="p-3 border border-gray-300 rounded-2xl"
              required
              whileHover={{ scale: 1.02 }}
            ></motion.textarea>
            <motion.button
              type="submit"
              className="bg-main hover:bg-[#005899] text-white py-2 px-4 rounded transition-colors"
              // whileHover={{ scale: 1.09 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
