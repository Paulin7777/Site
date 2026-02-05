
import { Project, Person } from './types';

export const person: Person = {
  name: "Paulo Barreto",
  location: "Bragança, Portugal",
  email: "pgbarreto99@gmail.com",
  linkedin: "https://www.linkedin.com/in/paulo-barreto-ab0076174/",
  headline_variants: {
    consulting: {
      headline: "Junior Data Analyst building dashboards that drive decisions",
      subheadline: "Power BI • SQL • Python | KPI tracking • automation • stakeholder-ready reporting"
    },
    startup: {
      headline: "Data Analyst turning messy data into clear actions",
      subheadline: "Fast dashboards, pragmatic analysis, automation — built to ship and iterate"
    },
    corporate: {
      headline: "Junior Data Analyst focused on performance monitoring and reporting",
      subheadline: "Power BI dashboards • analytical workflows • KPI design for decision support"
    }
  },
  default_variant: "consulting",
  quick_value_props: [
    {
      title: "Dashboards that explain themselves",
      description: "Interactive Power BI experiences with clear KPI logic and guided exploration."
    },
    {
      title: "Automation for recurring reporting",
      description: "Reduce manual work via structured pipelines and scheduled updates."
    },
    {
      title: "Metrics-first mindset",
      description: "KPI design, segmentation, and analysis to support better decisions."
    }
  ],
  about_short: {
    title: "About",
    text: "I build decision-support dashboards and analytical workflows. My focus is clarity: defining the right KPIs, structuring the data flow, and delivering visuals that stakeholders can actually use."
  }
};

