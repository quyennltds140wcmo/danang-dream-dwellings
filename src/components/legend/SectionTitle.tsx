import { Reveal } from "./Reveal";

export function SectionTitle({
  eyebrow,
  title,
  sub,
  center = false,
  invert = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  sub?: string;
  center?: boolean;
  invert?: boolean;
}) {
  return (
    <Reveal className={`${center ? "text-center mx-auto" : ""} max-w-3xl mb-10 md:mb-14`}>
      <p
        className={`text-xs md:text-sm tracking-[0.3em] mb-3 ${
          invert ? "text-gold-300" : "text-royal-700"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`font-display text-3xl md:text-5xl font-bold leading-tight ${
          invert ? "text-white" : "text-royal-950"
        }`}
      >
        {title}
      </h2>
      {sub && (
        <p
          className={`mt-4 text-base md:text-lg ${
            invert ? "text-white/80" : "text-slate-600"
          }`}
        >
          {sub}
        </p>
      )}
    </Reveal>
  );
}