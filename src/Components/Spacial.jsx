import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroDoctor from "../assets/consult.png";

export default function Special() {
  const [showForm, setShowForm] = useState(false);

  const points = [
    "24/7 access – reach out whenever you need",
    "Eliminate commute time and scheduling hassles",
    "Flexible plans to meet your needs and lifestyle",
    "Seamlessly switch therapists, at no extra cost",
    "Save money while receiving high-quality care",
  ];

  const [form, setForm] = useState({
    name: "",
    contact: "",
    problem: "",
    date: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${form.name}, your consultation request has been submitted!`);
    setShowForm(false);
    setForm({ name: "", contact: "", problem: "", date: "", message: "" });
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden font-[Poppins]">
      {/* === Background Animation Circles === */}
      <div className="absolute top-10 left-0 w-48 sm:w-60 h-48 sm:h-60 bg-blue-100 rounded-full blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-60 sm:w-72 h-60 sm:h-72 bg-blue-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center px-4 sm:px-6 md:px-12 lg:px-20">
        {/* === Left Image === */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center lg:justify-start order-1 lg:order-none"
        >
          <motion.img
            src={heroDoctor}
            alt="Doctor consultation"
            className="w-[80%] sm:w-[70%] md:w-[90%] lg:w-full max-w-sm md:max-w-md rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500"
            whileHover={{ scale: 1.05, rotate: 1 }}
          />
        </motion.div>

        {/* === Right Content === */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center lg:text-left"
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            Why Choose <span className="text-blue-600">SK.care</span>
          </h3>
          <p className="text-slate-500 mt-3 text-sm sm:text-base leading-relaxed max-w-lg mx-auto lg:mx-0">
            SKCare gives you the tools and guidance you need to take charge of
            your health with confidence and convenience.
          </p>

          <ul className="mt-8 space-y-4 sm:space-y-5">
            {points.map((line, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="flex gap-4 items-start justify-center lg:justify-start group hover:translate-x-1 transition-transform"
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-semibold text-base sm:text-lg shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  ✓
                </div>
                <div className="text-gray-700 font-medium text-sm sm:text-base">
                  {line}
                </div>
              </motion.li>
            ))}
          </ul>

          <motion.div
            className="mt-8 sm:mt-10"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <button
              onClick={() => setShowForm(true)}
              className="px-6 sm:px-8 py-2.5 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg transition-all font-medium text-sm sm:text-base"
            >
              Get Free Consultation
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* === Popup Form === */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white w-full max-w-md sm:max-w-lg p-6 sm:p-8 rounded-2xl shadow-2xl relative border border-gray-100 overflow-y-auto max-h-[90vh]"
            >
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl"
              >
                ✕
              </button>

              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">
                Free Consultation Form
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name and Contact */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none text-sm sm:text-base"
                  />
                  <input
                    type="tel"
                    name="contact"
                    value={form.contact}
                    onChange={handleChange}
                    placeholder="Contact Number"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none text-sm sm:text-base"
                  />
                </div>

                {/* Problem Type */}
                <div>
                  <select
                    name="problem"
                    value={form.problem}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none text-sm sm:text-base text-gray-700"
                  >
                    <option value="">Select Problem Type</option>
                    <option>Fever</option>
                    <option>Headache</option>
                    <option>Skin Allergy</option>
                    <option>Back Pain</option>
                    <option>General Checkup</option>
                  </select>
                </div>

                {/* Appointment Date */}
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none text-sm sm:text-base"
                />

                {/* Message */}
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Briefly describe your symptoms..."
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none text-sm sm:text-base"
                ></textarea>

                <div className="text-center pt-2">
                  <button
                    type="submit"
                    className="px-5 sm:px-6 py-2 sm:py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow-md font-medium text-sm sm:text-base transition-all"
                  >
                    Submit Consultation
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
