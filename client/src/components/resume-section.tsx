
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Eye, FileText, Star, Code, Briefcase, GraduationCap, Mail, Phone, MapPin } from "lucide-react";

export function ResumeSection() {
  const handleViewResume = () => {
    window.open('/youssef-darwish-resume.html', '_blank');
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/youssef-darwish-resume.html';
    link.download = 'youssef-darwish-resume.html';
    link.click();
  };

  return (
    <section id="resume" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            السيرة الذاتية
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            اطلع على نظرة شاملة عن خبراتي ومهاراتي التقنية
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Resume Preview Card */}
          <Card className="overflow-hidden shadow-2xl bg-white dark:bg-gray-800 border-0">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center text-3xl">
                  👨‍💻
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-2">يوسف درويش</h3>
                  <p className="text-xl opacity-90">مطور برمجيات متكامل | خبير Odoo & Salesforce</p>
                  <div className="flex items-center gap-6 mt-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Mail size={16} />
                      <span>youssefdarwish20009@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone size={16} />
                      <span>+966532441566</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>الرياض، السعودية</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <CardContent className="p-8">
              {/* Quick Overview */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <Briefcase className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-bold text-lg mb-2">الخبرة</h4>
                  <p className="text-gray-600 dark:text-gray-300">+3 سنوات</p>
                </div>
                <div className="text-center p-6 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <Code className="w-12 h-12 text-green-600 mx-auto mb-3" />
                  <h4 className="font-bold text-lg mb-2">المشاريع</h4>
                  <p className="text-gray-600 dark:text-gray-300">15+ مشروع</p>
                </div>
                <div className="text-center p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <Star className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                  <h4 className="font-bold text-lg mb-2">التقييم</h4>
                  <p className="text-gray-600 dark:text-gray-300">5/5 ⭐</p>
                </div>
              </div>

              {/* Key Skills */}
              <div className="mb-8">
                <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">المهارات الأساسية</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    'React.js', 'Odoo ERP', 'Salesforce Apex', 'Python', 'TypeScript',
                    'Node.js', 'PostgreSQL', 'REST APIs', 'AI Tools', 'Git'
                  ].map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 justify-center">
                <Button 
                  onClick={handleViewResume}
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3"
                >
                  <Eye className="w-5 h-5 mr-2" />
                  عرض السيرة الذاتية
                </Button>
                <Button 
                  onClick={handleDownloadResume}
                  size="lg"
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 px-8 py-3"
                >
                  <Download className="w-5 h-5 mr-2" />
                  تحميل كملف HTML
                </Button>
              </div>

              {/* Additional Info */}
              <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <h4 className="font-bold text-lg mb-3 text-gray-900 dark:text-white">نبذة مختصرة</h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  مطور برمجيات متكامل وعصري مع خبرة تزيد عن 3 سنوات في تطوير تطبيقات الويب الحديثة وحلول الأعمال المتقدمة. 
                  متخصص في React.js، Odoo، Salesforce، وأدوات النشر الحديثة مثل Vercel و Render. 
                  أتميز بخبرتي في دمج APIs الخلفية مع بيانات العملاء وأطور عملي باستمرار باستخدام قوة أدوات الذكاء الاصطناعي والأتمتة.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
