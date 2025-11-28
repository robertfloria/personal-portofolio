import React, { useState } from 'react';
import { Mail, User, MessageSquare, Send } from 'lucide-react';
import { SendEmailDto } from '@portfolio/shared-types';
import { useSendEmail } from '@/hooks/use-send-email';
import { Input, Textarea } from '@/components/common/input';
import { Button } from '@/components/common/button';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<SendEmailDto>({
    name: '',
    from: '',
    subject: '',
    message: '',
  });
  const { mutate: sendEmail, isPending } = useSendEmail();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
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
        className="h-12 min-w-12"
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
        className="h-12 min-w-12"
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
        className="h-12 min-w-12"
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
  );
};
