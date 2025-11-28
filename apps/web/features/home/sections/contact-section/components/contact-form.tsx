import React from 'react';
import { Mail, User, MessageSquare, Send } from 'lucide-react';
import { useSendEmail } from '@/hooks/use-send-email';
import { Input, Textarea } from '@/components/common/input';
import { Button } from '@/components/common/button';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const contactSchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters').max(50, 'Name must be at most 50 characters'),
  from: z.string().email('Invalid email address'),
  subject: z.string().min(3, 'Subject must be at least 3 characters').max(100, 'Subject must be at most 100 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000, 'Message must be at most 1000 characters'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export const ContactForm: React.FC = () => {
  const { mutate: sendEmail, isPending } = useSendEmail();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      from: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    sendEmail(data, {
      onSuccess: () => {
        reset();
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
      <Input
        label="Your Name"
        {...register('name')}
        type="text"
        placeholder="John Doe"
        leftIcon={<User size={20} />}
        className="h-12 min-w-12"
        error={errors.name?.message}
      />

      <Input
        label="Your Email"
        {...register('from')}
        type="email"
        placeholder="john@example.com"
        leftIcon={<Mail size={20} />}
        className="h-12 min-w-12"
        error={errors.from?.message}
      />

      <Input
        label="Subject"
        {...register('subject')}
        type="text"
        placeholder="Project Inquiry"
        leftIcon={<MessageSquare size={20} />}
        className="h-12 min-w-12"
        error={errors.subject?.message}
      />

      <Textarea
        label="Message"
        {...register('message')}
        rows={6}
        placeholder="Tell me about your project..."
        error={errors.message?.message}
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
