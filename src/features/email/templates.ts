import { SendEmailRequest } from "./types";

const baseStyles = `
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    background-color: #f5f5f5;
  }
  .container {
    max-width: 600px;
    margin: 40px auto;
    background-color: #ffffff;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  .header {
    background-color: #0000FF;
    color: #ffffff;
    padding: 40px 20px;
    text-align: center;
  }
  .header h1 {
    margin: 0;
    font-size: 28px;
    font-weight: 600;
  }
  .content {
    padding: 40px 20px;
  }
  .credentials-card {
    background-color: #f8f9fa;
    border: 2px solid #0000FF;
    border-radius: 8px;
    padding: 24px;
    margin: 24px 0;
  }
  .credential-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0;
    border-bottom: 1px solid #e9ecef;
  }
  .credential-row:last-child {
    border-bottom: none;
  }
  .credential-label {
    font-weight: 600;
    color: #495057;
  }
  .credential-value {
    font-family: 'Courier New', monospace;
    color: #0000FF;
    font-size: 16px;
  }
  .alert-box {
    background-color: #fff3cd;
    border-left: 4px solid #ffc107;
    padding: 16px;
    margin: 24px 0;
    border-radius: 4px;
  }
  .success-box {
    background-color: #d4edda;
    border-left: 4px solid #28a745;
    padding: 16px;
    margin: 24px 0;
    border-radius: 4px;
  }
  .button {
    display: inline-block;
    background-color: #0000FF;
    color: #ffffff;
    padding: 12px 32px;
    text-decoration: none;
    border-radius: 6px;
    font-weight: 600;
    margin: 16px 0;
  }
  .footer {
    background-color: #f8f9fa;
    padding: 24px;
    text-align: center;
    color: #6c757d;
    font-size: 14px;
  }
`;

const accountBreachedTemplate = (reason: string) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>${baseStyles}</style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>⚠️ Account Breached</h1>
    </div>
    <div class="content">
      <h2>Security Alert</h2>
      <p>We have detected a breach in your account. Your account has been temporarily suspended for security reasons.</p>
      
      <div class="alert-box">
        <strong>Reason for breach:</strong>
        <p style="margin: 8px 0 0 0;">${reason}</p>
      </div>
      
      <p>Please contact our support team immediately to resolve this issue and restore access to your account.</p>
      
      <a href="#" class="button">Contact Support</a>
      
      <p style="margin-top: 24px; color: #6c757d; font-size: 14px;">
        If you believe this is an error, please reach out to us as soon as possible.
      </p>
    </div>
    <div class="footer">
      <p>© 2025 Globby Funded Traders. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
`;

const evaluationLoginTemplate = (email: string, password: string) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>${baseStyles}</style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🎯 Evaluation Account Ready</h1>
    </div>
    <div class="content">
      <h2>Your Evaluation Has Begun!</h2>
      <p>Welcome to your trading evaluation. Below are your login credentials to access your evaluation account.</p>
      
      <div class="credentials-card">
        <div class="credential-row">
          <span class="credential-label">Email:</span>
          <span class="credential-value">${email}</span>
        </div>
        <div class="credential-row">
          <span class="credential-label">Password:</span>
          <span class="credential-value">${password}</span>
        </div>
      </div>
      
      <p><strong>Important:</strong> Please keep these credentials secure and do not share them with anyone.</p>
      
      <a href="#" class="button">Login to Dashboard</a>
      
      <p style="margin-top: 24px; color: #6c757d; font-size: 14px;">
        Good luck with your evaluation! Trade responsibly and follow the rules.
      </p>
    </div>
    <div class="footer">
      <p>© 2025 Globby Funded Traders. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
`;

const fundedLoginTemplate = (email: string, password: string) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>${baseStyles}</style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🎉 Funded Account Activated</h1>
    </div>
    <div class="content">
      <h2>Congratulations, You're Funded!</h2>
      <p>Your funded trading account is now active. Below are your login credentials to access your funded account.</p>
      
      <div class="credentials-card">
        <div class="credential-row">
          <span class="credential-label">Email:</span>
          <span class="credential-value">${email}</span>
        </div>
        <div class="credential-row">
          <span class="credential-label">Password:</span>
          <span class="credential-value">${password}</span>
        </div>
      </div>
      
      <p><strong>You're now trading with real capital!</strong> Continue following the rules and manage your risk carefully.</p>
      
      <a href="#" class="button">Access Funded Account</a>
      
      <p style="margin-top: 24px; color: #6c757d; font-size: 14px;">
        Remember to withdraw your profits regularly and trade within the guidelines.
      </p>
    </div>
    <div class="footer">
      <p>© 2025 Globby Funded Traders. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
`;

const challengePassedTemplate = (email: string) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>${baseStyles}</style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🏆 Challenge Passed!</h1>
    </div>
    <div class="content">
      <h2>Congratulations!</h2>
      <p>We're excited to inform you that you have successfully passed your trading challenge!</p>
      
      <div class="success-box">
        <p style="margin: 0;"><strong>Account Email:</strong> ${email}</p>
      </div>
      
      <p>You've demonstrated excellent trading skills and discipline. Your funded account will be activated within 24-48 hours.</p>
      
      <p>Our team will review your performance and send you the credentials for your funded account shortly.</p>
      
      <a href="#" class="button">View Results</a>
      
      <p style="margin-top: 24px; color: #6c757d; font-size: 14px;">
        Keep an eye on your inbox for your funded account details!
      </p>
    </div>
    <div class="footer">
      <p>© 2025 Globby Funded Traders. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
`;

export const generateEmailTemplate = (data: SendEmailRequest): string => {
  switch (data.emailType) {
    case "account_breached":
      return accountBreachedTemplate(data.reason || "");
    case "evaluation_login":
      return evaluationLoginTemplate(data.email || "", data.password || "");
    case "funded_login":
      return fundedLoginTemplate(data.email || "", data.password || "");
    case "challenge_passed":
      return challengePassedTemplate(data.email || "");
    default:
      return "";
  }
};
