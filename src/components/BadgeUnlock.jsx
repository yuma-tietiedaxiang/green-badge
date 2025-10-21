import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Sparkles } from "lucide-react";
import { Earth3DModel } from "./Earth3DModel";

export function BadgeUnlock({ onCheckBadges }) {
  // Generate particles for sparkle effect
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    angle: (i * 360) / 20,
    delay: i * 0.05,
  }));

  const rays = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    rotation: (i * 360) / 12,
  }));

  return (
    <div className="fixed inset-0 flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-emerald-50 to-green-100">
      {/* Depth layers - background circles */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full bg-emerald-500/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full bg-green-500/10 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Light rays */}
      <div className="absolute">
        {rays.map((ray) => (
          <motion.div
            key={ray.id}
            className="absolute w-1 h-[300px] bg-gradient-to-t from-transparent via-emerald-400/20 to-transparent origin-bottom"
            style={{
              left: "50%",
              bottom: "50%",
              transform: `rotate(${ray.rotation}deg)`,
            }}
            animate={{
              opacity: [0, 0.6, 0],
              scaleY: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: ray.id * 0.1,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Main content container */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Particles */}
        {particles.map((particle) => {
          const x = Math.cos((particle.angle * Math.PI) / 180) * 150;
          const y = Math.sin((particle.angle * Math.PI) / 180) * 150;

          return (
            <motion.div
              key={particle.id}
              className="absolute w-2 h-2 rounded-full bg-emerald-400"
              initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
              animate={{
                x: [0, x],
                y: [0, y],
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1.5,
                delay: 0.5 + particle.delay,
                ease: "easeOut",
              }}
            />
          );
        })}

        {/* Glow effect behind badge */}
        <motion.div
          className="absolute w-64 h-64 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(52,211,153,0.4) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Badge container with multiple layers for depth */}
        <motion.div
          className="relative"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
            delay: 0.2,
          }}
        >
          {/* Outer glow ring */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              boxShadow:
                "0 0 60px 20px rgba(52,211,153,0.5), 0 0 100px 40px rgba(16,185,129,0.3)",
            }}
            animate={{
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Middle layer - depth */}
          <motion.div
            className="absolute -inset-4 rounded-full bg-gradient-to-br from-emerald-400/20 to-green-400/20 blur-xl"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Badge circle */}
          <motion.div
            className="relative w-48 h-48 rounded-full bg-gradient-to-br from-emerald-400 via-green-300 to-emerald-500 flex items-center justify-center shadow-2xl"
            style={{
              boxShadow:
                "0 20px 60px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.5)",
            }}
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Inner shine */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 to-transparent" />

            {/* Badge emoji */}
            <motion.div
              className="relative w-full h-full flex items-center justify-center"
              initial={{ scale: 0, rotate: 180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: 0.5,
              }}
            >
              <Earth3DModel className="w-full h-full" />
            </motion.div>
          </motion.div>

          {/* Sparkles around badge */}
          <motion.div
            className="absolute -top-2 -right-2"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Sparkles className="w-8 h-8 text-emerald-400 fill-emerald-400" />
          </motion.div>
          <motion.div
            className="absolute -bottom-2 -left-2"
            animate={{
              rotate: [360, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Sparkles className="w-6 h-6 text-emerald-400 fill-emerald-400" />
          </motion.div>
        </motion.div>

        {/* Text content */}
        <motion.div
          className="mt-12 text-center space-y-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.h1
            className="text-emerald-900 text-5xl tracking-tight"
            animate={{
              textShadow: [
                "0 0 20px rgba(52,211,153,0.5)",
                "0 0 30px rgba(52,211,153,0.8)",
                "0 0 20px rgba(52,211,153,0.5)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Welcome to Green Badge!
          </motion.h1>
          <motion.p
            className="text-green-700 text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            Start Your Eco Journey
          </motion.p>
        </motion.div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <Button
            onClick={onCheckBadges}
            className="mt-8 px-8 py-6 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            <Sparkles className="w-5 h-5 mr-2" />
            Explore My Badges
          </Button>
        </motion.div>
      </div>

      {/* Floating particles in background */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={`bg-particle-${i}`}
          className="absolute w-1 h-1 rounded-full bg-emerald-300/40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
