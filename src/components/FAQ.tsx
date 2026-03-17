"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Qual tecnologia vocês usam?",
    a: "Usamos a tecnologia que mais se encaixa com o projeto desejado. No nosso dia a dia trabalhamos com Next.js, React, TypeScript, Node.js, Tailwind CSS, entre outras ferramentas modernas — mas a escolha sempre depende do contexto, da escala e dos objetivos do projeto.",
  },
  {
    q: "Quanto tempo leva para entregar um projeto?",
    a: "Depende da complexidade. Um site institucional pode ser entregue em poucos dias, enquanto um SaaS ou sistema mais robusto pode levar algumas semanas. Após o briefing, passamos um prazo realista e trabalhamos para cumpri-lo.",
  },
  {
    q: "Como funciona o pagamento?",
    a: "Primeiro te mostramos o projeto completo e você aprova cada detalhe. Só depois de estar satisfeito o pagamento é realizado. Sem surpresas.",
  },
  {
    q: "Vocês fazem manutenção após a entrega?",
    a: "Sim. Oferecemos suporte após a entrega e podemos combinar planos de manutenção contínua conforme a necessidade do projeto.",
  },
  {
    q: "Posso pedir alterações durante o desenvolvimento?",
    a: "Sim, o processo é colaborativo. Enviamos o projeto para você validar e pedimos seu feedback antes de finalizar. Queremos que o resultado seja exatamente o que você imaginou.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-violet-600 mb-3">
            Dúvidas
          </span>
          <h2 className="text-4xl font-black text-slate-900">
            Perguntas <span className="gradient-text">frequentes</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="bg-white rounded-2xl border border-slate-100 overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-sm font-semibold text-slate-900">{faq.q}</span>
                {open === i ? (
                  <Minus size={16} className="text-violet-500 shrink-0 ml-4" />
                ) : (
                  <Plus size={16} className="text-slate-400 shrink-0 ml-4" />
                )}
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <p className="px-6 pb-5 text-sm text-slate-500 leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
