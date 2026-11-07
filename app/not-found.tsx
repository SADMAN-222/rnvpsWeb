import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Home } from "lucide-react";
import { SiteHeader, Footer } from "@/components/site";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main
        className="innerpage"
        style={{
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          className="shell"
          style={{
            maxWidth: 680,
            textAlign: "center",
            padding: "80px 24px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: 96,
              height: 96,
              borderRadius: "50%",
              overflow: "hidden",
              border: "3px solid var(--gold)",
              boxShadow: "0 8px 24px rgba(11, 45, 77, 0.15)",
              marginBottom: 24,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#fff",
            }}
          >
            <Image
              src="/images/school-logo.jpg"
              alt="Raniganj National Bidyapith logo"
              width={90}
              height={90}
              style={{ objectFit: "contain", width: "100%", height: "100%" }}
              priority
            />
          </div>

          <span
            className="eyebrow"
            style={{
              letterSpacing: "0.2em",
              marginBottom: 12,
              display: "inline-block",
            }}
          >
            404 Error · Page Missing
          </span>

          <h1
            style={{
              color: "var(--navy)",
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(36px, 5vw, 56px)",
              lineHeight: 1.1,
              margin: "0 0 16px",
              fontWeight: 700,
            }}
          >
            Page not found
          </h1>

          <p
            style={{
              color: "var(--muted)",
              fontSize: 16,
              lineHeight: 1.7,
              maxWidth: 480,
              margin: "0 auto 32px",
            }}
          >
            The page you are looking for does not exist, has been moved, or is
            temporarily unavailable. Please return to the homepage or explore our
            official school portal.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 16,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link className="button buttongold" href="/">
              <Home size={16} /> Return to Homepage <ArrowUpRight size={17} />
            </Link>
            <Link className="button buttonoutline" href="/contact">
              Contact School Office <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
