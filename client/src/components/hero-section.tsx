import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/use-language";
import { Mail, Eye, Code, Database, Zap, Bot } from "lucide-react";
import profileImage from "@assets/Screenshot 2025-08-05 133119_1754389885686.png";

export function HeroSection() {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const techStack = [
    { icon: Code, name: "React", color: "text-blue-500" },
    { icon: Database, name: "Odoo", color: "text-purple-500" },
    { icon: Zap, name: "Salesforce", color: "text-orange-500" },
    { icon: Bot, name: "AI Tools", color: "text-green-500" },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/30 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-xl animate-float [animation-delay:2s]"></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-emerald-500/30 rounded-full mix-blend-multiply filter blur-xl animate-float [animation-delay:4s]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Profile Photo */}
          <div className="mb-8 inline-block">
            <div className="relative">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden ring-4 ring-primary/20 animate-pulse-slow">
                <img 
                  src={profileImage} 
                  alt="Youssef Darwish" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center animate-bounce-slow">
                <Code className="text-white w-6 h-6" />
              </div>
            </div>
          </div>
          
          {/* Hero Content */}
          <div className="space-y-6 animate-slide-up">
            <div className="space-y-4">
              <p className="text-primary font-medium text-lg">{t("hero_greeting")}</p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
                <span className="gradient-text">{t("hero_name")}</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
                {t("hero_title")}
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              {t("hero_subtitle")}
            </p>

            <p className="text-base text-muted-foreground/80 leading-relaxed max-w-2xl mx-auto">
              {t("hero_description")}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button 
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="mr-2 h-4 w-4" />
                {t("hero_contact")}
              </Button>
              <Button 
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105"
              >
                <Eye className="mr-2 h-4 w-4" />
                {t("hero_portfolio")}
              </Button>
            </div>
            
            {/* Tech Stack Icons */}
            <div className="flex justify-center space-x-8 pt-8">
              {techStack.map((tech, index) => (
                <div key={tech.name} className="text-center group">
                  <tech.icon className={`w-8 h-8 mx-auto ${tech.color} group-hover:scale-110 transition-transform duration-300`} />
                  <p className="text-xs text-muted-foreground mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {tech.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
