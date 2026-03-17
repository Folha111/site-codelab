"use client";

import { motion } from "framer-motion";
import { Globe, LayoutDashboard, Smartphone, Lightbulb, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Sites & Landing Pages",
    description: "Sites rápidos, responsivos e otimizados para SEO que representam sua marca e convertem visitantes.",
    tag: "/* web */",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    icon: LayoutDashboard,
    title: "Plataformas SaaS",
    description: "Autenticação, pagamentos, dashboards — tudo que um produto digital escalável precisa para decolar.",
    tag: "/* saas */",
    gradient: "from-cyan-500 to-blue-600",
    highlight: true,
  },
  {
    icon: Smartphone,
    title: "Aplicações Web",
    description: "Portais de clientes e ferramentas internas com UX que sua equipe vai amar usar todo dia.",
    tag: "/* app */",
    gradient: "from-teal-500 to-cyan-600",
  },
  {
    icon: Lightbulb,
    title: "Consultoria Técnica",
    description: "Avaliamos sua stack e arquitetura e entregamos um roadmap claro para escalar com segurança.",
    tag: "/* tech */",
    gradient: "from-purple-500 to-violet-600",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-16 md:py-28 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16 items-start">

          {/* Left — sticky header */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-28 pb-4 lg:pb-0"
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-violet-600 mb-4">
              O que fazemos
            </span>
            <h2 className="text-4xl font-black text-slate-900 leading-tight mb-6">
              Soluções{" "}
              <span className="gradient-text">sob medida</span>
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">
              Da ideia ao deploy. Entregamos produtos que geram resultado real para o seu negócio.
            </p>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full gradient-bg text-white font-bold text-sm shadow-md shadow-violet-200 hover:opacity-90 transition-opacity"
            >
              Iniciar projeto <ArrowUpRight size={14} />
            </a>
          </motion.div>

          {/* Right — service list */}
          <div className="flex flex-col gap-3">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group relative bg-white rounded-2xl p-6 border border-slate-100 hover:border-slate-200 hover:shadow-md transition-all duration-300 overflow-hidden"
                >
                  {/* Code comment */}
                  <span className="absolute top-4 right-5 text-xs font-mono text-slate-200 group-hover:text-slate-300 transition-colors">
                    {service.tag}
                  </span>

                  {service.highlight && (
                    <span className="absolute top-4 right-16 text-xs font-bold px-2.5 py-0.5 rounded-full gradient-bg text-white">
                      Popular
                    </span>
                  )}

                  <div className="flex items-start gap-5">
                    <div className={`shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-sm`}>
                      <Icon size={19} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 mb-1.5">{service.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{service.description}</p>
                    </div>
                  </div>

                  {/* Gradient bottom line on hover */}
                  <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
