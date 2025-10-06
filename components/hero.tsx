"use client";

import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Droplets, TrendingDown, Zap } from "lucide-react";
import Link from "next/link";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950"
    >
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        {/* Animated wave layers */}
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1440 800"
        >
          <defs>
            <linearGradient
              id="wave-gradient-1"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.15" />
            </linearGradient>
            <linearGradient
              id="wave-gradient-2"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.12" />
            </linearGradient>
            <linearGradient
              id="wave-gradient-3"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#0284c7" stopOpacity="0.06" />
              <stop offset="100%" stopColor="#0891b2" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* Wave 1 - Bottom layer */}
          <motion.path
            d="M0,400 C320,300 420,500 720,400 C1020,300 1120,500 1440,400 L1440,800 L0,800 Z"
            fill="url(#wave-gradient-1)"
            animate={{
              d: [
                "M0,400 C320,300 420,500 720,400 C1020,300 1120,500 1440,400 L1440,800 L0,800 Z",
                "M0,450 C320,350 420,550 720,450 C1020,350 1120,550 1440,450 L1440,800 L0,800 Z",
                "M0,400 C320,300 420,500 720,400 C1020,300 1120,500 1440,400 L1440,800 L0,800 Z",
              ],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />

          {/* Wave 2 - Middle layer */}
          <motion.path
            d="M0,500 C360,400 480,600 840,500 C1200,400 1320,600 1440,500 L1440,800 L0,800 Z"
            fill="url(#wave-gradient-2)"
            animate={{
              d: [
                "M0,500 C360,400 480,600 840,500 C1200,400 1320,600 1440,500 L1440,800 L0,800 Z",
                "M0,550 C360,450 480,650 840,550 C1200,450 1320,650 1440,550 L1440,800 L0,800 Z",
                "M0,500 C360,400 480,600 840,500 C1200,400 1320,600 1440,500 L1440,800 L0,800 Z",
              ],
            }}
            transition={{
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />

          {/* Wave 3 - Top layer */}
          <motion.path
            d="M0,600 C400,500 520,700 960,600 C1400,500 1320,700 1440,600 L1440,800 L0,800 Z"
            fill="url(#wave-gradient-3)"
            animate={{
              d: [
                "M0,600 C400,500 520,700 960,600 C1400,500 1320,700 1440,600 L1440,800 L0,800 Z",
                "M0,650 C400,550 520,750 960,650 C1400,550 1320,750 1440,650 L1440,800 L0,800 Z",
                "M0,600 C400,500 520,700 960,600 C1400,500 1320,700 1440,600 L1440,800 L0,800 Z",
              ],
            }}
            transition={{
              duration: 25,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </svg>

        {/* Subtle glowing orbs for depth */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 container mx-auto px-4 text-center my-30 md:my-0"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-3xl md:text-7xl font-bold mb-6 text-balance text-white">
            Revolucionamos la gestión del agua
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto text-pretty">
            Tecnología IoT para medición inteligente, monitoreo en tiempo real y
            uso responsable del recurso más vital
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Button size="lg" asChild>
            <Link href="#contact">Solicitar Demo</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#mission">Conocer Más</Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <div className="flex flex-col items-center gap-3 p-6 rounded-lg bg-white shadow-lg">
            <Droplets className="w-10 h-10 text-black" />
            <div className="text-3xl font-bold text-black">500+</div>
            <div className="text-sm text-gray-600">Medidores Instalados</div>
          </div>
          <div className="flex flex-col items-center gap-3 p-6 rounded-lg bg-white shadow-lg">
            <TrendingDown className="w-10 h-10 text-black" />
            <div className="text-3xl font-bold text-black">30%</div>
            <div className="text-sm text-gray-600">Reducción de Consumo</div>
          </div>
          <div className="flex flex-col items-center gap-3 p-6 rounded-lg bg-white shadow-lg">
            <Zap className="w-10 h-10 text-black" />
            <div className="text-3xl font-bold text-black">24/7</div>
            <div className="text-sm text-gray-600">
              Monitoreo en Tiempo Real
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 bg-white rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
