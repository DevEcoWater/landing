import { Logo } from "@/components/logo"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Logo className="mb-4" />
            <p className="text-sm text-muted-foreground text-pretty">
              Revolucionando la gestión del agua mediante tecnología IoT
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Navegación</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#mission" className="text-muted-foreground hover:text-primary transition-colors">
                  Misión
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">
                  Reseñas
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Buenos Aires, Argentina</li>
              <li>contacto@ecowater.com.ar</li>
              <li>+54 9 11 1234-5678</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacidad
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Términos
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} EcoWater. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
