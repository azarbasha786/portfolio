export interface ProjectItem {
  id: string;
  title: string;
  category: 'data-analytics' | 'machine-learning' | 'full-stack';
  categoryLabel: string;
  shortDescription: string;
  problem: string;
  approach: string;
  architecture: string[];
  technologies: string[];
  keyOutcomes: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  isBlueprint?: boolean; // Indicates a recommended showcase project ready for Azar's GitHub repo
  featured: boolean;
}

export interface SkillItem {
  name: string;
  category: 'programming' | 'analytics' | 'ml' | 'visualization' | 'tools';
  categoryLabel: string;
  level: 'Core' | 'Proficient' | 'Familiar';
  description: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  type: 'Internship' | 'Full-time' | 'Academic / Project';
  points: string[];
  technologies: string[];
  isVerified: boolean;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade?: string;
  highlights: string[];
  relevantCoursework: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  skills: string[];
}

export interface PortfolioData {
  personal: {
    name: string;
    headline: string;
    tagline: string;
    bio: string[];
    targetRoles: string[];
    status: string;
    email: string;
    github: string;
    linkedin: string;
    location: string;
    availability: string;
    resumeUrl: string;
  };
  skills: SkillItem[];
  projects: ProjectItem[];
  experiences: ExperienceItem[];
  education: EducationItem[];
  certifications?: CertificationItem[];
}

