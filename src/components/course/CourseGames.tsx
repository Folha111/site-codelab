"use client";

import { motion } from "framer-motion";
import { Gamepad2 } from "lucide-react";
import Image from "next/image";

const games = [
  { name: "Jogo da Memória",     desc: "Associe tags HTML com suas descrições. Quanto mais rápido, mais pontos!" },
  { name: "Palavra Embaralhada", desc: "Descubra termos de programação com as letras fora de ordem." },
  { name: "Digitação de Código", desc: "Digite trechos de HTML, CSS e JS para melhorar sua velocidade." },
  { name: "Achar o Erro",        desc: "Encontre o bug no código antes que o tempo acabe." },
  { name: "Quiz Relâmpago",      desc: "30 segundos, várias perguntas. Você consegue responder tudo?" },
  { name: "Completar o Código",  desc: "Veja o resultado e escreva o código que o gerou." },
  { name: "CSS: Verdade ou Mito?", desc: "Saiba distinguir o que é real do que é mito no CSS." },
];

export default function CourseGames() {
  return (
    <section className="py-16 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-cyan-600 mb-3">
              Jogos Interativos
            </span>
            <h2 className="text-4xl font-black text-slate-900 mb-5">
              Aprenda{" "}
              <span className="gradient-text">jogando</span>
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">
              Aprender não precisa ser entediante. A CodeLab BR tem <strong className="text-slate-700">7 jogos interativos</strong> que reforçam o conteúdo de forma divertida e desafiadora.
            </p>

            <div className="flex flex-col gap-3">
              {games.map((game, i) => (
                <motion.div
                  key={game.name}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                  className="flex items-start gap-3 bg-slate-50 rounded-xl px-4 py-3 border border-slate-100"
                >
                  <div className="w-7 h-7 rounded-lg gradient-bg flex items-center justify-center shrink-0 mt-0.5">
                    <Gamepad2 size={13} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">{game.name}</p>
                    <p className="text-xs text-slate-500 leading-relaxed">{game.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — screenshot */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
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
                    <span className="text-[9px] text-slate-400 font-mono">app.codelab-br.com/jogos</span>
                  </div>
                </div>
                <Image
                  src="/project1-games.png"
                  alt="Jogos CodeLab BR"
                  width={600}
                  height={400}
                  className="w-full object-cover object-top"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
