
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, BarChart3, Database, Workflow, Download } from 'lucide-react';
import { person, projects } from '../data';

const Home = () => {
  const variant = person.headline_variants[person.default_variant];
  const featuredProjectIds = ["pbi-portfolio-hub", "sales-dashboard", "qualytools"];
  const featuredProjects = projects.filter(p => featuredProjectIds.includes(p.id));

  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="py-20 md:py-32 px-4 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative">
          {/* Cover/Profile Image */}
          <div className="mb-10 relative inline-block">
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white dark:border-zinc-800 shadow-2xl relative z-10 mx-auto bg-zinc-100 dark:bg-zinc-800">
              <img 
                src="paulo.jpg" 
                alt="Paulo Barreto" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://ui-avatars.com/api/?name=Paulo+Barreto&background=0ea5e9&color=fff&size=200";
                }}
              />
            </div>
            {/* Decorative background circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-primary-500/10 dark:bg-primary-500/5 rounded-full blur-2xl"></div>
          </div>

          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs font-medium mb-6">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            Available for new opportunities
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
            {variant.headline}
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            {variant.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/portfolio" 
              className="w-full sm:w-auto px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-semibold transition-all flex items-center justify-center group"
            >
              Explore Portfolio
              <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/contact" 
              className="w-full sm:w-auto px-8 py-4 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-xl font-semibold transition-all flex items-center justify-center"
            >
              Contact Me
            </Link>
            <a 
              href="#" 
              className="text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-white flex items-center transition-colors"
            >
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </a>
          </div>
          <p className="mt-12 text-zinc-500 text-sm">
            Prefer to see proof first? Jump straight to the <Link to="/portfolio" className="text-primary-500 underline underline-offset-4">dashboards</Link>.
          </p>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-20 bg-zinc-50 dark:bg-zinc-900/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What I do</h2>
            <div className="w-12 h-1 bg-primary-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {person.quick_value_props.map((prop, idx) => (
              <div key={idx} className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-primary-50 dark:bg-primary-900/20 rounded-xl flex items-center justify-center text-primary-600 dark:text-primary-400 mb-6">
                  {idx === 0 ? <BarChart3 className="w-6 h-6" /> : idx === 1 ? <Workflow className="w-6 h-6" /> : <Database className="w-6 h-6" />}
                </div>
                <h3 className="text-xl font-bold mb-3">{prop.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {prop.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold mb-4">Featured work</h2>
              <p className="text-zinc-600 dark:text-zinc-400">A few projects that show my approach: clarity, metrics, and usability.</p>
            </div>
            <Link to="/portfolio" className="text-primary-600 dark:text-primary-400 font-semibold flex items-center hover:underline">
              View all projects <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Link 
                key={project.id}
                to={`/projects/${project.slug}`}
                className="group flex flex-col bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden hover:border-primary-500/50 transition-all"
              >
                <div className="aspect-video bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center p-6 text-zinc-400 group-hover:bg-primary-50 dark:group-hover:bg-primary-900/10 transition-colors">
                  <BarChart3 className="w-12 h-12 opacity-20 group-hover:opacity-100 group-hover:text-primary-500 transition-all duration-500" />
                </div>
                <div className="p-6">
                  <div className="text-xs font-semibold text-primary-500 mb-2 uppercase tracking-wider">{project.category}</div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary-500 transition-colors">{project.title}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4 line-clamp-2">
                    {project.card.one_liner}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map(s => (
                      <span key={s} className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-500 rounded text-[10px] font-bold uppercase">{s}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-primary-600 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Want the full list?</h2>
          <p className="text-primary-100 text-lg mb-10 max-w-xl mx-auto">
            Browse all projects by category and stack. Each one documented with real-world problems and solutions.
          </p>
          <Link 
            to="/portfolio" 
            className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-xl font-bold hover:bg-primary-50 transition-colors"
          >
            View All Projects
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
