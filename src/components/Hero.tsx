"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/916350355510?text=Namaste%20Mohan%20Ji!%20%F0%9F%99%8F%20Main%20papad%20order%20karna%20chahta%20hoon.",
      "_blank"
    );
  };

  const handleCall = () => {
    window.location.href = "tel:+916350355510";
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #1C0808 0%, #3D1010 25%, #5C1A1A 50%, #3D1010 75%, #1C0808 100%)",
      }}
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #D4A017 1px, transparent 1px),
                              radial-gradient(circle at 75% 75%, #D4A017 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Decorative circles - hidden on mobile to avoid overflow */}
      <div className="hidden sm:block absolute top-20 right-10 w-64 h-64 rounded-full opacity-5"
        style={{ background: "radial-gradient(circle, #D4A017, transparent)" }} />
      <div className="hidden sm:block absolute bottom-20 left-10 w-48 h-48 rounded-full opacity-5"
        style={{ background: "radial-gradient(circle, #D4A017, transparent)" }} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-28 sm:pt-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* === IMAGE (shown first on mobile, right on desktop) === */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center order-first lg:order-last"
          >
            {/* Glow ring */}
            <div
              className="absolute inset-0 rounded-full opacity-20 blur-3xl"
              style={{ background: "radial-gradient(circle, #D4A017 0%, transparent 70%)" }}
            />

            {/* Main image */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 w-full"
              style={{ maxWidth: "340px" }}
            >
              <div
                className="rounded-3xl overflow-hidden"
                style={{
                  boxShadow:
                    "0 20px 60px rgba(212, 160, 23, 0.3), 0 0 0 1px rgba(212, 160, 23, 0.2)",
                }}
              >
                <Image
                  src="/pp.jpeg"
                  alt="Traditional Bikaneri Papad by Mohan Ji - Premium quality crispy papad"
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

              {/* 100% Shuddh badge - top right */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, type: "spring" }}
                className="absolute -top-3 -right-3 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex flex-col items-center justify-center text-center"
                style={{
                  background: "linear-gradient(135deg, #D4A017, #B8860B)",
                  boxShadow: "0 8px 25px rgba(212, 160, 23, 0.5)",
                }}
              >
                <span className="text-white font-bold text-xs leading-tight">100%</span>
                <span className="text-white font-bold text-xs leading-tight">Shuddh</span>
              </motion.div>

              {/* Instagram badge - top left */}
              <motion.a
                href="https://www.instagram.com/mohanjipapadbikaner?igsh=MXMwN25sNWxhcGIwbw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.2, type: "spring" }}
                className="absolute -top-3 -left-3 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex flex-col items-center justify-center text-center"
                style={{
                  background: "linear-gradient(135deg, #E1306C, #833AB4)",
                  boxShadow: "0 8px 25px rgba(225, 48, 108, 0.5)",
                }}
                whileHover={{ scale: 1.1 }}
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span className="text-white text-xs font-bold mt-0.5">Follow</span>
              </motion.a>

              {/* Bottom badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-full whitespace-nowrap"
                style={{
                  background: "linear-gradient(135deg, #8B1A1A, #5C0F0F)",
                  border: "1px solid rgba(212, 160, 23, 0.5)",
                  boxShadow: "0 8px 20px rgba(139, 26, 26, 0.5)",
                }}
              >
                <span className="text-xs sm:text-sm font-semibold" style={{ color: "#F0C040" }}>
                  🏆 Bikaner ka No.1 Papad
                </span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* === TEXT CONTENT (below image on mobile, left on desktop) === */}
          <div className="text-center lg:text-left mt-10 lg:mt-0">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5"
              style={{
                background: "rgba(212, 160, 23, 0.15)",
                border: "1px solid rgba(212, 160, 23, 0.4)",
              }}
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "#F0C040" }} />
              <span className="text-xs sm:text-sm font-medium" style={{ color: "#F0C040" }}>
                100% Shuddh • Traditional Bikaneri Papad
              </span>
            </motion.div>

            {/* Brand Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-playfair font-bold leading-tight mb-4"
            >
              <span className="block text-4xl sm:text-5xl lg:text-7xl text-golden-gradient">
                Mohan Ji
              </span>
              <span
                className="block text-5xl sm:text-6xl lg:text-8xl"
                style={{
                  color: "#FFF8F0",
                  textShadow: "0 0 40px rgba(212, 160, 23, 0.3)",
                }}
              >
                Papad
              </span>
            </motion.h1>

            {/* Tagline Banner */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-block mb-6 px-5 py-2.5 rounded-lg"
              style={{
                background: "linear-gradient(135deg, #8B1A1A, #5C0F0F)",
                border: "1px solid rgba(212, 160, 23, 0.5)",
              }}
            >
              <p
                className="font-poppins font-bold text-lg sm:text-2xl"
                style={{ color: "#F0C040" }}
              >
                • सस्ता भी, टेस्टी भी! •
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-sm sm:text-base lg:text-lg mb-4 max-w-lg mx-auto lg:mx-0 px-2 sm:px-0"
              style={{ color: "rgba(255, 248, 240, 0.8)" }}
            >
              Bikaner ki pehchan — asli swad, shuddh samagri, aur parampara ka andaz.
              Har ghar ki pasand, har dil ki awaaz.
            </motion.p>

            {/* USP pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-2 justify-center lg:justify-start mb-7"
            >
              {["🌿 100% Shuddh", "🏅 Premium Quality", "🔥 Kurkura", "❤️ Trusted"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-medium"
                  style={{
                    background: "rgba(212, 160, 23, 0.1)",
                    border: "1px solid rgba(212, 160, 23, 0.3)",
                    color: "#F0C040",
                  }}
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons — stacked on mobile, row on sm+ */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col gap-3 sm:flex-row sm:flex-wrap justify-center lg:justify-start"
            >
              {/* WhatsApp */}
              <motion.button
                id="hero-whatsapp-btn"
                onClick={handleWhatsApp}
                className="whatsapp-btn text-white px-6 py-3.5 rounded-full font-semibold text-sm sm:text-base flex items-center justify-center gap-2 w-full sm:w-auto"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
              >
                <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Par Order Karein
              </motion.button>

              {/* Call + Instagram side by side on mobile */}
              <div className="flex gap-3 w-full sm:w-auto">
                <motion.button
                  id="hero-call-btn"
                  onClick={handleCall}
                  className="flex-1 sm:flex-none px-5 py-3.5 rounded-full font-semibold text-sm sm:text-base flex items-center justify-center gap-2 transition-all duration-300"
                  style={{
                    background: "rgba(212, 160, 23, 0.1)",
                    border: "2px solid #D4A017",
                    color: "#F0C040",
                  }}
                  whileHover={{ scale: 1.04, y: -2, backgroundColor: "rgba(212, 160, 23, 0.2)" }}
                  whileTap={{ scale: 0.96 }}
                >
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Now
                </motion.button>

                <motion.a
                  id="hero-instagram-btn"
                  href="https://www.instagram.com/mohanjipapadbikaner?igsh=MXMwN25sNWxhcGIwbw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none px-5 py-3.5 rounded-full font-semibold text-sm sm:text-base flex items-center justify-center gap-2 transition-all duration-300"
                  style={{
                    background: "linear-gradient(135deg, #E1306C, #833AB4)",
                    color: "white",
                    boxShadow: "0 4px 15px rgba(225, 48, 108, 0.3)",
                  }}
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  Instagram
                </motion.a>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 flex gap-6 sm:gap-8 justify-center lg:justify-start"
            >
              {[
                { num: "500+", label: "Happy Families" },
                { num: "10+", label: "Years of Trust" },
                { num: "100%", label: "Pure Quality" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-playfair font-bold text-xl sm:text-2xl" style={{ color: "#D4A017" }}>
                    {stat.num}
                  </div>
                  <div className="text-xs" style={{ color: "rgba(255, 248, 240, 0.6)" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 80L60 74.7C120 69.3 240 58.7 360 53.3C480 48 600 48 720 53.3C840 58.7 960 69.3 1080 69.3C1200 69.3 1320 58.7 1380 53.3L1440 48V80H0Z"
            fill="#FFF8F0"
          />
        </svg>
      </div>
    </section>
  );
}
