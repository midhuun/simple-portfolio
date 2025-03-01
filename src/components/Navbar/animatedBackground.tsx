const words = ["Full-Stack Developer", "React.js", "Next.js", "MERN Stack", "Freelancer", "Performance Optimization"];

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden w-full flex flex-wrap justify-center items-center pointer-events-none">
      {words.map((word, index) => (
        <span
          key={index}
          className="absolute text-[var(--secondary)] text-4xl md:text-7xl font-bold opacity-20 animate-fadeMove"
          style={{
            top: `${(index % 3) * 20 + 15}%`, // Structured grid-based positioning
            left: `${(index % 2) * 30 + 20}%`,
            transform: "translate(-50%, -50%)",
          }}
        >
          {word}
        </span>
      ))}
    </div>
  );
};

export default AnimatedBackground;
