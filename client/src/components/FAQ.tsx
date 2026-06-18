import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do students need prior coding experience?",
    answer:
      "No. The workshop is designed for beginners and introduces concepts in a simple and engaging way.",
  },
  {
    question: "Will sessions be recorded?",
    answer:
      "Yes. Recordings will be provided so students can revisit lessons anytime during the workshop.",
  },
  {
    question: "Will participants receive a certificate?",
    answer:
      "Yes. Every student who completes the workshop will receive a certificate of participation.",
  },
  {
    question: "What equipment is required?",
    answer:
      "A laptop or desktop computer with a stable internet connection is sufficient for this workshop.",
  },
  {
    question: "How are classes conducted?",
    answer:
      "Classes are conducted live online with interactive sessions, activities, and guided projects.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-black py-28">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
            Frequently Asked Questions
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Got Questions?
          </h2>

          <p className="mt-6 text-zinc-400">
            Everything you need to know before enrolling.
          </p>
        </div>

        <div className="mt-16 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
                className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <span className="text-lg font-medium text-white">
                    {faq.question}
                  </span>

                  <motion.div
                    animate={{
                      rotate: isOpen ? 180 : 0,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                  >
                    <ChevronDown
                      size={20}
                      className="text-[#D4AF37]"
                    />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                    >
                      <div className="border-t border-zinc-800 px-6 py-5 text-zinc-400">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}