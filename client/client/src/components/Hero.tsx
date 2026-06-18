import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import heroVideo from "../assets/hero-video.mp4";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/40" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 lg:px-8">
        <div className="max-w-4xl">
          {/* Badge */}
          

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="mt-8 text-5xl font-bold leading-tight md:text-7xl"
          >
            <span className="bg-gradient-to-r from-[#D4AF37] via-[#F4D03F] to-[#D4AF37] bg-clip-text text-transparent">
              AI & Robotics
            </span>

            <span className="mt-3 block text-white">
              Summer Workshop
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
            }}
            className="mt-8 max-w-2xl text-lg leading-8 text-zinc-300 md:text-xl"
          >
            Introduce your child to Artificial Intelligence, Robotics,
            computational thinking, and future technologies through engaging
            hands-on projects, guided learning, and interactive online sessions.
          </motion.p>

          {/* Workshop Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.6,
            }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <div className="rounded-lg border border-zinc-800 bg-black/40 px-4 py-3 text-sm text-zinc-200 backdrop-blur-sm">
              Age: 8–14 Years
            </div>

            <div className="rounded-lg border border-zinc-800 bg-black/40 px-4 py-3 text-sm text-zinc-200 backdrop-blur-sm">
              Duration: 4 Weeks
            </div>

            <div className="rounded-lg border border-zinc-800 bg-black/40 px-4 py-3 text-sm text-zinc-200 backdrop-blur-sm">
              Online
            </div>

            <div className="rounded-lg border border-zinc-800 bg-black/40 px-4 py-3 text-sm text-zinc-200 backdrop-blur-sm">
              ₹2,999
            </div>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.8,
            }}
            className="mt-12 flex flex-wrap gap-4"
          >
            <motion.a
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.98,
              }}
              href="#registration"
              className="inline-flex items-center gap-2 rounded-lg bg-[#D4AF37] px-7 py-4 font-semibold text-black shadow-lg transition"
            >
              Enroll Now
              <ArrowRight size={18} />
            </motion.a>

            <motion.button
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="rounded-lg border border-zinc-700 px-7 py-4 font-medium text-zinc-200 transition hover:border-[#D4AF37] hover:text-[#F4D03F]"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </div>
      {/* Bottom Fade */}
<div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-black" />
    </section>
  );
}