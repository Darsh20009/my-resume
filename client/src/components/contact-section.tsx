import { useState } from "react";
import { useLanguage } from "@/hooks/use-language";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MessageSquare, MapPin, Download, ExternalLink } from "lucide-react";
import { FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function ContactSection() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create WhatsApp message
    const whatsappMessage = `*New Contact Message*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Subject:* ${formData.subject}\n\n*Message:*\n${formData.message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/966532441566?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    // Show success message
    toast({
      title: "Success!",
      description: t("form_success"),
    });

    // Clear form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: t("email_label"),
      value: "youssefdarwish20009@gmail.com",
      href: "mailto:youssefdarwish20009@gmail.com",
      color: "text-blue-500",
      bgColor: "bg-blue-100 dark:bg-blue-900/30",
    },
    {
      icon: FaWhatsapp,
      label: t("whatsapp_label"),
      value: "+966532441566",
      href: "https://wa.me/966532441566",
      color: "text-green-500",
      bgColor: "bg-green-100 dark:bg-green-900/30",
    },
    {
      icon: MapPin,
      label: t("location_label"),
      value: t("location"),
      href: "#",
      color: "text-purple-500",
      bgColor: "bg-purple-100 dark:bg-purple-900/30",
    },
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      name: "GitHub",
      href: "https://github.com/Darsh20009",
      color: "hover:text-gray-900 dark:hover:text-gray-100",
    },
    {
      icon: FaLinkedin,
      name: "LinkedIn", 
      href: "https://www.linkedin.com/in/youssef-darwish-5056672bb",
      color: "hover:text-blue-600",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">{t("contact_title")}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-4">
            {t("contact_subtitle")}
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("contact_description")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center space-x-4 p-6 bg-card rounded-xl border hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
                  target={info.href.startsWith('http') ? '_blank' : '_self'}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                >
                  <div className={`w-12 h-12 ${info.bgColor} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <info.icon className={`w-5 h-5 ${info.color}`} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="font-semibold group-hover:text-primary transition-colors">
                      {info.value}
                    </p>
                  </div>
                  {info.href !== '#' && (
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  )}
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="p-6 bg-card rounded-xl border">
              <h4 className="font-semibold mb-4 flex items-center">
                <MessageSquare className="w-4 h-4 mr-2 text-primary" />
                Connect with me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`p-3 bg-muted rounded-lg transition-all duration-300 hover:scale-110 ${social.color}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* View/Download Resume */}
            <div className="p-6 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-xl border">
              <h4 className="font-semibold mb-2 text-primary">السيرة الذاتية</h4>
              <p className="text-sm text-muted-foreground mb-4">
                اطلع على نظرة شاملة عن خبراتي ومهاراتي التقنية
              </p>
              <div className="flex flex-col gap-2">
                <Button 
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
                  onClick={async () => {
                    try {
                      const resumeUrl = '/youssef-darwish-resume.html';

                      // Test if file exists
                      const response = await fetch(resumeUrl, { method: 'HEAD' });
                      if (!response.ok) {
                        throw new Error('File not found');
                      }

                      window.open(resumeUrl, '_blank', 'noopener,noreferrer');
                      toast({
                        title: "تم فتح السيرة الذاتية",
                        description: "تم فتح السيرة الذاتية في نافذة جديدة",
                      });
                    } catch (error) {
                      console.error('Resume file error:', error);
                      toast({
                        title: "خطأ",
                        description: "لم يتم العثور على ملف السيرة الذاتية",
                        variant: "destructive",
                      });
                    }
                  }}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  عرض السيرة الذاتية
                </Button>
                <Button 
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    try {
                      const link = document.createElement('a');
                      link.href = '/youssef-darwish-resume.html';
                      link.download = 'Youssef-Darwish-Resume.html';
                      link.setAttribute('target', '_blank');
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                      toast({
                        title: "بدء التحميل",
                        description: "تم بدء تحميل السيرة الذاتية",
                      });
                    } catch (error) {
                      toast({
                        title: "خطأ",
                        description: "حدث خطأ في تحميل السيرة الذاتية",
                        variant: "destructive",
                      });
                    }
                  }}
                >
                  <Download className="mr-2 h-4 w-4" />
                  تحميل كملف HTML
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-xl border shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    {t("form_name")}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    {t("form_email")}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  {t("form_subject")}
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  {t("form_message")}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project or idea..."
                  className="resize-none"
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white"
              >
                <FaWhatsapp className="mr-2 h-4 w-4" />
                {t("form_send")} via WhatsApp
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}