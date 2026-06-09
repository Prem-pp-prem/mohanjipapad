"use client";

import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const products = [
  {
    id: "classic-papad",
    name: "Classic Bikaneri Papad",
    nameHindi: "क्लासिक बीकानेरी पापड़",
    description:
      "Our signature papad — thin, crispy, perfectly spiced with black pepper and cumin. The original taste that made us famous.",
    ingredients: ["Urad Dal", "Black Pepper", "Rock Salt", "Cumin", "Asafoetida"],
    badge: "Best Seller",
    badgeColor: "#D4A017",
    image: "/pp.jpeg",
    price: "Starting ₹50/pack",
    emoji: "🏆",
  },

  {
    id: "spicy-papad",
    name: "Masaledar Papad",
    nameHindi: "मसालेदार पापड़",
    description:
      "For the spice lovers — extra masala, extra tadka! Loaded with red chili and coriander for a fiery kick.",
    ingredients: ["Urad Dal", "Red Chili", "Coriander", "Black Pepper", "Spices"],
    badge: "Fan Favorite",
    badgeColor: "#8B1A1A",
    image: "/papad_product.png",
    price: "Starting ₹55/pack",
    emoji: "🌶️",
  },
  {
    id: "plain-papad",
    name: "Sada Papad (Plain)",
    nameHindi: "सादा पापड़",
    description:
      "Simple, light, and healthy — perfect for those who love the pure taste of urad dal without strong spices.",
    ingredients: ["Urad Dal", "Rock Salt", "Light Seasoning"],
    badge: "Healthy Choice",
    badgeColor: "#1A4A2E",
    image: "/papad_ingredients.png",
    price: "Starting ₹45/pack",
    emoji: "🌿",
  },
];

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.2 },
  }),
};

export default function Products() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="products"
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
              हमारे उत्पाद
            </span>
          </div>
          <h2
            className="font-playfair font-bold text-4xl sm:text-5xl mb-4"
            style={{ color: "#8B1A1A" }}
          >
            Product Showcase
          </h2>
          <p className="max-w-xl mx-auto text-base" style={{ color: "#4A3728" }}>
            Choose from our premium range of traditional Bikaneri papads — crafted fresh, daily!
          </p>
        </motion.div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              id={product.id}
              custom={i}
              variants={cardVariant}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="card-hover rounded-3xl overflow-hidden flex flex-col"
              style={{
                background: "#FFFFFF",
                boxShadow: "0 8px 40px rgba(139, 26, 26, 0.1)",
                border: "1px solid rgba(212, 160, 23, 0.2)",
              }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={product.image}
                  alt={`${product.name} - Traditional Bikaneri Papad by Mohan Ji`}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
                {/* Badge */}
                <div
                  className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white"
                  style={{ backgroundColor: product.badgeColor }}
                >
                  {product.emoji} {product.badge}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="mb-4">
                  <h3
                    className="font-playfair font-bold text-xl mb-1"
                    style={{ color: "#8B1A1A" }}
                  >
                    {product.name}
                  </h3>
                  <p className="text-sm font-medium mb-3" style={{ color: "#D4A017" }}>
                    {product.nameHindi}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "#4A3728" }}>
                    {product.description}
                  </p>
                </div>

                {/* Ingredients */}
                <div className="mb-5">
                  <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "#8B1A1A" }}>
                    Key Ingredients:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {product.ingredients.map((ing) => (
                      <span
                        key={ing}
                        className="px-2 py-1 rounded-full text-xs font-medium"
                        style={{
                          background: "rgba(212, 160, 23, 0.1)",
                          color: "#B8860B",
                          border: "1px solid rgba(212, 160, 23, 0.3)",
                        }}
                      >
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="mt-auto">
                  <p className="font-bold text-lg mb-3" style={{ color: "#1A4A2E" }}>
                    {product.price}
                  </p>
                  <motion.a
                    href={`https://wa.me/916350355510?text=Hello%20Mohan%20Ji!%20I%20want%20to%20order%20${encodeURIComponent(product.name)}.%20Please%20tell%20me%20the%20price%20and%20availability.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp-btn text-white w-full py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Order This Papad
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {[
            { icon: "🔥", title: "Kurkura Texture", sub: "Perfectly Crispy" },
            { icon: "😋", title: "Authentic Taste", sub: "Bikaneri Recipe" },
            { icon: "💚", title: "Healthy Snack", sub: "Low Calorie" },
            { icon: "🍽️", title: "Perfect with Meals", sub: "Dal, Sabzi & More" },
          ].map((benefit) => (
            <div
              key={benefit.title}
              className="text-center p-4 rounded-2xl card-hover"
              style={{
                background: "white",
                border: "1px solid rgba(212, 160, 23, 0.2)",
                boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
              }}
            >
              <div className="text-3xl mb-2">{benefit.icon}</div>
              <p className="font-semibold text-sm" style={{ color: "#8B1A1A" }}>
                {benefit.title}
              </p>
              <p className="text-xs" style={{ color: "#8B7355" }}>
                {benefit.sub}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
