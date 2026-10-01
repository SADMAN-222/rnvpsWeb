import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | Raniganj National Bidyapith",
  description:
    "Sign in to the Raniganj National Bidyapith School Management Portal for teachers, staff, and administration.",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
