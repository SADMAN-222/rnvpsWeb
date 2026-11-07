export default function Loading() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--paper, #f7f6f1)",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <style>{`
        @keyframes pulseSkeleton {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.45; }
        }
        .pulse-anim {
          animation: pulseSkeleton 1.8s ease-in-out infinite;
        }
      `}</style>

      {/* Top bar skeleton */}
      <div
        style={{
          background: "var(--navy, #0b2d4d)",
          height: 34,
          borderBottom: "1px solid rgba(214, 168, 79, 0.3)",
        }}
      />

      {/* Navigation bar skeleton */}
      <div
        style={{
          background: "#fff",
          borderBottom: "1px solid var(--line, #e3e5e1)",
          padding: "18px 0",
        }}
      >
        <div
          className="shell"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              className="pulse-anim"
              style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                background: "var(--line, #e3e5e1)",
                border: "2px solid var(--gold, #d6a84f)",
              }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <div
                className="pulse-anim"
                style={{
                  width: 140,
                  height: 14,
                  borderRadius: 4,
                  background: "var(--line, #e3e5e1)",
                }}
              />
              <div
                className="pulse-anim"
                style={{
                  width: 90,
                  height: 10,
                  borderRadius: 4,
                  background: "var(--line, #e3e5e1)",
                }}
              />
            </div>
          </div>
          <div
            className="pulse-anim"
            style={{
              width: 120,
              height: 36,
              borderRadius: 4,
              background: "rgba(11, 45, 77, 0.08)",
            }}
          />
        </div>
      </div>

      {/* Hero skeleton */}
      <div
        style={{
          background: "var(--navy, #0b2d4d)",
          padding: "70px 0 60px",
          color: "white",
        }}
      >
        <div className="shell">
          <div
            className="pulse-anim"
            style={{
              width: 120,
              height: 12,
              borderRadius: 3,
              background: "var(--gold, #d6a84f)",
              marginBottom: 18,
            }}
          />
          <div
            className="pulse-anim"
            style={{
              width: "min(460px, 80%)",
              height: 38,
              borderRadius: 6,
              background: "rgba(255, 255, 255, 0.2)",
              marginBottom: 14,
            }}
          />
          <div
            className="pulse-anim"
            style={{
              width: "min(340px, 60%)",
              height: 16,
              borderRadius: 4,
              background: "rgba(255, 255, 255, 0.12)",
            }}
          />
        </div>
      </div>

      {/* Content skeleton cards */}
      <main className="shell" style={{ padding: "50px 0 80px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
            marginBottom: 36,
          }}
        >
          <div
            className="pulse-anim"
            style={{
              width: 220,
              height: 24,
              borderRadius: 4,
              background: "var(--line, #e3e5e1)",
            }}
          />
          <div
            className="pulse-anim"
            style={{
              width: "min(500px, 90%)",
              height: 14,
              borderRadius: 4,
              background: "var(--line, #e3e5e1)",
            }}
          />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
          }}
        >
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              style={{
                background: "#fff",
                border: "1px solid var(--line, #e3e5e1)",
                padding: 28,
                borderRadius: 4,
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
            >
              <div
                className="pulse-anim"
                style={{
                  width: 60,
                  height: 10,
                  borderRadius: 3,
                  background: "var(--gold, #d6a84f)",
                }}
              />
              <div
                className="pulse-anim"
                style={{
                  width: "70%",
                  height: 22,
                  borderRadius: 4,
                  background: "var(--line, #e3e5e1)",
                }}
              />
              <div
                className="pulse-anim"
                style={{
                  width: "100%",
                  height: 14,
                  borderRadius: 4,
                  background: "var(--line, #e3e5e1)",
                }}
              />
              <div
                className="pulse-anim"
                style={{
                  width: "85%",
                  height: 14,
                  borderRadius: 4,
                  background: "var(--line, #e3e5e1)",
                }}
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
