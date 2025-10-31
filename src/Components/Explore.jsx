import React from "react";
import { motion } from "framer-motion";
import {
  Stethoscope,
  Brain,
  HeartPulse,
  Ear,
  ShieldCheck,
} from "lucide-react";

export default function PopularSearches() {
  const items = [
    { name: "Dermatology", icon: <ShieldCheck className="w-6 h-6" /> },
    { name: "Internal Medicine", icon: <HeartPulse className="w-6 h-6" /> },
    { name: "Neurology", icon: <Brain className="w-6 h-6" /> },
    { name: "General Medicine", icon: <Stethoscope className="w-6 h-6" /> },
    { name: "Otolaryngology", icon: <Ear className="w-6 h-6" /> },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-blue-50 via-white to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
            Popular Searches on{" "}
            <span className="text-blue-600">We.care</span>
          </h3>
          <p className="text-slate-500 mt-3 text-base max-w-xl mx-auto">
            Explore our most searched healthcare specialities and find the right
            care for you.
          </p>
        </motion.div>

        {/* Scrollable / Grid Items */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative"
        >
          <div
            className="
              flex md:grid md:grid-cols-3 lg:grid-cols-5
              gap-6 items-center justify-start md:justify-center
              overflow-x-auto md:overflow-visible
              scrollbar-hide py-4 px-2 snap-x snap-mandatory scroll-smooth
            "
          >
            {items.map((it, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.07, rotate: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                viewport={{ once: true }}
                className="
                  min-w-[160px] md:min-w-0
                  snap-center flex flex-col items-center gap-3
                  bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-blue-100
                  p-6 hover:-translate-y-2 hover:shadow-2xl
                  transition-all duration-300 cursor-pointer
                "
              >
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="
                    w-14 h-14 flex items-center justify-center rounded-full
                    bg-gradient-to-tr from-blue-500 to-blue-300 text-white shadow-md
                  "
                >
                  {it.icon}
                </motion.div>
                <div className="text-sm md:text-base font-semibold text-gray-800">
                  {it.name}
                </div>
                <div className="text-xs text-slate-400">Explore Doctors →</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Floating Background Bubbles */}
        <motion.div
          className="absolute -top-10 left-10 w-32 h-32 bg-blue-200 opacity-20 blur-3xl rounded-full"
          animate={{ y: [0, -15, 0], scale: [1, 1.05, 1] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-10 w-40 h-40 bg-blue-300 opacity-10 blur-3xl rounded-full"
          animate={{ y: [0, 20, 0], scale: [1, 1.1, 1] }}
          transition={{
            duration: 7,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
      </div>
    </section>
  );
}
