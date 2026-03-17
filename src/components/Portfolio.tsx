"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Trophy, Gamepad2, BookOpen, Star, Lock } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type Highlight = { icon: React.ElementType; label: string };

type RealProject = {
  kind: "real";
  number: string;
  title: string;
  category: string;
  url: string;
  description: string;
  highlights: Highlight[];
  stack: string[];
  images: string[];
  imageTabs: string[];
  color: string;
  bg: string;
  accent: string;
  border: string;
};

type ConfidentialProject = {
  kind: "confidential";
  number: string;
  title: string;
  category: string;
  teaser: string;
  color: string;
};

type PlaceholderProject = {
  kind: "placeholder";
  number: string;
};

type Project = RealProject | ConfidentialProject | PlaceholderProject;

const projects: Project[] = [
  {
    kind: "real",
    number: "01",
    title: "CodeLab BR",
    category: "Plataforma EdTech / SaaS",
    url: "https://codelab-br.com",
    description:
      "Plataforma completa de ensino de programação para iniciantes com gamificação avançada. Sistema de XP, badges, ranking, 251+ tarefas estruturadas, 7 jogos interativos e emissão de certificados.",
    highlights: [
      { icon: BookOpen, label: "251+ tarefas" },
      { icon: Trophy, label: "Sistema de XP & badges" },
      { icon: Gamepad2, label: "7 jogos interativos" },
      { icon: Star, label: "Ranking & certificados" },
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    images: ["/project1-modules.png", "/project1-games.png"],
    imageTabs: ["Módulos", "Jogos"],
    color: "from-emerald-500 via-teal-500 to-cyan-500",
    bg: "bg-emerald-50",
    accent: "text-emerald-600",
    border: "border-emerald-100",
  },
  {
    kind: "confidential",
    number: "02",
    title: "Projeto Confidencial",
    category: "SaaS / Plataforma",
    teaser: "Plataforma SaaS em fase de lançamento. NDA ativo.",
    color: "from-violet-600 via-purple-600 to-indigo-600",
  },
  {
    kind: "confidential",
    number: "03",
    title: "Projeto Confidencial",
    category: "Web App",
    teaser: "Aplicação web para gestão interna. Cliente em stealth mode.",
    color: "from-cyan-500 via-teal-500 to-blue-600",
  },
  {
    kind: "placeholder",
    number: "04",
  },
];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<Record<string, number>>({});

  return (
    <section id="portfolio" className="py-16 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-cyan-600 mb-3">
            Portfólio
          </span>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Projetos que{" "}
            <span className="gradient-text">entregamos</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-base sm:text-lg">
            Cada projeto é construído com atenção ao detalhe, qualidade de código e foco em resultado.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="flex flex-col gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={`${project.number}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* ── REAL PROJECT ── */}
              {project.kind === "real" && (
                <div className={`group rounded-3xl border ${project.border} overflow-hidden bg-white hover:shadow-xl transition-all duration-500`}>
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Screenshot side */}
                    <div className={`relative ${project.bg} flex flex-col items-center justify-center min-h-72 p-8 gap-4 overflow-hidden`}>
                      <div className={`absolute -top-10 -right-10 w-48 h-48 rounded-full bg-gradient-to-br ${project.color} opacity-10 blur-2xl pointer-events-none`} />
                      <div className={`absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-gradient-to-br ${project.color} opacity-15 blur-xl pointer-events-none`} />

                      {/* Browser mockup */}
                      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-xl border border-white/80 overflow-hidden">
                        <div className="flex items-center gap-1.5 px-3 py-2.5 border-b border-slate-100 bg-slate-50">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                          <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                          <div className="ml-2 flex-1 h-4 rounded-full bg-slate-200 flex items-center px-2">
                            <span className="text-[9px] text-slate-400 font-mono">{project.url}</span>
                          </div>
                        </div>
                        <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
                          <Image
                            src={project.images[activeTab[project.number] ?? 0]}
                            alt={project.title}
                            fill
                            className="object-cover object-top"
                          />
                        </div>
                      </div>

                      {/* Tab switcher */}
                      <div className="flex gap-2">
                        {project.imageTabs.map((label, idx) => (
                          <button
                            key={label}
                            onClick={() => setActiveTab((prev) => ({ ...prev, [project.number]: idx }))}
                            className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-all ${
                              (activeTab[project.number] ?? 0) === idx
                                ? "gradient-bg text-white shadow"
                                : "bg-white text-slate-500 border border-slate-200 hover:border-slate-400"
                            }`}
                          >
                            {label}
                          </button>
                        ))}
                      </div>

                      <div className={`absolute top-4 left-6 text-7xl font-black opacity-[0.06] bg-gradient-to-br ${project.color} bg-clip-text text-transparent select-none pointer-events-none`}>
                        {project.number}
                      </div>
                    </div>

                    {/* Content side */}
                    <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        <span className={`text-xs font-bold uppercase tracking-widest ${project.accent}`}>
                          {project.category}
                        </span>
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-slate-700 transition-colors"
                        >
                          <ExternalLink size={11} />
                          {project.url.replace("https://", "")}
                        </a>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">{project.title}</h3>
                      <p className="text-slate-500 leading-relaxed mb-6 text-sm">{project.description}</p>

                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {project.highlights.map((h) => {
                          const Icon = h.icon;
                          return (
                            <div key={h.label} className="flex items-center gap-2 bg-slate-50 rounded-xl px-3 py-2.5 border border-slate-100">
                              <Icon size={14} className={project.accent} />
                              <span className="text-xs font-medium text-slate-700">{h.label}</span>
                            </div>
                          );
                        })}
                      </div>

                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.stack.map((tech) => (
                          <span key={tech} className="text-xs font-medium px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <a href="#contato" className={`inline-flex items-center gap-2 text-sm font-semibold ${project.accent} group-hover:gap-3 transition-all`}>
                        Quero um projeto assim
                        <ArrowUpRight size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {/* ── CONFIDENTIAL PROJECT ── */}
              {project.kind === "confidential" && (
                <div className="group relative rounded-2xl border border-slate-200 overflow-hidden bg-white hover:shadow-md transition-all duration-300">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-[0.04]`} />
                  <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                      backgroundImage: `linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)`,
                      backgroundSize: "28px 28px",
                    }}
                  />

                  <div className="relative flex items-center gap-4 sm:gap-6 px-5 sm:px-8 py-6 sm:py-8">
                    <div className={`shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center shadow-md`}>
                      <Lock size={22} className="text-white" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                          {project.category}
                        </span>
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-500 border border-slate-200">
                          NDA
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900">{project.title}</h3>
                      <p className="text-sm text-slate-400 mt-0.5">{project.teaser}</p>
                    </div>

                    <div className={`absolute right-6 bottom-1 text-7xl font-black opacity-[0.05] bg-gradient-to-br ${project.color} bg-clip-text text-transparent select-none pointer-events-none`}>
                      {project.number}
                    </div>
                  </div>
                </div>
              )}

              {/* ── PLACEHOLDER ── */}
              {project.kind === "placeholder" && (
                <div className="relative rounded-2xl border border-dashed border-slate-200 overflow-hidden bg-slate-50/50 hover:bg-slate-50 transition-colors">
                  <div className="flex flex-col items-center justify-center text-center py-14 px-10">
                    <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4 shadow-md shadow-violet-200">
                      <ArrowUpRight size={20} className="text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-700 mb-2">Seu projeto aqui</h3>
                    <p className="text-sm text-slate-400 max-w-sm mb-6">
                      Tem uma ideia? Podemos transformá-la no próximo case de sucesso da CodeLab.
                    </p>
                    <a
                      href="#contato"
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full gradient-bg text-white font-semibold text-sm shadow-md hover:opacity-90 transition-opacity"
                    >
                      Iniciar projeto
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
