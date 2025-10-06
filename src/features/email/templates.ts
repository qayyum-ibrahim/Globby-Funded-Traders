import { SendEmailRequest } from "./types";

const baseStyles = `
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    background-color: #f5f5f5;
    color: #333333;
  }
  .container {
    max-width: 600px;
    margin: 40px auto;
    background-color: #ffffff;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  .header {
    background-color: #0000FF;
    color: #ffffff;
    padding: 32px 24px;
    text-align: center;
  }
  .header h1 {
    margin: 0;
    font-size: 24px;
    font-weight: 700;
    letter-spacing: -0.5px;
  }
  .content {
    padding: 32px 24px;
    line-height: 1.6;
    color: #333333;
  }
  .greeting {
    font-size: 16px;
    margin-bottom: 20px;
    font-weight: 500;
  }
  .message-text {
    font-size: 15px;
    margin: 16px 0;
    color: #444444;
  }
  .highlight {
    color: #0000FF;
    font-weight: 600;
  }
  .credentials {
    background-color: #f8f9fa;
    border: 2px solid #0000FF;
    border-radius: 8px;
    padding: 20px;
    margin: 24px 0;
    font-family: 'Courier New', monospace;
  }
  .credentials p {
    margin: 8px 0;
    font-size: 14px;
  }
  .credentials strong {
    color: #0000FF;
    font-size: 15px;
  }
  .warning-box {
    background-color: #fff3cd;
    border-left: 4px solid #0000FF;
    padding: 16px;
    margin: 24px 0;
    border-radius: 4px;
    color: #856404;
  }
  .success-highlight {
    background-color: #e7f3ff;
    border-left: 4px solid #0000FF;
    padding: 16px;
    margin: 24px 0;
    border-radius: 4px;
    color: #004085;
  }
    .success-box {
  background-color: #d4edda;          /* light green background */
  border-left: 4px solid #28a745;     /* strong green border */
  padding: 16px;
  margin: 24px 0;
  border-radius: 4px;
  color: #155724;                     /* dark green text */
}

.danger-box {
  background-color: #f8d7da;          /* light red background */
  border-left: 4px solid #dc3545;     /* strong red border */
  padding: 16px;
  margin: 24px 0;
  border-radius: 4px;
  color: #721c24;                     /* dark red text */
}
  .signature {
    margin-top: 32px;
    font-size: 15px;
    color: #555555;
  }
  .footer {
    background-color: #f8f9fa;
    padding: 24px;
    text-align: center;
    color: #6c757d;
    font-size: 13px;
    border-top: 1px solid #e9ecef;
  }
  
  /* Dark mode support */
  @media (prefers-color-scheme: dark) {
    body {
      background-color: #1a1a1a;
      color: #e0e0e0;
    }
    .container {
      background-color: #2d2d2d;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    }
    .content {
      color: #e0e0e0;
    }
    .message-text {
      color: #d0d0d0;
    }
    .credentials {
      background-color: #1a1a1a;
      border-color: #0000FF;
    }
    .warning-box {
      background-color: #3d3520;
      color: #ffd966;
    }
    .success-highlight {
      background-color: #1a2d3d;
      color: #66b3ff;
    }
      .success-box {
  background-color: #1d3d2d; /* deep green background */
  color: #66ff99;            /* bright green text */
}

.danger-box {
  background-color: #3d1a1a; /* deep red background */
  color: #ff6666;            /* bright red text */
}
    .signature {
      color: #b0b0b0;
    }
    .footer {
      background-color: #1a1a1a;
      border-top-color: #404040;
      color: #888888;
    }
  }
`;

const accountSuspendedTemplate = (reason: string) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="color-scheme" content="light dark">
  <meta name="supported-color-schemes" content="light dark">
  <style>${baseStyles}</style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Globby Funded Traders</h1>
    </div>
    <div class="content">
      <p class="greeting">Dear Trader,</p>
      
      <p class="message-text">
        Upon careful review of your trading activities and account, you have been found to violate the rule of <span class="highlight">${reason}</span>.
      </p>
      
      <div class="danger-box">
        <strong>This has led to your ACCOUNT BEING SUSPENDED.</strong>
      </div>
      
      <p class="message-text">
        You're welcome to take the challenge again as you try to adhere to the rules and exercise discipline next time.
      </p>
      
      <p class="message-text">
        You can message our <a href="https://discord.gg/v9ZPtkZ2pt">support team on Discord</a> for further enquiries.
      </p>
      
      <div class="signature">
        <p>Best regards,</p>
        <p><strong>Globby Funded Traders Team</strong></p>
      </div>
    </div>
    <div class="footer">
      <p>© 2025 Globby Funded Traders. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
`;

const evaluationLoginTemplate = (
  login: string,
  server: string,
  password: string
) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="color-scheme" content="light dark">
  <meta name="supported-color-schemes" content="light dark">
  <style>${baseStyles}</style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Globby Funded Traders</h1>
    </div>
    <div class="content">
      <p class="greeting">Hello Trader,</p>
      
      <p class="message-text">
        Welcome to your trading evaluation journey! We're excited to have you on board.
      </p>
      
    <p class="message-text">
        Your evaluation account is now active and ready for trading. Below are your login credentials to access your trading platform:
      </p>
      
      <div class="credentials">
        <p><strong>Login:</strong> ${login}</p>
        <p><strong>Server:</strong> ${server}</p>
        <p><strong>Password:</strong> ${password}</p>
      </div>
      
      <p class="message-text">
        Please keep these credentials secure and do not share them with anyone. We recommend changing your password after your first login.
      </p>
      
      <p class="message-text">
        Good luck with your evaluation! Trade responsibly, follow the rules, and show us your skills.
      </p>
      
      <div class="signature">
        <p>Best regards,</p>
        <p><strong>Globby Funded Traders Team</strong></p>
      </div>
    </div>
    <div class="footer">
      <p>© 2025 Globby Funded Traders. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
`;

