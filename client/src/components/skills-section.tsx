import { useLanguage } from "@/hooks/use-language";
import { Code, Server, Cloud, Zap, Database, Palette } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function SkillsSection() {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t("frontend_title"),
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React.js", level: "Expert", color: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300" },
        { name: "Tailwind CSS", level: "Expert", color: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300" },
        { name: "Bootstrap", level: "Advanced", color: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300" },
        { name: "JavaScript/TypeScript", level: "Expert", color: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300" },
      ],
    },
    {
      title: t("backend_title"),
      icon: Server,
      color: "from-emerald-500 to-teal-500",
      skills: [
        { name: "Odoo ERP", level: "Expert", color: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300" },
        { name: "Flask/Python", level: "Advanced", color: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300" },
        { name: "REST APIs", level: "Expert", color: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300" },
        { name: "PostgreSQL", level: "Advanced", color: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300" },
      ],
    },
    {
      title: t("cloud_title"),
      icon: Cloud,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Vercel", level: "Expert", color: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300" },
        { name: "Render", level: "Expert", color: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300" },
        { name: "Git/GitHub", level: "Advanced", color: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300" },
        { name: "CI/CD", level: "Intermediate", color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300" },
      ],
    },
    {
      title: "CRM & ERP",
      icon: Database,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Salesforce Apex", level: "Expert", color: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300" },
        { name: "Odoo Modules", level: "Expert", color: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300" },
        { name: "API Integration", level: "Advanced", color: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300" },
        { name: "Data Migration", level: "Advanced", color: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300" },
      ],
    },
    {
      title: "AI & Tools",
      icon: Zap,
      color: "from-violet-500 to-purple-500",
      skills: [
        { name: "ChatGPT", level: "Expert", color: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300" },
        { name: "GitHub Copilot", level: "Advanced", color: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300" },
        { name: "AI Automation", level: "Advanced", color: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300" },
        { name: "Code Generation", level: "Expert", color: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300" },
      ],
    },
    {
      title: "Design & UX",
      icon: Palette,
      color: "from-pink-500 to-rose-500",
      skills: [
        { name: "UI/UX Design", level: "Advanced", color: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300" },
        { name: "Responsive Design", level: "Expert", color: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300" },
        { name: "Component Libraries", level: "Expert", color: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300" },
        { name: "Design Systems", level: "Advanced", color: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">{t("skills_title")}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t("skills_subtitle")}
          </p>
        </div>
        
        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-card p-8 rounded-xl border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-center mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <category.icon className="text-white w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <Badge variant="secondary" className={skill.color}>
                      {skill.level}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
