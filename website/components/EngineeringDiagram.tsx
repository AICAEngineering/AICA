type EngineeringDiagramProps = {
  variant?: "vehicle" | "process" | "corridor";
};

function GridBackground() {
  return (
    <>
      <defs>
        <pattern id="minor-grid" width="16" height="16" patternUnits="userSpaceOnUse">
          <path d="M16 0H0V16" stroke="#E2E8F0" strokeWidth="0.7" />
        </pattern>
        <pattern id="major-grid" width="64" height="64" patternUnits="userSpaceOnUse">
          <rect width="64" height="64" fill="url(#minor-grid)" />
          <path d="M64 0H0V64" stroke="#CBD5E1" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="720" height="460" rx="24" fill="#F8FAFC" />
      <rect x="24" y="24" width="672" height="412" rx="18" fill="url(#major-grid)" />
    </>
  );
}

export function EngineeringDiagram({ variant = "vehicle" }: EngineeringDiagramProps) {
  if (variant === "process") {
    return (
      <svg
        aria-hidden="true"
        className="h-full min-h-[22rem] w-full"
        fill="none"
        viewBox="0 0 720 460"
        xmlns="http://www.w3.org/2000/svg"
      >
        <GridBackground />
        <path
          d="M110 332C148 264 203 230 274 230C359 230 392 138 480 126C531 119 574 138 616 184"
          stroke="#64748B"
          strokeLinecap="round"
          strokeWidth="3"
        />
        <path
          d="M110 332C148 264 203 230 274 230C359 230 392 138 480 126C531 119 574 138 616 184"
          stroke="#2F714A"
          strokeDasharray="1 14"
          strokeLinecap="round"
          strokeWidth="7"
        />
        {[
          ["110", "332", "Assume"],
          ["274", "230", "Model"],
          ["480", "126", "Measure"],
          ["616", "184", "Revise"],
        ].map(([cx, cy, label]) => (
          <g key={label}>
            <circle cx={cx} cy={cy} r="18" fill="#FFFFFF" stroke="#2F714A" strokeWidth="3" />
            <circle cx={cx} cy={cy} r="6" fill="#2F714A" />
            <path d={`M${cx} ${Number(cy) + 18}V394`} stroke="#94A3B8" strokeDasharray="5 8" />
            <text
              fill="#475569"
              fontFamily="Arial, sans-serif"
              fontSize="13"
              fontWeight="700"
              textAnchor="middle"
              x={cx}
              y="418"
            >
              {label}
            </text>
          </g>
        ))}
        <rect x="74" y="62" width="174" height="44" rx="8" fill="#FFFFFF" stroke="#CBD5E1" />
        <text fill="#475569" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="700" x="94" y="89">
          Development curve
        </text>
      </svg>
    );
  }

  if (variant === "corridor") {
    return (
      <svg
        aria-hidden="true"
        className="h-full min-h-[22rem] w-full"
        fill="none"
        viewBox="0 0 720 460"
        xmlns="http://www.w3.org/2000/svg"
      >
        <GridBackground />
        <path d="M84 354H636" stroke="#94A3B8" strokeWidth="2" />
        <path
          d="M124 354V230H210V354M264 354V166H374V354M430 354V268H552V354"
          stroke="#94A3B8"
          strokeWidth="2"
        />
        <path
          d="M104 156C200 96 301 94 408 140C478 170 538 168 612 132"
          stroke="#64748B"
          strokeDasharray="8 10"
          strokeLinecap="round"
          strokeWidth="2.5"
        />
        <path
          d="M132 196C226 142 315 144 398 180C478 214 536 214 592 186"
          stroke="#CBD5E1"
          strokeDasharray="8 10"
          strokeLinecap="round"
          strokeWidth="2"
        />
        <g>
          <path d="M350 128L404 154L350 180L296 154L350 128Z" fill="#FFFFFF" stroke="#2F714A" strokeWidth="3" />
          <path d="M350 128V92M296 154H248M404 154H452M350 180V220" stroke="#2F714A" strokeLinecap="round" strokeWidth="2.5" />
          <circle cx="350" cy="154" r="8" fill="#2F714A" />
        </g>
        <rect x="92" y="70" width="204" height="44" rx="8" fill="#FFFFFF" stroke="#CBD5E1" />
        <text fill="#475569" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="700" x="112" y="97">
          Low-altitude corridor study
        </text>
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      className="h-full min-h-[22rem] w-full"
      fill="none"
      viewBox="0 0 720 460"
      xmlns="http://www.w3.org/2000/svg"
    >
      <GridBackground />
      <path
        d="M144 246C190 190 258 162 348 162C438 162 506 190 552 246L614 316L524 304L462 340H234L172 304L82 316L144 246Z"
        fill="#FFFFFF"
        stroke="#64748B"
        strokeWidth="3"
      />
      <path d="M274 162C292 126 317 109 350 106C386 109 413 126 430 162" stroke="#64748B" strokeWidth="3" />
      <path d="M232 214H468M258 340L216 390M438 340L480 390M350 340V414" stroke="#94A3B8" strokeDasharray="6 9" />
      <ellipse cx="186" cy="302" rx="48" ry="25" stroke="#CBD5E1" strokeWidth="3" />
      <ellipse cx="514" cy="302" rx="48" ry="25" stroke="#CBD5E1" strokeWidth="3" />
      <path d="M316 258C334 246 366 246 384 258" stroke="#2F714A" strokeLinecap="round" strokeWidth="3" />
      <circle cx="216" cy="390" r="9" fill="#2F714A" />
      <circle cx="480" cy="390" r="9" fill="#2F714A" />
      <circle cx="350" cy="414" r="9" fill="#2F714A" />
      <rect x="78" y="62" width="190" height="44" rx="8" fill="#FFFFFF" stroke="#CBD5E1" />
      <text fill="#475569" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="700" x="98" y="89">
        Concept geometry study
      </text>
      <rect x="466" y="62" width="176" height="44" rx="8" fill="#FFFFFF" stroke="#CBD5E1" />
      <text fill="#475569" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="700" x="486" y="89">
        Stability reference
      </text>
    </svg>
  );
}
