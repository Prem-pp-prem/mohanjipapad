"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const benefits = [
  {
    id: "crispy-texture",
    icon: "🔥",
    title: "Kurkura Texture",
    titleEn: "Perfectly Crispy",
    description:
      "Har ek papad itna kurkura hai ki ek baar khaoge toh ruk nahi payenge! Sun-dried naturally for that perfect crunch.",
    color: "#8B1A1A",
    bgGradient: "linear-gradient(135deg, rgba(139,26,26,0.08), rgba(139,26,26,0.02))",
    border: "rgba(139, 26, 26, 0.2)",
    iconBg: "rgba(139, 26, 26, 0.1)",
  },
  {
    id: "authentic-taste",
    icon: "😋",
    title: "Authentic Bikaneri Taste",
    titleEn: "Asli Swad",
    description:
      "Wahi purana Bikaner ka swad — generations ki recipe, parampara ka andaz. Koi artificial flavor nahi, sirf asli desi masale!",
    color: "#B8860B",
    bgGradient: "linear-gradient(135deg, rgba(184,134,11,0.08), rgba(184,134,11,0.02))",
    border: "rgba(184, 134, 11, 0.2)",
    iconBg: "rgba(184, 134, 11, 0.1)",
  },
  {
    id: "healthy-snacking",
    icon: "💚",
    title: "Healthy Snacking",
    titleEn: "Sehat ke Liye Achha",
    description:
      "No preservatives, no artificial colors — sirf shuddh urad dal aur natural spices. Healthy snacking ka best choice!",
    color: "#1A4A2E",
    bgGradient: "linear-gradient(135deg, rgba(26,74,46,0.08), rgba(26,74,46,0.02))",
    border: "rgba(26, 74, 46, 0.2)",
    iconBg: "rgba(26, 74, 46, 0.1)",
  },
  {
    id: "perfect-with-meals",
    icon: "🍽️",
    title: "Perfect with Every Meal",
    titleEn: "Khane ke Saath Perfect",
    description:
      "Dal-chawal ho, sabzi-roti ho, ya chai ke saath — Mohan Ji Papad har khaane ka swad double kar deta hai!",
    color: "#6B3A2A",
    bgGradient: "linear-gradient(135deg, rgba(107,58,42,0.08), rgba(107,58,42,0.02))",
    border: "rgba(107, 58, 42, 0.2)",
    iconBg: "rgba(107, 58, 42, 0.1)",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Benefits() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="benefits"
      className="section-padding"
      style={{
        background: "linear-gradient(180deg, #FFF8F0 0%, #F5E6D3 50%, #FFF8F0 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="ornament mb-4">
            <span
              className="font-poppins text-sm font-semibold tracking-widest uppercase"
              style={{ color: "#D4A017" }}
            >
              हमारे फायदे
            </span>
          </div>
          <h2
            className="font-playfair font-bold text-4xl sm:text-5xl mb-4"
            style={{ color: "#8B1A1A" }}
          >
            Customer Benefits
          </h2>
          <p className="max-w-xl mx-auto text-base" style={{ color: "#4A3728" }}>
            Mohan Ji Papad sirf ek papad nahi — ye ek anubhav hai jo aapke khane ko
            yaadgaar bana deta hai!
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.id}
              id={benefit.id}
              variants={cardVariant}
              className="card-hover rounded-2xl p-6 text-center relative overflow-hidden"
              style={{
                background: benefit.bgGradient,
                border: `1px solid ${benefit.border}`,
                boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
              }}
            >
              {/* Decorative corner */}
              <div
                className="absolute top-0 right-0 w-20 h-20 rounded-full opacity-5"
                style={{ background: benefit.color, transform: "translate(30%, -30%)" }}
              />

              {/* Icon */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4"
                style={{ background: benefit.iconBg, border: `1px solid ${benefit.border}` }}
              >
                {benefit.icon}
              </div>

              {/* Title */}
              <h3
                className="font-playfair font-bold text-lg mb-1"
                style={{ color: benefit.color }}
              >
                {benefit.title}
              </h3>
              <p
                className="text-xs font-semibold uppercase tracking-wide mb-3"
                style={{ color: benefit.color, opacity: 0.65 }}
              >
                {benefit.titleEn}
              </p>

              {/* Description */}
              <p className="text-sm leading-relaxed" style={{ color: "#4A3728" }}>
                {benefit.description}
              </p>

              {/* Bottom accent line */}
              <div
                className="mt-5 h-0.5 rounded-full"
                style={{
                  background: `linear-gradient(90deg, transparent, ${benefit.color}, transparent)`,
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {[
            { num: "500+", label: "Happy Families", icon: "❤️" },
            { num: "10+", label: "Years of Trust", icon: "🏆" },
            { num: "100%", label: "Natural Ingredients", icon: "🌿" },
            { num: "Daily", label: "Fresh Preparation", icon: "✨" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-5 rounded-2xl card-hover"
              style={{
                background: "linear-gradient(135deg, #8B1A1A, #5C0F0F)",
                boxShadow: "0 8px 30px rgba(139, 26, 26, 0.2)",
              }}
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div
                className="font-playfair font-bold text-2xl sm:text-3xl"
                style={{ color: "#F0C040" }}
              >
                {stat.num}
              </div>
              <div className="text-xs font-medium mt-1" style={{ color: "rgba(255,248,240,0.7)" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
