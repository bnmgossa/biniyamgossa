import React from "react";
import { Github, Linkedin, Mail, Send, ArrowUpRight } from "lucide-react";

const socials = [
  {
    name: "LinkedIn",
    detail: "Professional profile",
    link: "https://linkedin.com/in/biniyamgossa",
    Icon: Linkedin,
    accent: "hover:border-blue-500/40 hover:bg-blue-500/5",
  },
  {
    name: "GitHub",
    detail: "Code and repositories",
    link: "https://github.com/bnmgossa",
    Icon: Github,
    accent: "hover:border-gray-500/40 hover:bg-gray-500/5",
  },
  {
    name: "Email",
    detail: "bnmgigo@gmail.com",
    link: "mailto:bnmgigo@gmail.com",
    Icon: Mail,
    accent: "hover:border-emerald-500/40 hover:bg-emerald-500/5",
  },
  {
    name: "Telegram",
    detail: "@bnmgigo",
    link: "https://t.me/bnmgigo",
    Icon: Send,
    accent: "hover:border-sky-500/40 hover:bg-sky-500/5",
  },
];

const Contact = () => (
  <section id="contact" className="scroll-mt-24 rounded-3xl border border-gray-200 bg-white/70 px-4 py-8 dark:border-white/10 dark:bg-white/[0.035] sm:px-8 sm:py-10">
    <div className="mx-auto max-w-5xl">
      <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">05 · Contact</p>
      <div className="mt-3 grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(240px,0.7fr)] md:items-end">
        <div>
          <h2 className="text-3xl font-black tracking-tight text-gray-950 dark:text-white sm:text-4xl">Let’s build something useful.</h2>
          <p className="mt-3 max-w-xl text-sm leading-7 text-gray-600 dark:text-gray-300 sm:text-base">
            I’m open to junior opportunities, internships, and collaborative projects in frontend development, networking, and IT support. If my background fits your team, I’d be glad to connect.
          </p>
        </div>
        <a href="mailto:bnmgigo@gmail.com" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-500/20 transition hover:-translate-y-0.5 hover:bg-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2">
          Get in touch <ArrowUpRight size={17} aria-hidden="true" />
        </a>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {socials.map(({ name, detail, link, Icon, accent }) => (
          <a
            key={name}
            href={link}
            target={name === "Email" ? undefined : "_blank"}
            rel={name === "Email" ? undefined : "noopener noreferrer"}
            className={`group flex min-w-0 items-center gap-3 rounded-2xl border border-gray-200 bg-white p-4 transition duration-300 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:border-white/10 dark:bg-white/[0.03] ${accent}`}
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-700 dark:bg-white/10 dark:text-gray-200">
              <Icon size={19} aria-hidden="true" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-sm font-bold text-gray-900 dark:text-white">{name}</span>
              <span className="mt-1 block truncate text-[11px] text-gray-500 dark:text-gray-400">{detail}</span>
            </span>
            <ArrowUpRight size={15} className="shrink-0 text-gray-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
        ))}
      </div>

      <div className="mt-8 flex flex-col gap-2 border-t border-gray-200 pt-5 text-xs text-gray-500 dark:border-white/10 dark:text-gray-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Biniyam Gossa. All rights reserved.</p>
        <p>Built with React · Tailwind CSS · Vite</p>
      </div>
    </div>
  </section>
);

export default Contact;
