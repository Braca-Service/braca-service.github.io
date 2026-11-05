// The bottom edge of the hero, cut like a key: a flat blade that runs in from
// the left, six cuts of different depths and the angled tip at the right.
// The cuts keep their real proportions at every screen width (the drawing is
// anchored right and never stretched); only the flat blade gets longer.
// The brass line is the freshly cut metal, traced once on load (.key-trace).
const BLADE =
  "M-8000 0 H600 V18 L540 52 L500 52 L470 22 L458 22 L429 51 L406 28 L394 28 L376 46 L342 12 L330 12 L290 52 L278 40 L266 40 L254 52 L248 52 L214 18 L202 18 L168 52 L150 34 L138 34 L120 52 L-8000 52 Z";
const CUT_EDGE =
  "M-8000 52 L120 52 L138 34 L150 34 L168 52 L202 18 L214 18 L248 52 L254 52 L266 40 L278 40 L290 52 L330 12 L342 12 L376 46 L394 28 L406 28 L429 51 L458 22 L470 22 L500 52 L540 52 L600 18";

const KeyEdge = () => (
  <div aria-hidden="true" className="relative -mt-px h-[30px] sm:h-12 lg:h-14">
    <svg viewBox="0 0 600 56" preserveAspectRatio="xMaxYMin meet" className="absolute inset-0 h-full w-full">
      <path d={BLADE} className="fill-ink" />
    </svg>
    <svg viewBox="0 0 600 56" preserveAspectRatio="xMaxYMin meet" className="key-trace absolute inset-0 h-full w-full">
      <path
        d={CUT_EDGE}
        fill="none"
        className="stroke-brass"
        strokeWidth={2}
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  </div>
);

export default KeyEdge;
