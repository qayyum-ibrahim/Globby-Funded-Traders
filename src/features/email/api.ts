import { SendEmailRequest, SendEmailResponse } from "./types";
import { generateEmailTemplate } from "./templates";
import { api } from "@/lib/axios";

export const sendEmail = async (
  data: SendEmailRequest
): Promise<SendEmailResponse> => {
  // Generate HTML template
  const htmlContent = generateEmailTemplate(data);

  const requestData = {
    emails: data.emails,
    emailType: data.emailType,
    htmlContent,
    ...data,
  };

  const response = await api.post("/notification/send-email", requestData);
  return response.data;
};
