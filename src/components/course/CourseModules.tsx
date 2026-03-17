"use client";

import { motion } from "framer-motion";
import { Code2, ChevronRight } from "lucide-react";

const modules = [
  {
    level: "Curioso",
    desc: "Primeiros passos no mundo da programação",
    color: "from-violet-500 to-purple-600",
    border: "border-violet-100",
    bg: "bg-violet-50",
    accent: "text-violet-600",
    topics: [
      { num: "01", name: "Introdução à Programação", tasks: 15 },
      { num: "02", name: "Lógica de Programação", tasks: 15 },
      { num: "03", name: "VSCode: seu editor de código", tasks: 6 },
    ],
  },
  {
    level: "Aprendiz",
    desc: "Aprendendo HTML e CSS do zero",
    color: "from-cyan-500 to-blue-600",
    border: "border-cyan-100",
    bg: "bg-cyan-50",
    accent: "text-cyan-600",
    topics: [
      { num: "04", name: "HTML do zero", tasks: 20 },
      { num: "05", name: "CSS básico", tasks: 18 },
      { num: "06", name: "Projetos práticos", tasks: 12 },
    ],
  },
  {
    level: "Desenvolvedor",
    desc: "JavaScript e lógica avançada",
    color: "from-teal-500 to-emerald-600",
    border: "border-teal-100",
    bg: "bg-teal-50",
    accent: "text-teal-600",
    topics: [
      { num: "07", name: "JavaScript essencial", tasks: 25 },
      { num: "08", name: "DOM e eventos", tasks: 18 },
      { num: "09", name: "Projetos com JS", tasks: 15 },
    ],
  },
];

export default function CourseModules() {
  return (
    <section id="modulos" className="py-16 md:py-28 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-violet-600 mb-3">
            Conteúdo
          </span>
          <h2 className="text-4xl font-black text-slate-900 mb-4">
            O que você vai{" "}
            <span className="gradient-text">aprender</span>
          </h2>
          <p className="text-slate-500 max-w-md mx-auto text-sm leading-relaxed">
            Módulos organizados por nível de dificuldade. Você avança no seu próprio ritmo, desbloqueando o próximo nível conforme evolui.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {modules.map((mod, i) => (
            <motion.div
              key={mod.level}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`bg-white rounded-2xl border ${mod.border} overflow-hidden hover:shadow-lg transition-all duration-300`}
            >
              {/* Header */}
              <div className={`${mod.bg} px-6 py-5 border-b ${mod.border}`}>
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${mod.color} text-white text-xs font-bold mb-2`}>
                  <Code2 size={11} />
                  Nível {i + 1}
                </div>
                <h3 className="text-lg font-black text-slate-900">{mod.level}</h3>
                <p className="text-xs text-slate-500 mt-0.5">{mod.desc}</p>
              </div>

              {/* Topics */}
              <div className="p-4 flex flex-col gap-2">
                {mod.topics.map((topic) => (
                  <div
                    key={topic.num}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-100"
                  >
                    <span className={`text-xs font-black ${mod.accent} w-6`}>{topic.num}</span>
                    <span className="text-xs font-medium text-slate-700 flex-1">{topic.name}</span>
                    <span className="text-[10px] text-slate-400">{topic.tasks} tarefas</span>
                    <ChevronRight size={12} className="text-slate-300" />
                  </div>
                ))}
                <p className={`text-xs font-semibold ${mod.accent} text-center mt-1`}>
                  + mais módulos em breve
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
