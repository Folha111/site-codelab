"use client";

import { motion } from "framer-motion";
import { Trophy, Gamepad2, BookOpen, Star, ArrowUpRight, Flame, Medal, Code2, Zap } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: BookOpen,
    title: "251+ tarefas estruturadas",
    description: "Conteúdo organizado em módulos por nível, do zero ao avançado.",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: Trophy,
    title: "Sistema de XP & badges",
    description: "Ganhe pontos, desbloqueie conquistas e acompanhe sua evolução.",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: Gamepad2,
    title: "7 jogos interativos",
    description: "Aprenda HTML, CSS e lógica jogando — memória, quiz, digitação e mais.",
    color: "from-teal-500 to-cyan-600",
  },
  {
    icon: Medal,
    title: "Certificado de conclusão",
    description: "Receba seu certificado ao completar os módulos e comprove seu aprendizado.",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: Flame,
    title: "Sequência de estudos",
    description: "Mantenha sua streak diária e compete no ranking com outros alunos.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Zap,
    title: "Modo Foco",
    description: "Estude sem distrações com o modo foco integrado na plataforma.",
    color: "from-yellow-500 to-orange-500",
  },
];

const modules = [
  { level: "Curioso", desc: "Primeiros passos no mundo da programação", topics: ["Introdução à Programação", "Lógica", "VSCode"] },
  { level: "Aprendiz", desc: "Construindo sua base com HTML e CSS", topics: ["HTML do zero", "CSS", "Projetos práticos"] },
];

export default function Course() {
  return (
    <section id="curso" className="py-16 md:py-28 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-3">
            Nosso Curso
          </span>
          <h2 className="text-4xl font-black text-slate-900 mb-4">
            Aprenda a programar do{" "}
            <span className="gradient-text">zero ao avançado</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto leading-relaxed">
            A <strong className="text-slate-700">CodeLab BR</strong> é nossa plataforma de ensino criada para quem quer entrar no mundo da programação de forma prática, gamificada e sem enrolação.
          </p>
        </motion.div>

        {/* Main card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-emerald-100 overflow-hidden bg-white mb-6 hover:shadow-xl transition-all duration-500"
        >
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Screenshot side */}
            <div className="relative bg-emerald-50 flex flex-col items-center justify-center min-h-72 p-8 gap-4 overflow-hidden">
              <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full from-emerald-400 to-cyan-400 bg-gradient-to-br opacity-10 blur-2xl pointer-events-none" />
              <div className="relative w-full max-w-md bg-white rounded-2xl shadow-xl border border-white/80 overflow-hidden">
                <div className="flex items-center gap-1.5 px-3 py-2.5 border-b border-slate-100 bg-slate-50">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  <div className="ml-2 flex-1 h-4 rounded-full bg-slate-200 flex items-center px-2">
                    <span className="text-[9px] text-slate-400 font-mono">app.codelab-br.com</span>
                  </div>
                </div>
                <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
                  <Image
                    src="/project1-modules.png"
                    alt="CodeLab BR — Módulos"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>
              <div className="absolute top-4 left-6 text-7xl font-black opacity-[0.06] text-emerald-500 select-none pointer-events-none">
                BR
              </div>
            </div>

            {/* Content side */}
            <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
                  Plataforma EdTech / SaaS
                </span>
                <a
                  href="https://app.codelab-br.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-slate-700 transition-colors"
                >
                  <ArrowUpRight size={11} />
                  app.codelab-br.com
                </a>
              </div>

              <h3 className="text-2xl font-black text-slate-900 mb-3">CodeLab BR</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Plataforma completa de ensino de programação para iniciantes com gamificação avançada. Aprenda no seu ritmo com módulos estruturados, jogos interativos e conquistas que tornam o aprendizado viciante.
              </p>

              {/* Modules preview */}
              <div className="flex flex-col gap-2 mb-6">
                {modules.map((m) => (
                  <div key={m.level} className="bg-slate-50 rounded-xl px-4 py-3 border border-slate-100">
                    <div className="flex items-center gap-2 mb-1">
                      <Code2 size={13} className="text-emerald-500" />
                      <span className="text-xs font-bold text-slate-700">{m.level}</span>
                      <span className="text-xs text-slate-400">— {m.desc}</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {m.topics.map((t) => (
                        <span key={t} className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-white border border-slate-200 text-slate-600">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="https://app.codelab-br.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full gradient-bg text-white font-bold text-sm shadow-md shadow-violet-200 hover:opacity-90 transition-opacity w-fit"
              >
                Eu quero aprender
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="bg-white rounded-2xl p-5 border border-slate-100 hover:border-slate-200 hover:shadow-md transition-all duration-300 flex items-start gap-4"
              >
                <div className={`shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center shadow-sm`}>
                  <Icon size={18} className="text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">{f.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{f.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
