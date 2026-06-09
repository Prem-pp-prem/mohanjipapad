"use client";

import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Ramesh Kumar Sharma",
    location: "Bikaner",
    rating: 5,
    text: "Mohan Ji ka papad waakai kamaal ka hai! Maine pehle bahut jagah se papad kharida hai, lekin is jaisa swad kaheen nahi mila. Kurkura aur bilkul shuddh. Ab toh regularly order karta hoon.",
    avatar: "R",
    color: "#8B1A1A",
    date: "2 hafta pehle",
  },
  {
    id: 2,
    name: "Savita Devi",
    location: "Jaipur",
    rating: 5,
    text: "Mere ghar mein sab bahut pasand karte hain Mohan Ji Papad. Bache se lekar buzurg tak — sabko acha lagta hai. Dal ke saath ya aise hi, har taraf se perfect! Price bhi bahut reasonable hai.",
    avatar: "S",
    color: "#1A4A2E",
    date: "1 mahina pehle",
  },
  {
    id: 3,
    name: "Vijay Singh Rathore",
    location: "Bikaner",
    rating: 5,
    text: "WhatsApp pe order kiya aur ghar pe delivery ho gayi. Fresh papad, packaging bhi achi thi. Asli Bikaneri swad — ek baar khao toh baar baar yahi mangaoge. Mohan Ji Zindabad! 👏",
    avatar: "V",
    color: "#B8860B",
    date: "3 hafta pehle",
  },
  {
    id: 4,
    name: "Meena Bai Gupta",
    location: "Ganganagar",
    rating: 5,
    text: "Bahut hi umda quality hai. Maine apni beti ki shaadi mein bhi Mohan Ji Papad order kiya tha — 50 packets! Sab mehmaan bahut khush the aur poochh rahe the kahan se laya hai. Thank you Mohan Ji!",
    avatar: "M",
    color: "#C62828",
    date: "2 mahina pehle",
  },
  {
    id: 5,
    name: "Sunil Prasad",
    location: "Delhi",
    rating: 5,
    text: "Delhi mein itna achha Bikaneri papad milna mushkil hai. Mere ek dost ne suggest kiya aur maine try kiya — bilkul wahi swad jo Bikaner mein hota hai. WhatsApp se easy delivery. Highly recommended!",
    avatar: "S",
    color: "#1565C0",
    date: "1 mahina pehle",
  },
  {
    id: 6,
    name: "Pushpa Kumari",
    location: "Bikaner",
    rating: 5,
    text: "Shuddh aur natural — yahi Mohan Ji Papad ki pehchaan hai. Koi artificial taste nahi, koi preservative nahi. Mere pati doctor hain aur vo bhi kehte hain ye papad shuddh hai. Family ki pehli pasand!",
    avatar: "P",
    color: "#2E7D32",
    date: "3 hafta pehle",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className="w-4 h-4"
          fill={star <= rating ? "#D4A017" : "#E5E7EB"}
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section
      id="testimonials"
      className="section-padding"
      style={{
        background: "linear-gradient(135deg, #1C0808 0%, #3D1010 50%, #1C0808 100%)",
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
              ग्राहकों की राय
            </span>
          </div>
          <h2
            className="font-playfair font-bold text-4xl sm:text-5xl mb-4"
            style={{ color: "#F0C040" }}
          >
            Hamare Khush Grahak
          </h2>
          <p className="max-w-xl mx-auto text-base" style={{ color: "rgba(255, 248, 240, 0.75)" }}>
            500+ families ka bharosa — ye sirf papad nahi, rishton ka swad hai!
          </p>

          {/* Rating summary */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <svg key={s} className="w-6 h-6" fill="#D4A017" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="font-bold text-2xl" style={{ color: "#D4A017" }}>5.0</span>
            <span style={{ color: "rgba(255,248,240,0.6)" }}>(500+ Reviews)</span>
          </div>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((review, i) => (
            <motion.div
              key={review.id}
              custom={i}
              variants={cardVariant}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="rounded-2xl p-6 flex flex-col card-hover"
              style={{
                background: "rgba(255, 248, 240, 0.05)",
                border: "1px solid rgba(212, 160, 23, 0.2)",
                backdropFilter: "blur(10px)",
              }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-lg flex-shrink-0"
                  style={{ backgroundColor: review.color }}
                >
                  {review.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm truncate" style={{ color: "#FFF8F0" }}>
                    {review.name}
                  </p>
                  <p className="text-xs" style={{ color: "rgba(255,248,240,0.5)" }}>
                    📍 {review.location} • {review.date}
                  </p>
                </div>
              </div>

              <StarRating rating={review.rating} />

              {/* Quote */}
              <div className="mt-3 flex-1">
                <svg className="w-6 h-6 mb-2 opacity-30" fill="#D4A017" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(255, 248, 240, 0.85)" }}
                >
                  {expanded === review.id ? review.text : review.text.slice(0, 120) + (review.text.length > 120 ? "..." : "")}
                </p>
                {review.text.length > 120 && (
                  <button
                    onClick={() => setExpanded(expanded === review.id ? null : review.id)}
                    className="text-xs mt-1 font-medium"
                    style={{ color: "#D4A017" }}
                  >
                    {expanded === review.id ? "Show less" : "Read more"}
                  </button>
                )}
              </div>

              {/* Verified badge */}
              <div className="mt-4 flex items-center gap-1">
                <svg className="w-3 h-3" fill="#25D366" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-xs" style={{ color: "rgba(255,248,240,0.4)" }}>
                  Verified Customer
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://wa.me/916350355510?text=Hello%20Mohan%20Ji!%20Main%20bhi%20order%20karna%20chahta%20hoon."
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn text-white px-8 py-4 rounded-full font-semibold text-base inline-flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Aap Bhi Try Karein — Order Now!
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
