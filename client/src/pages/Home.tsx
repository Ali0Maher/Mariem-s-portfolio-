import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Mail, Linkedin, CheckCircle2, ArrowRight, Globe, ImageIcon } from "lucide-react";
import { useState } from "react";

type Language = "en" | "ar";

const content = {
  en: {
    title: "Project Manager",
    subtitle: "Turning Chaos Into Clear, Actionable Plans",
    description: "I transform complex projects into streamlined operations. Specializing in system architecture, process optimization, and cross-functional team leadership.",
    nav: {
      about: "About",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact"
    },
    resume: "Resume",
    viewProjects: "View Projects",
    contactMe: "Contact Me",
    expertise: {
      title: "Core Expertise",
      items: [
        { title: "Strategic Planning", desc: "Translate business goals into actionable roadmaps" },
        { title: "Process Optimization", desc: "Design efficient workflows that scale" },
        { title: "Team Leadership", desc: "Lead cross-functional teams to success" },
        { title: "System Architecture", desc: "Build scalable operational systems" }
      ]
    },
    projects: {
      title: "Case Studies",
      subtitle: "Real-world systems built for efficiency and impact",
      items: [
        { title: "Workspace Organization: Centralized Client & Project Management", role: "Project Manager", challenge: "Multiple clients and projects scattered across different systems, making it difficult to track progress, access client data, and maintain consistency across teams", solution: "Designed and implemented a centralized ClickUp workspace with logical hierarchy of Spaces, Folders, and Lists organized by client. Created a master dashboard providing real-time overview of all active projects, pending tasks, and client information", impact: ["Single source of truth for all client data", "Reduced project lookup time by 70%", "Improved team coordination and visibility"], skills: ["Information Architecture", "Workspace Design", "Client Management", "ClickUp Expert"], screenshots: ["/images/Workspace Organization.png"] },
        { title: "Media Buying Campaign Tracking & Budget Management System", role: "Project Manager", challenge: "Difficulty tracking advertising spend across multiple platforms, unclear budget allocation, and lack of real-time visibility into campaign performance and ROI for different clients", solution: "Built a custom ClickUp system with specialized fields for budget tracking, spend monitoring, and ROI calculation. Implemented automated workflows to flag budget overruns and created visual dashboards for campaign performance analysis by platform", impact: ["Real-time budget visibility", "Eliminated overspending incidents", "Improved campaign ROI tracking by 85%"], skills: ["Budget Tracking", "Performance Analysis", "Workflow Automation", "Data Visualization"], screenshots: ["/images/Media Buying Campaign Tracking 1.png", "/images/Media Buying Campaign Tracking 2.png"] },
        { title: "Live Attendance Management System", role: "Operations Manager", challenge: "Real-time attendance tracking with multiple team members across different locations, unclear status visibility, and manual check-in/out processes causing delays and inaccuracies", solution: "Built a centralized live attendance dashboard in ClickUp with real-time status indicators (Online/Offline), automated check-in/out timestamps, work location tracking, and color-coded status updates for instant visibility across the team", impact: ["Real-time tracking of all team members", "Reduced attendance discrepancies by 95%", "Improved team accountability and response times"], skills: ["System Design", "Real-time Management", "Team Coordination", "Dashboard Development"], screenshots: ["/images/Live Attendance Management System.png"] },
        { title: "Creative & Landing Pages - LP Production Pipeline", role: "Project Manager", challenge: "Landing page production process lacked clear workflow stages, causing confusion about project status, missed handoffs between design and development teams, and inconsistent delivery timelines for different clients", solution: "Designed a comprehensive Kanban-based production pipeline with five distinct stages (Briefing → In Progress → In Design → Feedback → Live/Finished). Implemented automated status notifications, assigned clear ownership for each stage, integrated client name and design links, and added quality checkpoints before moving to next phase", impact: ["Reduced production time by 40%", "Zero missed deadlines across all projects", "Improved team accountability and client satisfaction"], skills: ["Workflow Management", "Process Optimization", "Team Accountability", "Quality Assurance"], screenshots: ["/images/Landing Pages - LP Production Pipeline.png"] },
        { title: "Shooting Bookings Calendar Management System", role: "Operations Manager", challenge: "Shooting bookings were scattered across multiple platforms, causing double bookings, missed appointments, unclear client schedules, and difficulty tracking which photographers were assigned to which shoots", solution: "Created an integrated calendar management system with monthly and weekly views, color-coded event types, automated client notifications for confirmed bookings, photographer assignment tracking, and real-time availability updates to prevent scheduling conflicts", impact: ["Eliminated double bookings completely", "Improved client satisfaction by 90%", "Reduced scheduling errors by 100%"], skills: ["Calendar Management", "Scheduling Systems", "Client Coordination", "Event Management"], screenshots: ["/images/Shooting Bookings Calendar Management System.png"] },
        { title: "Clients Contracts & Calendar Management", role: "Project Manager", challenge: "Client contracts were disorganized across multiple systems with no centralized tracking of contract types, monthly quotas, completion status, and remaining deliverables, making it difficult to ensure contract compliance and timely delivery", solution: "Built a comprehensive client contracts database with contract type tracking, monthly quota management, completion percentage monitoring, and remaining deliverables tracking. Integrated color-coded status indicators and automated reminders for upcoming deadlines", impact: ["100% contract visibility and compliance", "Reduced contract disputes by 85%", "Improved client satisfaction and retention"], skills: ["Contract Management", "Database Design", "Client Relations", "Compliance Tracking"], screenshots: ["/images/Clients Contracts.png"] }
      ]
    },
    skills: {
      title: "Skills & Tools",
      categories: [
        {
          name: "Project Management",
          items: ["Agile/Scrum", "Kanban", "Risk Management", "Stakeholder Management", "Budget Planning"]
        },
        {
          name: "Business Analysis",
          items: ["Requirements Gathering", "Process Mapping", "Workflow Design", "Data Analysis", "Documentation"]
        },
        {
          name: "Tools & Platforms",
          items: ["ClickUp", "Jira", "Excel/Sheets", "Figma", "Miro", "Google Workspace"]
        },
        {
          name: "Technical Skills",
          items: ["System Architecture", "Database Design", "API Integration", "Automation", "SQL Basics"]
        }
      ]
    },
    contact: {
      title: "Let's Work Together",
      subtitle: "Open to opportunities where I can drive operational excellence",
      getInTouch: "Get in Touch",
      linkedin: "LinkedIn Profile",
      phone: "+20 111 003 6280",
      email: "mariemgaber8812@gmail.com"
    },
    footer: "Designed with precision and elegance"
  },
  ar: {
    title: "مدير مشاريع",
    subtitle: "تحويل الفوضى إلى خطط واضحة وقابلة للتنفيذ",
    description: "أحول المشاريع المعقدة إلى عمليات منظمة. متخصصة في هندسة الأنظمة وتحسين العمليات وقيادة الفريق.",
    nav: {
      about: "عني",
      projects: "المشاريع",
      skills: "المهارات",
      contact: "تواصل"
    },
    resume: "السيرة الذاتية",
    viewProjects: "عرض المشاريع",
    contactMe: "تواصل معي",
    expertise: {
      title: "الخبرات الأساسية",
      items: [
        { title: "التخطيط الاستراتيجي", desc: "تحويل أهداف العمل إلى خطط قابلة للتنفيذ" },
        { title: "تحسين العمليات", desc: "تصميم سير عمل فعال وقابل للتوسع" },
        { title: "قيادة الفريق", desc: "قيادة فرق متعددة التخصصات" },
        { title: "هندسة الأنظمة", desc: "بناء أنظمة تشغيلية قابلة للتوسع" }
      ]
    },
    projects: {
      title: "دراسات الحالة",
      subtitle: "أنظمة حقيقية مبنية للكفاءة والتأثير",
      items: [
        { title: "تنظيم مساحة العمل: إدارة العملاء والمشاريع المركزية", role: "مدير مشاريع", challenge: "تناثر العديد من العملاء والمشاريع عبر أنظمة مختلفة، مما يجعل من الصعب تتبع التقدم والوصول إلى بيانات العملاء والحفاظ على الاتساق عبر الفرق", solution: "تصميم وتنفيذ مساحة عمل ClickUp مركزية مع تسلسل هرمي منطقي للمساحات والمجلدات والقوائم منظمة حسب العميل. إنشاء لوحة معلومات رئيسية توفر نظرة عامة في الوقت الفعلي لجميع المشاريع النشطة والمهام المعلقة ومعلومات العملاء", impact: ["مصدر واحد للحقيقة لجميع بيانات العملاء", "تقليل وقت البحث عن المشروع بنسبة 70%", "تحسين التنسيق والرؤية بين الفرق"], skills: ["هندسة المعلومات", "تصميم مساحة العمل", "إدارة العملاء", "خبير ClickUp"], screenshots: ["/images/Workspace Organization.png"] },
        { title: "نظام تتبع حملات شراء الوسائط وإدارة الميزانية", role: "مدير مشاريع", challenge: "صعوبة تتبع الإنفاق الإعلاني عبر منصات متعددة، وعدم وضوح تخصيص الميزانية، ونقص الرؤية في الوقت الفعلي لأداء الحملة والعائد على الاستثمار لمختلف العملاء", solution: "بناء نظام ClickUp مخصص مع حقول متخصصة لتتبع الميزانية ومراقبة الإنفاق وحساب العائد على الاستثمار. تنفيذ سير عمل آلي للإشارة إلى تجاوزات الميزانية وإنشاء لوحات معلومات مرئية لتحليل أداء الحملة حسب المنصة", impact: ["رؤية الميزانية في الوقت الفعلي", "القضاء على حوادث الإنفاق الزائد", "تحسين تتبع العائد على الاستثمار للحملة بنسبة 85%"], skills: ["تتبع الميزانية", "تحليل الأداء", "أتمتة سير العمل", "تصور البيانات"], screenshots: ["/images/Media Buying Campaign Tracking 1.png", "/images/Media Buying Campaign Tracking 2.png"] },
        { title: "نظام إدارة الحضور المباشر", role: "مدير عمليات", challenge: "تتبع الحضور في الوقت الفعلي مع العديد من أعضاء الفريق عبر مواقع مختلفة، وعدم وضوح رؤية الحالة، وعمليات تسجيل الدخول/الخروج اليدوية التي تسبب تأخيرات وعدم دقة", solution: "بناء لوحة معلومات حضور مباشرة مركزية في ClickUp مع مؤشرات حالة في الوقت الفعلي (متصل/غير متصل)، وطوابع زمنية آلية لتسجيل الدخول/الخروج، وتتبع موقع العمل، وتحديثات الحالة بالألوان للرؤية الفورية عبر الفريق", impact: ["تتبع في الوقت الفعلي لجميع أعضاء الفريق", "تقليل التناقضات في الحضور بنسبة 95%", "تحسين مساءلة الفريق وأوقات الاستجابة"], skills: ["تصميم الأنظمة", "الإدارة في الوقت الفعلي", "تنسيق الفريق", "تطوير لوحة المعلومات"], screenshots: ["/images/Live Attendance Management System.png"] },
        { title: "الإبداع والصفحات المقصودة - خط إنتاج الصفحات المقصودة", role: "مدير مشاريع", challenge: "افتقر عملية إنتاج الصفحات المقصودة إلى مراحل سير عمل واضحة، مما تسبب في الارتباك حول حالة المشروع، وفقدان التسليمات بين فرق التصميم والتطوير، وجداول زمنية غير متسقة للتسليم لمختلف العملاء", solution: "تصميم خط إنتاج شامل يعتمد على كانبان مع خمس مراحل متميزة (الإحاطة ← قيد التنفيذ ← في التصميم ← الملاحظات ← مباشر/منتهي). تنفيذ إشعارات الحالة التلقائية، وتعيين ملكية واضحة لكل مرحلة، ودمج اسم العميل وروابط التصميم، وإضافة نقاط تفتيش الجودة قبل الانتقال إلى المرحلة التالية", impact: ["تقليل وقت الإنتاج بنسبة 40%", "صفر مواعيد نهائية فائتة عبر جميع المشاريع", "تحسين مساءلة الفريق ورضا العملاء"], skills: ["إدارة سير العمل", "تحسين العمليات", "مساءلة الفريق", "ضمان الجودة"], screenshots: ["/images/Landing Pages - LP Production Pipeline.png"] },
        { title: "نظام إدارة تقويم حجوزات التصوير", role: "مدير عمليات", challenge: "كانت حجوزات التصوير متناثرة عبر منصات متعددة، مما تسبب في حجوزات مزدوجة، ومواعيد فائتة، وجداول عملاء غير واضحة، وصعوبة في تتبع المصورين المعينين لأي جلسة تصوير", solution: "إنشاء نظام إدارة تقويم متكامل مع عروض شهرية وأسبوعية، وأنواع الأحداث بالألوان، وإشعارات العملاء الآلية للحجوزات المؤكدة، وتتبع تعيين المصورين، وتحديثات التوفر في الوقت الفعلي لمنع تعارضات الجدولة", impact: ["القضاء تماماً على الحجوزات المزدوجة", "تحسين رضا العملاء بنسبة 90%", "تقليل أخطاء الجدولة بنسبة 100%"], skills: ["إدارة التقويم", "أنظمة الجدولة", "تنسيق العملاء", "إدارة الأحداث"], screenshots: ["/images/Shooting Bookings Calendar Management System.png"] },
        { title: "إدارة عقود العملاء والتقويم", role: "مدير مشاريع", challenge: "كانت عقود العملاء غير منظمة عبر أنظمة متعددة دون تتبع مركزي لأنواع العقود والحصص الشهرية وحالة الإنجاز والتسليمات المتبقية، مما يجعل من الصعب ضمان الامتثال للعقد والتسليم في الوقت المناسب", solution: "بناء قاعدة بيانات شاملة لعقود العملاء مع تتبع نوع العقد وإدارة الحصة الشهرية ومراقبة نسبة الإنجاز وتتبع التسليمات المتبقية. دمج مؤشرات الحالة بالألوان والتذكيرات التلقائية للمواعيد النهائية القادمة", impact: ["رؤية العقد والامتثال بنسبة 100%", "تقليل نزاعات العقود بنسبة 85%", "تحسين رضا العملاء والاحتفاظ بهم"], skills: ["إدارة العقود", "تصميم قاعدة البيانات", "علاقات العملاء", "تتبع الامتثال"], screenshots: ["/images/Clients Contracts.png"] }
      ]
    },
    skills: {
      title: "المهارات والأدوات",
      categories: [
        {
          name: "إدارة المشاريع",
          items: ["Agile/Scrum", "Kanban", "إدارة المخاطر", "إدارة أصحاب المصلحة", "التخطيط المالي"]
        },
        {
          name: "تحليل الأعمال",
          items: ["جمع المتطلبات", "رسم خرائط العمليات", "تصميم سير العمل", "تحليل البيانات", "التوثيق"]
        },
        {
          name: "الأدوات والمنصات",
          items: ["ClickUp", "Jira", "Excel/Sheets", "Figma", "Miro", "Google Workspace"]
        },
        {
          name: "المهارات التقنية",
          items: ["هندسة الأنظمة", "تصميم قاعدة البيانات", "تكامل API", "الأتمتة", "أساسيات SQL"]
        }
      ]
    },
    contact: {
      title: "لنعمل معاً",
      subtitle: "مفتوحة لفرص حيث يمكنني تحقيق التميز التشغيلي",
      getInTouch: "تواصل معي",
      linkedin: "ملف LinkedIn",
      phone: "+20 111 003 6280",
      email: "mariemgaber8812@gmail.com"
    },
    footer: "مصمم بدقة وأناقة"
  }
};

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const t = content[language];
  const isArabic = language === "ar";

  return (
    <div className={`min-h-screen bg-background text-foreground font-sans ${isArabic ? "dir-rtl" : "dir-ltr"}`} dir={isArabic ? "rtl" : "ltr"}>
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 group">
            <img src="/images/logo.png" alt="Mariam" className="h-12 w-12 object-contain group-hover:scale-110 transition-transform duration-300" />
            <h1 className="text-2xl font-bold text-secondary">
              Mariam
            </h1>
          </div>
          
          <nav className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground">
            <a href="#about" className="hover:text-accent transition-colors duration-300">{t.nav.about}</a>
            <a href="#work" className="hover:text-accent transition-colors duration-300">{t.nav.projects}</a>
            <a href="#skills" className="hover:text-accent transition-colors duration-300">{t.nav.skills}</a>
            <a href="#contact" className="hover:text-accent transition-colors duration-300">{t.nav.contact}</a>
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setLanguage(language === "en" ? "ar" : "en")}
              className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span className="text-xs font-semibold">{language === "en" ? "AR" : "EN"}</span>
            </button>
            <a href="/Mariam_CV_Professional.pdf" download className="inline-flex items-center rounded-md h-10 px-6 bg-secondary hover:bg-secondary/90 text-accent-foreground font-medium transition-all duration-300 shadow-sm cursor-pointer">
              <Download className="w-4 h-4 mr-2" />
              {t.resume}
            </a>
          </div>
        </div>
      </header>

      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section id="about" className="relative overflow-hidden bg-gradient-to-br from-muted via-background to-background py-24 mb-32">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl space-y-8">
              <Badge className="rounded-full px-4 py-1.5 text-xs uppercase tracking-widest bg-accent/10 text-secondary border border-accent/30 font-bold w-fit">
                ✓ Project Manager & System Architect
              </Badge>
              
              <h1 className="text-6xl md:text-7xl font-bold leading-[1.1] text-secondary">
                {t.title}
              </h1>

              <p className="text-2xl font-light text-accent">
                {t.subtitle}
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                {t.description}
              </p>
              
              <div className="flex gap-4 pt-6 flex-wrap">
                <Button
                  asChild
                  className="h-12 px-8 text-base bg-secondary hover:bg-secondary/90 text-accent-foreground font-semibold rounded-md shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <a href="#work">
                    {t.viewProjects} <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-12 px-8 text-base rounded-md border-border hover:bg-muted hover:text-secondary font-medium transition-all duration-300"
                >
                  <a href="https://wa.me/201110036280" target="_blank" rel="noopener noreferrer">
                    {t.contactMe}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Grid */}
        <section className="container mx-auto px-6 mb-32">
          <h2 className="text-4xl font-bold text-secondary mb-12">{t.expertise.title}</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {t.expertise.items.map((item, idx) => (
              <div 
                key={idx} 
                className="p-6 bg-card border border-border rounded-md hover:border-accent/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="text-lg font-semibold text-secondary mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="h-px bg-border max-w-6xl mx-auto mb-32" />

        {/* Case Studies Section */}
        <section id="work" className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-4xl font-bold text-secondary mb-4">{t.projects.title}</h2>
          <p className="text-muted-foreground text-lg mb-16">{t.projects.subtitle}</p>

          <div className="space-y-32">
            {t.projects.items.map((project, index) => (
              <div key={index} className="group">
                {/* Project Header */}
                <div className="mb-8 border-l-4 border-accent pl-6 py-2">
                  <h3 className="text-3xl font-bold text-secondary mb-2">{project.title}</h3>
                  <p className="text-sm font-semibold text-accent uppercase tracking-widest">{project.role}</p>
                </div>

                {/* Screenshots - Full Width or Side by Side */}
                {project.screenshots && project.screenshots.length > 0 ? (
                  <div className={`mb-12 ${project.screenshots.length > 1 ? 'grid grid-cols-1 md:grid-cols-2 gap-6' : 'flex justify-center w-full'}`}>
                    {project.screenshots.map((screenshot, imgIndex) => (
                      <div key={imgIndex} className="shadow-md hover:shadow-lg transition-shadow duration-300 flex justify-center">
                        <img src={screenshot} alt={`${project.title} - Image ${imgIndex + 1}`} className="w-full h-auto object-contain" />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-muted border-2 border-dashed border-border rounded-lg p-12 flex items-center justify-center min-h-96 mb-12">
                    <div className="text-center">
                      <ImageIcon className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
                      <p className="text-muted-foreground font-medium">Project Screenshot</p>
                      <p className="text-xs text-muted-foreground/70">Add your project screenshot here</p>
                    </div>
                  </div>
                )}

                {/* Project Details Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-card border border-border rounded-lg p-6">
                      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Challenge</p>
                      <p className="text-sm text-foreground leading-relaxed">{project.challenge}</p>
                    </div>
                    <div className="bg-card border border-border rounded-lg p-6">
                      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Solution</p>
                      <p className="text-sm text-foreground leading-relaxed">{project.solution}</p>
                    </div>
                    <div className="bg-card border border-border rounded-lg p-6">
                      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Impact</p>
                      <ul className="space-y-2">
                        {project.impact.map((item, i) => (
                          <li key={i} className="text-sm text-foreground flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Skills Tags */}
                  <div className="pt-4">
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Key Skills</p>
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill, i) => (
                        <Badge key={i} variant="secondary" className="px-3 py-1 bg-accent/10 text-secondary border border-accent/30 text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
              </div>
            ))}
          </div>
        </section>

        <div className="h-px bg-border max-w-6xl mx-auto my-32" />

        {/* Skills Section */}
        <section id="skills" className="container mx-auto px-6 max-w-6xl mb-32">
          <h2 className="text-4xl font-bold text-secondary mb-12">{t.skills.title}</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {t.skills.categories.map((category, idx) => (
              <div 
                key={idx} 
                className="p-8 bg-card border border-border rounded-md hover:border-accent/50 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-accent mb-6 uppercase tracking-widest">{category.name}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.items.map((skill, i) => (
                    <Badge 
                      key={i} 
                      variant="secondary" 
                      className="px-4 py-2 bg-muted text-foreground border border-border hover:bg-accent/10 hover:text-secondary transition-all duration-300 rounded-md font-medium"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative overflow-hidden bg-gradient-to-br from-secondary to-secondary/90 py-24 rounded-lg">
          <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
            <h2 className="text-4xl font-bold text-accent-foreground mb-6">{t.contact.title}</h2>
            <p className="text-lg text-accent-foreground/90 mb-10 max-w-2xl mx-auto">
              {t.contact.subtitle}
            </p>
            
            {/* Contact Info */}
            <div className="mb-10 space-y-4">
              <div className="flex items-center justify-center gap-3 text-accent-foreground text-lg">
                <span className="font-semibold">📞</span>
                <a href={`tel:${t.contact.phone}`} className="hover:underline transition-all" dir="ltr">
                  {t.contact.phone}
                </a>
              </div>
              <div className="flex items-center justify-center gap-3 text-accent-foreground text-lg">
                <span className="font-semibold">📧</span>
                <a href={`mailto:${t.contact.email}`} className="hover:underline transition-all">
                  {t.contact.email}
                </a>
              </div>
            </div>
            
            <div className="flex justify-center gap-6 flex-wrap">
              <Button
                asChild
                className="h-14 px-8 text-lg rounded-md bg-accent hover:bg-accent/90 text-accent-foreground font-bold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <a href="https://wa.me/201110036280" target="_blank" rel="noopener noreferrer">
                  <Mail className="w-5 h-5 mr-2" />
                  {t.contact.getInTouch}
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted border-t border-border py-12 mt-20">
        <div className="container mx-auto px-6 text-center text-muted-foreground text-sm">
          <p>&copy; 2026 Mariam. All rights reserved.</p>
          <p>{t.footer}</p>
        </div>
      </footer>
    </div>
  );
}
