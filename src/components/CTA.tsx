"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function CTA() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você conecta ao seu backend / Resend / EmailJS / etc.
    setSent(true);
  };

  return (
    <section id="contato" className="py-16 md:py-28 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #0f172a 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-5 blur-3xl gradient-bg pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-violet-600 mb-3">
              Contato
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-5 leading-tight">
              Vamos construir{" "}
              <span className="gradient-text">juntos?</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-10">
              Conta pra gente sobre o seu projeto. Respondemos em até 24h com uma proposta personalizada — sem enrolação.
            </p>

            <div className="flex flex-col gap-4">
              <a
                href="mailto:codelabs.br@gmail.com"
                className="inline-flex items-center gap-3 text-slate-700 hover:text-violet-600 transition-colors font-medium text-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center">
                  <Mail size={18} className="text-violet-600" />
                </div>
                codelabs.br@gmail.com
              </a>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-slate-700 hover:text-teal-600 transition-colors font-medium text-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center">
                  <MessageCircle size={18} className="text-teal-600" />
                </div>
                WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {sent ? (
              <div className="bg-slate-50 rounded-2xl p-10 text-center border border-slate-100">
                <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-4 shadow-md">
                  <ArrowRight size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Mensagem enviada!</h3>
                <p className="text-slate-500 text-sm">
                  Recebemos seu contato e retornaremos em breve.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-slate-50 rounded-2xl p-5 sm:p-8 border border-slate-100 flex flex-col gap-4"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-700">Nome</label>
                    <input
                      type="text"
                      required
                      placeholder="Seu nome"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-300 focus:border-transparent transition"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-700">E-mail</label>
                    <input
                      type="email"
                      required
                      placeholder="seu@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-300 focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-700">Sobre o projeto</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Me conta o que você precisa construir..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-300 focus:border-transparent transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl gradient-bg text-white font-semibold text-sm shadow-md shadow-violet-200 hover:opacity-90 transition-opacity"
                >
                  Enviar mensagem
                  <ArrowRight size={16} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
