interface CounterCardProps {
  count: number;
  onIncrement: () => void;
}

export default function CounterCard({ count, onIncrement }: CounterCardProps) {
  return (
    <div className="fade-in-up counterContainer">
      <div className="card card--elevated card--padded">
        <div className="text-center">
          <div className="counterDisplay">
            <div
              className="text-primary font-bold"
              style={{
                fontSize: "clamp(3rem, 10vw, 5rem)",
                lineHeight: "1",
                marginBottom: "0.5rem",
              }}
            >
              {count}
            </div>
            <div className="text-muted uppercase tracking-wider text-sm font-semibold">
              Click Counter
            </div>
          </div>

          <button
            className="button shadow-lg transition-medium incrementButton"
            onClick={onIncrement}
          >
            Increment Counter ⚡
          </button>

          <div className="editNote">
            <p className="text-muted m-0 text-sm">
              Edit{" "}
              <code
                className="bg-surface px-2 py-1 text-primary"
                style={{
                  borderRadius: "4px",
                  fontFamily: "monospace",
                }}
              >
                src/app.tsx
              </code>{" "}
              and save to test HMR
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
