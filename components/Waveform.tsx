// Lightweight CSS waveform used as the hero accent. Pure presentation.
export default function Waveform({ bars = 24 }: { bars?: number }) {
  return (
    <div
      aria-hidden="true"
      className="flex h-40 w-full items-center justify-center gap-[6px] overflow-hidden"
    >
      {Array.from({ length: bars }).map((_, i) => {
        const mid = Math.abs(i - bars / 2);
        const height = 100 - mid * 5;
        return (
          <span
            key={i}
            className="wave-bar w-[6px] rounded-full bg-gradient-to-b from-accent-primary to-accent-secondary"
            style={{
              height: `${Math.max(20, height)}%`,
              animationDelay: `${(i % 12) * 0.08}s`,
              opacity: 0.55 + (1 - mid / (bars / 2)) * 0.45,
            }}
          />
        );
      })}
    </div>
  );
}
