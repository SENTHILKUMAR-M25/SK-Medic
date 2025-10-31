import React from "react";
import { motion } from "framer-motion";
import heroDoctor from "../assets/home.png";
import {
  Pill,
  Scissors,
  Syringe,
  TabletSmartphone,
  Stethoscope,
} from "lucide-react";

export default function Hero() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const floatTransition = {
    duration: 5,
    repeat: Infinity,
    repeatType: "mirror",
    ease: "easeInOut",
  };

  return (
    <section
      id="home"
      className="relative mt-2 bg-linear-to-b from-white via-blue-50/20 to-white py-16 sm:py-20 md:py-24 overflow-hidden"
    >
      <motion.div
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center px-4 sm:px-6 md:px-12 lg:px-20"
      >
        {/* ===== Left Section ===== */}
        <motion.div
          variants={fadeUp}
          className="order-2 md:order-1 space-y-6 sm:space-y-8 text-center md:text-left"
        >
          <motion.h1
            variants={fadeUp}
            className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight"
          >
            Find the right doctor{" "}
            <span className="block text-blue-600 mt-1">
              right at your fingertips
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-slate-600 text-base sm:text-lg max-w-md mx-auto md:mx-0 leading-relaxed"
          >
            Wecare helps you connect with verified healthcare professionals in
            seconds. Save time, find trusted doctors, and take control of your
            health today.
          </motion.p>

          <motion.div variants={fadeUp} className="pt-4 sm:pt-6">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 sm:px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg font-medium text-sm sm:text-base"
            >
              Get Started Now
            </motion.button>
          </motion.div>
        </motion.div>

        {/* ===== Right Section (Doctor + Floating Tools) ===== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="order-1 md:order-2 relative flex justify-center md:justify-end w-full"
        >
          <div className="relative w-3/4 sm:w-2/3 md:w-full max-w-sm sm:max-w-md lg:max-w-lg">
            {/* Doctor Image */}
            <motion.img
              src={heroDoctor}
              alt="doctor"
              className="relative z-10 w-full rounded-full shadow-2xl border-4 border-white object-cover"
              animate={{ y: [0, -15, 0] }}
              transition={floatTransition}
            />

            {/* Floating Icons */}
            <motion.div
              className="absolute top-8 left-0 text-blue-600"
              animate={{ y: [0, -15, 0], rotate: [0, 10, -10, 0] }}
              transition={{ ...floatTransition, duration: 6 }}
            >
              <Pill size={34} className="sm:w-10 sm:h-10" />
            </motion.div>

            <motion.div
              className="absolute bottom-2 left-8 text-rose-500"
              animate={{ y: [0, 20, 0], rotate: [0, -8, 8, 0] }}
              transition={{ ...floatTransition, duration: 7 }}
            >
              <Scissors size={34} className="sm:w-10 sm:h-10" />
            </motion.div>

            <motion.div
              className="absolute top-6 right-6 text-green-500"
              animate={{ y: [0, -25, 0], rotate: [0, 12, -12, 0] }}
              transition={{ ...floatTransition, duration: 5 }}
            >
              <Syringe size={36} className="sm:w-11 sm:h-11" />
            </motion.div>

            <motion.div
              className="absolute bottom-10 right-4 text-blue-400"
              animate={{ y: [0, -15, 0], rotate: [0, 6, -6, 0] }}
              transition={{ ...floatTransition, duration: 6.5 }}
            >
              <TabletSmartphone size={38} className="sm:w-11 sm:h-11" />
            </motion.div>

            <motion.div
              className="absolute top-1/3 -left-6 text-indigo-500"
              animate={{ y: [0, -10, 0], rotate: [0, 8, -8, 0] }}
              transition={{ ...floatTransition, duration: 8 }}
            >
              <Stethoscope size={38} className="sm:w-11 sm:h-11" />
            </motion.div>

            {/* Glow Background */}
            <div className="absolute -right-12 -top-12 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] rounded-full bg-linear-to-tr from-blue-100 to-blue-200 blur-3xl opacity-70"></div>
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative Background Circles */}
      <div className="absolute -bottom-20 -left-10 w-52 sm:w-72 h-52 sm:h-72 bg-blue-100 blur-3xl opacity-50 rounded-full"></div>
      <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-blue-200 blur-3xl opacity-40 rounded-full"></div>
    </section>
  );
}
