"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, ArrowLeft, CheckCircle } from "lucide-react";

const WA_NUMBER = "5551996917733";
const WA_MESSAGE = encodeURIComponent("Olá! Vim pelo site da CodeLab e gostaria de um orçamento personalizado para o meu projeto.");

export default function Obrigado() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.open(`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`, "_blank");
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Dot grid bg */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #0f172a 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative flex flex-col items-center text-center max-w-md"
      >
        {/* Logo */}
        <Link href="/" className="mb-10">
          <Image src="/logo.png" alt="CodeLab" width={130} height={38} priority />
        </Link>

        {/* Check icon */}
        <div className="w-20 h-20 rounded-full bg-emerald-50 flex items-center justify-center mb-6">
          <CheckCircle size={40} className="text-emerald-500" />
        </div>

        <h1 className="text-3xl font-black text-slate-900 mb-3">
          Ótimo, até já!
        </h1>
        <p className="text-slate-500 text-sm leading-relaxed mb-2">
          O WhatsApp já está abrindo para você. Conta pra gente sobre o seu projeto e montamos um orçamento personalizado.
        </p>
        <p className="text-slate-400 text-xs mb-10">
          Caso não abra automaticamente, clique no botão abaixo.
        </p>

        <a
          href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#25D366] text-white font-black text-sm shadow-lg shadow-green-900/20 hover:bg-[#22c55e] transition-colors mb-8"
        >
          <MessageCircle size={18} />
          Abrir WhatsApp
        </a>

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-600 transition-colors text-xs font-medium"
        >
          <ArrowLeft size={13} />
          Voltar ao site
        </Link>
      </motion.div>
    </main>
  );
}
