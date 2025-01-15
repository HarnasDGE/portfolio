import { motion } from "framer-motion";

export const HeroTitle = () => {
  const title = "Front-End.";

  const letterVariants = {
    hidden: { y: 0 },
    visible: {
      y: [0, -10, 0], // Kluczowe klatki animacji dla podskakiwania
    },
  };

  return (
    <h2 className="text-primary font-extrabold py-6 text-4xl sm:text-5xl">
      {title.split("").map((letter, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          initial="hidden"
          animate="visible"
          transition={{
            delay: index * 0.2, // Dodanie opóźnienia dla każdego znaku
            duration: 0.6, // Długość jednej animacji
            repeat: Infinity, // Dla kropki ograniczenie do 2 powtórzeń
            repeatDelay: 2, // Krótszy czas dla kropki
            ease: "easeInOut", // Płynny efekt
          }}
          className="inline-block" // Ważne dla poprawnego działania animacji
        >
          {letter === " " ? "\u00A0" : letter} {/* Obsługa spacji */}
        </motion.span>
      ))}
    </h2>
  );
};
