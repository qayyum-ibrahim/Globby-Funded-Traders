export type EmailType =
  | "account_breached"
  | "evaluation_login"
  | "funded_login"
  | "challenge_passed";

export interface EmailFormData {
  emails: string;
  emailType: EmailType;
  reason?: string;
  email?: string;
  password?: string;
}

export interface SendEmailRequest {
  emails: string[];
  emailType: EmailType;
  reason?: string;
  email?: string;
  password?: string;
}

export interface SendEmailResponse {
  success: boolean;
  message: string;
}
