"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";

const models = [
  {
    title: "Venta de Medidores",
    description: "B2B - Hardware IoT",
  },
  {
    title: "Suscripción Mensual",
    description: "B2B - Plataforma",
  },
  {
    title: "Comisión por Transacción",
    description: "B2C - Pagos",
  },
];

export function BusinessModel() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="business-model" ref={ref} className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center text-balance">
            Modelo de Negocio
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12 text-pretty">
            Soluciones escalables para cooperativas, empresas de agua, gobiernos
            y ONGs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {models.map((model, index) => (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-bold mb-2 text-lg">{model.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {model.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center bg-card border border-border rounded-lg p-8"
          >
            <p className="text-muted-foreground mb-2">Clientes objetivo:</p>
            <p className="font-medium text-lg">
              Cooperativas, empresas de agua, gobiernos y ONGs
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
