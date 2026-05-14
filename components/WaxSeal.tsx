import { Monogram } from "./Monogram";

/**
 * The red wax-seal disc next to the email in the Contact section.
 * Inside the wax disc we render the mTs monogram (without its outer ring,
 * since the wax disc already provides one) in parchment color so it reads
 * as a pressed impression.
 */
export function WaxSeal({ size = 64 }: { size?: number }) {
  return (
    <div
      className="wax-seal shrink-0"
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <Monogram
        size={Math.round(size * 0.78)}
        withRing={false}
        className="text-parchment"
      />
    </div>
  );
}
