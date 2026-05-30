import Image from "next/image";
import imagem from "./imagem.jpeg";

export default function Home() {
  return (
    <main className="relative h-screen w-screen">
      <Image
        src={imagem}
        alt="Imagem"
        fill
        priority
        className="object-contain"
      />

      <div className="absolute inset-0 flex items-center justify-center bg-black/50">
        <h1 className="text-7xl font-bold text-white text-center">
          FODA-SE TUA OPINIÃO!!!
        </h1>
      </div>
    </main>
  );
}
