"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star, Users, BookOpen, Trophy } from "lucide-react";
import Image from "next/image";

const stats = [
  { icon: BookOpen, value: "251+", label: "Tarefas" },
  { icon: Trophy,   value: "13",   label: "Badges" },
  { icon: Star,     value: "7",    label: "Jogos" },
  { icon: Users,    value: "100%", label: "Gratuito para começar" },
];

export default function CourseHero() {
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
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 text-xs font-semibold mb-7"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Plataforma de Ensino de Programação
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-slate-900 mb-6"
            >
              Aprenda a programar{" "}
              <span className="gradient-text">do zero ao avançado</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-500 leading-relaxed mb-8 max-w-md"
            >
              A CodeLab BR é uma plataforma completa de ensino de programação para iniciantes. Aprenda com módulos estruturados, jogos interativos, sistema de XP e conquistas que tornam o aprendizado viciante.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <a
                href="https://app.codelab-br.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full gradient-bg text-white font-bold shadow-lg shadow-violet-200 hover:opacity-90 transition-opacity text-sm"
              >
                Eu quero aprender
                <ArrowRight size={15} />
              </a>
              <a
                href="#modulos"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-slate-200 text-slate-600 font-semibold hover:bg-slate-50 transition-colors text-sm"
              >
                Ver módulos
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-slate-100"
            >
              {stats.map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.label} className="flex flex-col items-start gap-1">
                    <Icon size={16} className="text-emerald-500" />
                    <p className="text-xl font-black gradient-text leading-none">{s.value}</p>
                    <p className="text-xs text-slate-400">{s.label}</p>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Right — browser mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-3 rounded-2xl opacity-10 blur-2xl gradient-bg pointer-events-none" />
              <div className="relative bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xl">
                <div className="flex items-center gap-1.5 px-3 py-2.5 border-b border-slate-100 bg-slate-50">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  <div className="ml-2 flex-1 h-4 rounded-full bg-slate-200 flex items-center px-2">
                    <span className="text-[9px] text-slate-400 font-mono">app.codelab-br.com</span>
                  </div>
                </div>
                <Image
                  src="/project1-modules.png"
                  alt="CodeLab BR plataforma"
                  width={600}
                  height={400}
                  className="w-full object-cover object-top"
                />
              </div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 bg-white border border-slate-200 rounded-xl px-4 py-2.5 shadow-lg flex items-center gap-2"
              >
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-semibold text-slate-600">Plataforma no ar</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
