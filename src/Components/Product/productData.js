export const productsData = [
  {
    id: 'hireassess',
    name: 'HireAssess',
    category: 'Assessment Platform',
    headline: 'Hiring decisions,',
    headlineHighlight: 'backed by data.',
    description:
      'HireAssess helps teams build, assign, and score candidate assessments so every hire is measured on the same objective bar, every time. Deliver unbiased, consistent, and data-driven evaluation.',
    url: 'https://hireassess.brainhuntventures.com/',
    tags: ['Assessment Platform', 'Trait-level Scoring', 'AI-Powered Reports'],
    overview:
      'HireAssess is a candidate assessment platform where hiring teams can create role-specific assessments, invite candidates, evaluate responses and generate structured reports with trait-level scoring. It enables companies to evaluate, compare, and hire the right talent through scientifically designed tests.',
    customer:
      'Used by growing companies, recruitment agencies, and enterprises across multiple industries to assess candidates for technical, behavioral, and cognitive competencies, ensuring a fair and consistent hiring process.',
    customerBadges: ['IT & Technology', 'Startups', 'Enterprises', 'Recruitment Agencies'],
    challenges: [
      'Manual and inconsistent evaluation of candidates.',
      'Time-consuming shortlisting process.',
      'Lack of standardized assessment process.',
      'Limited visibility into candidate strengths and development areas.',
      'Difficulty in evaluating both technical and behavioral skills.',
      'Need for a scalable solution for multiple roles and industries.',
      'Subjective hiring decisions without comparative benchmarks.',
      'Difficulty tailoring assessments for entry, mid, and executive levels.'
    ],
    solution:
      'We developed HireAssess, a comprehensive assessment platform with a wide range of question types, automated evaluation, and detailed analytics. The platform enables hiring teams to create role-specific assessments, track candidate performance in real-time, and generate in-depth reports with strengths, development areas, interview-ready questions, and training recommendations.',
    workflow: [
      'Build Assessment',
      'Invite Candidates',
      'Candidate Completes Assessment',
      'Review Scored Results',
      'Generate Full Report'
    ],
    features: [
      {
        title: 'Custom Assessment Builder',
        desc: 'Create tests tailored to specific roles and skill sets.'
      },
      {
        title: '8+ Question Types',
        desc: 'Support for technical, behavioral, cognitive, and more.'
      },
      {
        title: 'Automated Scoring',
        desc: 'AI-powered evaluation with trait-level analysis.'
      },
      {
        title: 'Role-based Access',
        desc: 'Secure access for HR, recruiters, and hiring managers.'
      },
      {
        title: 'Detailed Reports',
        desc: 'Strengths, development areas, interview questions, and training plans.'
      },
      {
        title: 'Multiple Role Levels',
        desc: 'Assessments for entry, mid, and top-level positions.'
      },
      {
        title: 'Candidate Management',
        desc: 'Track, filter, and manage candidates in one place.'
      },
      {
        title: 'Print & Share Reports',
        desc: 'Generate and share professional, print-ready reports.'
      }
    ],
    sampleTypesTitle: 'Sample Assessment Types',
    sampleTypesDesc:
      'HireAssess provides 8 scientifically backed assessment formats to evaluate candidates across technical, behavioral, and cognitive dimensions.',
    sampleTypes: [
      { title: 'Likert Scale', desc: 'Measure attitudes and behavioral traits with scaled questions.', color: 'bg-blue-100 text-blue-700' },
      { title: 'Numerical / Analytical', desc: 'Evaluate quantitative and data interpretation skills.', color: 'bg-amber-100 text-amber-700' },
      { title: 'Situational Judgement', desc: 'Evaluate decision-making in real-world workplace scenarios.', color: 'bg-emerald-100 text-emerald-700' },
      { title: 'Verbal Reasoning', desc: 'Test language and critical reading comprehension abilities.', color: 'bg-green-100 text-green-700' },
      { title: 'Forced Choice', desc: 'Assess behavioral preferences with paired forced-choice statements.', color: 'bg-orange-100 text-orange-700' },
      { title: 'Personality / Behavioral', desc: 'Understand work style, teamwork, and personality traits.', color: 'bg-rose-100 text-rose-700' },
      { title: 'Logical Reasoning', desc: 'Test analytical and abstract problem-solving skills.', color: 'bg-red-100 text-red-700' },
      { title: 'Cognitive Ability', desc: 'Measure general mental ability, learning potential, and speed.', color: 'bg-purple-100 text-purple-700' }
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Azure', 'Python', 'PostgreSQL', 'Docker', 'Redis'],
    integrations: ['LMS', 'HRMS', 'ATS', 'SSO', 'Email', 'Webhooks', 'API', 'CSV'],
    resultDesc:
      'HireAssess has helped organizations make faster, fairer, and more accurate hiring decisions. The platform has improved candidate experience, reduced manual effort, and enabled data-driven talent evaluation across multiple roles and industries.',
    metrics: [
      { value: '98%', label: 'Assessment Completion Rate', color: 'bg-emerald-100 text-emerald-600' },
      { value: '< 48 hrs', label: 'Average Time to Shortlist', color: 'bg-blue-100 text-blue-600' },
      { value: '30%', label: 'Fewer Mis-hires Reported', color: 'bg-orange-100 text-orange-600' },
      { value: '4.6 / 5', label: 'Candidate Experience Rating', color: 'bg-purple-100 text-purple-600' }
    ],
    footnotes: ['35 questions per assessment', '3 role seniority levels', '5 min average time to solve']
  },
  {
    id: 'hireverify',
    name: 'HireVerify',
    category: 'Background Verification Platform',
    headline: 'Background verification',
    headlineHighlight: 'for confident hiring.',
    description:
      'HireVerify helps employers and screening teams manage candidate background verification, PAN, UAN, court and other checks in one secure BGV platform. Centralize verification cases with audit trails.',
    url: 'https://hireverify.brainhuntventures.com/',
    tags: [
      'Multi-tenant',
      'Company & Client Scoped',
      'Role-based Access',
      'Client-ready Reports',
      'Full Audit Trail'
    ],
    overview:
      'HireVerify is a secure, multi-tenant platform for managing candidate background verification. It centralizes candidates, cases, verification checks, reviews, and client-ready reports in one dashboard. With support for integrated verification providers and manual review pipelines, teams can streamline hiring screening at scale.',
    customer:
      'Primary customers include recruitment agencies, staffing companies, enterprise HR teams, and specialized background verification agencies needing secure, scalable compliance screening.',
    customerBadges: [
      'Recruitment Agencies',
      'Staffing Companies',
      'HR Teams',
      'Enterprises',
      'BGV Agencies'
    ],
    challenges: [
      'Multiple verification types in one platform without multiple vendor logins.',
      'Centralized case management for high volume screening pipelines.',
      'Real-time case tracking with live progress updates.',
      'Accurate verification results with integrated government and legal data sources.',
      'Secure candidate data isolation adhering to privacy regulations.',
      'Role-based access ensuring sensitive records remain restricted.',
      'Complete auditability with immutable activity logs.',
      'Client-ready reporting generated instantly with branded PDF exports.'
    ],
    solution:
      'A centralized BGV workflow: Create Candidate → Select Verification Checks → Run Verification → Review & Share Results. Verification can be processed through integrated providers or manual review with complete role-based access and tenant isolation.',
    workflow: [
      'Create Candidate',
      'Select Verification Checks',
      'Run Verification',
      'Review & Share Results'
    ],
    features: [
      {
        title: '22+ Verification Services',
        desc: 'PAN, UAN, Court, Aadhaar, Passport, Police, and 16+ more.'
      },
      {
        title: 'Multi-Tenant Architecture',
        desc: 'Company-level tenant isolation with client scoped sub-accounts.'
      },
      {
        title: 'Real-time Case Tracking',
        desc: 'Live SLA monitoring and status tracking at every check step.'
      },
      {
        title: 'Role-Based Access Control',
        desc: 'Controlled document access and strict permissions hierarchy.'
      },
      {
        title: 'Client-Ready Reports',
        desc: 'Automated executive summary reports ready for sharing.'
      },
      {
        title: 'Full Audit Trail',
        desc: 'Comprehensive logs of every action, status change, and download.'
      },
      {
        title: 'Integrated Providers & Manual',
        desc: 'Automated API checks with human-in-the-loop manual review.'
      },
      {
        title: 'Token-Based Auth',
        desc: 'Bank-grade security with encrypted candidate document stores.'
      }
    ],
    sampleTypesTitle: '22+ Verification Services',
    sampleTypesDesc:
      'Comprehensive verification checks spanning identity, employment, criminal records, judicial history, and compliance.',
    sampleTypes: [
      { title: 'PAN Verification', desc: 'Real-time tax ID and holder verification via NSDL/ITD.', color: 'bg-blue-100 text-blue-700' },
      { title: 'UAN / EPFO History', desc: 'EPFO employment history and tenure validation.', color: 'bg-amber-100 text-amber-700' },
      { title: 'Court Record Check', desc: 'Pan-India litigation and civil/criminal record search.', color: 'bg-emerald-100 text-emerald-700' },
      { title: 'Identity & Aadhaar', desc: 'Instant OTP/biometric candidate identity authentication.', color: 'bg-green-100 text-green-700' },
      { title: 'Employment Records', desc: 'Past salary, role, tenure, and exit clearance audit.', color: 'bg-orange-100 text-orange-700' },
      { title: 'Education Registry', desc: 'Degree, university authenticity, and registry validation.', color: 'bg-rose-100 text-rose-700' },
      { title: 'Criminal / Police Check', desc: 'Comprehensive state police record and FIR search.', color: 'bg-red-100 text-red-700' },
      { title: 'Global Database / DNH', desc: 'International sanctions, PEP, and regulatory watchlists.', color: 'bg-purple-100 text-purple-700' }
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Python', 'PostgreSQL', 'Docker', 'Redis'],
    integrations: ['LMS', 'HRMS', 'ATS', 'SSO', 'Email', 'Webhooks', 'API', 'CSV'],
    resultDesc:
      'HireVerify accelerates the screening turnaround from weeks to hours while ensuring strict regulatory and document compliance across high-volume hiring operations.',
    metrics: [
      { value: '22+', label: 'Verification Checks', color: 'bg-emerald-100 text-emerald-600' },
      { value: '9', label: 'Industries Served', color: 'bg-blue-100 text-blue-600' },
      { value: '100%', label: 'Audit Trail & Isolation', color: 'bg-orange-100 text-orange-600' },
      { value: 'Instant', label: 'Client-Ready Reports', color: 'bg-purple-100 text-purple-600' }
    ],
    footnotes: ['PAN Check: 98% accuracy', 'UAN Check: 91% accuracy', 'Court Check: 87% accuracy']
  }
]