export const initialPortfolioData: PortfolioData = {
  personal: {
    name: 'Azar Basha P',
    headline: 'Data Analyst & Machine Learning Enthusiast',
    tagline: 'Transforming complex datasets into actionable business intelligence through statistical analysis, clean Python pipelines, and predictive modeling.',
    bio: [
      'I am an aspiring data professional with a passion for uncovering stories hidden within data. My journey revolves around building end-to-end analytical workflows—from data ingestion and exploratory data analysis (EDA) to hypothesis validation and machine learning modeling.',
      'I believe strong analytical work starts with high data integrity, thoughtful metrics, and transparent communication. I am currently seeking internship and entry-level opportunities where I can apply my skills in Python, SQL, and data visualization to solve real business challenges.'
    ],
    targetRoles: [
      'Data Analyst',
      'Junior Data Scientist',
      'Machine Learning Intern / Engineer',
      'Business Intelligence Analyst'
    ],
    status: 'Actively Interviewing & Seeking Opportunities',
    email: 'azarbasha0786@gmail.com',
    github: 'https://github.com/azarbasha786',
    linkedin: 'https://www.linkedin.com/in/azar-basha-p-7069032b0/',
    location: 'Open to Remote & Onsite (Global / India)',
    availability: 'Immediate / Flexible',
    resumeUrl: '/resume.pdf'
  },
  skills: [
    // Programming
    {
      name: 'Python',
      category: 'programming',
      categoryLabel: 'Programming',
      level: 'Core',
      description: 'Primary language for data manipulation, statistical modeling, algorithmic automation, and scripting.'
    },
    {
      name: 'SQL',
      category: 'programming',
      categoryLabel: 'Programming',
      level: 'Core',
      description: 'Relational querying, complex JOINs, GROUP BY aggregations, window functions, and CTEs for analytics.'
    },
    {
      name: 'JavaScript / TypeScript',
      category: 'programming',
      categoryLabel: 'Programming',
      level: 'Familiar',
      description: 'Modern frontend interfaces, asynchronous data fetching, and interactive web dashboard development.'
    },

    // Data & Analytics
    {
      name: 'Pandas & NumPy',
      category: 'analytics',
      categoryLabel: 'Data & Analytics',
      level: 'Core',
      description: 'High-performance dataframe operations, vectorization, missing value imputation, and reshaping.'
    },
    {
      name: 'Exploratory Data Analysis (EDA)',
      category: 'analytics',
      categoryLabel: 'Data & Analytics',
      level: 'Core',
      description: 'Detecting data anomalies, correlation mapping, distribution testing, and feature extraction.'
    },
    {
      name: 'Data Cleaning & Preprocessing',
      category: 'analytics',
      categoryLabel: 'Data & Analytics',
      level: 'Core',
      description: 'Handling nulls, outlier detection, categorical encoding (One-Hot, Ordinal), and feature scaling.'
    },
    {
      name: 'Statistical Analysis',
      category: 'analytics',
      categoryLabel: 'Data & Analytics',
      level: 'Proficient',
      description: 'Descriptive metrics, probability distributions, hypothesis testing (t-test, chi-square), and A/B test basics.'
    },

    // Machine Learning & AI
    {
      name: 'Scikit-Learn',
      category: 'ml',
      categoryLabel: 'Machine Learning',
      level: 'Proficient',
      description: 'Building supervised classification & regression pipelines, cross-validation, and hyperparameter tuning.'
    },
    {
      name: 'Supervised Learning',
      category: 'ml',
      categoryLabel: 'Machine Learning',
      level: 'Proficient',
      description: 'Linear Regression, Logistic Regression, Decision Trees, Random Forest, and Gradient Boosting.'
    },
    {
      name: 'Model Evaluation Metrics',
      category: 'ml',
      categoryLabel: 'Machine Learning',
      level: 'Proficient',
      description: 'ROC-AUC, Precision, Recall, F1-Score, Confusion Matrix, MSE, and R-squared interpretation.'
    },

    // Visualization
    {
      name: 'Matplotlib & Seaborn',
      category: 'visualization',
      categoryLabel: 'Visualization',
      level: 'Core',
      description: 'Custom statistical plots, heatmaps, distribution plots, and executive-ready charts.'
    },
    {
      name: 'Power BI / Dashboarding',
      category: 'visualization',
      categoryLabel: 'Visualization',
      level: 'Proficient',
      description: 'Interactive reporting, KPI card generation, dimensional filtering, and visual storytelling.'
    },
    {
      name: 'Excel & Google Sheets',
      category: 'visualization',
      categoryLabel: 'Visualization',
      level: 'Proficient',
      description: 'Pivot tables, VLOOKUP/XLOOKUP, summary aggregations, and quick financial/sales analysis.'
    },

    // Tools
    {
      name: 'Git & GitHub',
      category: 'tools',
      categoryLabel: 'Developer Tools',
      level: 'Core',
      description: 'Version control, branching strategies, collaborative workflows, and portfolio project hosting.'
    },
    {
      name: 'Jupyter Notebooks / Google Colab',
      category: 'tools',
      categoryLabel: 'Developer Tools',
      level: 'Core',
      description: 'Interactive experimentation, exploratory notebooks, documented markdown, and code prototyping.'
    },
    {
      name: 'VS Code & Command Line',
      category: 'tools',
      categoryLabel: 'Developer Tools',
      level: 'Core',
      description: 'Local development environment, virtual environment management (venv/conda), and terminal utilities.'
    }
  ],
  projects: [
    {
      id: 'customer-churn-analytics',
      title: 'Customer Churn Prediction & Retention Analytics',
      category: 'machine-learning',
      categoryLabel: 'Machine Learning & Analytics',
      shortDescription: 'End-to-end churn prediction pipeline identifying high-risk subscription accounts with feature importance explainability.',
      problem: 'Subscription businesses suffer silent customer attrition without early-warning indicators, leading to lost recurring revenue.',
      approach: 'Cleaned raw transaction and behavioral logs, handled imbalanced class distribution using SMOTE, trained Random Forest & Logistic Regression classifiers, and extracted top retention risk drivers.',
      architecture: [
        'Data Ingestion & Missing Value Cleaning (Pandas)',
        'Feature Engineering (Tenure, Monthly Spend, Support Tickets)',
        'Class Balancing & Scikit-Learn Pipeline Modeling',
        'Model Evaluation (Precision, Recall, ROC-AUC curve)',
        'Actionable Retention Recommendations Report'
      ],
      technologies: ['Python', 'Pandas', 'Scikit-Learn', 'Seaborn', 'Matplotlib'],
      keyOutcomes: [
        'Identified support ticket volume and contract type as top 2 churn determinants',
        'Built clear cross-validation scoring pipeline to prevent data leakage',
        'Created executive summary visual comparing retention intervention scenarios'
      ],
      githubUrl: 'https://github.com/azarbasha786',
      isBlueprint: true,
      featured: true
    },
    {
      id: 'retail-sales-eda-sql',
      title: 'E-Commerce Sales Performance & SQL Business Intelligence',
      category: 'data-analytics',
      categoryLabel: 'Data Analytics & SQL',
      shortDescription: 'Comprehensive exploratory data analysis and SQL querying analyzing revenue trends, basket size, and customer segments.',
      problem: 'Disjointed transactional logs made it difficult for stakeholders to evaluate regional performance, seasonal spikes, and customer lifetime value.',
      approach: 'Authored multi-table SQL queries with CTEs and window functions to compute Month-over-Month growth, customer cohort retention, and product category margins, followed by statistical visualization.',
      architecture: [
        'Relational Database Schema Design & Table Normalization',
        'Analytical SQL Queries (Window functions, Aggregate CTEs)',
        'Exploratory Data Analysis in Python for Distribution Checks',
        'Visual Storytelling with Correlation Matrices & Cohort Tables'
      ],
      technologies: ['SQL', 'Python', 'Pandas', 'Matplotlib', 'Jupyter'],
      keyOutcomes: [
        'Synthesized 10+ core business KPIs including MoM Revenue Growth and AOV',
        'Segmented repeat purchasers vs single-order dropoffs',
        'Structured modular, documented SQL scripts ready for reproducible reporting'
      ],
      githubUrl: 'https://github.com/azarbasha786',
      isBlueprint: true,
      featured: true
    },
    {
      id: 'interactive-analytics-dashboard',
      title: 'Dynamic Data Analytics Dashboard & KPI Tracker',
      category: 'full-stack',
      categoryLabel: 'Analytics & Web App',
      shortDescription: 'Interactive dashboard interface providing dynamic filtering, KPI cards, and visual breakdown of multidimensional datasets.',
      problem: 'Non-technical stakeholders need an intuitive, accessible way to explore operational metrics without running custom scripts.',
      approach: 'Designed a lightweight responsive dashboard architecture that ingests structured dataset feeds, calculates live aggregates, and renders high-clarity charts.',
      architecture: [
        'Clean Component Architecture with Modular State Management',
        'Data Filtering Engine (Date Range, Category, Metric Toggle)',
        'High-Contrast Responsive Visualizations',
        'Export Summary Reports for Stakeholder Distribution'
      ],
      technologies: ['TypeScript', 'React', 'Tailwind CSS', 'Chart / SVG Engine', 'Python / REST API'],
      keyOutcomes: [
        'Instant multi-dimensional filtering across diverse metric categories',
        'Zero-latency client-side aggregation for immediate user feedback',
        'Fully responsive layout optimized for mobile and desktop review'
      ],
      githubUrl: 'https://github.com/azarbasha786',
      liveDemoUrl: '#',
      isBlueprint: true,
      featured: true
    }
  ],
  experiences: [
    {
      id: 'exp-1',
      role: 'Data Science Intern',
      organization: 'Targeting Entry-Level / Internship Roles',
      location: 'Open to Remote / Relocation',
      period: '2026 June – 2026 August',
      type: 'Internship',
      points: [
        'Actively applying statistical methods, exploratory data analysis, and SQL queries to solve structured analytical challenges.',
        'Developing reproducible data science workflows in Python utilizing Pandas, NumPy, and Scikit-Learn.',
        'Creating clear documentation, modular repository architectures, and executive-ready visual summaries.',
        '[Pending LinkedIn Profile Import: Update this section with your specific internship or work history from your LinkedIn profile].'
      ],
      technologies: ['Python', 'Pandas', 'Git', 'Data Visualization', 'Scikit-Learn'],
      isVerified: false
    }
  ],
  education: [
    {
      id: 'edu-1',
      degree: 'B. Tech',
      institution: 'Joy University',
      location: 'India',
      period: '2027',
      grade: '7.6',
      highlights: [
        'Core coursework in Database Management Systems (DBMS), Mathematics & Statistics, Algorithms, and Software Engineering.',
        'Hands-on laboratory coursework in Python programming, relational databases, and data structures.'
      ],
      relevantCoursework: [
        'Database Management Systems (DBMS)',
        'Probability & Statistics',
        'Data Structures & Algorithms',
        'Object-Oriented Programming (Python)',
        'Machine Learning Fundamentals'
      ]
    }
  ],
  certifications: []
};
