"use client";

import { motion } from "framer-motion";
import { Trophy, Flame, Medal, BarChart2, Clock, Moon, FolderOpen, RotateCcw } from "lucide-react";

const features = [
  {
    icon: Trophy,
    title: "Sistema de XP",
    desc: "Ganhe pontos de experiência a cada tarefa concluída e suba de nível.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Medal,
    title: "Badges & Conquistas",
    desc: "13 badges para desbloquear conforme você avança na plataforma.",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: Flame,
    title: "Sequência diária",
    desc: "Mantenha sua streak e veja sua consistência crescer dia após dia.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: BarChart2,
    title: "Ranking",
    desc: "Compete com outros alunos e veja onde você está no placar geral.",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: Clock,
    title: "Modo Foco",
    desc: "Estude sem distrações com o temporizador integrado de modo foco.",
    color: "from-teal-500 to-emerald-600",
  },
  {
    icon: FolderOpen,
    title: "Projetos práticos",
    desc: "Coloque em prática o que aprendeu com projetos reais guiados.",
    color: "from-indigo-500 to-violet-600",
  },
  {
    icon: RotateCcw,
    title: "Revisão inteligente",
    desc: "Revise o conteúdo já aprendido para fixar melhor o conhecimento.",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: Moon,
    title: "Modo escuro",
    desc: "Interface confortável para estudar a qualquer hora do dia ou da noite.",
    color: "from-slate-600 to-slate-800",
  },
];

export default function CourseFeatures() {
  return (
    <section className="py-16 md:py-28 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-teal-600 mb-3">
            Funcionalidades
          </span>
          <h2 className="text-4xl font-black text-slate-900 mb-4">
            Tudo que você precisa para{" "}
            <span className="gradient-text">evoluir</span>
          </h2>
          <p className="text-slate-500 max-w-md mx-auto text-sm leading-relaxed">
            A plataforma foi construída para manter você motivado, engajado e aprendendo de verdade.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-white rounded-2xl p-5 border border-slate-100 hover:border-slate-200 hover:shadow-md transition-all duration-300"
              >
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center shadow-sm mb-4`}>
                  <Icon size={20} className="text-white" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1.5">{f.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{f.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
