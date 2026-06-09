"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-cream-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <div className="ornament mb-4">
            <span className="font-poppins text-sm font-semibold tracking-widest uppercase" style={{ color: "#D4A017" }}>
              हमारी कहानी
            </span>
          </div>
          <h2 className="font-playfair font-bold text-4xl sm:text-5xl mb-4" style={{ color: "#8B1A1A" }}>
            About Mohan Ji Papad
          </h2>
          <p className="max-w-xl mx-auto" style={{ color: "#4A3728" }}>
            Bikaner ki dharti se, ek shuddh parampara ka safar
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div
              className="rounded-3xl overflow-hidden relative"
              style={{ boxShadow: "0 25px 60px rgba(139, 26, 26, 0.2)" }}
            >
              <Image
                src="/papad_ingredients.png"
                alt="Pure natural ingredients used in Mohan Ji Papad - traditional Bikaneri recipe"
                width={600}
                height={500}
                className="w-full h-auto object-cover"
              />
              {/* Overlay text */}
              <div
                className="absolute bottom-0 left-0 right-0 p-6"
                style={{
                  background: "linear-gradient(transparent, rgba(28, 8, 8, 0.9))",
                }}
              >
                <p className="font-playfair font-bold text-xl" style={{ color: "#F0C040" }}>
                  Pure Ingredients, Authentic Taste
                </p>
              </div>
            </div>

            {/* Decorative corner badge */}
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-6 -left-6 w-24 h-24 rounded-full flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #8B1A1A, #5C0F0F)",
                boxShadow: "0 8px 25px rgba(139, 26, 26, 0.4)",
                border: "2px solid rgba(212, 160, 23, 0.5)",
              }}
            >
              <div className="text-center">
                <div className="font-bold text-xs" style={{ color: "#F0C040" }}>Since</div>
                <div className="font-playfair font-bold text-lg" style={{ color: "#F0C040" }}>2010</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              <div>
                <h3
                  className="font-playfair font-bold text-2xl sm:text-3xl mb-4"
                  style={{ color: "#8B1A1A" }}
                >
                  Parampara se Protsaahit, Shudhdhata se Nirmit
                </h3>
                <p className="text-base leading-relaxed mb-4" style={{ color: "#4A3728" }}>
                  Mohan Ji Papad ki kahani Bikaner ki un galiyon se shuru hoti hai, jahan saalon se
                  papad banane ki parampara chali aa rahi hai. Hamare haath se bana har papad ek
                  vaada hai — shudhdhata ka, swad ka, aur vishwaas ka.
                </p>
                <p className="text-base leading-relaxed" style={{ color: "#4A3728" }}>
                  Ranisar Bass, Police Line ke piche, Bikaner mein sthit hamare ghar se har roz
                  fresh, kurkure papads nikalte hain jo seedha aapke ghar pahunchte hain. Koi
                  artificial flavors nahi, koi preservatives nahi — sirf shuddh desi swad!
                </p>
              </div>

              {/* Quality commitment */}
              <div
                className="rounded-2xl p-6"
                style={{
                  background: "linear-gradient(135deg, rgba(212, 160, 23, 0.08), rgba(212, 160, 23, 0.03))",
                  border: "1px solid rgba(212, 160, 23, 0.3)",
                }}
              >
                <h4 className="font-playfair font-bold text-lg mb-4" style={{ color: "#8B1A1A" }}>
                  🌟 Hamara Vaada (Our Promise)
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: "🌿", text: "100% Natural Ingredients" },
                    { icon: "🧼", text: "Hygienic Preparation" },
                    { icon: "🔥", text: "Sun Dried Naturally" },
                    { icon: "💯", text: "No Preservatives" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-2">
                      <span className="text-lg">{item.icon}</span>
                      <span className="text-sm font-medium" style={{ color: "#4A3728" }}>
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact strip */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="https://wa.me/916350355510?text=Hello%20Mohan%20Ji!%20Tell%20me%20about%20your%20papad."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-btn text-white px-6 py-3 rounded-full font-semibold text-sm flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Humse Baat Karein
                </motion.a>
                <motion.a
                  href="tel:+916350355510"
                  className="px-6 py-3 rounded-full font-semibold text-sm flex items-center justify-center gap-2 transition-all"
                  style={{
                    background: "linear-gradient(135deg, #8B1A1A, #5C0F0F)",
                    color: "#F0C040",
                    boxShadow: "0 4px 15px rgba(139, 26, 26, 0.3)",
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +91 6350355510
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
