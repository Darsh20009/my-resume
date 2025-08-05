import { useLanguage } from "@/hooks/use-language";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, BarChart3, RefreshCw, Globe } from "lucide-react";

export function ProjectsSection() {
  const { t } = useLanguage();

  const projects = [
    {
      title: t("project1_title"),
      description: t("project1_desc"),
      icon: BarChart3,
      gradient: "from-blue-500 to-purple-600",
      tags: ["Odoo", "PostgreSQL", "Python", "ERP"],
      features: [
        "Inventory Management",
        "Employee Tracking",
        "Billing System",
        "Customer Analytics",
        "Reporting Dashboard"
      ],
    },
    {
      title: t("project2_title"),
      description: t("project2_desc"),
      icon: RefreshCw,
      gradient: "from-emerald-500 to-teal-600",
      tags: ["Salesforce", "Odoo API", "Apex", "Integration"],
      features: [
        "Real-time Sync",
        "Lead Management",
        "Customer Data Sync",
        "Sales Pipeline",
        "Automated Workflows"
      ],
    },
    {
      title: t("project3_title"),
      description: t("project3_desc"),
      icon: Globe,
      gradient: "from-purple-500 to-pink-600",
      tags: ["React", "Vercel", "Tailwind", "CI/CD"],
      features: [
        "Responsive Design",
        "Dark Mode",
        "Multilingual",
        "SEO Optimized",
        "Performance Focused"
      ],
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">{t("projects_title")}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t("projects_subtitle")}
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-card rounded-xl border shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Project Header */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                <project.icon className="text-white w-16 h-16 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-sm mb-2 text-muted-foreground">Key Features:</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                    {project.features.length > 3 && (
                      <li className="text-primary text-xs">+{project.features.length - 3} more...</li>
                    )}
                  </ul>
                </div>
                
                {/* Actions */}
                <div className="flex items-center justify-between">
                  <Button variant="outline" size="sm" className="group-hover:border-primary group-hover:text-primary transition-colors">
                    <ExternalLink className="mr-2 h-3 w-3" />
                    {t("view_project")}
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View More Projects */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="group">
            <Github className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
            View More on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}
