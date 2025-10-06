export type EmailType =
  | "account_suspended"
  | "evaluation_login"
  | "funded_login"
  | "challenge_passed"
  | "withdrawal";

export interface EmailFormData {
  emails: string;
  emailType: EmailType;
  reason?: string;
  login?: string;
  server?: string;
  password?: string;
  email?: string;
  usd?: string;
  ngn?: string;
}

export interface SendEmailRequest {
  emails: string[];
  emailType: EmailType;
  reason?: string;
  login?: string;
  server?: string;
  password?: string;
  email?: string;
  usd?: string;
  ngn?: string;
}

export interface SendEmailResponse {
  success: boolean;
  message: string;
}
