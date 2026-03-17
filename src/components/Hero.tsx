"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const codeSnippet = [
  { tokens: [{ text: "$ ", color: "#7c3aed" }, { text: "codelab init --project", color: "#0f172a" }] },
  { tokens: [{ text: "> ", color: "#94a3b8" }, { text: "Entendendo sua ideia...", color: "#94a3b8" }] },
  { tokens: [{ text: "> ", color: "#94a3b8" }, { text: "Montando design...", color: "#94a3b8" }] },
  { tokens: [{ text: "> ", color: "#94a3b8" }, { text: "Escrevendo código limpo...", color: "#94a3b8" }] },
  { tokens: [{ text: "✓ ", color: "#10b981" }, { text: "Build successful", color: "#10b981" }] },
  { tokens: [] },
  { tokens: [{ text: "$ ", color: "#7c3aed" }, { text: "codelab deploy --env=production", color: "#0f172a" }] },
  { tokens: [{ text: "✓ ", color: "#10b981" }, { text: "Deployed to ", color: "#10b981" }, { text: "https://seuprojeto.com", color: "#0891b2" }] },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-16 overflow-x-hidden bg-white">
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #0f172a 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 w-full py-10 md:py-0">
        {/* Top row: badge left, stats right */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-between mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 bg-slate-50 text-slate-500 text-xs font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Desenvolvimento de Software & SaaS
          </div>
          <div className="hidden md:flex items-center gap-8">
            {[
              { value: "2+", label: "Projetos" },
              { value: "100%", label: "Satisfação" },
            ].map((s) => (
              <div key={s.label} className="text-right">
                <p className="text-lg font-black gradient-text leading-none">{s.value}</p>
                <p className="text-xs text-slate-400 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black leading-[0.92] tracking-tight text-slate-900 mb-8 max-w-4xl"
        >
          Transformamos{" "}
          <span className="gradient-text">ideias</span>
          <br />
          em produtos digitais
        </motion.h1>

        {/* Subtitle + CTAs side by side */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14"
        >
          <p className="text-slate-500 leading-relaxed max-w-sm">
            Sites, plataformas SaaS e aplicações sob medida.
            Você vê o resultado antes de pagar.
          </p>
          <div className="flex flex-wrap gap-3 shrink-0">
            <a
              href="#contato"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full gradient-bg text-white font-bold shadow-lg shadow-violet-200 hover:opacity-90 transition-opacity text-sm"
            >
              Iniciar projeto <ArrowRight size={15} />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-slate-200 text-slate-600 font-semibold hover:bg-slate-50 transition-colors text-sm"
            >
              Portfólio <ArrowUpRight size={15} />
            </a>
          </div>
        </motion.div>

        {/* Wide code card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="relative"
        >
          <div className="absolute -inset-1 rounded-2xl opacity-10 blur-xl gradient-bg pointer-events-none" />
          <div className="relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-xl">
            {/* Window bar */}
            <div className="flex items-center gap-2 px-5 py-3 border-b border-slate-700/50 bg-slate-800/80">
              <span className="w-3 h-3 rounded-full bg-red-500/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <span className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="ml-3 text-xs text-slate-500 font-mono">terminal</span>
              <div className="ml-auto flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="text-xs text-slate-500 font-mono">codelab v1.0.0</span>
              </div>
            </div>
            {/* Code lines in 2 columns on wide screens */}
            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-700/30">
              <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm leading-6 sm:leading-7 overflow-x-auto">
                {codeSnippet.slice(0, 5).map((line, i) => (
                  <div key={i} className="flex">
                    <span className="select-none text-slate-700 w-5 text-right mr-4 text-xs leading-7">{i + 1}</span>
                    <span>{line.tokens.map((t, j) => <span key={j} style={{ color: t.color }}>{t.text}</span>)}</span>
                  </div>
                ))}
              </div>
              <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm leading-6 sm:leading-7 overflow-x-auto">
                {codeSnippet.slice(5).map((line, i) => (
                  <div key={i} className="flex">
                    <span className="select-none text-slate-700 w-5 text-right mr-4 text-xs leading-7">{i + 6}</span>
                    <span>{line.tokens.map((t, j) => <span key={j} style={{ color: t.color }}>{t.text}</span>)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
