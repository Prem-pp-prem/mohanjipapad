"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const contactItems = [
    {
      id: "phone-contact",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: "Phone",
      value: "+91 6350355510",
      href: "tel:+916350355510",
      color: "#8B1A1A",
      bg: "rgba(139, 26, 26, 0.08)",
    },
    {
      id: "whatsapp-contact",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
      label: "WhatsApp",
      value: "Chat & Order Now",
      href: "https://wa.me/916350355510?text=Hello%20Mohan%20Ji!%20Main%20papad%20order%20karna%20chahta%20hoon.",
      color: "#1A7A4A",
      bg: "rgba(26, 122, 74, 0.08)",
    },
    {
      id: "address-contact",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: "Address",
      value: "Ranisar Bass, Police Line ke Piche, Bikaner, Rajasthan",
      href: "https://maps.google.com/?q=Ranisar+Bass+Police+Line+Bikaner+Rajasthan",
      color: "#B8860B",
      bg: "rgba(184, 134, 11, 0.08)",
    },
  ];

  return (
    <section
      id="contact"
      className="section-padding"
      style={{
        background: "linear-gradient(180deg, #F5E6D3 0%, #FFF8F0 100%)",
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
              हमसे मिलें
            </span>
          </div>
          <h2
            className="font-playfair font-bold text-4xl sm:text-5xl mb-4"
            style={{ color: "#8B1A1A" }}
          >
            Contact Us
          </h2>
          <p className="max-w-xl mx-auto text-base" style={{ color: "#4A3728" }}>
            Koi bhi sawaal ho ya order karna ho — hum hamesha available hain!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            {contactItems.map((item, i) => (
              <motion.a
                key={item.id}
                id={item.id}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.15 }}
                className="flex items-center gap-4 p-5 rounded-2xl card-hover group"
                style={{
                  background: item.bg,
                  border: `1px solid ${item.color}30`,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: item.color, color: "white" }}
                >
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: item.color }}>
                    {item.label}
                  </p>
                  <p className="font-semibold text-base" style={{ color: "#1C1008" }}>
                    {item.value}
                  </p>
                </div>
                <div className="ml-auto">
                  <svg className="w-5 h-5 opacity-30 group-hover:opacity-70 transition-opacity" style={{ color: item.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.a>
            ))}

            {/* Opening hours */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="p-5 rounded-2xl"
              style={{
                background: "rgba(212, 160, 23, 0.06)",
                border: "1px solid rgba(212, 160, 23, 0.2)",
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🕐</span>
                <h4 className="font-semibold" style={{ color: "#8B1A1A" }}>Availability</h4>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <p className="font-medium" style={{ color: "#4A3728" }}>Monday – Sunday</p>
                  <p style={{ color: "#8B7355" }}>9:00 AM – 8:00 PM</p>
                </div>
                <div>
                  <p className="font-medium" style={{ color: "#4A3728" }}>WhatsApp</p>
                  <p style={{ color: "#1A7A4A" }}>Always Available 📲</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-3xl overflow-hidden"
            style={{ boxShadow: "0 20px 60px rgba(139, 26, 26, 0.15)" }}
          >
            <div
              className="p-4"
              style={{
                background: "linear-gradient(135deg, #8B1A1A, #5C0F0F)",
              }}
            >
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="#D4A017" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <span className="font-semibold text-sm" style={{ color: "#F0C040" }}>
                  Ranisar Bass, Police Line ke Piche, Bikaner
                </span>
              </div>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.7766548!2d73.3119!3d28.0229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39414e8c95555555%3A0x0!2sRanisar%20Bass%2C%20Police%20Line%2C%20Bikaner%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mohan Ji Papad Location - Ranisar Bass, Bikaner"
            />
          </motion.div>
        </div>

        {/* Big CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9 }}
          className="mt-16 text-center"
        >
          <div
            className="rounded-3xl p-8 sm:p-12"
            style={{
              background: "linear-gradient(135deg, #8B1A1A 0%, #5C0F0F 50%, #3D0A0A 100%)",
              boxShadow: "0 30px 80px rgba(139, 26, 26, 0.3)",
              border: "1px solid rgba(212, 160, 23, 0.3)",
            }}
          >
            <h3 className="font-playfair font-bold text-3xl sm:text-4xl mb-3" style={{ color: "#F0C040" }}>
              Abhi Order Karein!
            </h3>
            <p className="mb-8 text-base" style={{ color: "rgba(255,248,240,0.8)" }}>
              Fresh, kurkura, 100% shuddh papad — seedha aapke ghar tak 🏠
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://wa.me/916350355510?text=Hello%20Mohan%20Ji!%20Main%20aapka%20papad%20order%20karna%20chahta%20hoon."
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn text-white px-8 py-4 rounded-full font-bold text-base flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Par Order Karein
              </motion.a>
              <motion.a
                href="tel:+916350355510"
                className="px-8 py-4 rounded-full font-bold text-base flex items-center justify-center gap-3 transition-all"
                style={{
                  border: "2px solid #D4A017",
                  color: "#F0C040",
                }}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(212, 160, 23, 0.1)" }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call: +91 6350355510
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
