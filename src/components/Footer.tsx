import Image from "next/image";
import { Instagram } from "lucide-react";

const links = [
  { label: "Serviços", href: "#servicos" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Processo", href: "#processo" },
  { label: "Contato", href: "#contato" },
];

const socials = [
  { icon: Instagram, href: "https://www.instagram.com/codelab.brasil/", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-10 md:mb-12">
          {/* Brand */}
          <div>
            <div className="inline-block bg-white rounded-xl px-3 py-2 mb-4">
              <Image
                src="/logo.png"
                alt="CodeLab"
                width={120}
                height={36}
              />
            </div>
            <p className="text-sm leading-relaxed text-slate-500 max-w-xs">
              Desenvolvemos produtos digitais que transformam negócios. Sites, SaaS e aplicações sob medida.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Navegação</h4>
            <ul className="flex flex-col gap-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-slate-500 hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Fale conosco</h4>
            <a href="mailto:codelabs.br@gmail.com" className="text-sm text-slate-500 hover:text-white transition-colors mb-2">codelabs.br@gmail.com</a>
            <div className="flex items-center gap-3 mt-4">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors"
                  >
                    <Icon size={16} className="text-slate-400" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} CodeLab. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
