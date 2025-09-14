import { useLanguage } from "@/hooks/use-language";
import { Calendar, MapPin, Building2 } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

import ma3kBadge from "@assets/Screenshot 2025-09-13 190600_1757874359177.png";

export function ExperienceSection() {
  const { t } = useLanguage();

  const experiences = [
    {
      title: "Web Projects Director (WPD)",
      company: "Ma3k Company Technology Solutions",
      period: "2024 - Present",
      location: "Saudi Arabia",
      type: "Full-time",
      color: "border-emerald-500",
      bgColor: "bg-emerald-50 dark:bg-emerald-950/30",
      image: ma3kBadge,
      imageAlt: "Ma3k Company work ID card for Youssef Darwish",
      descriptions: [
        "Leading web development projects and managing technical teams",
        "Directing large-scale website and application development initiatives",
        "Overseeing project architecture and technical implementation strategies",
        "Managing client relationships and ensuring project delivery excellence",
        "Implementing modern web technologies and development best practices",
        "Coordinating cross-functional teams to deliver innovative technology solutions",
      ],
    },
    {
      title: t("exp1_title"),
      company: t("exp1_company"),
      period: t("exp1_period"),
      location: "Remote",
      type: "Full-time",
      color: "border-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-950/30",
      descriptions: [
        t("exp1_desc1"),
        t("exp1_desc2"),
        t("exp1_desc3"),
        t("exp1_desc4"),
        t("exp1_desc5"),
      ],
    },
    {
      title: t("exp2_title"),
      company: t("exp2_company"),
      period: t("exp2_period"),
      location: "Remote",
      type: "Freelance",
      color: "border-purple-500",
      bgColor: "bg-purple-50 dark:bg-purple-950/30",
      descriptions: [
        t("exp2_desc1"),
        t("exp2_desc2"),
        t("exp2_desc3"),
        t("exp2_desc4"),
        t("exp2_desc5"),
        t("exp2_desc6"),
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">{t("experience_title")}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t("experience_subtitle")}
          </p>
        </div>
        
        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-1/2"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex items-center mb-12">
              {/* Timeline dot */}
              <div className={`absolute left-4 md:left-1/2 w-4 h-4 ${exp.color.replace('border-', 'bg-')} rounded-full transform md:-translate-x-1/2 z-10 ring-4 ring-background`}></div>
              
              {/* Content */}
              <div className={`ml-12 md:ml-0 ${
                index % 2 === 0 ? 'md:w-1/2 md:pr-8' : 'md:w-1/2 md:pl-8 md:ml-auto'
              }`}>
                <div className={`${exp.bgColor} p-6 rounded-xl border-l-4 ${exp.color} shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                      <div className="flex items-center space-x-2 text-primary font-semibold mb-2">
                        <Building2 className="w-4 h-4" />
                        <span className="text-sm">{exp.company}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                    <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium">
                      {exp.type}
                    </span>
                  </div>
                  
                  {/* Work card image */}
                  {exp.image && (
                    <div className="mb-4">
                      <a 
                        href={exp.image} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        data-testid="link-work-card-ma3k"
                        className="inline-block"
                      >
                        <div className="w-full sm:w-64">
                          <AspectRatio ratio={3/4}>
                            <img
                              src={exp.image}
                              alt={exp.imageAlt || "Work card"}
                              className="object-cover rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow duration-300"
                              data-testid="img-work-card"
                            />
                          </AspectRatio>
                        </div>
                        <p className="text-xs text-muted-foreground mt-2 hover:text-primary transition-colors" data-testid="text-work-card-caption">
                          View work card
                        </p>
                      </a>
                    </div>
                  )}
                  
                  <ul className="space-y-2">
                    {exp.descriptions.map((desc, descIndex) => (
                      <li key={descIndex} className="text-muted-foreground text-sm leading-relaxed">
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
