// All content here is sourced directly from Jeet's resume and verified project history.
// No fabricated tools, metrics, or credentials — every line should be defensible in an interview.

export const profile = {
  name: "Jeet Dave",
  location: "Jersey City, NJ",
  email: "jeetd6220@gmail.com",
  github: "https://github.com/jd878-gif",
  linkedin: "https://www.linkedin.com/in/jeetdave11",
  headline: "Data Scientist · Data Engineer · ML Engineer",
  tagline:
    "I turn messy, real-world data into reliable pipelines and decision-ready systems — built on Spark, AWS, and production-grade ETL.",
  summary:
    "MS Data Science student at NJIT (expected May 2027) with a BS in Computer Science & Engineering. I build the kind of systems that don't just run in a notebook — medallion-architecture pipelines, serverless fraud-detection platforms, and dashboards that real teams use to make decisions. Strong in Python, SQL, and distributed data processing, with hands-on AWS experience across compute, storage, orchestration, and ML inference.",
  status: "Open to Data Engineering, Data Science & ML Engineering roles",
};

export const education = [
  {
    school: "New Jersey Institute of Technology",
    location: "Newark, NJ",
    degree: "MS in Data Science",
    detail: "GPA: 3.5",
    period: "Expected May 2027",
  },
  {
    school: "Indus University",
    location: "Ahmedabad, India",
    degree: "BS in Computer Science & Engineering",
    detail: "GPA: 3.8",
    period: "May 2025",
  },
];

export const certifications = [
  {
    name: "AWS Machine Learning",
    issuer: "Amazon Web Services",
    period: "Jul 2024 – Nov 2024",
  },
];

// "Milestones" replaces the requested Kaggle/Hackerrank/publications section —
// these are the real, verifiable equivalents from Jeet's actual prep work.
export const milestones = [
  {
    label: "PySpark depth",
    detail:
      "Worked through all 16 core PySpark topics — Driver/Executor architecture, DAGs, lazy evaluation, Catalyst Optimizer, shuffles, window functions, Structured Streaming — applied directly in two production pipelines.",
  },
  {
    label: "SQL curriculum",
    detail:
      "Completed a full SQL curriculum from foundations through window functions, CTEs, and complex subqueries — applied across every data project below.",
  },
  {
    label: "LeetCode",
    detail:
      "Intermediate level, with particular strength in hash map / frequency-counting and array manipulation problems.",
  },
  {
    label: "AWS breadth",
    detail:
      "Hands-on with 10+ AWS services in a single production-style platform: SQS, Lambda, DynamoDB, S3, Glue, Athena, Step Functions, EventBridge, SNS, SageMaker Serverless Inference, CloudWatch.",
  },
];

export const experience = [
  {
    org: "NexGits Private Limited",
    role: "Data Analyst Intern",
    location: "Ahmedabad, India",
    period: "Jun 2024 – Jul 2025",
    bullets: [
      "Designed ETL pipelines in Python and SQL to extract, cleanse, and transform structured data across multiple relational tables — reducing data prep time by 30% and surfacing insights that drove real business decisions.",
      "Built interactive Power BI, Tableau, and Excel dashboards tracking KPIs critical to business unit goals, with standardized reports that directly informed 3 strategic decisions within the first month.",
      "Automated analytical workflows using Python on AWS, reducing manual effort by 40% and improving the speed and reliability of reporting.",
    ],
  },
  {
    org: "NJIT Campus Wellness Services",
    role: "Event Coordination & Communications",
    location: "Newark, NJ",
    period: "Ongoing",
    bullets: [
      "Design and produce print-ready campaign materials (multi-format posters, strategic department proposals) for university-wide health initiatives.",
      "Built a functional wellness chatbot prototype (NJIT Wellness Navigator) with distress-detection handoff logic to connect students with the right support.",
    ],
  },
];

export type SkillCategory = {
  category: string;
  level: "Advanced" | "Proficient" | "Familiar";
  items: string[];
};

// Level reflects genuine depth of use, not a fabricated percentage.
export const skills: SkillCategory[] = [
  {
    category: "Languages",
    level: "Advanced",
    items: ["Python", "SQL"],
  },
  {
    category: "Languages",
    level: "Familiar",
    items: ["R", "C", "C++"],
  },
  {
    category: "Data Engineering",
    level: "Advanced",
    items: ["Apache Spark", "PySpark", "Apache Airflow"],
  },
  {
    category: "Data Engineering",
    level: "Familiar",
    items: ["Apache Kafka", "Hadoop", "dbt", "Snowflake / Snowpark"],
  },
  {
    category: "Cloud & Infrastructure",
    level: "Proficient",
    items: [
      "AWS S3",
      "AWS EC2",
      "AWS Lambda",
      "AWS SQS",
      "AWS DynamoDB",
      "AWS Glue",
      "AWS Athena",
      "AWS Step Functions",
      "AWS SageMaker",
    ],
  },
  {
    category: "Cloud & Infrastructure",
    level: "Familiar",
    items: ["Docker", "Azure SQL", "Microsoft Fabric"],
  },
  {
    category: "Backend & APIs",
    level: "Proficient",
    items: ["Flask (REST APIs)", "SQLAlchemy ORM", "MySQL"],
  },
  {
    category: "Data Science & Analytics",
    level: "Advanced",
    items: ["Pandas", "NumPy", "Scikit-learn"],
  },
  {
    category: "Data Science & Analytics",
    level: "Proficient",
    items: ["Tableau", "Power BI", "Streamlit", "Plotly", "Matplotlib"],
  },
];

