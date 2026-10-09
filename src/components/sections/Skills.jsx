import { Code2, Network, Wrench } from "lucide-react";

const categories = [
  {
    title: "Frontend Development",
    description: "Building responsive, user-focused web interfaces.",
    icon: Code2,
    accent: "blue",
    skills: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Vite"],
  },
  {
    title: "Networking & IT Support",
    description: "Hands-on labs and foundational infrastructure support.",
    icon: Network,
    accent: "emerald",
    skills: ["Cisco Switching", "VLANs & Trunking", "DHCP & DNS", "IP Addressing", "Troubleshooting", "Network Security Basics"],
  },
  {
    title: "Systems & Tools",
    description: "Tools for development, maintenance, and documentation.",
    icon: Wrench,
    accent: "violet",
    skills: ["Windows", "Hardware Maintenance", "Git & GitHub", "VS Code", "Vercel", "Server & CCTV Fundamentals"],
  },
];

const accents = {
  blue: {
    icon: "bg-blue-500/10 text-blue-600 dark:text-blue-300",
    border: "hover:border-blue-500/40",
    dot: "bg-blue-500",
  },
  emerald: {
    icon: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
    border: "hover:border-emerald-500/40",
    dot: "bg-emerald-500",
  },
  violet: {
    icon: "bg-violet-500/10 text-violet-700 dark:text-violet-300",
    border: "hover:border-violet-500/40",
    dot: "bg-violet-500",
  },
};

const Skills = () => (
  <section id="skills" className="scroll-mt-24 space-y-6 py-4 sm:space-y-8">
    <div className="flex items-end justify-between gap-4">
      <div>
        <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">04 · Technical toolkit</p>
        <h2 className="mt-2 text-2xl font-black tracking-tight text-gray-950 dark:text-white sm:text-4xl">Skills I’m building on</h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600 dark:text-gray-400">A practical mix of frontend development, networking, and IT systems fundamentals.</p>
      </div>
    </div>

    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
      {categories.map((category) => {
        const Icon = category.icon;
        const accent = accents[category.accent];
        return (
          <article key={category.title} className={`group relative overflow-hidden rounded-2xl border border-gray-200 bg-white/80 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/[0.035] sm:p-6 ${accent.border}`}>
            <div aria-hidden="true" className={`absolute -right-8 -top-8 h-28 w-28 rounded-full opacity-60 blur-3xl ${accent.dot}`} />
            <div className="relative">
              <div className={`mb-5 flex h-11 w-11 items-center justify-center rounded-xl ${accent.icon}`}>
                <Icon size={22} aria-hidden="true" />
              </div>
              <h3 className="text-base font-extrabold tracking-tight text-gray-900 dark:text-white">{category.title}</h3>
              <p className="mt-2 min-h-12 text-xs leading-5 text-gray-600 dark:text-gray-400">{category.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-gray-50 px-2.5 py-1.5 text-[10px] font-semibold text-gray-700 dark:border-white/10 dark:bg-white/5 dark:text-gray-300 sm:text-[11px]">
                    <span className={`h-1.5 w-1.5 rounded-full ${accent.dot}`} aria-hidden="true" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </article>
        );
      })}
    </div>
    <p className="text-xs leading-5 text-gray-500 dark:text-gray-500">Skills reflect my current knowledge and practical lab work; I’m continuing to deepen them through projects and study.</p>
  </section>
);

export default Skills;
