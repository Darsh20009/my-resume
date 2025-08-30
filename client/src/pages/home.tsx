import { useEffect } from "react";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { SkillsSection } from "@/components/skills-section";
import { ExperienceSection } from "@/components/experience-section";
import { ProjectsSection } from "@/components/projects-section";
import { CertificatesSection } from "@/components/certificates-section";
import { ContactSection } from "@/components/contact-section";
import { useLanguage } from "@/hooks/use-language";
import { ChevronUp } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { t } = useLanguage();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <CertificatesSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="bg-card border-t py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold gradient-text mb-4">
            Youssef Darwish
          </h3>
          <p className="text-muted-foreground mb-6">
            {t("footer_tagline")}
          </p>
          <p className="text-sm text-muted-foreground">
            {t("footer_copyright")}
          </p>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <Button
          onClick={scrollToTop}
          size="sm"
          className="fixed bottom-8 right-8 z-40 rounded-full w-12 h-12 p-0 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <ChevronUp className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
}