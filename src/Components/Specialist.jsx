import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import doc1 from "../assets/consult.png";
import doc2 from "../assets/consult.png";
import doc3 from "../assets/consult.png";
import doc4 from "../assets/consult.png";
import doc5 from "../assets/consult.png";
import doc6 from "../assets/consult.png";
import doc7 from "../assets/consult.png";
import doc8 from "../assets/consult.png";

export default function SpecialistsGrid() {
  const specialists = [
    { name: "Dr. Leslie Alexander", role: "Dental Surgery", img: doc1 },
    { name: "Dr. Kathryn Murphy", role: "Podiatric Medicine", img: doc2 },
    { name: "Dr. Robert Fox", role: "Gastroenterologist", img: doc3 },
    { name: "Dr. Esther Howard", role: "Thoracic Surgeon", img: doc4 },
    { name: "Dr. Albert Flores", role: "Neurologist", img: doc5 },
    { name: "Dr. Jerome Bell", role: "Gynecologist", img: doc6 },
    { name: "Dr. Arlene McCoy", role: "Cardiologist", img: doc7 },
    { name: "Dr. Jenny Wilson", role: "Dermatologist", img: doc8 },
  ];

  const problemsByRole = {
    "Dental Surgery": ["Tooth Pain", "Cavity Filling", "Teeth Whitening", "Gum Bleeding", "Dental Cleaning"],
    "Podiatric Medicine": ["Foot Pain", "Ankle Injury", "Flat Feet", "Heel Pain", "Toenail Infection"],
    Gastroenterologist: ["Acid Reflux", "Abdominal Pain", "Constipation", "IBS", "Liver Problems"],
    "Thoracic Surgeon": ["Chest Pain", "Lung Surgery", "Breathing Issues", "Thoracic Tumor", "Esophagus Disorder"],
    Neurologist: ["Headache", "Migraine", "Seizures", "Memory Loss", "Sleep Disorder"],
    Gynecologist: ["Menstrual Pain", "Pregnancy Checkup", "PCOS", "Vaginal Infection", "Hormonal Imbalance"],
    Cardiologist: ["Chest Pain", "High BP", "Irregular Heartbeat", "Shortness of Breath", "Cholesterol Issues"],
    Dermatologist: ["Acne", "Hair Fall", "Eczema", "Pigmentation", "Skin Allergy"],
  };

  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    problem: "",
    date: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Appointment booked successfully with ${selectedDoctor.name}!`);
    setSelectedDoctor(null);
    setFormData({ name: "", contact: "", problem: "", date: "" });
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-white via-blue-50/30 to-blue-100/20 overflow-hidden">
      {/* === Floating Background === */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-72 h-72 bg-blue-200/30 blur-3xl rounded-full top-10 left-10 animate-pulse"></div>
        <div className="absolute w-80 h-80 bg-blue-300/20 blur-3xl rounded-full bottom-0 right-10 animate-pulse"></div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto text-center px-4 sm:px-6 md:px-12"
      >
        <motion.h3
          variants={fadeUp}
          className="text-3xl md:text-4xl font-bold text-slate-900"
        >
          Meet Our Specialists
        </motion.h3>
        <motion.p
          variants={fadeUp}
          className="text-slate-500 mt-3 max-w-xl mx-auto"
        >
          Book an appointment with experienced medical professionals instantly.
        </motion.p>

        {/* === Doctors Grid === */}
        <motion.div
          variants={fadeUp}
          className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8"
        >
          {specialists.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 250 }}
              className="bg-white rounded-2xl p-4 shadow-md hover:shadow-2xl border border-blue-100 transition-all"
            >
              <div className="aspect-square rounded-xl overflow-hidden bg-slate-50">
                <motion.img
                  src={s.img}
                  alt={s.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
              <div className="mt-4">
                <div className="text-slate-800 font-semibold text-base md:text-lg">
                  {s.name}
                </div>
                <div className="text-sm text-blue-600 font-medium mt-1">
                  {s.role}
                </div>
              </div>
              <button
                onClick={() => setSelectedDoctor(s)}
                className="w-full mt-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium transition"
              >
                Book Appointment
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* === Popup Form === */}
        <AnimatePresence>
          {selectedDoctor && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-8 relative"
              >
                <button
                  onClick={() => setSelectedDoctor(null)}
                  className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 text-xl font-bold"
                >
                  ×
                </button>

                <h4 className="text-2xl font-semibold text-slate-900 mb-6 text-center">
                  Book Appointment
                </h4>

                {/* === Doctor Info === */}
                <div className="bg-blue-50 p-4 rounded-lg mb-6 text-left border border-blue-100">
                  <h5 className="font-semibold text-slate-800">
                    Doctor: {selectedDoctor.name}
                  </h5>
                  <p className="text-blue-600 text-sm">{selectedDoctor.role}</p>
                </div>

                {/* === Form === */}
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Enter your name"
                      className="w-full border border-slate-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Contact Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.contact}
                      onChange={(e) =>
                        setFormData({ ...formData, contact: e.target.value })
                      }
                      placeholder="Enter your contact number"
                      className="w-full border border-slate-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Problem
                    </label>
                    <select
                      required
                      value={formData.problem}
                      onChange={(e) =>
                        setFormData({ ...formData, problem: e.target.value })
                      }
                      className="w-full border border-slate-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    >
                      <option value="">Select a problem</option>
                      {problemsByRole[selectedDoctor.role]?.map((p, i) => (
                        <option key={i} value={p}>
                          {p}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Appointment Date
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) =>
                        setFormData({ ...formData, date: e.target.value })
                      }
                      className="w-full border border-slate-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    className="w-full mt-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition"
                  >
                    Confirm Appointment
                  </motion.button>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
