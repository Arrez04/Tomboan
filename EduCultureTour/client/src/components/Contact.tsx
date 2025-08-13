import { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { InfoIcon, Clock, Heart, Mail, Send, MapPin, Phone, Mail as MailIcon } from 'lucide-react';

export default function Contact() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactMutation = useMutation({
    mutationFn: (data: typeof formData) => apiRequest('POST', '/api/contact', data),
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "Your message has been sent successfully!",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="kontak" className="py-16 bg-white" data-testid="contact-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-heritage-brown mb-4" data-testid="contact-title">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed" data-testid="contact-subtitle">
            {t('contact.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-warm-cream p-8 rounded-xl border-l-4 border-terracotta" data-testid="location-info">
              <h3 className="font-poppins font-semibold text-xl text-heritage-brown mb-6">
                <InfoIcon className="inline mr-3 h-6 w-6 text-terracotta" />
                {t('contact.location')}
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-terracotta mt-1" />
                  <div>
                    <p className="font-medium text-heritage-brown">{t('contact.address')}</p>
                    <p className="text-gray-700">Dusun Nanasan, Desa Ngawonggo</p>
                    <p className="text-gray-700">Kecamatan Tajinan, Kabupaten Malang</p>
                    <p className="text-gray-700">Jawa Timur, Indonesia</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-terracotta mt-1" />
                  <div>
                    <p className="font-medium text-heritage-brown">Kontak</p>
                    <p className="text-gray-700">+62 xxx-xxxx-xxxx</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MailIcon className="h-5 w-5 text-terracotta mt-1" />
                  <div>
                    <p className="font-medium text-heritage-brown">Email</p>
                    <p className="text-gray-700">info@tomboan-ngawonggo.id</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-warm-cream p-8 rounded-xl border-l-4 border-golden" data-testid="operating-hours">
              <h3 className="font-poppins font-semibold text-xl text-heritage-brown mb-6">
                <Clock className="inline mr-3 h-6 w-6 text-golden" />
                {t('contact.hours')}
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Senin - Jumat</span>
                  <span className="font-medium text-heritage-brown">08:00 - 17:00 WIB</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Sabtu - Minggu</span>
                  <span className="font-medium text-heritage-brown">07:00 - 18:00 WIB</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Hari Libur Nasional</span>
                  <span className="font-medium text-heritage-brown">07:00 - 18:00 WIB</span>
                </div>
              </div>
            </div>
            
            <div className="bg-warm-cream p-8 rounded-xl border-l-4 border-heritage-brown" data-testid="kotak-asih-info">
              <h3 className="font-poppins font-semibold text-xl text-heritage-brown mb-6">
                <Heart className="inline mr-3 h-6 w-6 text-heritage-brown" />
                {t('contact.kotakAsih')}
              </h3>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  {t('contact.kotakAsih.desc')}
                </p>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-sm text-gray-600 italic">
                    "{t('contact.kotakAsih.quote')}"
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form and Map */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200" data-testid="contact-form">
              <h3 className="font-poppins font-semibold text-xl text-heritage-brown mb-6">
                <Mail className="inline mr-3 h-6 w-6 text-terracotta" />
                {t('contact.form.title')}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-heritage-brown mb-2">
                      {t('contact.form.name')}
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder={t('contact.form.namePlaceholder')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-terracotta focus:border-transparent"
                      required
                      data-testid="input-name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-heritage-brown mb-2">
                      {t('contact.form.email')}
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="email@example.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-terracotta focus:border-transparent"
                      required
                      data-testid="input-email"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-heritage-brown mb-2">
                    {t('contact.form.subject')}
                  </label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder={t('contact.form.subjectPlaceholder')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-terracotta focus:border-transparent"
                    required
                    data-testid="input-subject"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-heritage-brown mb-2">
                    {t('contact.form.message')}
                  </label>
                  <Textarea
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={t('contact.form.messagePlaceholder')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-terracotta focus:border-transparent"
                    required
                    data-testid="textarea-message"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-terracotta hover:bg-opacity-90 text-white py-3 rounded-lg font-semibold transition-colors"
                  disabled={contactMutation.isPending}
                  data-testid="button-submit"
                >
                  <Send className="mr-2 h-5 w-5" />
                  {contactMutation.isPending ? 'Sending...' : t('contact.form.send')}
                </Button>
              </form>
            </div>
            
            {/* Map Placeholder */}
            <div className="bg-gray-200 h-80 rounded-xl flex items-center justify-center shadow-lg" data-testid="map-placeholder">
              <div className="text-center text-gray-500">
                <MapPin className="h-16 w-16 mb-4 mx-auto" />
                <p className="text-lg font-medium">{t('contact.map')}</p>
                <p className="text-sm">{t('contact.mapSubtitle')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
