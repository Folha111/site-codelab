"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

const WA_NUMBER = "5551996917733";
const WA_MESSAGE = encodeURIComponent("Olá! Vim pelo site da CodeLab e gostaria de um orçamento personalizado para o meu projeto.");

export default function WhatsAppFloat() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [bannerDismissed, setBannerDismissed] = useState(false);

  // Mostra o banner após 8 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!bannerDismissed) setShowBanner(true);
    }, 8000);
    return () => clearTimeout(timer);
  }, [bannerDismissed]);

  function dismiss() {
    setShowBanner(false);
    setBannerDismissed(true);
  }

  return (
    <>
      {/* Banner discreto */}
      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.35 }}
            className="fixed bottom-24 right-5 z-50 bg-white rounded-2xl shadow-xl border border-slate-100 p-4 max-w-xs w-full"
          >
            <button
              onClick={dismiss}
              className="absolute top-3 right-3 text-slate-300 hover:text-slate-500 transition-colors"
            >
              <X size={14} />
            </button>
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#25D366] flex items-center justify-center shrink-0">
                <MessageCircle size={18} className="text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900 mb-0.5">
                  Precisa de um site ou sistema?
                </p>
                <p className="text-xs text-slate-400 leading-relaxed mb-3">
                  Fale com a gente no WhatsApp e receba um orçamento gratuito.
                </p>
                <a
                  href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={dismiss}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#25D366] px-3 py-1.5 rounded-full hover:bg-[#22c55e] transition-colors"
                >
                  <MessageCircle size={12} />
                  Chamar no WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botão flutuante */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2">
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 4 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 4 }}
              transition={{ duration: 0.15 }}
              className="bg-slate-900 text-white text-xs font-medium px-3 py-1.5 rounded-full whitespace-nowrap shadow-lg"
            >
              Fale conosco
            </motion.div>
          )}
        </AnimatePresence>

        <motion.a
          href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-xl shadow-green-900/30 hover:bg-[#22c55e] transition-colors"
          aria-label="Chamar no WhatsApp"
        >
          <MessageCircle size={26} className="text-white" />
        </motion.a>
      </div>
    </>
  );
}
