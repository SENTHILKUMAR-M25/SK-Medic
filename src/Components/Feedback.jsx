import React, { useState, useEffect } from "react";
import { Star, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import patient from "../assets/care.png";

const feedbacks = [
  {
    name: "Suresh Kumar",
    location: "Madurai, Tamil Nadu",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    rating: 5,
    text: "Excellent service! The doctor listened patiently and gave a perfect diagnosis.",
  },
  {
    name: "Priya Nandhini",
    location: "Chennai, Tamil Nadu",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    rating: 4,
    text: "Booking appointments through We.care was very easy. The service was on time.",
  },
  {
    name: "Vinoth Raj",
    location: "Coimbatore, Tamil Nadu",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
    rating: 5,
    text: "A wonderful experience! I could consult my doctor online without any delay.",
  },
  {
    name: "Meena Lakshmi",
    location: "Tiruchirapalli, Tamil Nadu",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    rating: 5,
    text: "Very reliable medical service. The doctor was friendly and supportive.",
  },
  {
    name: "Arun Balan",
    location: "Salem, Tamil Nadu",
    image: "https://randomuser.me/api/portraits/men/35.jpg",
    rating: 4,
    text: "The online consultation was very convenient. I could talk to the doctor from home.",
  },
];

export default function Feedback() {
  const [current, setCurrent] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    name: "",
    location: "",
    rating: "5",
    message: "",
  });

  // Auto-slide every 5s
  useEffect(() => {
    const timer = setInterval(
      () => setCurrent((prev) => (prev + 1) % feedbacks.length),
      5000
    );
    return () => clearInterval(timer);
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${form.name}! Your feedback has been submitted.`);
    setForm({ name: "", location: "", rating: "5", message: "" });
    setShowForm(false);
  };

  return (
    <section
      id="feedback"
      className="relative w-full bg-gradient-to-b from-white to-blue-50 py-16 md:py-24 px-4 sm:px-8 lg:px-20 text-center font-[Poppins] overflow-hidden"
    >
      {/* Decorative Backgrounds */}
      <div className="absolute top-10 left-10 w-40 sm:w-56 h-40 sm:h-56 bg-blue-200 blur-3xl rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-56 sm:w-72 h-56 sm:h-72 bg-blue-300 blur-3xl rounded-full opacity-20 animate-pulse"></div>

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 relative z-10">
        Our Patients' Feedback
      </h2>
      <p className="text-gray-600 mt-3 text-sm sm:text-base max-w-2xl mx-auto relative z-10">
        Hear what our patients from Tamil Nadu say about We.care services.
      </p>

      {/* === Carousel Section === */}
      <div className="mt-12 md:mt-16 flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-12 relative z-10">
        {/* Left Animated Image */}
        <motion.div
          className="flex-1 flex justify-center w-full"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.img
            src={patient}
            alt="Patient"
            className="w-60 sm:w-72 md:w-80 lg:w-96 rounded-3xl object-cover shadow-lg"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Right Feedback Card */}
        <div className="flex-1 text-left w-full max-w-md sm:max-w-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-white/80 backdrop-blur-md p-5 sm:p-6 rounded-2xl shadow-md border border-blue-100"
            >
              <div className="flex items-center gap-4">
                <img
                  src={feedbacks[current].image}
                  alt={feedbacks[current].name}
                  className="w-12 sm:w-16 h-12 sm:h-16 rounded-full shadow-md"
                />
                <div>
                  <h4 className="font-semibold text-base sm:text-lg text-gray-900">
                    {feedbacks[current].name}
                  </h4>
                  <p className="text-gray-500 text-xs sm:text-sm">
                    {feedbacks[current].location}
                  </p>
                  <div className="flex text-yellow-400 mt-1">
                    {[...Array(feedbacks[current].rating)].map((_, i) => (
                      <Star key={i} fill="currentColor" stroke="none" size={16} />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mt-4 text-sm sm:text-base italic">
                “{feedbacks[current].text}”
              </p>

              {/* Pagination Dots */}
              <div className="flex items-center gap-2 pt-4 justify-start flex-wrap">
                {feedbacks.map((_, i) => (
                  <motion.span
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all ${
                      current === i ? "bg-blue-600 scale-110" : "bg-gray-300"
                    }`}
                    whileHover={{ scale: 1.3 }}
                  ></motion.span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* === Feedback Button === */}
      <div className="mt-12 text-center relative z-10">
        <motion.button
          onClick={() => setShowForm(true)}
          className="px-6 sm:px-8 py-2.5 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold shadow-lg transition-transform text-sm sm:text-base"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Give Feedback
        </motion.button>
      </div>

      {/* === Feedback Modal === */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 px-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-5 sm:p-6 relative border border-slate-100"
            >
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-3 right-3 text-slate-500 hover:text-slate-800 transition"
              >
                <X size={22} />
              </button>

              <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 text-center mb-6">
                Share Your Feedback
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-2 border border-slate-200 rounded-md text-sm sm:text-base focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                  <input
                    type="text"
                    name="location"
                    value={form.location}
                    onChange={handleChange}
                    placeholder="Your City (e.g., Chennai)"
                    required
                    className="w-full px-4 py-2 border border-slate-200 rounded-md text-sm sm:text-base focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Rating
                  </label>
                  <select
                    name="rating"
                    value={form.rating}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-200 rounded-md text-sm sm:text-base focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  >
                    {[5, 4, 3, 2, 1].map((r) => (
                      <option key={r} value={r}>
                        {r} Star{r > 1 && "s"}
                      </option>
                    ))}
                  </select>
                </div>

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your feedback..."
                  rows="4"
                  required
                  className="w-full px-4 py-2 border border-slate-200 rounded-md text-sm sm:text-base focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
                ></textarea>

                <div className="text-center">
                  <motion.button
                    type="submit"
                    className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium shadow-md text-sm sm:text-base"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Submit Feedback
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
