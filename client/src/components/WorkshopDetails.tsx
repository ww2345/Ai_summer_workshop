import {
  Calendar,
  Clock3,
  IndianRupee,
  Monitor,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import workshopVideo from "../assets/workshop-video.mp4";

const details = [
  {
    icon: Users,
    title: "Age Group",
    value: "8–14 Years",
  },
  {
    icon: Clock3,
    title: "Duration",
    value: "4 Weeks",
  },
  {
    icon: Monitor,
    title: "Mode",
    value: "Online",
  },
  {
    icon: IndianRupee,
    title: "Fee",
    value: "₹2,999",
  },
  {
    icon: Calendar,
    title: "Start Date",
    value: "15 July 2026",
  },
];

export default function WorkshopDetails() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={workshopVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
            Workshop Information
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Everything You Need To Know
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-zinc-300">
            A structured learning experience designed to introduce children
            to AI, Robotics, and future technologies through guided projects.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {details.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-md"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#D4AF37]/10 text-[#D4AF37]">
                  <Icon size={26} />
                </div>

                <p className="text-sm text-zinc-400">
                  {item.title}
                </p>

                <h3 className="mt-2 text-xl font-semibold text-white">
                  {item.value}
                </h3>

                <div className="mt-4 h-[2px] w-0 bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}