const fundedLoginTemplate = (
  login: string,
  server: string,
  password: string
) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="color-scheme" content="light dark">
  <meta name="supported-color-schemes" content="light dark">
  <style>${baseStyles}</style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Globby Funded Traders</h1>
    </div>
    <div class="content">
      <p class="greeting">Dear Funded Trader,</p>
      
      <p class="message-text">
        <strong>Congratulations!</strong> 🎉 You've successfully passed your evaluation and we're thrilled to welcome you as a funded trader.
      </p>
      
       <p class="message-text">
        Your funded trading account is now active and ready. Below are your login credentials to access your funded trading platform:
      </p>
      
      <div class="credentials">
        <p><strong>Login:</strong> ${login}</p>
        <p><strong>Server:</strong> ${server}</p>
        <p><strong>Password:</strong> ${password}</p>
      </div>
      
      <div class="success-box">
        <p style="margin: 0;"><strong>You're now trading with REAL CAPITAL!</strong></p>
      </div>
      
      <p class="message-text">
        Continue following the rules, manage your risk carefully, and remember to withdraw your profits regularly. Trade within the guidelines and maintain the discipline that got you here.
      </p>
      
      <p class="message-text">
        We're excited to see your continued success!
      </p>
      
      <div class="signature">
        <p>Best regards,</p>
        <p><strong>Globby Funded Traders Team</strong></p>
      </div>
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
  <meta name="color-scheme" content="light dark">
  <meta name="supported-color-schemes" content="light dark">
  <style>${baseStyles}</style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Globby Funded Traders</h1>
    </div>
    <div class="content">
      <p class="greeting">Dear Trader,</p>
      
      <p class="message-text">
        <strong>Congratulations!</strong> 🏆 We're thrilled to inform you that you have successfully passed your trading challenge!
      </p>
      
      <div class="success-highlight">
        <p style="margin: 0;"><strong>Challenge Account:</strong> ${email}</p>
      </div>
      
      <p class="message-text">
        You've demonstrated excellent trading skills, discipline, and risk management throughout the evaluation. This is a significant achievement and we're impressed with your performance.
      </p>
      
      <p class="message-text">
        <strong>Next Steps:</strong>
      </p>
      
      <p class="message-text">
        • Your funded account will be activated within 24-48 hours<br>
        • Our team will review your final performance metrics<br>
        • You'll receive your funded account credentials via email shortly<br>
        • Keep an eye on your inbox for further instructions
      </p>
      
      <p class="message-text">
        If you have any questions, feel free to reach out to our <a href="https://discord.gg/v9ZPtkZ2pt">support team on Discord</a>.
      </p>
      
      <div class="signature">
        <p>Congratulations once again!</p>
        <p><strong>Globby Funded Traders Team</strong></p>
      </div>
    </div>
    <div class="footer">
      <p>© 2025 Globby Funded Traders. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
`;

const withdrawalTemplate = (usd: string, ngn: string) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="color-scheme" content="light dark">
  <meta name="supported-color-schemes" content="light dark">
  <style>${baseStyles}</style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Globby Funded Traders</h1>
    </div>
    <div class="content">
      <p class="greeting">Dear Trader,</p>
      
      <p class="message-text">
        Great news! Your withdrawal request has been processed successfully.
      </p>
      
      <div class="success-highlight">
        <p style="margin: 0;"><strong>Withdrawal Confirmed</strong></p>
      </div>
      
      <p class="message-text">
        Below are the details of your withdrawal:
      </p>
      
      <div class="credentials">
        <p><strong>Amount (USD):</strong> $${Number(usd).toLocaleString()}</p>
        <p><strong>Amount (NGN):</strong> ₦${Number(ngn).toLocaleString()}</p>
      </div>
      
      <p class="message-text">
        The funds have been transferred to your registered account. Please allow 24 hours for the transaction to reflect in your account.
      </p>
      
      <p class="message-text">
        If you have any questions or concerns regarding this withdrawal, please don't hesitate to contact our <a href="https://discord.gg/v9ZPtkZ2pt">support team on Discord</a>.
      </p>
      
      <p class="message-text">
        Thank you for being part of Globby Funded Traders. Keep up the excellent work!
      </p>
      
      <div class="signature">
        <p>Best regards,</p>
        <p><strong>Globby Funded Traders Team</strong></p>
      </div>
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
    case "account_suspended":
      return accountSuspendedTemplate(data.reason || "");
    case "evaluation_login":
      return evaluationLoginTemplate(
        data.login || "",
        data.server || "",
        data.password || ""
      );
    case "funded_login":
      return fundedLoginTemplate(
        data.login || "",
        data.server || "",
        data.password || ""
      );
    case "challenge_passed":
      return challengePassedTemplate(data.email || "");
    case "withdrawal":
      return withdrawalTemplate(data.usd || "", data.ngn || "");
    default:
      return "";
  }
};
