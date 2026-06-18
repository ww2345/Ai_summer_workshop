import { motion } from "framer-motion";
import {
  Brain,
  Bot,
  Code2,
  Lightbulb,
  Cpu,
  Trophy,
} from "lucide-react";

const outcomes = [
  {
    icon: Brain,
    title: "AI Fundamentals",
    description:
      "Understand how Artificial Intelligence works through practical examples.",
  },
  {
    icon: Bot,
    title: "Robotics Basics",
    description:
      "Learn the core concepts behind robots and automation systems.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description:
      "Develop logical thinking and structured problem-solving skills.",
  },
  {
    icon: Code2,
    title: "Coding Logic",
    description:
      "Build programming fundamentals through engaging activities.",
  },
  {
    icon: Cpu,
    title: "Smart Systems",
    description:
      "Explore sensors, inputs, outputs, and intelligent devices.",
  },
  {
    icon: Trophy,
    title: "Final Project",
    description:
      "Create and showcase a project using the skills learned.",
  },
];

export default function LearningOutcomes() {
  return (
    <section
      id="outcomes"
      className="bg-black py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
            Learning Outcomes
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            What Students Will Learn
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-zinc-400">
            A carefully designed curriculum that combines
            technology, creativity, and hands-on learning.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {outcomes.map((outcome, index) => {
            const Icon = outcome.icon;

            return (
              <motion.div
                key={outcome.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group rounded-2xl border border-zinc-800 bg-zinc-950 p-8"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#D4AF37]/10 text-[#D4AF37]">
                  <Icon size={26} />
                </div>

                <h3 className="text-xl font-semibold text-white">
                  {outcome.title}
                </h3>

                <p className="mt-4 leading-7 text-zinc-400">
                  {outcome.description}
                </p>

                <div className="mt-6 h-[2px] w-0 bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}