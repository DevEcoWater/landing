"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Droplets, LineChart, Bell, CreditCard } from "lucide-react";

const features = [
  {
    icon: Droplets,
    title: "Medidores Inteligentes IoT",
    description: "Detección de fugas y consumo en tiempo real",
  },
  {
    icon: LineChart,
    title: "Plataforma Web Avanzada",
    description: "Analítica, tableros centralizados y facturación automatizada",
  },
  {
    icon: Bell,
    title: "Alertas Instantáneas",
    description: "Notificaciones para usuarios y empresas",
  },
  {
    icon: CreditCard,
    title: "Facturación Justa",
    description: "Basada en el consumo real",
  },
];

export function Solutions() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="solutions" ref={ref} className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            Nuestras Soluciones
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Tecnología IoT y analítica avanzada para una gestión inteligente del
            agua
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow border-border/50">
                <CardContent className="p-6">
                  <feature.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground text-pretty">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
