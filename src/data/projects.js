// src/data/projects.js

export const projects = [
  {
    id: "trendify",
    isFeatured: true,
    title: "Trendify – User Behavior Dashboard",
    description:
      "Data analytics project analyzing 50,000+ event logs using Python + Power BI.",
    stack: ["Python (pandas, numpy)", "Power BI", "Matplotlib / Seaborn", "Jupyter / Google Colab"],
    previewImages: [
      "/Trendify/trendify-1.png",
      "/Trendify/trendify-2.png",
      "/Trendify/trendify-3.png",
      "/Trendify/trendify-4.png",
    ],
    details: {
      summary:
        "Trendify is an e-commerce analytics project built to understand user behavior across features, funnel stages, and retention patterns. This project focuses on turning raw event logs into actionable insights to support product decisions.",
      goals: [
        "Analyze user behavior based on 50,000+ event logs from an e-commerce app.",
        "Identify drop-off points across the checkout funnel to improve conversion.",
        "Understand feature usage patterns, peak activity time, and device segmentation.",
        "Build a five-page Power BI dashboard to visualize user activity, funnel, retention, and cohort analysis.",
      ],
      keyFeatures: [
        "Checkout Funnel Analysis (view → add to cart → checkout → payment) with final conversion of 26.8%.",
        "Identified major drop-off: 60% loss between checkout → payment.",
        "Feature usage insights: view_product, app_open, and view_home dominate user activity.",
        "Retention Analysis: D1, D7, D30 retention stable at ~10%.",
        "Peak activity recorded at 18:00–22:00, especially on Friday & Sunday.",
        "Device segmentation dashboards (Android, iOS, Web) with comparison charts.",
        "Fully interactive Power BI dashboard for stakeholders to explore user behavior.",
      ],
      techHighlights: [
        "Event cleaning, timestamp parsing, and feature normalization using Python.",
        "Exploratory Data Analysis (EDA) for DAU/WAU/feature usage/device activity.",
        "Funnel calculation and metrics preparation for dashboard integration.",
        "Five-page Power BI report.",
      ],
      roles: ["EDA & Visualization Specialist", "Dashboard Designer"],
      code: "https://github.com/BagasFTP/trendify-user-analytics",
      demo: "",
    },
  },
  {
    id: "Amazon",
    isFeatured: true,
    title: "Amazon Product Rating & Sales Insights Dashboard",
    description:
      "Data analytics project for understanding pricing, discount patterns, product popularity, and rating quality using Python + Power BI",
    stack: ["Python (pandas, numpy)", "Power BI", "Google Colab"],
    previewImages: ["/amazon/dashboard.jpeg"],
    details: {
      summary:
        "Aplikasi internal untuk menerima, mengelola, dan memonitor tiket permintaan support di laboratorium kampus.",
      goals: [
        "Analyze the relationship between price, discount, rating, and popularity across product categories.",
        "Identify top-performing products based on rating and review volume.",
        "Build a Power BI dashboard to visualize discount–rating correlation, category performance, rating distribution, and product insights.",
        "Provide actionable findings to understand consumer behavior and product attractiveness.",
      ],
      keyFeatures: [
        "Discount vs Rating Analysis: Found no strong correlation — products with 20–80% discount still cluster around 3.8–4.3 rating.",
        "Category Popularity: “In-Ear”, “USBCables”, and “Smartphones” have the highest review counts.",
        "Price Variation: Several categories had significantly higher average prices with minimal discounts.",
        "Price vs Rating Insight: Expensive products do not guarantee higher ratings.",
        "Top Products Identification: High-rating items with large review counts stand out as the most reliable and popular options.",
        "Fully interactive Power BI dashboard with scatter plots, bar charts, and KPI summaries.",
      ],
      techHighlights: [
        "Data cleaning: removing duplicates, handling missing values, converting data types.",
        "Price and discount normalization for consistency across categories.",
        "Exploratory Data Analysis (EDA) for rating distribution, correlation, and category performance.",
      ],
      roles: ["EDA & Correlation Analyst"],
      code: "https://github.com/BagasFTP/amazon-analytics-team-project",
      demo: "",
    },
  },
  {
    id: "Bank-Loan",
    isFeatured: true,
    title: "Bank Loan Risk Analysis Dashboard",
    description:
      "Exploratory data analysis and risk profiling for bank loan applicants using Python and Power BI.",
    stack: ["Python (pandas, matplotlib)", "Power BI", "CSV / Excel"],
    previewImages: ["/bankloan/bankloan.png"],
    details: {
      summary:
        "This project focuses on analyzing loan applicant data to understand default risk patterns based on demographic and financial factors. I worked on cleaning the dataset, creating new financial ratios, and exploring how income, debt, and employment length relate to default behavior.",
      goals: [
        "Analyze borrower profiles to understand which factors contribute most to loan default.",
        "Build meaningful features such as debt-to-income ratio to better represent financial risk.",
        "Provide insights that can support credit scoring and more selective lending decisions.",
      ],
      keyFeatures: [
        "Overall default rate reaches 26% of the 700 valid borrowers.",
        "Low income + high debt-to-income ratio are strong indicators of default.",
        "Borrowers with longer employment duration (≥10 years) have significantly lower default risk.",
        "Visual analysis shows clear clusters of high-risk borrowers: low income, high debt, and short employment history.",
      ],
      techHighlights: [
        "Data cleaning: removing rows with missing default values and fixing numeric types.",
        "EDA on income, employment length, and debt ratios to understand risk distribution.",
        "Built a Power BI dashboard.",
      ],
      roles: ["Data Cleaning & Preparation Specialist"],
      code: "https://github.com/hardygustino/ecommerce-analysis",
      demo: "",
    },
  },
  {
    id: "booksales",
    isFeatured: true,
    title: "BookSales – Full-Stack Web App",
    description:
      "Full-stack bookstore application built with Laravel, MySQL, Blade, and Bootstrap.",
    stack: ["Laravel", "Blade", "Boostrap", "MySQL"],
    previewImages: [
      "/Booksales/booksales-1.png",
      "/Booksales/booksales-2.png",
      "/Booksales/booksales-3.png",
      "/Booksales/booksales-4.png",
    ],
    details: {
      summary:
        "A complete bookstore web app built with Laravel & MySQL, featuring role-based access, CRUD operations, cart & checkout flow, and payment proof upload.",
      goals: [
        "Build a bookstore application following BNSP Junior Web Developer standards.",
        "Implement authentication and role-based access (Admin & User).",
        "Provide complete book, category, user, and order management features.",
        "Enable a full shopping experience: browse, search, add to cart, checkout, upload payment proof.",
      ],
      keyFeatures: [
        "Admin can manage categories, books, users, and order statuses.",
        "User can register, login, browse books, search books, add items to cart, and checkout.",
        "Users have order history with detail view and can upload transfer payment proof.",
        "Clean Laravel structure using migrations, seeders, and Eloquent ORM.",
        "Fully functioning e-commerce flow for testing BNSP competency.",
      ],
      techHighlights: [
        "Laravel 11",
        "Blade templating + Bootstrap UI",
        "Authentication, authorization, and form validation",
        "File upload handling (payment proof)",
        "Responsive UI with Bootstrap components",
      ],
      roles: ["Full-Stack Developer"],
      code: "https://github.com/BagasFTP/BNSP-Booksales",
      demo: "",
    },
  },
  {
    id: "gym-ui",
    isFeatured: false,
    title: "Gym Tracker UI Concept",
    description: "A clean and minimal UI/UX concept for tracking workouts and calories.",
    stack: ["Figma", "UI/UX"],
    previewImages: [
      "/gym-ui/Mockup.jpg",
    ],
    details: {
      summary:
        "This project explores a fitness app interface with a focus on readability, visual clarity, and a modern minimal layout suitable for UI/UX portfolio presentation.",
      goals: [
        "Design a clean and user-friendly layout for workout and calorie tracking.",
        "Optimize information hierarchy to make key data easy to understand.",
        "Optimize information hierarchy to make key data easy to understand.",
      ],
      keyFeatures: [
        "Home screen showcasing daily progress summary.",
        "Detailed workout page with exercise logs.",
        "Card-based components displaying calories, duration, and workout details.",
        "Color system designed to enhance readability, focus, and visual balance.",
      ],
      techHighlights: [
        "Figma sebagai primary design tool.",
        "Atomic/component-based design.",
        "Design system sederhana (typography, spacing, warna).",
      ],
      roles: ["UI/UX Designer"],
      code: "https://www.figma.com/design/B9sVinCFZaTI7THf6kmyFs/Untitled?node-id=0-1&t=LicztEfHDb4DyvaO-1",
      demo: "https://www.figma.com/proto/B9sVinCFZaTI7THf6kmyFs/Untitled?node-id=0-1&t=LicztEfHDb4DyvaO-1",
    },
  },
];
