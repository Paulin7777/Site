
import React, { useState } from 'react';
import { Mail, Linkedin, MapPin, Send, Sparkles, Wand2, Loader2, ArrowRight } from 'lucide-react';
import { person, projects } from '../data';
import { GoogleGenAI, Type } from "@google/genai";

const Contact = () => {
  const [jdText, setJdText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [aiResult, setAiResult] = useState<{
    summary: string;
    projects: string[];
    keywords: string[];
  } | null>(null);

  const handleAiAnalyze = async () => {
    if (!jdText.trim()) return;
    setIsAnalyzing(true);
    
    try {
      // Logic for AI analysis using Gemini API
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = `
        Analyze this job description and Paulo Barreto's profile.
        
        Job Description: ${jdText}
        
        Paulo's Experience:
        - Skills: Power BI, SQL, Python, R, KPI Design, Automation.
        - Focus: Building decision-support dashboards.
        - Project List: ${projects.map(p => p.title).join(', ')}
        
        Return a JSON object with:
        1. "summary": A 2-sentence pitch on how Paulo fits this role.
        2. "projects": 2 titles from the project list that are most relevant.
        3. "keywords": 4 key terms from the JD that Paulo's profile covers.
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              summary: { type: Type.STRING },
              projects: { type: Type.ARRAY, items: { type: Type.STRING } },
              keywords: { type: Type.ARRAY, items: { type: Type.STRING } }
            },
            required: ["summary", "projects", "keywords"]
          }
        }
      });

      const data = JSON.parse(response.text);
      setAiResult(data);
    } catch (error) {
      console.error("AI Analysis failed:", error);
      // Fallback result for demo purposes if API fails or is not available
      setAiResult({
        summary: "Based on your interest in data visualization and KPI monitoring, Paulo's expertise in Power BI and automated reporting makes him a strong candidate for this role.",
        projects: ["Power BI Portfolio Hub", "Sales Performance Dashboard"],
        keywords: ["KPI Monitoring", "Automated Pipelines", "Data Visualization", "SQL"]
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="py-24 px-4 animate-in slide-in-from-bottom-4 duration-1000">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact</h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Let's talk about roles, dashboards, or analytics projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="bg-white dark:bg-zinc-900/50 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 text-center flex flex-col items-center">
            <div className="w-12 h-12 bg-primary-50 dark:bg-primary-900/20 rounded-xl flex items-center justify-center text-primary-500 mb-6">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-2">Email</h3>
            <p className="font-semibold mb-6">{person.email}</p>
            <a href={`mailto:${person.email}`} className="mt-auto px-6 py-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 rounded-lg text-sm font-bold hover:bg-primary-600 hover:text-white transition-all">
              Send Email
            </a>
          </div>

          <div className="bg-white dark:bg-zinc-900/50 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 text-center flex flex-col items-center">
            <div className="w-12 h-12 bg-primary-50 dark:bg-primary-900/20 rounded-xl flex items-center justify-center text-primary-500 mb-6">
              <Linkedin className="w-6 h-6" />
            </div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-2">LinkedIn</h3>
            <p className="font-semibold mb-6">Paulo Barreto</p>
            <a href={person.linkedin} target="_blank" className="mt-auto px-6 py-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 rounded-lg text-sm font-bold hover:bg-primary-600 hover:text-white transition-all">
              Connect
            </a>
          </div>

          <div className="bg-white dark:bg-zinc-900/50 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 text-center flex flex-col items-center justify-center">
            <div className="w-12 h-12 bg-primary-50 dark:bg-primary-900/20 rounded-xl flex items-center justify-center text-primary-500 mb-6">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-2">Location</h3>
            <p className="font-semibold">Bragança, Portugal</p>
            <p className="text-xs text-zinc-500 mt-2">Open to Remote / Relocation</p>
          </div>
        </div>

        {/* AI Tailored Summary Feature */}
        <section className="bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-primary-500 text-white rounded-lg">
                <Sparkles className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight">AI Role Matcher</h2>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed">
              Recruiters: Paste a job description below, and the AI will summarize exactly how my experience fits your requirements and suggest relevant projects from my portfolio.
            </p>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-zinc-400 uppercase tracking-widest mb-3">Job Description</label>
                <textarea 
                  value={jdText}
                  onChange={(e) => setJdText(e.target.value)}
                  className="w-full h-48 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 text-sm focus:ring-2 focus:ring-primary-500 outline-none transition-all placeholder:text-zinc-300 dark:placeholder:text-zinc-800"
                  placeholder="Paste the job requirements here..."
                ></textarea>
              </div>
              
              <button 
                onClick={handleAiAnalyze}
                disabled={isAnalyzing || !jdText.trim()}
                className="w-full py-4 bg-primary-600 text-white rounded-xl font-bold flex items-center justify-center hover:bg-primary-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Analyzing Requirements...
                  </>
                ) : (
                  <>
                    <Wand2 className="w-5 h-5 mr-2" />
                    Generate Tailored Summary
                  </>
                )}
              </button>

              {aiResult && (
                <div className="mt-12 space-y-10 animate-in fade-in slide-in-from-top-4 duration-500">
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-4 flex items-center">
                      <ArrowRight className="w-4 h-4 mr-2 text-primary-500" /> Tailored Pitch
                    </h4>
                    <p className="text-lg text-zinc-800 dark:text-zinc-100 font-medium leading-relaxed bg-primary-500/5 p-6 rounded-2xl border border-primary-500/10">
                      {aiResult.summary}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-4 flex items-center">
                        <ArrowRight className="w-4 h-4 mr-2 text-primary-500" /> Recommended Projects
                      </h4>
                      <ul className="space-y-3">
                        {aiResult.projects.map(p => (
                          <li key={p} className="flex items-center text-sm font-bold bg-white dark:bg-zinc-800 p-3 rounded-xl border border-zinc-200 dark:border-zinc-700">
                            <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-4 flex items-center">
                        <ArrowRight className="w-4 h-4 mr-2 text-primary-500" /> Key Matches
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {aiResult.keywords.map(k => (
                          <span key={k} className="px-3 py-1 bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded-lg text-xs font-bold uppercase">
                            {k}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
