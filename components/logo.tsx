import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      <Image
        src="/icon.svg"
        alt="EcoWater Logo"
        width={40}
        height={40}
        className="w-10 h-10 rounded-md"
      />
      <span className="text-xl font-bold text-white">EcoWater</span>
    </Link>
  );
}
