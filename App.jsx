import { useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [accent, setAccent] = useState("purple");

  const tones = {
    purple: {
      gradient: "from-purple-600 via-purple-700 to-fuchsia-700",
      ring: "ring-purple-300/50",
      text: "text-purple-100",
      chip: "bg-purple-100/10 text-purple-50 border-purple-300/20",
      flower: "fill-purple-300/40",
    },
    violet: {
      gradient: "from-violet-600 via-violet-700 to-purple-800",
      ring: "ring-violet-300/50",
      text: "text-violet-100",
      chip: "bg-violet-100/10 text-violet-50 border-violet-300/20",
      flower: "fill-violet-300/40",
    },
    fuchsia: {
      gradient: "from-fuchsia-600 via-fuchsia-700 to-purple-800",
      ring: "ring-fuchsia-300/50",
      text: "text-fuchsia-100",
      chip: "bg-fuchsia-100/10 text-fuchsia-50 border-fuchsia-300/20",
      flower: "fill-fuchsia-300/40",
    },
  };

  const palette = tones[accent];

  const images = [
    {
      src: "https://images.unsplash.com/photo-1618826411640-d6df44dd3f4a?q=80&w=1200&auto=format&fit=crop",
      alt: "Gatito triste mirando hacia abajo",
      quote: "Perdóname… sé que te fallé. Mi corazón late por ti y solo quiere cuidarte.",
    },
    {
      src: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?q=80&w=1200&auto=format&fit=crop",
      alt: "Gatito con ojos grandes llorosos",
      quote: "Sé que estás molesta y tienes razón. Te amo tanto; eres lo mejor que tengo.",
    },
    {
      src: "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?q=80&w=1200&auto=format&fit=crop",
      alt: "Gatito acurrucado en una manta",
      quote: "Si pudiera volver atrás, elegiría no lastimarte. Hoy elijo cuidarte mejor.",
    },
    {
      src: "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?q=80&w=1200&auto=format&fit=crop",
      alt: "Gatito mirando por la ventana en un día nublado",
      quote: "Tu sonrisa es mi casa. Perdón por las grietas; quiero repararlas contigo.",
    },
    {
      src: "https://images.unsplash.com/photo-1546447147-3fc2b09471b3?q=80&w=1200&auto=format&fit=crop",
      alt: "Gatito blanco con mirada dulce",
      quote: "No busco excusas, busco enmendar. Te agradezco por ser mi luz en lo gris.",
    },
  ];

  return (
    <div className={`min-h-screen w-full bg-gradient-to-br ${palette.gradient} text-white`}>
      <header className="relative z-10">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold">Perdóname, amor 💜</h1>
          <p className={`mt-4 text-lg sm:text-xl ${palette.text}`}>
            Sé que estás molesta porque te fallé. No quiero perder lo más valioso que tengo: <span className="font-semibold">tú</span>.
          </p>
          <div className="mt-6">
            <label className="mr-2">Elige tonalidad:</label>
            <select
              value={accent}
              onChange={(e) => setAccent(e.target.value)}
              className="bg-black/30 px-3 py-2 rounded-xl"
            >
              <option value="purple">Morado clásico</option>
              <option value="violet">Violeta suave</option>
              <option value="fuchsia">Fucsia intenso</option>
            </select>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 pb-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((img, i) => (
          <motion.figure
            key={i}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.06 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10"
          >
            <img src={img.src} alt={img.alt} className="h-72 w-full object-cover brightness-90" />
            <figcaption className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-5 flex items-end">
              <blockquote className="text-white/95 text-base">“{img.quote}”</blockquote>
            </figcaption>
          </motion.figure>
        ))}
      </main>

      <footer className="text-center pb-10 text-sm opacity-80">Hecho con amor 💜 y gatitos 🐾</footer>
    </div>
  );
}
