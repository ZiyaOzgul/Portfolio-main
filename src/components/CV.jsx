import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { styles } from "../styles";

const CV = () => {
  return (
    <div
      className={`relative min-h-screen bg-transparent text-[#D6E0D9] font-light overflow-x-hidden selection:bg-accent/30 ${styles.padding}`}
    >
      {/* Noise Overlay (Simplified) */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.015] bg-white mix-blend-overlay" />

      {/* Glow Blobs */}
      <div className="fixed top-[-200px] left-[-200px] w-[600px] h-[600px] bg-accent/15 blur-[120px] rounded-full pointer-events-none animate-pulse" />
      <div className="fixed bottom-[10%] right-[-100px] w-[400px] h-[400px] bg-sky-400/15 blur-[120px] rounded-full pointer-events-none animate-pulse" />

      <div className="max-w-[1000px] mx-auto relative z-10">
        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-accent hover:text-white mb-12 font-mono text-sm transition-colors group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">
            ←
          </span>{" "}
          Back to Portfolio
        </Link>

        {/* HEADER */}
        <header className="pb-16 border-b border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-start gap-10">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-[1px] bg-accent" />
                <span className={styles.sectionSubText}>Software Engineer</span>
              </div>
              <h1 className={styles.heroHeadText}>
                Ziya
                <span className="text-accent ml-4">Özgül</span>
              </h1>
              <div className="inline-flex items-center gap-2 bg-accent/5 border border-accent/10 px-4 py-1.5 rounded-full font-mono text-[12px] text-accent mt-6">
                <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse shadow-[0_0_8px_rgba(181,214,184,0.8)]" />
                React Native Developer · Open to Remote
              </div>
            </div>

            <div className="flex flex-col gap-2 md:items-end">
              {[
                {
                  label: "+90 531 254 3189",
                  icon: "📞",
                  href: "tel:+905312543189",
                },
                {
                  label: "ziya.d.ozgul@gmail.com",
                  icon: "✉",
                  href: "mailto:ziya.d.ozgul@gmail.com",
                },
                {
                  label: "LinkedIn",
                  icon: "in",
                  href: "https://www.linkedin.com/in/ziyaozguldeveloper",
                },
                {
                  label: "GitHub",
                  icon: "⌥",
                  href: "https://github.com/ZiyaOzgul",
                },
              ].map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-mono text-[13px] text-[#A0A0A0] hover:text-accent transition-colors"
                >
                  <span className="text-[14px] text-accent/60">
                    {link.icon}
                  </span>{" "}
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <p className="mt-10 max-w-[700px] text-[17px] text-[#D6E0D9] leading-relaxed border-l-2 border-accent/30 pl-6 italic">
            Mobile Application Developer with 3+ years of experience building
            cross-platform apps with React Native and TypeScript. Shipped a
            production app on Google Play with full-cycle ownership — from
            architecture and authentication to deployment. Actively seeking
            remote opportunities with international teams.
          </p>
        </header>

        {/* EXPERIENCE */}
        <section className="py-14 border-b border-white/10">
          <h2 className={styles.sectionHeadText}>Experience</h2>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-white/10 to-transparent" />

          <div className="flex flex-col gap-10">
            {[
              {
                role: "Mobile Application Developer",
                company: "Horoscope App — Personal Project",
                date: "2024 – Present",
                bullets: [
                  "Designed and published a cross-platform app end-to-end: architecture → implementation → Google Play deployment",
                  "Built scalable folder structure and reusable component-based UI architecture in TypeScript",
                  "Integrated Clerk for secure authentication and account management",
                  "Developed backend workflows and real-time database operations using Convex",
                  "Applied responsive mobile UI patterns with NativeWind (Tailwind CSS for React Native)",
                ],
                tags: [
                  "React Native",
                  "TypeScript",
                  "Clerk",
                  "Convex",
                  "NativeWind",
                  "Expo",
                ],
                link: "https://play.google.com/store/apps/details?id=com.anonymous.horoscope",
              },
              {
                role: "Mobile Developer",
                company: "BITES Defence & Aerospace",
                date: "2023 – 2024",
                bullets: [
                  "Built a custom video playback module from scratch in React Native for a media-heavy internal application",
                  "Implemented media controls, playback state handling, and modular UI components with performance in mind",
                  "Integrated WebView rendering for dynamic embedded content within the mobile app",
                  "Collaborated with cross-functional team on performance-aware mobile component design",
                ],
                tags: ["React Native", "TypeScript", "WebView"],
              },
              {
                role: "Embedded Software Engineer",
                company: "Takosan Automotive",
                date: "2022 – 2023",
                bullets: [
                  "Developed embedded software in C for automotive cluster display systems",
                  "Implemented indicator control logic and motor driving modules",
                  "Performed hardware–software integration testing and debugging",
                ],
                tags: ["Embedded C", "Microcontrollers", "Automotive Systems"],
              },
              {
                role: "Freelance Web Developer",
                company: "Independent",
                date: "2021 – 2022",
                bullets: [
                  "Developed web applications for multiple clients using React and Next.js",
                  "Built modern, responsive UIs with Tailwind CSS including animations and interactive elements",
                  "Integrated MongoDB and Firebase for data management and backend services",
                ],
                tags: [
                  "React",
                  "Next.js",
                  "Tailwind CSS",
                  "MongoDB",
                  "Firebase",
                ],
              },
              {
                role: "Web Development Intern",
                company: "Kaftek Mühendislik Ltd.",
                date: "2021",
                bullets: [
                  "Contributed to web projects using Next.js, Tailwind CSS, and MongoDB",
                  "Developed and delivered the company's current live website",
                ],
                tags: ["Next.js", "Tailwind CSS", "MongoDB", "Firebase"],
              },
            ].map((exp, i) => (
              <div
                key={i}
                className="group relative glass-card p-8 rounded-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />

                <div className="relative flex flex-col gap-4">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h3 className="text-white text-[22px] font-bold tracking-tight">
                        {exp.role}
                      </h3>
                      <p className="text-accent text-[15px] font-semibold mt-1">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className="font-mono text-[11px] text-[#7070a0] whitespace-nowrap">
                        {exp.date}
                      </span>
                      {exp.link && (
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 font-mono text-[11px] text-accent bg-accent/10 border border-accent/20 px-3 py-1 rounded-lg hover:bg-accent/20 transition-colors"
                        >
                          ↗ Live on Google Play
                        </a>
                      )}
                    </div>
                  </div>

                  <ul className="flex flex-col gap-2">
                    {exp.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="text-[15px] text-[#D6E0D9] pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-2 before:h-[1px] before:bg-accent/60"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="font-mono text-[11px] px-3 py-1 rounded-md bg-white/5 text-accent-light border border-white/5 tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section className="py-20 border-b border-white/5">
          <div className="flex items-center gap-3 mb-12">
            <h2 className={styles.sectionHeadText}>Technical Skills</h2>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-white/10 to-transparent" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                title: "Mobile",
                list: [
                  "React Native",
                  "TypeScript",
                  "Redux Toolkit",
                  "NativeWind",
                  "Flutter",
                ],
              },
              {
                title: "Web",
                list: [
                  "React & Next.js",
                  "Tailwind CSS",
                  "Redux",
                  "REST API",
                  "TypeScript",
                ],
              },
              {
                title: "Backend",
                list: ["Clerk Auth", "Convex", "Firebase", "MongoDB"],
              },
              {
                title: "Tools",
                list: [
                  "Git & GitHub",
                  "Postman",
                  "Cypress",
                  "VS Code",
                  "Agile",
                ],
              },
            ].map((cat, i) => (
              <div
                key={i}
                className="glass-card p-6 rounded-xl hover:translate-y-[-4px] transition-transform"
              >
                <h4 className="font-mono text-[11px] tracking-widest text-[#A0A0A0] mb-6 uppercase">
                  {cat.title}
                </h4>
                <ul className="flex flex-col gap-2">
                  {cat.list.map((skill, j) => (
                    <li
                      key={j}
                      className="font-mono text-[14px] text-white flex items-center gap-2"
                    >
                      <div className="w-1 h-1 bg-accent rounded-full" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section className="py-20">
          <div className="flex items-center gap-3 mb-12">
            <h2 className={styles.sectionHeadText}>Education</h2>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-white/10 to-transparent" />
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-8 glass-card rounded-2xl">
              <div>
                <h4 className="text-[20px] font-bold text-white tracking-tight">
                  B.Sc. Computer Engineering
                </h4>
                <p className="text-[15px] text-accent font-medium mt-1">
                  Erciyes University
                </p>
              </div>
              <span className="font-mono text-[13px] text-[#A0A0A0] mt-4 sm:mt-0 bg-white/5 px-4 py-1.5 rounded-full">
                2019 – 2024
              </span>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-8 glass-card rounded-2xl">
              <div>
                <h4 className="text-[20px] font-bold text-white tracking-tight">
                  Android App Developer (AAD)
                </h4>
                <p className="text-[15px] text-accent font-medium mt-1">
                  Mobile Development Certificate
                </p>
              </div>
              <span className="font-mono text-[13px] text-accent mt-4 sm:mt-0 bg-accent/10 px-4 py-1.5 rounded-full border border-accent/20">
                ✓ Certified
              </span>
            </div>
          </div>
        </section>

        <footer className="py-20 text-center border-t border-white/5">
          <p className="font-mono text-[12px] text-accent uppercase tracking-[0.3em]">
            Ziya Özgül · 2025
          </p>
        </footer>
      </div>
    </div>
  );
};

export default CV;
