import React from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const socialIcons = [Facebook, Instagram, Linkedin, Twitter];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <footer className="w-full bg-gradient-to-t from-blue-50 to-white text-gray-700 py-16 px-6 md:px-20 mt-12 overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10"
      >
        {/* === Brand === */}
        <motion.div variants={fadeUp}>
          <h2 className="text-3xl font-extrabold text-blue-600 mb-3 tracking-tight">
            V.SK care
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Providing trusted healthcare information and connecting you with
            top doctors, hospitals, and clinics across Tamil Nadu.
          </p>

          <div className="flex gap-4 mt-6">
            {socialIcons.map((Icon, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Icon className="w-6 h-6 text-blue-600 hover:text-blue-800 cursor-pointer transition" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* === Quick Links === */}
        <motion.div variants={fadeUp}>
          <h3 className="font-semibold text-gray-900 mb-3 text-lg">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-600">
            {["Find a Doctor", "Find a Hospital", "Health A to Z", "Consult Online"].map(
              (item, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 5, color: "#2563eb" }}
                  className="cursor-pointer transition-all"
                >
                  {item}
                </motion.li>
              )
            )}
          </ul>
        </motion.div>

        {/* === Support === */}
        <motion.div variants={fadeUp}>
          <h3 className="font-semibold text-gray-900 mb-3 text-lg">Support</h3>
          <ul className="space-y-2 text-gray-600">
            {[
              "Help Center",
              "Terms & Conditions",
              "Privacy Policy",
              "Contact Us",
            ].map((item, i) => (
              <motion.li
                key={i}
                whileHover={{ x: 5, color: "#2563eb" }}
                className="cursor-pointer transition-all"
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* === Contact Info === */}
        <motion.div variants={fadeUp}>
          <h3 className="font-semibold text-gray-900 mb-3 text-lg">
            Get in Touch
          </h3>
          <p className="text-gray-600 text-sm">
            SKCare Healthcare Pvt. Ltd. <br />
            No. 45, Anna Salai, Guindy, <br />
            Chennai, Tamil Nadu, 600032
          </p>
          <p className="text-gray-600 text-sm mt-2">
            Email: <span className="text-blue-600">support@skcaretn.com</span>
          </p>
          <p className="text-gray-600 text-sm">Phone: +91 90909 87654</p>
        </motion.div>
      </motion.div>

      {/* === Copyright === */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="border-t border-gray-200 mt-10 pt-6 text-center text-gray-500 text-sm"
      >
        © {new Date().getFullYear()}{" "}
        <span className="text-blue-600 font-semibold">We.care Tamil Nadu</span>{" "}
        — All rights reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
