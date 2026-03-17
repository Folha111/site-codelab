"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rafael Mendes",
    role: "Fundador, Agenda Fácil",
    text: "A CodeLab entendeu exatamente o que eu precisava. Entregaram um sistema limpo, rápido e fácil de usar. O processo foi transparente do início ao fim — só paguei depois de aprovar tudo.",
    stars: 5,
    initials: "RM",
    color: "from-violet-500 to-purple-600",
  },
  {
    name: "Camila Torres",
    role: "Diretora, Studio CT",
    text: "Precisava de um site profissional para meu estúdio e a CodeLab superou as expectativas. Design moderno, responsivo e entregue no prazo. Recomendo demais.",
    stars: 5,
    initials: "CT",
    color: "from-cyan-500 to-teal-600",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-violet-600 mb-3">
            Depoimentos
          </span>
          <h2 className="text-4xl font-black text-slate-900">
            O que nossos clientes{" "}
            <span className="gradient-text">dizem</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-slate-50 rounded-2xl p-8 border border-slate-100"
            >
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} size={14} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center shrink-0`}>
                  <span className="text-white text-xs font-bold">{t.initials}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-400">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
