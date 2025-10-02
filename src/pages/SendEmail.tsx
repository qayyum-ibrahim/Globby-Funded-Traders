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
  { value: "account_breached", label: "Account Breached Email" },
  { value: "evaluation_login", label: "Evaluation Login Details Email" },
  { value: "funded_login", label: "Funded Login Details Email" },
  { value: "challenge_passed", label: "Challenge Passed Email" },
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
    case "account_breached":
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
        email: Yup.string()
          .required("Login email is required")
          .email("Invalid email format"),
        password: Yup.string()
          .required("Password is required")
          .min(8, "Password must be at least 8 characters"),
      });
    case "challenge_passed":
      return Yup.object().shape({
        ...baseSchema,
        email: Yup.string()
          .required("User email is required")
          .email("Invalid email format"),
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
        email: values.email,
        password: values.password,
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
                email: "",
                password: "",
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
                        setFieldValue("email", "");
                        setFieldValue("password", "");
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
                  {values.emailType === "account_breached" && (
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
                        <Label htmlFor="email">Login Email</Label>
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
