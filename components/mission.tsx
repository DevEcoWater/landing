"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Heart, Users } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Innovación",
    description: "Desarrollo constante de tecnologías IoT y analítica avanzada",
  },
  {
    icon: Eye,
    title: "Transparencia",
    description: "Datos confiables para una facturación justa",
  },
  {
    icon: Heart,
    title: "Sostenibilidad",
    description: "Uso responsable del agua como compromiso social",
  },
  {
    icon: Users,
    title: "Colaboración",
    description: "Alianzas con cooperativas, gobiernos y empresas",
  },
];

export function Mission() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="mission" ref={ref} className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            Nuestra Misión
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Revolucionar la gestión del agua mediante tecnología, ofreciendo
            medición inteligente, monitoreo en tiempo real y herramientas de
            concientización social para garantizar un uso responsable y
            sostenible del recurso más vital: el agua.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="bg-card border border-border rounded-lg p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Visión</h3>
            <p className="text-lg text-muted-foreground text-pretty">
              Convertirse en la solución líder en Latinoamérica para la gestión
              eficiente del agua, empoderando tanto a empresas como a usuarios y
              contribuyendo a un futuro más sostenible.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <value.icon className="w-12 h-12 text-primary mb-4" />
              <h4 className="text-xl font-bold mb-3">{value.title}</h4>
              <p className="text-muted-foreground text-pretty">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
