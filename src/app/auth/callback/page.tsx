"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function CallbackPage() {
  const router = useRouter();

  useEffect(() => {
    // You can handle your OAuth or Supabase callback here
    router.push("/dashboard/designer"); // redirect after login
  }, [router]);

  return <p>Loading...</p>;
}
