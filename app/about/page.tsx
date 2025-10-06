"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const team = [
  { name: "Marian Berna", role: "CEO", title: "Ingeniero Aeroespacial" },
  { name: "Mariano Vergne", role: "CCO", title: "Ingeniero Químico" },
  { name: "Bernardo Bidart", role: "COO", title: "Lic. en Administración" },
  { name: "Juan Romano", role: "CFO", title: "Economista" },
  { name: "Bautista Ramírez", role: "CFO", title: "Economista" },
  { name: "Juan Martínez", role: "Front-End Dev", title: "Desarrollador" },
  { name: "Marcos Mercado", role: "Back-End Dev", title: "Desarrollador" },
];

const values = [
  {
    title: "Innovación",
    description: "Desarrollo constante de tecnologías IoT y analítica avanzada",
  },
  {
    title: "Transparencia",
    description: "Datos confiables para una facturación justa",
  },
  {
    title: "Sostenibilidad",
    description: "Uso responsable del agua como compromiso social",
  },
  {
    title: "Colaboración",
    description:
      "Alianzas con cooperativas, gobiernos y empresas para escalar el impacto",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Sobre EcoWater
            </h1>
            <p className="text-xl text-muted-foreground text-pretty mb-8">
              Una startup tecnológica argentina que diseña soluciones de gestión
              inteligente del agua a través de tecnología IoT y analítica
              avanzada
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="h-full">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4">Misión</h2>
                  <p className="text-muted-foreground text-pretty">
                    Revolucionar la gestión del agua mediante tecnología,
                    ofreciendo medición inteligente, monitoreo en tiempo real y
                    herramientas de concientización social para garantizar un
                    uso responsable y sostenible del recurso más vital: el agua.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="h-full">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4">Visión</h2>
                  <p className="text-muted-foreground text-pretty">
                    Convertirse en la solución líder en Latinoamérica para la
                    gestión eficiente del agua, empoderando tanto a empresas
                    como a usuarios y contribuyendo a un futuro más sostenible.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nuestros Valores
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground text-pretty">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Equipo Fundador
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              Un equipo multidisciplinario comprometido con la innovación y la
              sostenibilidad
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05 * index }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-20 h-20 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <h3 className="font-bold mb-1">{member.name}</h3>
                    <p className="text-sm text-primary mb-1">{member.role}</p>
                    <p className="text-xs text-muted-foreground">
                      {member.title}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
