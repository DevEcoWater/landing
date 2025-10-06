"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";

export function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (y) => {
      setScrolled(y > window.innerHeight * 0.8);
    });
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <motion.nav
      initial={false}
      animate={{
        backgroundColor: "black",

        color: "white",
      }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Logo />

        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-sm font-medium  hover:text-muted-foreground transition-colors"
          >
            Inicio
          </Link>
          <Link
            href="#mission"
            className="text-sm font-medium  hover:text-muted-foreground transition-colors"
          >
            Misión
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium  hover:text-muted-foreground transition-colors"
          >
            Sobre Nosotros
          </Link>
          <Link
            href="#testimonials"
            className="text-sm font-medium  hover:text-muted-foreground transition-colors"
          >
            Reseñas
          </Link>
        </div>

        <Button asChild>
          <Link href="#contact">Contacto</Link>
        </Button>
      </div>
    </motion.nav>
  );
}
