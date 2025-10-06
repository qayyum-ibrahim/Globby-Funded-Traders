import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSendEmail } from "@/features/email/hooks/useSendEmail";
import { EmailFormData, EmailType } from "@/features/email/types";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const emailTypes = [
  { value: "account_suspended", label: "Account Suspended Email" },
  { value: "evaluation_login", label: "Evaluation Login Details Email" },
  { value: "funded_login", label: "Funded Login Details Email" },
  { value: "challenge_passed", label: "Challenge Passed Email" },
  { value: "withdrawal", label: "Withdrawal Email" },
] as const;

const getValidationSchema = (emailType: EmailType | "") => {
  const baseSchema = {
    emails: Yup.string()
      .required("Email is required")
      .test("valid-emails", "Please enter valid email addresses", (value) => {
        if (!value) return false;
        const emails = value.split(",").map((e) => e.trim());
        return emails.every((email) => Yup.string().email().isValidSync(email));
      }),
    emailType: Yup.string().required("Email type is required"),
  };

  switch (emailType) {
    case "account_suspended":
      return Yup.object().shape({
        ...baseSchema,
        reason: Yup.string()
          .required("Reason is required")
          .max(500, "Reason must be less than 500 characters"),
      });
    case "evaluation_login":
    case "funded_login":
      return Yup.object().shape({
        ...baseSchema,
        login: Yup.string().required("Login is required"),
        server: Yup.string().required("Server is required"),
        password: Yup.string().required("Password is required"),
      });
    case "challenge_passed":
      return Yup.object().shape({
        ...baseSchema,
        email: Yup.string()
          .required("User email is required")
          .email("Invalid email format"),
      });
    case "withdrawal":
      return Yup.object().shape({
        ...baseSchema,
        usd: Yup.string().required("USD amount is required"),
        ngn: Yup.string().required("NGN amount is required"),
      });
    default:
      return Yup.object().shape(baseSchema);
  }
};

const SendEmail = () => {
  const { mutate: sendEmail, isPending } = useSendEmail();
  const navigate = useNavigate();

  const handleSubmit = (values: EmailFormData, { resetForm }: any) => {
    const emailArray = values.emails.split(",").map((e) => e.trim());
    sendEmail(
      {
        emails: emailArray,
        emailType: values.emailType,
        reason: values.reason,
        login: values.login,
        server: values.server,
        password: values.password,
        email: values.email,
        usd: values.usd,
        ngn: values.ngn,
      },
      {
        onSuccess: () => {
          resetForm();
        },
      }
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center gap-4">
          <Button onClick={() => navigate("/admin")} variant="ghost" size="sm">
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h1 className="text-2xl font-bold">Send Email</h1>
        </div>
      </header>
      <div className="max-w-3xl mx-auto py-8 p-4">
        <Card>
          <CardHeader>
            <CardTitle>Send Email</CardTitle>
            <CardDescription>
              Send emails to one or multiple recipients (separate multiple
              emails with commas)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Formik
              initialValues={{
                emails: "",
                emailType: "" as EmailType,
                reason: "",
                login: "",
                server: "",
                password: "",
                email: "",
                usd: "",
                ngn: "",
              }}
              validationSchema={getValidationSchema("")}
              onSubmit={handleSubmit}
              validateOnChange={true}
            >
              {({ errors, touched, values, setFieldValue }) => (
                <Form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="emails">Recipient Email(s)</Label>
                    <Field
                      as={Input}
                      id="emails"
                      name="emails"
                      type="text"
                      placeholder="email1@example.com, email2@example.com"
                    />
                    {errors.emails && touched.emails && (
                      <p className="text-sm text-destructive">
                        {errors.emails}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="emailType">Email Type</Label>
                    <Select
                      value={values.emailType}
                      onValueChange={(value) => {
                        setFieldValue("emailType", value);
                        // Reset dynamic fields when type changes
                        setFieldValue("reason", "");
                        setFieldValue("login", "");
                        setFieldValue("server", "");
                        setFieldValue("password", "");
                        setFieldValue("email", "");
                        setFieldValue("usd", "");
                        setFieldValue("ngn", "");
                      }}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select email type" />
                      </SelectTrigger>
                      <SelectContent>
                        {emailTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.emailType && touched.emailType && (
                      <p className="text-sm text-destructive">
                        {errors.emailType}
                      </p>
                    )}
                  </div>

                  {/* Dynamic fields based on email type */}
                  {values.emailType === "account_suspended" && (
                    <div className="space-y-2">
                      <Label htmlFor="reason">Reason</Label>
                      <Field
                        as={Input}
                        id="reason"
                        name="reason"
                        type="text"
                        placeholder="Enter reason for breach"
                      />
                      {errors.reason && touched.reason && (
                        <p className="text-sm text-destructive">
                          {errors.reason}
                        </p>
                      )}
                    </div>
                  )}

                  {(values.emailType === "evaluation_login" ||
                    values.emailType === "funded_login") && (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="login">Login</Label>
                        <Field
                          as={Input}
                          id="login"
                          name="login"
                          type="text"
                          placeholder="211478722"
                        />
                        {errors.login && touched.login && (
                          <p className="text-sm text-destructive">
                            {errors.login}
                          </p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="server">Server</Label>
                        <Field
                          as={Input}
                          id="server"
                          name="server"
                          type="text"
                          placeholder="Exness-MT5Trial9"
                        />
                        {errors.server && touched.server && (
                          <p className="text-sm text-destructive">
                            {errors.server}
                          </p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Field
                          as={Input}
                          id="password"
                          name="password"
                          type="text"
                          placeholder="Enter password"
                        />
                        {errors.password && touched.password && (
                          <p className="text-sm text-destructive">
                            {errors.password}
                          </p>
                        )}
                      </div>
                    </>
                  )}

                  {values.emailType === "challenge_passed" && (
                    <div className="space-y-2">
                      <Label htmlFor="email">User Email</Label>
                      <Field
                        as={Input}
                        id="email"
                        name="email"
                        type="email"
                        placeholder="user@example.com"
                      />
                      {errors.email && touched.email && (
                        <p className="text-sm text-destructive">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  )}
                  {values.emailType === "withdrawal" && (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="usd">Amount in USD</Label>
                        <Field
                          as={Input}
                          id="usd"
                          name="usd"
                          type="text"
                          placeholder="100.00"
                        />
                        {errors.usd && touched.usd && (
                          <p className="text-sm text-destructive">
                            {errors.usd}
                          </p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="ngn">Amount in NGN</Label>
                        <Field
                          as={Input}
                          id="ngn"
                          name="ngn"
                          type="text"
                          placeholder="150,000.00"
                        />
                        {errors.ngn && touched.ngn && (
                          <p className="text-sm text-destructive">
                            {errors.ngn}
                          </p>
                        )}
                      </div>
                    </>
                  )}

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isPending || !values.emailType}
                  >
                    {isPending ? "Sending..." : "Send Email"}
                  </Button>
                </Form>
              )}
            </Formik>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SendEmail;
