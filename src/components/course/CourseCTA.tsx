"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function CourseCTA() {
  return (
    <section className="py-16 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 gradient-bg opacity-95" />
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
              backgroundSize: "28px 28px",
            }}
          />

          <div className="relative px-8 sm:px-14 py-14 sm:py-16 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
              <p className="text-white/70 text-sm font-semibold uppercase tracking-widest mb-3">
                CodeLab BR
              </p>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-3 leading-tight">
                Pronto para começar
                <br />a sua jornada?
              </h2>
              <p className="text-white/70 text-sm leading-relaxed max-w-md">
                Junte-se à plataforma, complete seu primeiro módulo e desbloqueie seu primeiro badge — tudo de graça.
              </p>
            </div>

            <div className="flex flex-col gap-3 shrink-0">
              <a
                href="https://app.codelab-br.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-slate-900 font-black text-sm shadow-xl hover:opacity-90 transition-opacity"
              >
                Eu quero aprender
                <ArrowRight size={16} />
              </a>
              <a
                href="/"
                className="inline-flex items-center justify-center gap-2 text-white/60 hover:text-white transition-colors text-xs font-medium"
              >
                <ArrowLeft size={13} />
                Voltar ao site
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
