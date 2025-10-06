"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "María González",
    role: "Directora de COSEGO",
    content:
      "EcoWater transformó completamente nuestra gestión del agua. La detección de fugas en tiempo real nos ahorró miles de litros.",
    rating: 5,
  },
  {
    name: "Carlos Ramírez",
    role: "Gerente de Cooperativa Olmos",
    content:
      "La plataforma es intuitiva y los datos son precisos. Nuestros usuarios están más conscientes de su consumo.",
    rating: 5,
  },
  {
    name: "Ana Martínez",
    role: "Administradora Cooperativa Abasto",
    content:
      "La facturación automatizada nos simplificó el trabajo administrativo. Excelente inversión para nuestra cooperativa.",
    rating: 5,
  },
];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" ref={ref} className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Cooperativas y empresas confían en EcoWater para gestionar el agua
            de manera inteligente
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 text-pretty">
                    {testimonial.content}
                  </p>
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
