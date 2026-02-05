
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, ExternalLink, ArrowRight, BarChart3, Database, Globe } from 'lucide-react';
import { projects } from '../data';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeStack, setActiveStack] = useState<string>('All');

  const categories = useMemo(() => {
    return ['All', ...Array.from(new Set(projects.map(p => p.category)))];
  }, []);

  const stacks = useMemo(() => {
    return ['All', ...Array.from(new Set(projects.flatMap(p => p.stack)))];
  }, []);

  const filteredProjects = projects.filter(p => {
    const categoryMatch = activeCategory === 'All' || p.category === activeCategory;
    const stackMatch = activeStack === 'All' || p.stack.includes(activeStack);
    return categoryMatch && stackMatch;
  });

  return (
    <div className="py-16 md:py-24 px-4 animate-in slide-in-from-bottom-4 duration-700">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Portfolio</h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
            Curated dashboards and data apps — each with context, how-to-use guidance, and analytical maturity.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 flex items-center">
              <Filter className="w-3 h-3 mr-2" /> Category
            </h3>
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeCategory === cat 
                      ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/20' 
                      : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 flex items-center">
              <Database className="w-3 h-3 mr-2" /> Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {stacks.map(stack => (
                <button
                  key={stack}
                  onClick={() => setActiveStack(stack)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeStack === stack 
                      ? 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-900' 
                      : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700'
                  }`}
                >
                  {stack}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="p-4 bg-primary-50 dark:bg-primary-900/10 rounded-xl border border-primary-100 dark:border-primary-900/30 text-primary-700 dark:text-primary-300 text-sm mb-12 flex items-start">
          <div className="mr-3 mt-0.5">💡</div>
          <p>Tip: start with the <strong>Power BI Portfolio Hub</strong> if you want a guided, interactive overview of my work.</p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group flex flex-col bg-white dark:bg-zinc-900/50 rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden hover:shadow-2xl transition-all duration-500"
            >
              <div className="p-8 flex-grow">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-xs font-bold text-primary-500 uppercase tracking-widest">{project.category}</div>
                  <div className="flex gap-2">
                    {project.card.tags.map(t => (
                      <span key={t} className="px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-400 rounded-full text-[10px] uppercase font-bold">{t}</span>
                    ))}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary-500 transition-colors">{project.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
                  {project.card.one_liner}
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.stack.map(s => (
                    <span key={s} className="flex items-center text-xs font-medium text-zinc-500">
                      <span className="w-1 h-1 bg-zinc-300 dark:bg-zinc-700 rounded-full mr-2"></span>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div className="px-8 pb-8 pt-0 flex gap-4 mt-auto">
                <Link 
                  to={`/projects/${project.slug}`}
                  className="flex-grow flex items-center justify-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-bold transition-all group/btn"
                >
                  Explore Context
                  <ChevronRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
                <a 
                  href={project.artifact.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded-xl hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                  title="Open Dashboard"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="py-20 text-center">
            <BarChart3 className="w-12 h-12 mx-auto text-zinc-300 dark:text-zinc-700 mb-4" />
            <p className="text-zinc-500">No projects match your selected filters.</p>
            <button 
              onClick={() => { setActiveCategory('All'); setActiveStack('All'); }}
              className="mt-4 text-primary-500 font-medium"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const ChevronRight = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

export default Portfolio;
