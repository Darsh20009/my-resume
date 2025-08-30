import { useLanguage } from "@/hooks/use-language";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

import oracleBadge from "@/assets/oracle-badge.png";
import oracleCertificate from "@/assets/oracle-certificate.png";

export function CertificatesSection() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const certificates = [
    {
      id: "oracle-badge",
      title: t("oracle_title"),
      description: t("oracle_description"),
      issuer: t("oracle_issuer"),
      date: t("oracle_issued"),
      image: oracleBadge,
      type: "Professional",
      color: "from-orange-500 to-red-500",
      badgeColor: "bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300"
    },
    {
      id: "oracle-certificate",
      title: t("oracle_title"),
      description: t("oracle_description"),
      issuer: t("oracle_issuer"),
      date: t("oracle_issued"),
      image: oracleCertificate,
      type: "Certificate",
      color: "from-blue-500 to-purple-500",
      badgeColor: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
    }
  ];

  const nextCertificate = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % certificates.length);
  };

  const prevCertificate = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + certificates.length) % certificates.length);
  };

  const currentCert = certificates[currentIndex];

  return (
    <section id="certificates" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">{t("certificates_title")}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t("certificates_subtitle")}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Certificate Display */}
            <Card className="overflow-hidden shadow-2xl border-0 bg-gradient-to-br from-card to-muted/50">
              <div className="relative">
                {/* Navigation Controls */}
                <div className="absolute top-4 right-4 z-20 flex gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={prevCertificate}
                    className="bg-background/80 hover:bg-background/90 backdrop-blur-sm rounded-full w-10 h-10 p-0 shadow-lg"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={nextCertificate}
                    className="bg-background/80 hover:bg-background/90 backdrop-blur-sm rounded-full w-10 h-10 p-0 shadow-lg"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Certificate Image */}
                  <div className="relative aspect-square lg:aspect-auto bg-gradient-to-br from-background/50 to-muted/80 flex items-center justify-center p-8">
                    <div className="relative w-full h-full max-w-md mx-auto">
                      <img
                        src={currentCert.image}
                        alt={currentCert.title}
                        className="w-full h-full object-contain rounded-lg shadow-xl transform transition-all duration-500 hover:scale-105"
                      />
                      <div className={`absolute -top-3 -right-3 w-16 h-16 bg-gradient-to-br ${currentCert.color} rounded-full flex items-center justify-center shadow-lg`}>
                        <Award className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Certificate Details */}
                  <CardContent className="p-8 flex flex-col justify-center space-y-6">
                    <div>
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <Badge variant="secondary" className={currentCert.badgeColor}>
                            {currentCert.type}
                          </Badge>
                          <CardTitle className="text-2xl font-bold mt-3 mb-2 leading-tight">
                            {currentCert.title}
                          </CardTitle>
                          <CardDescription className="text-base">
                            {currentCert.description}
                          </CardDescription>
                        </div>
                      </div>
                      
                      <div className="space-y-3 text-muted-foreground">
                        <div className="flex items-center space-x-2">
                          <Award className="w-4 h-4 text-primary" />
                          <span className="font-medium">{currentCert.issuer}</span>
                        </div>
                        <div className="text-sm">
                          {currentCert.date}
                        </div>
                      </div>
                    </div>

                    <Button
                      onClick={() => window.open(currentCert.image, '_blank')}
                      className={`w-full bg-gradient-to-r ${currentCert.color} hover:shadow-lg transition-all duration-300 hover:scale-105`}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      {t("view_certificate")}
                    </Button>
                  </CardContent>
                </div>
              </div>
            </Card>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {certificates.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all duration-300",
                    index === currentIndex 
                      ? "bg-primary scale-125" 
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  )}
                />
              ))}
            </div>

            {/* Certificate Counter */}
            <div className="text-center mt-4 text-sm text-muted-foreground">
              {currentIndex + 1} / {certificates.length}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}