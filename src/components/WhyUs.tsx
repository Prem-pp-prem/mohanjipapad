"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    icon: "🌿",
    title: "100% Pure & Natural",
    titleHindi: "100% शुद्ध और प्राकृतिक",
    description:
      "No artificial colors, no preservatives — sirf shuddh samagri se bana hua asli papad.",
    color: "#1A4A2E",
    bg: "rgba(26, 74, 46, 0.08)",
    border: "rgba(26, 74, 46, 0.25)",
  },
  {
    icon: "🏺",
    title: "Traditional Bikaneri Taste",
    titleHindi: "पारंपरिक बीकानेरी स्वाद",
    description:
      "Generations ki purani recipe — wahi asli Bikaner ka swad jo aapke dada-dadi ko bhi pasand tha.",
    color: "#8B1A1A",
    bg: "rgba(139, 26, 26, 0.08)",
    border: "rgba(139, 26, 26, 0.25)",
  },
  {
    icon: "⭐",
    title: "Premium Quality Ingredients",
    titleHindi: "प्रीमियम गुणवत्ता सामग्री",
    description:
      "Best quality urad dal, selected spices, aur rock salt — sirf premium samagri ka istemal.",
    color: "#B8860B",
    bg: "rgba(184, 134, 11, 0.08)",
    border: "rgba(184, 134, 11, 0.25)",
  },
  {
    icon: "🧼",
    title: "Hygienic Preparation",
    titleHindi: "स्वच्छ तैयारी",
    description:
      "Completely hygienic process mein tayyar, saaf environment mein sookha hua — aapki sehat ka poora khayal.",
    color: "#1565C0",
    bg: "rgba(21, 101, 192, 0.08)",
    border: "rgba(21, 101, 192, 0.25)",
  },
  {
    icon: "💰",
    title: "Affordable Price",
    titleHindi: "किफायती दाम",
    description:
      "Sasta bhi, tasty bhi — premium quality mein bhi aapki jeb pe koi bojh nahi. Value for money guaranteed!",
    color: "#2E7D32",
    bg: "rgba(46, 125, 50, 0.08)",
    border: "rgba(46, 125, 50, 0.25)",
  },
  {
    icon: "❤️",
    title: "Family Favorite",
    titleHindi: "हर घर की पसंद",
    description:
      "500+ Bikaner families ki trust aur pasand — bachpan se budhaape tak, har umr ki pasand.",
    color: "#C62828",
    bg: "rgba(198, 40, 40, 0.08)",
    border: "rgba(198, 40, 40, 0.25)",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function WhyUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="why-us"
      className="section-padding"
      style={{ background: "linear-gradient(180deg, #FFF8F0 0%, #F5E6D3 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
          ref={ref}
        >
          <div className="ornament mb-4">
            <span
              className="font-poppins text-sm font-semibold tracking-widest uppercase"
              style={{ color: "#D4A017" }}
            >
              हमें क्यों चुनें
            </span>
          </div>
          <h2
            className="font-playfair font-bold text-4xl sm:text-5xl mb-4"
            style={{ color: "#8B1A1A" }}
          >
            Why Choose Mohan Ji?
          </h2>
          <p className="max-w-2xl mx-auto text-base" style={{ color: "#4A3728" }}>
            Har ek papad mein chupi hai ek vaada — shudhdhata ka, swad ka, aur aapke ghar ki
            khushiyon ka.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={cardVariant}
              className="card-hover rounded-2xl p-6 cursor-default"
              style={{
                background: feature.bg,
                border: `1px solid ${feature.border}`,
                boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
              }}
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4"
                style={{ background: feature.bg, border: `1px solid ${feature.border}` }}
              >
                {feature.icon}
              </div>

              {/* Title */}
              <h3
                className="font-playfair font-bold text-xl mb-1"
                style={{ color: feature.color }}
              >
                {feature.title}
              </h3>
              <p className="text-xs font-medium mb-3" style={{ color: feature.color, opacity: 0.7 }}>
                {feature.titleHindi}
              </p>

              {/* Description */}
              <p className="text-sm leading-relaxed" style={{ color: "#4A3728" }}>
                {feature.description}
              </p>

              {/* Bottom accent */}
              <div
                className="mt-4 h-0.5 rounded-full"
                style={{ background: `linear-gradient(90deg, ${feature.color}, transparent)` }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div
            className="inline-flex flex-col sm:flex-row items-center gap-4 px-8 py-6 rounded-3xl"
            style={{
              background: "linear-gradient(135deg, #8B1A1A, #5C0F0F)",
              boxShadow: "0 20px 50px rgba(139, 26, 26, 0.3)",
            }}
          >
            <div className="text-center sm:text-left">
              <p className="font-playfair font-bold text-xl" style={{ color: "#F0C040" }}>
                Abhi Try Karein!
              </p>
              <p className="text-sm" style={{ color: "rgba(255,248,240,0.8)" }}>
                Ek baar khayenge, baar baar mangayenge 😋
              </p>
            </div>
            <motion.a
              href="https://wa.me/916350355510?text=Hello%20Mohan%20Ji!%20Main%20aapka%20papad%20order%20karna%20chahta%20hoon."
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Order on WhatsApp
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