export const projects: Project[] = [
  {
    id: "pbi-portfolio-hub",
    slug: "power-bi-portfolio-hub",
    title: "Power BI Portfolio Hub",
    category: "Portfolio / Showcase",
    stack: ["Power BI", "Figma"],
    card: {
      one_liner: "A guided Power BI hub that organizes dashboards and documents limitations clearly.",
      tags: ["interactive", "storytelling", "proof-of-work"]
    },
    case: {
      problem: "Recruiters and managers need fast proof of analytical thinking and dashboard quality — without digging through scattered links.",
      approach: [
        "Designed a navigable Power BI experience with clear project entry points.",
        "Prioritized scannable KPI panels and intuitive filtering.",
        "Documented limitations to show analytical honesty and maturity."
      ],
      outcome: [
        "A single place to explore projects, understand scope, and evaluate dashboard storytelling.",
        "Improves the 'first 60 seconds' experience for hiring managers."
      ],
      limitations: [
        "Public demo: data may be anonymized/simplified.",
        "Some visuals prioritize clarity over exhaustive detail."
      ],
      next_steps: [
        "Add a job-role matcher (recommended projects by job description).",
        "Create a short guided walkthrough mode."
      ]
    },
    artifact: {
      type: "iframe",
      url: "https://app.powerbi.com/view?r=eyJrIjoiMDY0NDAzMTktNWRiNy00NDNhLTgzY2ItZGMyMTViNWY4Mzk0IiwidCI6IjJiNzYzMGFiLTllNDktNGFlZS05NzE5LWUyNjgyYTVhZWM5YyJ9",
      open_new_tab_label: "Open dashboard in a new tab",
      recommended_height_px: 760
    },
    how_to_use: [
      "Pick a project tile to start.",
      "Use the navigation buttons to switch views and read limitations.",
      "Look for KPI logic, filters, and clarity of insights."
    ]
  },
  {
    id: "sales-dashboard",
    slug: "sales-performance-dashboard",
    title: "Sales Performance Dashboard",
    category: "Commercial Analytics",
    stack: ["Power BI", "Excel"],
    card: {
      one_liner: "Sales KPI monitoring with segmentation for faster decisions.",
      tags: ["kpis", "segmentation", "trends"]
    },
    case: {
      problem: "Sales teams often lack a consistent view of performance across region/product/time, delaying action.",
      approach: [
        "Built KPI panels for quick health checks.",
        "Enabled slicing by key business dimensions for root-cause exploration.",
        "Focused on clarity: minimal noise, actionable breakdowns."
      ],
      outcome: [
        "A dashboard that supports quick monitoring and deeper drill-down when needed.",
        "Better prioritization through top/bottom segment views."
      ],
      limitations: [
        "Demo dataset scope may be limited.",
        "Impact depends on real deployment context."
      ],
      next_steps: [
        "Add a 'What changed since last period?' narrative panel.",
        "Add automated commentary for key KPI shifts."
      ]
    },
    artifact: {
      type: "iframe",
      url: "https://app.powerbi.com/view?r=eyJrIjoiNzI3OTQzYWQtODJiZS00N2Q3LTlhY2ItZjE2ZWYwNTgxZTA5IiwidCI6IjJiNzYzMGFiLTllNDktNGFlZS05NzE5LWUyNjgyYTVhZWM5YyJ9",
      open_new_tab_label: "Open dashboard in a new tab",
      recommended_height_px: 760
    },
    how_to_use: [
      "Start with date/segment filters.",
      "Check KPI summary for deviations.",
      "Drill down to see the drivers of change."
    ]
  },
  {
    id: "ops-quality-dashboard",
    slug: "operations-quality-dashboard",
    title: "Operations / Quality Dashboard",
    category: "Operational Analytics",
    stack: ["Power BI"],
    card: {
      one_liner: "Operational monitoring with quality indicators for continuous improvement routines.",
      tags: ["operations", "quality", "monitoring"]
    },
    case: {
      problem: "Operational teams need a consistent monitoring layer to spot issues early and support continuous improvement.",
      approach: [
        "Created KPI-driven monitoring views.",
        "Enabled comparison across categories and periods.",
        "Kept the UI clean to support daily usage."
      ],
      outcome: [
        "Faster visibility into operational signals and potential bottlenecks.",
        "A repeatable structure for performance discussions."
      ],
      limitations: [
        "Quality KPIs vary by domain; demo KPIs may be generic."
      ],
      next_steps: [
        "Add drill-through pages for root cause analysis.",
        "Add targets/thresholds where applicable."
      ]
    },
    artifact: {
      type: "iframe",
      url: "https://app.powerbi.com/view?r=eyJrIjoiOTkwYWUxY2QtYzgxMi00YjczLWI1MDctZjBiYjYyMjEwZTUzIiwidCI6IjJiNzYzMGFiLTllNDktNGFlZS05NzE5LWUyNjgyYTVhZWM5YyJ9",
      open_new_tab_label: "Open dashboard in a new tab",
      recommended_height_px: 760
    },
    how_to_use: [
      "Start with the KPI panel to spot outliers.",
      "Use segmentation to compare categories/periods.",
      "Focus on visuals that reveal bottlenecks."
    ]
  },
  {
    id: "qualytools",
    slug: "qualytools-r-shiny",
    title: "QualyTools (R Shiny)",
    category: "Data App",
    stack: ["R", "Shiny"],
    card: {
      one_liner: "An interactive R Shiny app for exploring quality indicators.",
      tags: ["r-shiny", "data-app", "interactivity"]
    },
    case: {
      problem: "Quality analysis often benefits from lightweight interactive tools beyond static reporting.",
      approach: [
        "Built an interactive Shiny app to explore indicators through controls and filters.",
        "Structured views for quick comparison across subsets."
      ],
      outcome: [
        "Demonstrates ability to build interactive analytical tools beyond BI dashboards."
      ],
      limitations: [
        "Hosted externally; performance depends on the hosting environment."
      ],
      next_steps: [
        "Add a short walkthrough video or GIF to improve first-time usage."
      ]
    },
    artifact: {
      type: "external_link",
      url: "https://qualitools.shinyapps.io/paulin/",
      button_label: "Open QualyTools"
    },
    how_to_use: [
      "Open the app and explore indicators via interactive controls.",
      "Use filters to compare results across subsets."
    ]
  }
];
