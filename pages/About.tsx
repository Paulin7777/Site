
import React from 'react';
import { Download, Briefcase, MapPin, Code2, Layers, Cpu } from 'lucide-react';
import { person } from '../data';

const About = () => {
  const stack = ["Power BI", "SQL", "Python (Pandas)", "R", "Excel", "Automation (Make, n8n)", "KPI design", "EDA"];

  return (
    <div className="py-24 px-4 animate-in fade-in duration-1000">
      <div className="max-w-3xl mx-auto">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">About</h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed italic border-l-4 border-primary-500 pl-6 py-2">
            "I don't just build charts; I build systems that answer business questions."
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Briefcase className="w-6 h-6 mr-3 text-primary-500" /> My focus
          </h2>
          <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6">
            {person.about_short.text}
          </p>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Based in <strong>{person.location}</strong>, I specialize in the "last mile" of data — turning analysis into something stakeholders can interact with to make decisions. I believe a dashboard is only successful if it drives an action.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Cpu className="w-6 h-6 mr-3 text-primary-500" /> Core Stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {stack.map((item) => (
              <span key={item} className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-xl text-sm font-semibold border border-zinc-200 dark:border-zinc-700 shadow-sm transition-transform hover:-translate-y-1">
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Layers className="w-6 h-6 mr-3 text-primary-500" /> One Project Highlight
          </h2>
          <div className="bg-primary-50 dark:bg-primary-900/10 border border-primary-100 dark:border-primary-900/30 p-8 rounded-2xl">
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
              I have built automated reporting flows and dashboards to support decision-making, focusing on clarity, metrics, and usability. My approach reduces manual data gathering by up to 80%, allowing teams to spend more time on strategy rather than data cleaning.
            </p>
          </div>
        </section>

        <section className="p-8 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-xl font-bold mb-2">Need the full details?</h3>
            <p className="text-zinc-400 dark:text-zinc-600 text-sm">Download my resume for a chronological list of experiences and education.</p>
          </div>
          <a 
            href="#" 
            className="w-full md:w-auto flex items-center justify-center px-8 py-4 bg-primary-600 dark:bg-zinc-900 text-white rounded-xl font-bold hover:opacity-90 transition-all shadow-lg shadow-primary-500/20 dark:shadow-none"
          >
            <Download className="w-5 h-5 mr-2" />
            Download CV (PDF)
          </a>
        </section>
      </div>
    </div>
  );
};

export default About;
