"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, MessageCircle, CheckCircle } from "lucide-react";

const WA_NUMBER = "5551996917733";
const WA_MESSAGE = encodeURIComponent("Olá! Vim pelo site da CodeLab e gostaria de um orçamento personalizado para o meu projeto.");

const perks = [
  "Orçamento sem compromisso",
  "Resposta rápida",
  "Atendimento personalizado",
];

export default function CTA() {
  return (
    <section id="contato" className="py-16 md:py-28 bg-slate-50 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #0f172a 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden"
        >
          <div className="grid md:grid-cols-2">
            {/* Left — info */}
            <div className="p-8 sm:p-12 flex flex-col justify-center">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-violet-600 mb-4">
                Contato
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4 leading-tight">
                Vamos construir{" "}
                <span className="gradient-text">juntos?</span>
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                Nos chame no WhatsApp, entendemos sua demanda e montamos um orçamento personalizado para o seu projeto.
              </p>

              <ul className="flex flex-col gap-3 mb-8">
                {perks.map((p) => (
                  <li key={p} className="flex items-center gap-2.5 text-sm text-slate-600">
                    <CheckCircle size={16} className="text-emerald-500 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>

              <a
                href={`mailto:codelabs.br@gmail.com`}
                className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-slate-600 transition-colors"
              >
                <Mail size={14} />
                codelabs.br@gmail.com
              </a>
            </div>

            {/* Right — WhatsApp CTA */}
            <div className="relative bg-slate-900 p-8 sm:p-12 flex flex-col items-center justify-center text-center overflow-hidden">
              {/* Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#14532d_0%,_transparent_70%)] opacity-30 pointer-events-none" />
              <div
                className="absolute inset-0 opacity-[0.06] pointer-events-none"
                style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
                  backgroundSize: "24px 24px",
                }}
              />

              <div className="relative">
                {/* WhatsApp icon */}
                <div className="w-20 h-20 rounded-3xl bg-[#25D366] flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-green-900/50">
                  <MessageCircle size={38} className="text-white" />
                </div>

                <h3 className="text-2xl font-black text-white mb-3">
                  Fale com a gente
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-xs">
                  Clique abaixo, nos conte sobre sua ideia e receba um orçamento personalizado direto no WhatsApp.
                </p>

                <motion.a
                  href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#25D366] text-white font-black text-sm shadow-xl shadow-green-900/40 hover:bg-[#22c55e] transition-colors w-full justify-center"
                >
                  <MessageCircle size={18} />
                  Chamar no WhatsApp
                  <ArrowRight size={16} />
                </motion.a>

                <p className="text-slate-600 text-xs mt-4">
                  Resposta em poucos minutos
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
