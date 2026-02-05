
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
// Fix: Added missing icons BarChart3 and Globe to the imports from lucide-react
import { ChevronLeft, ExternalLink, Info, CheckCircle2, AlertTriangle, ArrowRight, Play, BarChart3, Globe } from 'lucide-react';
import { projects } from '../data';

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find(p => p.slug === slug);
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);

  if (!project) {
    return (
      <div className="py-24 text-center">
        <h1 className="text-2xl font-bold">Project not found</h1>
        <Link to="/portfolio" className="text-primary-500 mt-4 inline-block">Back to Portfolio</Link>
      </div>
    );
  }

  return (
    <div className="animate-in fade-in duration-500">
      {/* Header Context */}
      <section className="bg-zinc-50 dark:bg-zinc-900/50 py-16 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-4xl mx-auto px-4">
          <Link to="/portfolio" className="inline-flex items-center text-zinc-500 hover:text-primary-500 transition-colors mb-8 text-sm font-medium">
            <ChevronLeft className="w-4 h-4 mr-1" /> Back to Portfolio
          </Link>
          <div className="text-xs font-bold text-primary-500 uppercase tracking-widest mb-4">{project.category}</div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">{project.title}</h1>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.stack.map(s => (
              <span key={s} className="px-3 py-1 bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 rounded-lg text-xs font-semibold border border-zinc-200 dark:border-zinc-700 shadow-sm">
                {s}
              </span>
            ))}
          </div>
          <div className="p-4 bg-primary-500/10 border border-primary-500/20 rounded-xl flex items-start">
            <Info className="w-5 h-5 text-primary-500 mr-3 mt-0.5" />
            <p className="text-sm text-primary-700 dark:text-primary-300">
              <strong>Before you explore:</strong> use the short guide below to understand the problem I was solving and what to look for in the dashboard.
            </p>
          </div>
        </div>
      </section>

      {/* Case Study Grid */}
      <section className="py-16 md:py-24 max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-6 flex items-center">
              <span className="w-8 h-px bg-zinc-300 dark:bg-zinc-700 mr-3"></span> The Problem
            </h2>
            <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300 mb-8">
              {project.case.problem}
            </p>
            
            <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-6 flex items-center">
              <span className="w-8 h-px bg-zinc-300 dark:bg-zinc-700 mr-3"></span> Approach
            </h2>
            <ul className="space-y-4">
              {project.case.approach.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="mt-1 mr-3 text-primary-500">•</span>
                  <span className="text-zinc-600 dark:text-zinc-400">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-6 flex items-center">
              <span className="w-8 h-px bg-zinc-300 dark:bg-zinc-700 mr-3"></span> Outcome
            </h2>
            <ul className="space-y-4 mb-12">
              {project.case.outcome.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-600 dark:text-zinc-400">{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-6 flex items-center">
              <span className="w-8 h-px bg-zinc-300 dark:bg-zinc-700 mr-3"></span> How to use
            </h2>
            <div className="bg-zinc-50 dark:bg-zinc-900/50 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800">
              <ul className="space-y-3">
                {project.how_to_use.map((step, idx) => (
                  <li key={idx} className="flex items-center text-sm font-medium">
                    <span className="w-6 h-6 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-[10px] mr-3">{idx + 1}</span>
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Artifact Section */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Interactive Dashboard</h2>
            <a 
              href={project.artifact.url} 
              target="_blank" 
              className="text-primary-600 dark:text-primary-400 text-sm font-semibold flex items-center hover:underline"
            >
              {project.artifact.open_new_tab_label || 'Open in new tab'} <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </div>

          {project.artifact.type === 'iframe' ? (
            <div 
              className="relative w-full rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-2xl bg-zinc-100 dark:bg-zinc-900"
              style={{ height: project.artifact.recommended_height_px ? `${project.artifact.recommended_height_px}px` : '600px' }}
            >
              {!isIframeLoaded && (
                <div className="absolute inset-0 skeleton flex items-center justify-center flex-col">
                  {/* Fix: BarChart3 is now correctly imported and used here */}
                  <BarChart3 className="w-12 h-12 text-zinc-300 animate-pulse mb-4" />
                  <p className="text-zinc-400 text-sm">Preparing dashboard...</p>
                </div>
              )}
              <iframe 
                src={project.artifact.url}
                className={`w-full h-full transition-opacity duration-1000 ${isIframeLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => setIsIframeLoaded(true)}
                frameBorder="0"
                allowFullScreen={true}
              ></iframe>
            </div>
          ) : (
            <div className="py-20 text-center bg-zinc-50 dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800">
              {/* Fix: Globe is now correctly imported and used here */}
              <Globe className="w-12 h-12 mx-auto text-primary-500/20 mb-6" />
              <h3 className="text-xl font-bold mb-4">This project is hosted externally</h3>
              <p className="text-zinc-500 mb-8 max-w-sm mx-auto">
                Due to its specific hosting requirements (R Shiny), it's best viewed in its native environment.
              </p>
              <a 
                href={project.artifact.url}
                target="_blank"
                className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-xl font-bold hover:bg-primary-700 transition-colors"
              >
                {project.artifact.button_label || 'Open Dashboard'}
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          )}
        </div>

        {/* Footnotes: Limitations and Next Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-6 flex items-center">
              <AlertTriangle className="w-4 h-4 mr-2 text-amber-500" /> Limitations
            </h2>
            <ul className="space-y-4">
              {project.case.limitations.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-sm text-zinc-500 leading-relaxed italic">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-6 flex items-center">
              <Play className="w-4 h-4 mr-2 text-primary-500" /> Next Steps
            </h2>
            <ul className="space-y-4">
              {project.case.next_steps.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <ArrowRight className="w-4 h-4 text-zinc-300 dark:text-zinc-700 mr-3 mt-1" />
                  <span className="text-sm text-zinc-600 dark:text-zinc-400 font-medium">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Global CTA */}
      <section className="py-24 bg-zinc-900 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Interested in these results?</h2>
          <p className="text-zinc-400 mb-10">
            Let's discuss how data clarity and automated reporting can support your business goals.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="px-8 py-4 bg-primary-600 text-white rounded-xl font-bold hover:bg-primary-700 transition-colors">
              Get in touch
            </Link>
            <Link to="/portfolio" className="px-8 py-4 bg-zinc-800 text-white rounded-xl font-bold hover:bg-zinc-700 transition-colors">
              Explore more projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
