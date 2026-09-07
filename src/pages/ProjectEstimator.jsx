import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronRight,
  Cloud,
  Code2,
  Database,
  Globe,
  Lock,
  LogIn,
  Menu,
  Rocket,
  Server,
  Shield,
  Smartphone,
  Users,
  X,
  Zap,
} from "lucide-react";

const ProjectEstimator = () => {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const questions = [
    {
      id: "projectType",
      title: "What type of project do you need?",
      subtitle: "Choose the solution that best matches your project.",
      options: [
        {
          value: "website",
          label: "Website",
          description: "Business, corporate or marketing website",
          icon: Globe,
        },
        {
          value: "webapp",
          label: "Web Application",
          description: "Custom platform or SaaS application",
          icon: Code2,
        },
        {
          value: "mobile",
          label: "Mobile Application",
          description: "Android, iOS or cross-platform app",
          icon: Smartphone,
        },
        {
          value: "cloud",
          label: "Cloud Solution",
          description: "Cloud infrastructure and deployment",
          icon: Cloud,
        },
        {
          value: "cybersecurity",
          label: "Cybersecurity",
          description: "Security assessment and protection",
          icon: Shield,
        },
        {
          value: "custom",
          label: "Custom Software",
          description: "Tailored software for your business",
          icon: Server,
        },
      ],
    },

    {
      id: "complexity",
      title: "How complex is your project?",
      subtitle: "This helps us understand the development effort.",
      options: [
        {
          value: "basic",
          label: "Basic",
          description: "Simple features and functionality",
          icon: Zap,
        },
        {
          value: "medium",
          label: "Medium",
          description: "Multiple features and integrations",
          icon: Code2,
        },
        {
          value: "advanced",
          label: "Advanced",
          description: "Complex workflows and functionality",
          icon: Rocket,
        },
        {
          value: "enterprise",
          label: "Enterprise",
          description: "Large-scale business solution",
          icon: Server,
        },
      ],
    },

    {
      id: "screens",
      title: "How many pages or screens do you need?",
      subtitle: "Give us an approximate idea of your project size.",
      options: [
        {
          value: "1-5",
          label: "1–5",
          description: "Small project",
          icon: Globe,
        },
        {
          value: "6-15",
          label: "6–15",
          description: "Medium project",
          icon: Code2,
        },
        {
          value: "16-30",
          label: "16–30",
          description: "Large project",
          icon: Database,
        },
        {
          value: "30+",
          label: "30+",
          description: "Very large project",
          icon: Server,
        },
      ],
    },

    {
      id: "authentication",
      title: "Do you need user authentication?",
      subtitle: "Select the type of login or account system you require.",
      options: [
        {
          value: "none",
          label: "No",
          description: "No user accounts required",
          icon: X,
        },
        {
          value: "basic",
          label: "Basic Login / Signup",
          description: "Email and password authentication",
          icon: LogIn,
        },
        {
          value: "otp",
          label: "OTP / Social Login",
          description: "OTP, Google, Facebook or similar login",
          icon: Smartphone,
        },
        {
          value: "advanced",
          label: "Advanced / Role-Based Access",
          description: "Different permissions and user roles",
          icon: Lock,
        },
      ],
    },

    {
      id: "admin",
      title: "Do you need an Admin Dashboard?",
      subtitle: "Manage users, content, reports and business operations.",
      options: [
        {
          value: "none",
          label: "No",
          description: "No admin panel",
          icon: X,
        },
        {
          value: "basic",
          label: "Basic Dashboard",
          description: "Basic management features",
          icon: Database,
        },
        {
          value: "advanced",
          label: "Advanced Dashboard",
          description: "Reports, analytics and management",
          icon: Code2,
        },
        {
          value: "multiple",
          label: "Multiple Admin Roles",
          description: "Different admin permissions",
          icon: Users,
        },
      ],
    },

    {
      id: "integrations",
      title: "What integrations do you need?",
      subtitle: "Examples include payment gateways, APIs, CRM and third-party services.",
      options: [
        {
          value: "none",
          label: "No Integrations",
          description: "Standalone application",
          icon: X,
        },
        {
          value: "1-2",
          label: "1–2",
          description: "A few external services",
          icon: Zap,
        },
        {
          value: "3-5",
          label: "3–5",
          description: "Several external services",
          icon: Code2,
        },
        {
          value: "5+",
          label: "5+",
          description: "Multiple APIs and services",
          icon: Server,
        },
      ],
    },

    {
      id: "cloud",
      title: "What cloud infrastructure do you need?",
      subtitle: "Choose the infrastructure level required for your project.",
      options: [
        {
          value: "none",
          label: "No Cloud Setup",
          description: "Basic hosting is enough",
          icon: Globe,
        },
        {
          value: "hosting",
          label: "Cloud Hosting & Deployment",
          description: "Cloud hosting and deployment setup",
          icon: Cloud,
        },
        {
          value: "database",
          label: "Cloud Database & Storage",
          description: "Database, storage and cloud services",
          icon: Database,
        },
        {
          value: "scalable",
          label: "Scalable Cloud Infrastructure",
          description: "High availability and scalable architecture",
          icon: Server,
        },
      ],
    },

    {
      id: "security",
      title: "What level of cybersecurity do you require?",
      subtitle: "Choose the security service appropriate for your project.",
      options: [
        {
          value: "basic",
          label: "Basic Security",
          description: "Standard application security",
          icon: Lock,
        },
        {
          value: "audit",
          label: "Security Audit",
          description: "Review security configuration and practices",
          icon: Shield,
        },
        {
          value: "vulnerability",
          label: "Vulnerability Assessment",
          description: "Identify potential vulnerabilities",
          icon: Shield,
        },
        {
          value: "advanced",
          label: "Penetration Testing / Advanced Security",
          description: "Detailed security testing",
          icon: Shield,
        },
      ],
    },

    {
      id: "users",
      title: "How many users do you expect?",
      subtitle: "Select your expected monthly user volume.",
      options: [
        {
          value: "100-500",
          label: "100–500 users/month",
          description: "Starting user base",
          icon: Users,
        },
        {
          value: "500-1000",
          label: "500–1,000 users/month",
          description: "Growing user base",
          icon: Users,
        },
        {
          value: "1000-10000",
          label: "1,000–10,000 users/month",
          description: "Medium-scale platform",
          icon: Users,
        },
        {
          value: "10000-100000",
          label: "10,000–100,000 users/month",
          description: "High-scale platform",
          icon: Users,
        },
        {
          value: "100000-1000000",
          label: "100,000–1 Million users/month",
          description: "Large-scale platform",
          icon: Users,
        },
        {
          value: "1000000+",
          label: "1 Million+ users/month",
          description: "Enterprise-scale platform",
          icon: Server,
        },
        {
          value: "not-sure",
          label: "Not Sure",
          description: "We can help estimate this",
          icon: Users,
        },
      ],
    },

    {
      id: "budget",
      title: "What is your expected budget?",
      subtitle: "This helps our team understand your expectations. It does not affect the estimate.",
      options: [
        {
          value: "under-50k",
          label: "Under ₹50K",
          description: "Starting budget",
          icon: Database,
        },
        {
          value: "50k-1l",
          label: "₹50K–₹1L",
          description: "Small project budget",
          icon: Database,
        },
        {
          value: "1l-3l",
          label: "₹1L–₹3L",
          description: "Medium project budget",
          icon: Database,
        },
        {
          value: "3l-5l",
          label: "₹3L–₹5L",
          description: "Large project budget",
          icon: Database,
        },
        {
          value: "5l+",
          label: "₹5L+",
          description: "Advanced project budget",
          icon: Server,
        },
        {
          value: "not-sure",
          label: "Not Sure",
          description: "Let's discuss your requirements",
          icon: Zap,
        },
      ],
    },
  ];

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  const calculateEstimate = useMemo(() => {
    let price = 0;

    const projectType = answers.projectType;
    const complexity = answers.complexity;
    const screens = answers.screens;
    const authentication = answers.authentication;
    const admin = answers.admin;
    const integrations = answers.integrations;
    const cloud = answers.cloud;
    const security = answers.security;
    const users = answers.users;

    // Base project price
    switch (projectType) {
      case "website":
        price = 50000;
        break;

      case "webapp":
        price = 150000;
        break;

      case "mobile":
        price = 200000;
        break;

      case "cloud":
        price = 50000;
        break;

      case "cybersecurity":
        price = 75000;
        break;

      case "custom":
        price = 250000;
        break;

      default:
        price = 0;
    }

    // Complexity
    switch (complexity) {
      case "medium":
        price += 30000;
        break;

      case "advanced":
        price += 75000;
        break;

      case "enterprise":
        price += 150000;
        break;

      default:
        break;
    }

    // Screens
    switch (screens) {
      case "6-15":
        price += 20000;
        break;

      case "16-30":
        price += 40000;
        break;

      case "30+":
        price += 70000;
        break;

      default:
        break;
    }

    // Authentication
    switch (authentication) {
      case "basic":
        price += 15000;
        break;

      case "otp":
        price += 25000;
        break;

      case "advanced":
        price += 40000;
        break;

      default:
        break;
    }

    // Admin Dashboard
    switch (admin) {
      case "basic":
        price += 20000;
        break;

      case "advanced":
        price += 35000;
        break;

      case "multiple":
        price += 50000;
        break;

      default:
        break;
    }

    // Integrations
    switch (integrations) {
      case "1-2":
        price += 15000;
        break;

      case "3-5":
        price += 30000;
        break;

      case "5+":
        price += 50000;
        break;

      default:
        break;
    }

    // Cloud
    switch (cloud) {
      case "hosting":
        price += 20000;
        break;

      case "database":
        price += 35000;
        break;

      case "scalable":
        price += 60000;
        break;

      default:
        break;
    }

    // Security
    switch (security) {
      case "audit":
        price += 25000;
        break;

      case "vulnerability":
        price += 50000;
        break;

      case "advanced":
        price += 75000;
        break;

      default:
        break;
    }

    // Expected users
    switch (users) {
      case "500-1000":
        price += 10000;
        break;

      case "1000-10000":
        price += 20000;
        break;

      case "10000-100000":
        price += 40000;
        break;

      case "100000-1000000":
        price += 75000;
        break;

      case "1000000+":
        price += 125000;
        break;

      default:
        break;
    }

    // Round to nearest ₹5,000
    price = Math.round(price / 5000) * 5000;

    return price;
  }, [answers]);

  const getTimeline = (price) => {
    if (price <= 100000) {
      return "3–6 weeks";
    }

    if (price <= 250000) {
      return "6–10 weeks";
    }

    if (price <= 500000) {
      return "10–16 weeks";
    }

    return "16+ weeks";
  };

  const current = questions[currentQuestion];
  const selectedAnswer = answers[current?.id];

  const handleAnswer = (value) => {
    setAnswers((prev) => ({
      ...prev,
      [current.id]: value,
    }));
  };

  const nextQuestion = () => {
    if (!selectedAnswer) {
      return;
    }

    if (currentQuestion === questions.length - 1) {
      setShowResult(true);
      return;
    }

    setCurrentQuestion((prev) => prev + 1);
  };

  const previousQuestion = () => {
    if (currentQuestion === 0) {
      return;
    }

    setCurrentQuestion((prev) => prev - 1);
  };

  const restartEstimator = () => {
    setStarted(false);
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
  };

  const getAnswerLabel = (questionId, value) => {
    const question = questions.find((item) => item.id === questionId);

    if (!question) {
      return value;
    }

    const option = question.options.find((item) => item.value === value);

    return option ? option.label : value;
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  // ---------------------------------------------------------
  // START SCREEN
  // ---------------------------------------------------------

  if (!started) {
    return (
      <div className="min-h-screen bg-slate-50 text-slate-900">
        {/* Background */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-100 blur-3xl opacity-60" />
          <div className="absolute top-1/3 -right-40 h-96 w-96 rounded-full bg-green-100 blur-3xl opacity-50" />
        </div>

        {/* Header */}
        <header className="relative z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
            <Link to="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-lg font-black text-white">
                TC
              </div>

              <div>
                <p className="text-lg font-black tracking-tight text-slate-950">
                  TechCombo
                </p>

                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Technology Solutions
                </p>
              </div>
            </Link>

            <div className="hidden items-center gap-3 sm:flex">
              <Link
                to="/"
                className="rounded-full px-5 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
              >
                Home
              </Link>

              <Link
                to="/contact"
                className="rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-600"
              >
                Contact Us
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setMobileMenu(!mobileMenu)}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 sm:hidden"
            >
              {mobileMenu ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {mobileMenu && (
            <div className="border-t border-slate-200 bg-white px-5 py-4 sm:hidden">
              <div className="flex flex-col gap-2">
                <Link
                  to="/"
                  className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100"
                >
                  Home
                </Link>

                <Link
                  to="/contact"
                  className="rounded-xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          )}
        </header>

        {/* Hero */}
        <main className="relative z-10">
          <section className="mx-auto max-w-7xl px-5 pb-16 pt-14 lg:px-8 lg:pb-24 lg:pt-20">
            <div className="grid items-center gap-14 lg:grid-cols-2">
              {/* Left */}
              <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-blue-700">
                  <Zap size={14} />
                  Project Cost Estimator
                </div>

                <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                  Estimate your
                  <span className="block text-blue-600">
                    project investment
                  </span>
                </h1>

                <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                  Answer a few simple questions about your project and get an
                  instant estimated investment based on your requirements.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => setStarted(true)}
                    className="group inline-flex items-center justify-center gap-3 rounded-full bg-slate-950 px-7 py-4 text-sm font-bold text-white shadow-xl shadow-slate-950/10 transition hover:-translate-y-0.5 hover:bg-green-600"
                  >
                    Start Estimation
                    <ArrowRight
                      size={18}
                      className="transition group-hover:translate-x-1"
                    />
                  </button>

                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-4 text-sm font-bold text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
                  >
                    Talk to us
                  </Link>
                </div>

                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500">
                  <div className="flex items-center gap-2">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600">
                      <Check size={13} />
                    </div>
                    Free estimation
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600">
                      <Check size={13} />
                    </div>
                    No commitment
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600">
                      <Check size={13} />
                    </div>
                    Takes 2–3 minutes
                  </div>
                </div>
              </div>

              {/* Right card */}
              <div className="relative">
                <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-900/10 sm:p-6">
                  <div className="rounded-[1.5rem] bg-slate-950 p-6 text-white sm:p-8">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                          Your Estimate
                        </p>

                        <p className="mt-3 text-4xl font-black">
                          ₹1,50,000+
                        </p>
                      </div>

                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                        <Rocket size={23} />
                      </div>
                    </div>

                    <div className="mt-8 space-y-3">
                      <div className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3">
                        <span className="text-sm text-slate-400">
                          Development
                        </span>
                        <span className="text-sm font-bold">Included</span>
                      </div>

                      <div className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3">
                        <span className="text-sm text-slate-400">
                          Infrastructure
                        </span>
                        <span className="text-sm font-bold">Optional</span>
                      </div>

                      <div className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3">
                        <span className="text-sm text-slate-400">
                          Security
                        </span>
                        <span className="text-sm font-bold">Configurable</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 p-2 pt-5 sm:p-3 sm:pt-6">
                    <div className="rounded-2xl bg-slate-50 p-4">
                      <p className="text-2xl font-black text-slate-950">10</p>
                      <p className="mt-1 text-xs font-semibold text-slate-500">
                        Questions
                      </p>
                    </div>

                    <div className="rounded-2xl bg-slate-50 p-4">
                      <p className="text-2xl font-black text-slate-950">₹</p>
                      <p className="mt-1 text-xs font-semibold text-slate-500">
                        Instant
                      </p>
                    </div>

                    <div className="rounded-2xl bg-slate-50 p-4">
                      <p className="text-2xl font-black text-slate-950">100%</p>
                      <p className="mt-1 text-xs font-semibold text-slate-500">
                        Free
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Bottom information */}
          <section className="border-t border-slate-200 bg-white">
            <div className="mx-auto grid max-w-7xl gap-6 px-5 py-12 sm:grid-cols-3 lg:px-8">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Zap size={20} />
                </div>

                <div>
                  <h3 className="font-bold text-slate-950">
                    Instant estimate
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    See an estimated investment immediately after answering
                    the questions.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-600">
                  <Shield size={20} />
                </div>

                <div>
                  <h3 className="font-bold text-slate-950">
                    Requirement based
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    The estimate changes according to features, complexity,
                    scale and infrastructure.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                  <Users size={20} />
                </div>

                <div>
                  <h3 className="font-bold text-slate-950">
                    Expert discussion
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Discuss the final requirements with our team before
                    development begins.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }

  // ---------------------------------------------------------
  // RESULT SCREEN
  // ---------------------------------------------------------

  if (showResult) {
    return (
      <div className="min-h-screen bg-slate-50 text-slate-900">
        {/* Header */}
        <header className="border-b border-slate-200 bg-white">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
            <Link to="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-lg font-black text-white">
                TC
              </div>

              <div>
                <p className="text-lg font-black tracking-tight text-slate-950">
                  TechCombo
                </p>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Project Estimator
                </p>
              </div>
            </Link>

            <Link
              to="/contact"
              className="hidden rounded-full bg-slate-950 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-green-600 sm:inline-flex"
            >
              Contact Us
            </Link>
          </div>
        </header>

        <main className="mx-auto max-w-6xl px-5 py-10 lg:px-8 lg:py-16">
          {/* Result Hero */}
          <section className="overflow-hidden rounded-[2rem] bg-slate-950 text-white shadow-2xl">
            <div className="relative p-7 sm:p-10 lg:p-14">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl" />

              <div className="relative grid gap-10 lg:grid-cols-[1fr_340px] lg:items-center">
                <div>
                  <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-300">
                    <Check size={14} />
                    Estimation Complete
                  </div>

                  <h1 className="max-w-2xl text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
                    Your project estimate is ready.
                  </h1>

                  <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                    Based on the requirements you provided, your estimated
                    project investment is shown below.
                  </p>
                </div>

                <div className="rounded-3xl bg-white p-6 text-slate-950 shadow-xl sm:p-8">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                    Estimated Investment
                  </p>

                  <p className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
                    {formatPrice(calculateEstimate)}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-slate-500">
                    <Rocket size={16} />
                    Estimated timeline: {getTimeline(calculateEstimate)}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Summary */}
          <section className="mt-8 grid gap-8 lg:grid-cols-[1fr_340px]">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                    Requirements
                  </p>

                  <h2 className="mt-2 text-2xl font-black text-slate-950">
                    Your project details
                  </h2>
                </div>
              </div>

              <div className="mt-7 divide-y divide-slate-100">
                {questions.map((question) => (
                  <div
                    key={question.id}
                    className="flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <p className="text-sm font-semibold text-slate-500">
                      {question.title}
                    </p>

                    <p className="text-sm font-bold text-slate-950 sm:text-right">
                      {getAnswerLabel(question.id, answers[question.id])}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Side card */}
            <div className="space-y-5">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-600">
                  What happens next?
                </p>

                <div className="mt-6 space-y-5">
                  <div className="flex gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-950 text-sm font-black text-white">
                      1
                    </div>

                    <div>
                      <p className="font-bold text-slate-950">
                        Requirement discussion
                      </p>

                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        Our team reviews your project requirements.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-950 text-sm font-black text-white">
                      2
                    </div>

                    <div>
                      <p className="font-bold text-slate-950">
                        Detailed proposal
                      </p>

                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        We prepare a detailed scope and commercial proposal.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-950 text-sm font-black text-white">
                      3
                    </div>

                    <div>
                      <p className="font-bold text-slate-950">
                        Development begins
                      </p>

                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        Once everything is finalized, development can begin.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] bg-blue-50 p-6">
                <div className="flex gap-3">
                  <Shield className="mt-0.5 shrink-0 text-blue-600" size={20} />

                  <div>
                    <p className="font-bold text-slate-950">
                      Important information
                    </p>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      This amount is only an estimated investment based on the
                      information provided. The final price may change after
                      detailed requirement analysis, technical discussion and
                      project scope confirmation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                  Ready to discuss?
                </p>

                <h2 className="mt-2 text-2xl font-black text-slate-950 sm:text-3xl">
                  Let's turn your idea into a real product.
                </h2>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                  Share your requirements with our team and get a detailed
                  project discussion.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={restartEstimator}
                  className="rounded-full border border-slate-300 px-6 py-3.5 text-sm font-bold text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
                >
                  Start Again
                </button>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-green-600"
                >
                  Talk to an Expert
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }

  // ---------------------------------------------------------
  // QUESTION SCREEN
  // ---------------------------------------------------------

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto max-w-7xl px-5 py-4 lg:px-8">
          <div className="flex items-center justify-between gap-5">
            <Link to="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-lg font-black text-white">
                TC
              </div>

              <div className="hidden sm:block">
                <p className="text-lg font-black tracking-tight text-slate-950">
                  TechCombo
                </p>

                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Project Estimator
                </p>
              </div>
            </Link>

            <div className="flex-1 px-4 sm:max-w-md">
              <div className="flex items-center justify-between">
                <p className="text-xs font-bold text-slate-500">
                  Question {currentQuestion + 1} of {questions.length}
                </p>

                <p className="text-xs font-bold text-blue-600">
                  {Math.round(progress)}%
                </p>
              </div>

              <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-blue-600 transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <Link
              to="/contact"
              className="hidden rounded-full bg-slate-950 px-5 py-2.5 text-xs font-bold text-white transition hover:bg-green-600 sm:inline-flex"
            >
              Contact
            </Link>
          </div>
        </div>
      </header>

      {/* Question area */}
      <main className="mx-auto max-w-7xl px-5 py-8 lg:px-8 lg:py-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_330px]">
          {/* Main question */}
          <section>
            <div className="mb-8">
              <button
                type="button"
                onClick={previousQuestion}
                disabled={currentQuestion === 0}
                className="mb-6 inline-flex items-center gap-2 text-sm font-bold text-slate-500 transition hover:text-slate-950 disabled:cursor-not-allowed disabled:opacity-30"
              >
                <ArrowLeft size={17} />
                Previous
              </button>

              <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-600">
                Project Estimator
              </p>

              <h1 className="mt-3 max-w-3xl text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl">
                {current.title}
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
                {current.subtitle}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {current.options.map((option) => {
                const Icon = option.icon;
                const isSelected = selectedAnswer === option.value;

                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => handleAnswer(option.value)}
                    className={`group relative flex min-h-[145px] flex-col items-start rounded-3xl border p-5 text-left transition-all duration-200 sm:p-6 ${
                      isSelected
                        ? "border-blue-600 bg-blue-50 shadow-lg shadow-blue-100"
                        : "border-slate-200 bg-white hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-lg"
                    }`}
                  >
                    {/* Selected check */}
                    {isSelected && (
                      <div className="absolute right-4 top-4 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white">
                        <Check size={14} strokeWidth={3} />
                      </div>
                    )}

                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-2xl transition ${
                        isSelected
                          ? "bg-blue-600 text-white"
                          : "bg-slate-100 text-slate-600 group-hover:bg-slate-950 group-hover:text-white"
                      }`}
                    >
                      <Icon size={21} />
                    </div>

                    <p className="mt-5 pr-6 text-base font-black text-slate-950">
                      {option.label}
                    </p>

                    <p className="mt-1 text-sm leading-5 text-slate-500">
                      {option.description}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Bottom navigation */}
            <div className="mt-8 flex flex-col-reverse gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-slate-400">
                Select an option to continue.
              </p>

              <button
                type="button"
                onClick={nextQuestion}
                disabled={!selectedAnswer}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-green-600 disabled:cursor-not-allowed disabled:bg-slate-300"
              >
                {currentQuestion === questions.length - 1
                  ? "View Estimate"
                  : "Continue"}

                <ArrowRight size={17} />
              </button>
            </div>
          </section>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-28 lg:h-fit">
            <div className="rounded-[2rem] bg-slate-950 p-6 text-white shadow-xl sm:p-7">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                    Live Estimate
                  </p>

                  <p className="mt-3 text-3xl font-black">
                    {formatPrice(calculateEstimate || 0)}
                  </p>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
                  <Rocket size={20} />
                </div>
              </div>

              <p className="mt-4 text-sm leading-6 text-slate-400">
                Your estimate updates automatically as you select your
                requirements.
              </p>

              <div className="mt-6 h-px bg-white/10" />

              <div className="mt-5 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-400">
                    Questions answered
                  </span>

                  <span className="text-sm font-bold">
                    {Object.keys(answers).length}/{questions.length}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-400">Timeline</span>

                  <span className="text-sm font-bold">
                    {getTimeline(calculateEstimate || 0)}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-5 rounded-[2rem] border border-slate-200 bg-white p-6">
              <div className="flex gap-3">
                <Shield
                  size={19}
                  className="mt-0.5 shrink-0 text-green-600"
                />

                <div>
                  <p className="text-sm font-black text-slate-950">
                    No commitment
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    This is only an initial estimate. Final pricing is decided
                    after detailed requirement analysis.
                  </p>
                </div>
              </div>
            </div>

            {/* Selected summary */}
            {Object.keys(answers).length > 0 && (
              <div className="mt-5 rounded-[2rem] border border-slate-200 bg-white p-6">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                  Selected
                </p>

                <div className="mt-4 space-y-3">
                  {Object.entries(answers)
                    .slice(0, 4)
                    .map(([key, value]) => (
                      <div key={key} className="flex items-start gap-2">
                        <Check
                          size={14}
                          className="mt-0.5 shrink-0 text-green-600"
                        />

                        <p className="text-xs font-semibold leading-5 text-slate-600">
                          {getAnswerLabel(key, value)}
                        </p>
                      </div>
                    ))}
                </div>

                {Object.keys(answers).length > 4 && (
                  <p className="mt-3 text-xs font-bold text-blue-600">
                    + {Object.keys(answers).length - 4} more selections
                  </p>
                )}
              </div>
            )}
          </aside>
        </div>
      </main>
    </div>
  );
};

export default ProjectEstimator;