export type Project = {
  slug: string;
  title: string;
  period: string;
  category: "Data Engineering" | "Machine Learning" | "Analytics" | "Cloud";
  oneLiner: string;
  problem: string;
  architecture: string[];
  stack: string[];
  results: string[];
  github?: string;
};

export const projects: Project[] = [
  {
    slug: "k8s-data-platform",
    title: "Kubernetes Data Platform",
    period: "May 2026 – Present",
    category: "Data Engineering",
    oneLiner:
      "A production-grade distributed data platform on AWS EKS processing BTS flight-delay data through a Bronze/Silver/Gold medallion architecture — fully provisioned with Terraform.",
    problem:
      "Design and operate a real Kubernetes-native data platform end-to-end: infrastructure as code, distributed orchestration, and a full medallion pipeline — the kind of setup most engineers only read about.",
    architecture: [
      "AWS EKS cluster provisioned via Terraform (managed node groups, IRSA, Karpenter autoscaling)",
      "Apache Airflow deployed on Kubernetes via Helm for DAG orchestration",
      "Apache Spark on Kubernetes for distributed BTS flight-delay processing",
      "Bronze / Silver / Gold medallion architecture for raw → cleaned → analytics-ready data",
      "IRSA for fine-grained pod-level AWS IAM permissions without credential sprawl",
    ],
    stack: [
      "Kubernetes",
      "AWS EKS",
      "Terraform",
      "Apache Airflow",
      "Apache Spark",
      "PySpark",
      "Helm",
      "Docker",
      "AWS S3",
      "Python",
    ],
    results: [
      "EKS cluster fully provisioned via Terraform with managed node groups",
      "Airflow and Spark deployed via Helm on Kubernetes",
      "Medallion architecture running BTS flight-delay data end-to-end",
      "In active development — AI-assisted debugging through Helm chart migration and IRSA permissioning",
    ],
    github: "https://github.com/jd878-gif/k8s-data-platform",
  },
  {
    slug: "fraud-sentinel",
    title: "FraudSentinel",
    period: "Production-grade portfolio platform",
    category: "Cloud",
    oneLiner:
      "A serverless, event-driven fraud detection platform built on 10+ AWS services with a medallion lakehouse architecture.",
    problem:
      "Design a fraud-detection system the way it would actually be built in production — event-driven, serverless, and observable — rather than a single offline notebook model.",
    architecture: [
      "Ingestion via SQS → Lambda for event-driven processing",
      "DynamoDB for low-latency transaction state",
      "S3 + Glue medallion architecture (Bronze / Silver / Gold) for the analytical lakehouse",
      "Athena for ad-hoc SQL over the lakehouse",
      "Step Functions + EventBridge + SNS for orchestration and alerting",
      "SageMaker Serverless Inference for real-time scoring",
      "CloudWatch for end-to-end observability",
    ],
    stack: [
      "AWS SQS",
      "Lambda",
      "DynamoDB",
      "S3",
      "Glue",
      "Athena",
      "Step Functions",
      "EventBridge",
      "SNS",
      "SageMaker",
      "CloudWatch",
    ],
    results: [
      "End-to-end event-driven pipeline from transaction ingestion to real-time inference",
      "Medallion lakehouse separating raw, cleaned, and analytics-ready data",
    ],
    github: "https://github.com/jd878-gif/fraud-sentinel",
  },
  {
    slug: "causal-inference-ab-testing",
    title: "Causal Inference & A/B Testing",
    period: "Two-module analysis repository",
    category: "Machine Learning",
    oneLiner:
      "A Difference-in-Differences analysis on real BTS airline delay data, paired with an A/B test on the Cookie Cats dataset.",
    problem:
      "Go beyond standard A/B testing to demonstrate causal reasoning — isolating treatment effects from confounding trends using real-world data.",
    architecture: [
      "Module 1: Difference-in-Differences design on BTS airline on-time performance data",
      "Module 2: A/B test on the Cookie Cats mobile game dataset",
      "Random Forest feature importance to validate and explain test results",
    ],
    stack: ["Python", "Pandas", "Scikit-learn", "Statsmodels", "Matplotlib"],
    results: [
      "Quantified a real treatment effect using DiD rather than naive before/after comparison",
      "Used Random Forest feature importance to sanity-check A/B test conclusions",
    ],
    github: "https://github.com/jd878-gif/causal-inference-ab-testing",
  },
  {
    slug: "flight-delay-platform",
    title: "Flight Delay Intelligence Platform",
    period: "Personal data engineering project",
    category: "Data Engineering",
    oneLiner:
      "A medallion-architecture PySpark pipeline turning raw BTS airline data into analytics-ready delay intelligence.",
    problem:
      "Process large-scale government flight delay data through a layered, production-style pipeline rather than a flat one-off script.",
    architecture: [
      "Bronze layer: raw BTS ingestion",
      "Silver layer: cleaned, deduplicated, type-enforced data",
      "Gold layer: aggregated, analytics-ready delay metrics",
    ],
    stack: ["PySpark", "Apache Spark", "Python"],
    results: [
      "Reusable medallion pattern later applied to the FraudSentinel lakehouse",
    ],
  },
  {
    slug: "retail-analytics-pipeline",
    title: "Retail Analytics Pipeline",
    period: "Personal data engineering project",
    category: "Data Engineering",
    oneLiner:
      "A Snowflake + dbt analytics pipeline with 52 passing tests, surfaced through a live Streamlit dashboard.",
    problem:
      "Build a modern analytics-engineering stack end-to-end: warehouse, transformation layer, testing, and a consumable dashboard.",
    architecture: [
      "Snowflake warehouse with Snowpark Python for data loading",
      "dbt layer with 6 models and 52 automated tests",
      "Streamlit dashboard for stakeholder-facing reporting",
    ],
    stack: ["Snowflake", "Snowpark Python", "dbt", "Streamlit"],
    results: ["6 dbt models, 52 passing tests", "Published, runnable dashboard on GitHub"],
  },
  {
    slug: "ecommerce-data-pipeline",
    title: "E-Commerce Data Pipeline",
    period: "Feb 2026 – Apr 2026",
    category: "Data Engineering",
    oneLiner:
      "An end-to-end ETL pipeline over 100K+ synthetic e-commerce records with automated daily batch processing and ML-driven segmentation.",
    problem:
      "Translate raw transactional data into decision-ready customer segments and forecasts on an automated daily cycle.",
    architecture: [
      "Python + Pandas ETL across 4 relational MySQL tables",
      "Apache Airflow DAGs for automated daily batch cycles",
      "Streamlit + Plotly dashboard, containerized with Docker, deployed on AWS EC2",
    ],
    stack: ["Python", "Pandas", "MySQL", "Apache Airflow", "Streamlit", "Plotly", "Docker", "AWS EC2"],
    results: [
      "Sales forecasting (Linear Regression, R²: 0.65)",
      "Customer churn prediction (SVM, 63% accuracy)",
      "K-Means segmentation across 4 customer segments (VIP, Regular, At-Risk, Dormant)",
    ],
  },
  {
    slug: "library-management-system",
    title: "Library Management System",
    period: "Dec 2025 – Jan 2026",
    category: "Data Engineering",
    oneLiner:
      "A 6-layer Flask + MySQL system with a 12-endpoint REST API and fully automated ETL orchestration via Airflow on Docker Compose.",
    problem:
      "Design a multi-component system end-to-end — API, database, ETL, and orchestration — with zero manual operational steps.",
    architecture: [
      "Flask REST API (12 endpoints) backed by MySQL via SQLAlchemy ORM",
      "Apache Airflow DAGs on Docker Compose for fully automated ETL scheduling",
      "Pandas + Matplotlib analysis of borrowing trends, fed back into the reporting module",
    ],
    stack: ["Python", "Flask", "MySQL", "SQLAlchemy", "Docker", "Apache Airflow"],
    results: ["12-endpoint REST API", "Fully automated ETL — zero manual operations"],
  },
];

// Real technical write-ups, swapped in for the requested "blog" section.
// These link to actual README / analysis documentation rather than invented blog posts.
export const deepDives = [
  {
    title: "Difference-in-Differences on Real Airline Delay Data",
    description:
      "Why naive before/after comparisons fail for causal claims, and how a DiD design isolates the actual treatment effect using BTS data.",
    href: "https://github.com/jd878-gif/causal-inference-ab-testing",
    tag: "Causal Inference",
  },
  {
    title: "Designing a Medallion Lakehouse for Fraud Detection",
    description:
      "How Bronze/Silver/Gold layering plus Step Functions orchestration keeps a serverless fraud pipeline observable and debuggable in production.",
    href: "https://github.com/jd878-gif/fraud-sentinel",
    tag: "Data Engineering",
  },
];