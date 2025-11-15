'use client';

import React, { useState } from 'react';
import { Mail, User, MessageSquare, Send, Phone, MapPin } from 'lucide-react';
import { personalInfo } from '@/lib/data';
import { ContactFormData } from '@/types';
import { useSendEmail } from '@/hooks/use-send-email';
import { useReducedMotion } from '@/hooks';
import { 
  Section, 
  Card, 
  Input, 
  Textarea, 
  Button,
  Text 
} from '@/components/common';

export function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    from: '',
    subject: '',
    message: '',
  });

  const { mutate: sendEmail, isPending } = useSendEmail();
  const shouldReduceMotion = useReducedMotion();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    sendEmail(formData, {
      onSuccess: () => {
        setFormData({ name: '', from: '', subject: '', message: '' });
      },
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      gradient: 'from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20',
      border: 'border-blue-200 dark:border-blue-800',
      iconGradient: 'from-blue-600 to-purple-600',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      gradient: 'from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20',
      border: 'border-green-200 dark:border-green-800',
      iconGradient: 'from-green-600 to-blue-600',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.location,
      gradient: 'from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20',
      border: 'border-purple-200 dark:border-purple-800',
      iconGradient: 'from-purple-600 to-pink-600',
    },
  ];

  return (
    <Section id="contact">
      <div className="max-w-4xl mx-auto">
        <Section.Header animated={!shouldReduceMotion}>
          <Section.Title highlightText="Touch">Get In</Section.Title>
          <Section.Subtitle>
            Have a project in mind or want to collaborate? Feel free to reach out!
          </Section.Subtitle>
        </Section.Header>

        <Card
          variant="default"
          padding="lg"
          hover="glow"
          animated={!shouldReduceMotion}
          animationDelay={0.2}
          className="shadow-lg"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              label="Your Name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              minLength={3}
              maxLength={50}
              placeholder="John Doe"
              leftIcon={<User size={20} />}
            />

            <Input
              label="Your Email"
              name="from"
              type="email"
              value={formData.from}
              onChange={handleChange}
              required
              placeholder="john@example.com"
              leftIcon={<Mail size={20} />}
            />

            <Input
              label="Subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              required
              minLength={3}
              maxLength={100}
              placeholder="Project Inquiry"
              leftIcon={<MessageSquare size={20} />}
            />

            <Textarea
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              minLength={10}
              maxLength={1000}
              rows={6}
              placeholder="Tell me about your project..."
            />

            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full"
              isLoading={isPending}
              leftIcon={!isPending && <Send size={20} />}
            >
              {isPending ? 'Sending...' : 'Send Message'}
            </Button>
          </form>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold mb-6 text-foreground text-center">
              Other Ways to Reach Me
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactMethods.map((method) => {
                const Icon = method.icon;
                const isLink = !!method.href;

                return isLink ? (
                  <a key={method.label} href={method.href} className="block">
                    <Card
                      variant="gradient"
                      padding="lg"
                      hover="glow"
                      className={`flex flex-col items-center text-center ${method.gradient} border ${method.border} group`}
                    >
                      <Card.Content className="flex flex-col items-center text-center p-0">
                        <div
                          className={`w-12 h-12 rounded-full bg-linear-to-r ${method.iconGradient} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <Card.Title className="text-sm font-medium text-muted-foreground mb-1">
                          {method.label}
                        </Card.Title>
                        <Card.Description className="text-sm font-semibold text-foreground text-center break-all">
                          {method.value}
                        </Card.Description>
                      </Card.Content>
                    </Card>
                  </a>
                ) : (
                  <Card
                    key={method.label}
                    variant="gradient"
                    padding="lg"
                    hover="glow"
                    className={`flex flex-col items-center text-center ${method.gradient} border ${method.border} group`}
                  >
                    <Card.Content className="flex flex-col items-center text-center p-0">
                      <div
                        className={`w-12 h-12 rounded-full bg-linear-to-r ${method.iconGradient} flex items-center justify-center mb-3`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <Card.Title className="text-sm font-medium text-muted-foreground mb-1">
                        {method.label}
                      </Card.Title>
                      <Card.Description className="text-sm font-semibold text-foreground text-center break-all">
                        {method.value}
                      </Card.Description>
                    </Card.Content>
                  </Card>
                );
              })}
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
}
