import { useLanguage } from "@/hooks/use-language";
import { MapPin, Briefcase, Globe, GraduationCap } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export function AboutSection() {
  const { t } = useLanguage();

  const skills = [
    { name: "React.js", progress: 95 },
    { name: "Odoo ERP", progress: 90 },
    { name: "Salesforce Apex", progress: 88 },
    { name: "Backend APIs", progress: 85 },
  ];

  const quickFacts = [
    {
      icon: MapPin,
      label: t("location_label"),
      value: t("location"),
      color: "text-blue-500",
    },
    {
      icon: Briefcase,
      label: t("experience_label"),
      value: t("experience_years"),
      color: "text-green-500",
    },
    {
      icon: Globe,
      label: t("languages_label"),
      value: t("languages"),
      color: "text-purple-500",
    },
    {
      icon: GraduationCap,
      label: "Education",
      value: "High School Student (Expected 2026)",
      color: "text-orange-500",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">{t("about_title")}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t("about_subtitle")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">{t("about_heading")}</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>{t("about_description")}</p>
              <p>{t("about_description2")}</p>
            </div>
            
            {/* Quick Facts Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {quickFacts.map((fact, index) => (
                <div key={index} className="p-4 bg-card rounded-lg border hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-3">
                    <fact.icon className={`w-5 h-5 mt-0.5 ${fact.color}`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-muted-foreground">{fact.label}</p>
                      <p className="font-semibold text-sm leading-tight">{fact.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Skills Preview */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">{t("skills_title")}</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.progress}%</span>
                  </div>
                  <Progress 
                    value={skill.progress} 
                    className="h-2"
                  />
                </div>
              ))}
            </div>
            
            {/* Additional Info */}
            <div className="p-6 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-lg border">
              <h4 className="font-semibold mb-2 text-primary">Personal Highlights</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Passionate about modern technology and AI integration</li>
                <li>• Experience in marketing and retail sales</li>
                <li>• Always learning and adapting with latest tech trends</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
