import { motion } from 'motion/react';

export function FloatingShapes() {
  const shapes = [
    {
      id: 1,
      size: 400,
      left: '10%',
      top: '20%',
      duration: 20,
      color: 'bg-gradient-to-br from-[#FFB5DA]/20 to-[#FFC8E5]/10',
    },
    {
      id: 2,
      size: 300,
      left: '70%',
      top: '10%',
      duration: 15,
      color: 'bg-gradient-to-br from-[#A8D8EA]/20 to-[#C4E5F5]/10',
    },
    {
      id: 3,
      size: 250,
      left: '80%',
      top: '60%',
      duration: 18,
      color: 'bg-gradient-to-br from-[#D4A5FF]/20 to-[#E5C8FF]/10',
    },
    {
      id: 4,
      size: 350,
      left: '15%',
      top: '70%',
      duration: 22,
      color: 'bg-gradient-to-br from-[#FFD4B5]/20 to-[#FFE5D4]/10',
    },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={`absolute rounded-full blur-3xl ${shape.color}`}
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.left,
            top: shape.top,
          }}
          animate={{
            y: [0, 50, 0],
            x: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
