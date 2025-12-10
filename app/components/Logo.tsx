import Image from "next/image";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`relative flex items-center ${className}`}>
      {/* Aici incarcam imaginea ta de lux din folderul public */}
      <div className="relative h-12 w-48 md:h-16 md:w-56"> {/* Ajusteaza w-48/56 daca logo-ul e mai lat */}
        <Image
          src="/logo.png"
          alt="3 Monkeys Phuket Luxury Spa"
          fill
          className="object-contain object-left" // object-left tine logo-ul aliniat la stanga
          priority // Il incarca instantaneu
        />
      </div>
    </div>
  );
}