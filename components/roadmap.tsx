"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";

const roadmapSteps = [
  {
    phase: "Validación",
    description: "Pilotos en cooperativas (COSEGO, Olmos, Abasto, Romero)",
  },
  { phase: "Expansión Nacional", description: "Alianzas con ABSA y AySA" },
  {
    phase: "Crecimiento Regional",
    description: "Expansión a Mendoza, Córdoba, Santa Fe y LATAM",
  },
];

export function Roadmap() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="roadmap" ref={ref} className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center text-balance">
            Roadmap
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12 text-pretty">
            Nuestro plan de crecimiento y expansión en Argentina y Latinoamérica
          </p>

          <div className="space-y-6">
            {roadmapSteps.map((item, index) => (
              <motion.div
                key={item.phase}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0 text-lg">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold mb-2 text-lg">{item.phase}</h3>
                        <p className="text-muted-foreground text-pretty">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
