"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const steps = [
  {
    cmd: "briefing()",
    title: "Briefing",
    output: "Entendemos seu negócio, objetivos e público-alvo. Sem achismos — só clareza.",
    status: "✓ concluído",
    color: "#7c3aed",
  },
  {
    cmd: "build({ design: client.vision })",
    title: "Design & Build",
    output: "Criamos o site com o design que você imagina, direto no código. Você aprova e pede as mudanças que quiser.",
    status: "✓ aguardando aprovação",
    color: "#0891b2",
  },
  {
    cmd: "develop({ quality: 'clean' })",
    title: "Desenvolvimento",
    output: "Código limpo, testado e escalável. Entregas incrementais para você acompanhar.",
    status: "✓ testes passando",
    color: "#0d9488",
  },
  {
    cmd: "deploy('production')",
    title: "Launch & Suporte",
    output: "Deploy com zero downtime, monitoramento e suporte contínuo.",
    status: "✓ online",
    color: "#059669",
  },
];

export default function Process() {
  return (
    <section id="processo" className="py-16 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-teal-600 mb-3">
              Como trabalhamos
            </span>
            <h2 className="text-4xl font-black text-slate-900">
              Processo{" "}
              <span className="gradient-text">transparente</span>
            </h2>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed max-w-xs md:text-right">
            Do briefing ao launch, você sabe exatamente o que está acontecendo.
          </p>
        </motion.div>

        {/* Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="absolute -inset-1 rounded-2xl opacity-10 blur-xl gradient-bg pointer-events-none" />
          <div className="relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-xl">
            {/* Window bar */}
            <div className="flex items-center gap-2 px-5 py-3 border-b border-slate-700/50 bg-slate-800/80">
              <span className="w-3 h-3 rounded-full bg-red-500/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <span className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="ml-3 text-xs text-slate-500 font-mono">processo.ts</span>
            </div>

            <div className="p-4 sm:p-6 md:p-8 font-mono text-xs sm:text-sm space-y-6 sm:space-y-8 overflow-x-auto">
              {steps.map((step, i) => (
                <motion.div
                  key={step.cmd}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="group"
                >
                  {/* Command line */}
                  <div className="flex items-center gap-2 mb-2">
                    <span style={{ color: step.color }} className="font-bold shrink-0">$</span>
                    <span className="text-slate-200 break-all sm:break-normal">
                      <span className="text-slate-400">codelab.</span>
                      <span style={{ color: step.color }}>{step.cmd}</span>
                    </span>
                  </div>

                  {/* Output */}
                  <div className="pl-4 border-l-2 border-slate-700 ml-2 space-y-1">
                    <p className="text-slate-400 leading-relaxed text-xs md:text-sm">{step.output}</p>
                    <p className="text-xs" style={{ color: step.color }}>{step.status}</p>
                  </div>
                </motion.div>
              ))}

              {/* Blinking cursor */}
              <div className="flex items-center gap-2 pt-2">
                <span className="text-violet-500 font-bold">$</span>
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="inline-block w-2 h-4 bg-violet-400 rounded-sm"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trust badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 flex items-start gap-4 bg-emerald-50 border border-emerald-100 rounded-2xl px-6 py-5 max-w-2xl"
        >
          <ShieldCheck size={20} className="text-emerald-500 shrink-0 mt-0.5" />
          <p className="text-sm text-emerald-800 leading-relaxed">
            <span className="font-bold">Sem risco para você.</span> Primeiro mostramos o site completo, você valida e solicita as mudanças que quiser. O pagamento só acontece depois da sua aprovação.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
