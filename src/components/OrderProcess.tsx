"use client";

import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    step: "01",
    icon: "💬",
    title: "Contact on WhatsApp",
    titleHindi: "WhatsApp पर संपर्क करें",
    description:
      "Seedha hamare WhatsApp number +91 6350355510 par message karein. Apna name, address, aur quantity batayein.",
    action: "WhatsApp Par Message Karein",
    href: "https://wa.me/916350355510?text=Hello%20Mohan%20Ji!%20Main%20papad%20order%20karna%20chahta%20hoon.%20Please%20tell%20me%20the%20price%20and%20availability.",
    isWhatsApp: true,
  },
  {
    step: "02",
    icon: "✅",
    title: "Confirm Your Order",
    titleHindi: "ऑर्डर कन्फर्म करें",
    description:
      "Hum aapko variety, price, aur availability ke baare mein batayenge. Apna favorite select karein aur order confirm karein.",
    action: null,
    href: null,
    isWhatsApp: false,
  },
  {
    step: "03",
    icon: "🚚",
    title: "Get It Delivered",
    titleHindi: "डिलीवरी पाएं",
    description:
      "Fresh papad seedha aapke ghar tak pahunchega. Bikaner local delivery available — baahar ke liye courier bhi!",
    action: null,
    href: null,
    isWhatsApp: false,
  },
];

const stepVariant: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.25 },
  }),
};

export default function OrderProcess() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="order"
      className="section-padding"
      style={{
        background: "linear-gradient(180deg, #FFF8F0 0%, #F5E6D3 100%)",
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
              ऑर्डर कैसे करें
            </span>
          </div>
          <h2
            className="font-playfair font-bold text-4xl sm:text-5xl mb-4"
            style={{ color: "#8B1A1A" }}
          >
            Order Karna Hai Bilkul Aasaan!
          </h2>
          <p className="max-w-xl mx-auto text-base" style={{ color: "#4A3728" }}>
            Sirf 3 simple steps mein apna favorite papad order karein — no apps, no hassle!
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div
            className="hidden lg:block absolute top-16 left-1/6 right-1/6 h-0.5"
            style={{
              background: "linear-gradient(90deg, transparent, #D4A017, #D4A017, transparent)",
              top: "80px",
              left: "18%",
              right: "18%",
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                custom={i}
                variants={stepVariant}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="relative flex flex-col items-center text-center"
              >
                {/* Step Number + Icon */}
                <div className="relative mb-6">
                  <motion.div
                    className="w-28 h-28 rounded-full flex flex-col items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, #8B1A1A, #5C0F0F)",
                      boxShadow: "0 15px 40px rgba(139, 26, 26, 0.35)",
                      border: "3px solid rgba(212, 160, 23, 0.5)",
                    }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <span className="text-3xl">{step.icon}</span>
                    <span
                      className="font-bold text-xs mt-1"
                      style={{ color: "rgba(240, 192, 64, 0.7)" }}
                    >
                      Step {step.step}
                    </span>
                  </motion.div>

                  {/* Arrow for mobile */}
                  {i < steps.length - 1 && (
                    <div
                      className="lg:hidden absolute -bottom-8 left-1/2 -translate-x-1/2 w-0.5 h-8"
                      style={{ background: "linear-gradient(180deg, #D4A017, transparent)" }}
                    />
                  )}
                </div>

                {/* Content */}
                <div
                  className="w-full rounded-2xl p-6"
                  style={{
                    background: "white",
                    border: "1px solid rgba(212, 160, 23, 0.2)",
                    boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
                  }}
                >
                  <h3
                    className="font-playfair font-bold text-xl mb-1"
                    style={{ color: "#8B1A1A" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm font-medium mb-3" style={{ color: "#D4A017" }}>
                    {step.titleHindi}
                  </p>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "#4A3728" }}>
                    {step.description}
                  </p>

                  {step.action && step.href && (
                    <motion.a
                      href={step.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white ${step.isWhatsApp ? "whatsapp-btn" : ""}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {step.isWhatsApp && (
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                      )}
                      {step.action}
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="mt-12 text-center"
        >
          <div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full"
            style={{
              background: "rgba(212, 160, 23, 0.1)",
              border: "1px solid rgba(212, 160, 23, 0.3)",
            }}
          >
            <span className="text-lg">📦</span>
            <span className="text-sm font-medium" style={{ color: "#4A3728" }}>
              Bikaner local delivery available • Baaki jagah courier se
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
