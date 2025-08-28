"use client";

import AuthForm2 from "@/components/AuthForm2";
import { MdBolt } from "react-icons/md";

export default function SignupPage() {
  // Define your sign-up handler
  const handleSignUp = async (data: any) => {
    try {
      console.log("Signup data:", data);
      // later: send to Supabase / API
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <AuthForm2
        authForm="signUp"
        appName="Bolt Stack"
        iconApp={<MdBolt size={32} className="text-primary" />}
        onSubmit={handleSignUp} // ✅ now it’s defined
        leftPanel={{
          show: true,
          title: "Supercharge your workflow with AI-powered insights",
          features: [
            "Track all your projects from one dashboard",
            "Generate reports automatically in real-time",
            "Integrate with your favorite tools seamlessly",
            "Get AI recommendations to grow your business",
          ],
          backgroundGradient: "bg-gradient-to-br from-primary to-secondary",
          iconApp: <MdBolt size={72} className="text-white" />,
        }}
        authButtons={{
          google: { enable: true },
          gitHub: { enable: true },
          apple: { enable: true },
        }}
        urls={{
          signInFooterLink: "/signin",
          termsOfService: "/terms",
          privacyOfPolicy: "/privacy",
        }}
      />
    </div>
  );
}
