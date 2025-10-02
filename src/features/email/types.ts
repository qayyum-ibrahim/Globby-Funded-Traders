export type EmailType =
  | "account_suspended"
  | "evaluation_login"
  | "funded_login"
  | "challenge_passed";

export interface EmailFormData {
  emails: string;
  emailType: EmailType;
  reason?: string;
  login?: string;
  server?: string;
  password?: string;
  email?: string;
}

export interface SendEmailRequest {
  emails: string[];
  emailType: EmailType;
  reason?: string;
  login?: string;
  server?: string;
  password?: string;
  email?: string;
}

export interface SendEmailResponse {
  success: boolean;
  message: string;
}
