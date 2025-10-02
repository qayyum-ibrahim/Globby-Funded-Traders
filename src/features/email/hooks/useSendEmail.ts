import { useMutation } from '@tanstack/react-query';
import { sendEmail } from '../api';
import { SendEmailRequest } from '../types';
import { toast } from '@/hooks/use-toast';

export const useSendEmail = () => {
  return useMutation({
    mutationFn: (data: SendEmailRequest) => sendEmail(data),
    onSuccess: () => {
      toast({
        title: 'Email sent',
        description: 'Your email has been sent successfully.',
      });
    },
    onError: () => {
      toast({
        title: 'Failed to send email',
        description: 'An error occurred while sending the email.',
        variant: 'destructive',
      });
    },
  });
};